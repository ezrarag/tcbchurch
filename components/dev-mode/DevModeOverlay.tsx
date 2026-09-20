"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { MessageSquare, X, Check, Camera, List, AlertCircle, Sparkles } from "lucide-react";
import { generateCssSelector, getConsoleErrors } from "./devModeUtils";

interface PickedElementData {
  elementSelector: string;
  elementText: string;
  boundingRect: { top: number; left: number; width: number; height: number };
  routePath: string;
}

const CATEGORIES = [
  { id: "wording", label: "Wording" },
  { id: "photo", label: "Photo" },
  { id: "service-time", label: "Service time/date" },
  { id: "event-announcement", label: "Event/announcement" },
  { id: "new-feature", label: "New page or feature" },
  { id: "looks-broken", label: "Looks broken" },
  { id: "other", label: "Other" },
];

const URGENCIES = [
  { id: "whenever", label: "Whenever" },
  { id: "soon", label: "Soon" },
  { id: "urgent", label: "Urgent" },
];

export function DevModeOverlay() {
  const [isPicking, setIsPicking] = useState(false);
  const [hoveredRect, setHoveredRect] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [hoveredTag, setHoveredTag] = useState<string>("");
  const [pickedData, setPickedData] = useState<PickedElementData | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Form State
  const [category, setCategory] = useState("wording");
  const [note, setNote] = useState("");
  const [urgency, setUrgency] = useState("soon");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [attachScreenshot, setAttachScreenshot] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // Submitter Feedback History Drawer State
  const [myFeedbackList, setMyFeedbackList] = useState<unknown[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(false);

  const activeElementRef = useRef<HTMLElement | null>(null);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPicking(false);
        setHoveredRect(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle element selection during PICK MODE
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isPicking) return;
    const target = e.target as HTMLElement;
    if (!target || target.closest("#rag-dev-mode-ui")) return;

    activeElementRef.current = target;
    const rect = target.getBoundingClientRect();
    setHoveredRect({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height,
    });
    setHoveredTag(target.tagName.toLowerCase());
  }, [isPicking]);

  const handleClick = useCallback((e: MouseEvent) => {
    if (!isPicking) return;
    const target = e.target as HTMLElement;
    if (!target || target.closest("#rag-dev-mode-ui")) return;

    e.preventDefault();
    e.stopPropagation();

    const selector = generateCssSelector(target);
    const textSnippet = (target.textContent || "").trim().slice(0, 200);
    const rect = target.getBoundingClientRect();

    setPickedData({
      elementSelector: selector,
      elementText: textSnippet,
      boundingRect: {
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      },
      routePath: window.location.pathname,
    });

    setIsPicking(false);
    setHoveredRect(null);
    setPanelOpen(true);
  }, [isPicking]);

  useEffect(() => {
    if (isPicking) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("click", handleClick, true);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick, true);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick, true);
    };
  }, [isPicking, handleMouseMove, handleClick]);

  // Submit Feedback Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const ragUrl = process.env.NEXT_PUBLIC_RAG_FEEDBACK_URL || "http://localhost:3000";
    const projectId = process.env.NEXT_PUBLIC_RAG_PROJECT_ID || "tcb-church";
    const projectKey = process.env.NEXT_PUBLIC_RAG_PROJECT_KEY || "rag_live_tcbchurch_demo_key_2026";

    let screenshotBase64: string | undefined = undefined;

    if (attachScreenshot) {
      try {
        const uiElement = document.getElementById("rag-dev-mode-ui");
        if (uiElement) uiElement.style.display = "none";
        const canvas = await html2canvas(document.body, { logging: false, useCORS: true });
        if (uiElement) uiElement.style.display = "block";
        screenshotBase64 = canvas.toDataURL("image/jpeg", 0.7);
      } catch (err) {
        console.warn("Could not capture screenshot:", err);
      }
    }

    const payload = {
      source: "dev-mode",
      projectId,
      clientEmail: clientEmail || "anonymous@church.org",
      clientName: clientName || "Church Contributor",
      rawText: note,
      category,
      urgency,
      pageUrl: window.location.href,
      routePath: pickedData?.routePath || window.location.pathname,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      deviceType: window.innerWidth < 768 ? "mobile" : "desktop",
      userAgent: navigator.userAgent,
      consoleErrors: getConsoleErrors(),
      elementSelector: pickedData?.elementSelector,
      elementText: pickedData?.elementText,
      screenshotUrl: screenshotBase64,
    };

    try {
      const res = await fetch(`${ragUrl}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-RAG-Project-Key": projectKey,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you — we've got it. You'll see it in Your requests.");
        setNote("");
        setPickedData(null);
        setTimeout(() => setPanelOpen(false), 2000);
      } else {
        throw new Error(`Server returned ${res.status}`);
      }
    } catch (err) {
      // Offline fallback: Queue in localStorage
      try {
        const queue = JSON.parse(localStorage.getItem("rag_pending_feedback") || "[]");
        queue.push(payload);
        localStorage.setItem("rag_pending_feedback", JSON.stringify(queue));
        setSubmitStatus("success");
        setSubmitMessage("Saved offline — will sync automatically when online.");
      } catch {
        setSubmitStatus("error");
        setSubmitMessage("Could not send suggestion. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch "Your Requests" history
  const fetchMyRequests = async () => {
    setDrawerOpen(true);
    setIsLoadingHistory(true);
    const ragUrl = process.env.NEXT_PUBLIC_RAG_FEEDBACK_URL || "http://localhost:3000";
    const projectId = process.env.NEXT_PUBLIC_RAG_PROJECT_ID || "tcb-church";
    const projectKey = process.env.NEXT_PUBLIC_RAG_PROJECT_KEY || "rag_live_tcbchurch_demo_key_2026";
    const submitter = clientEmail || "anonymous@church.org";

    try {
      const res = await fetch(`${ragUrl}/api/feedback?projectId=${encodeURIComponent(projectId)}&submitter=${encodeURIComponent(submitter)}`, {
        headers: { "X-RAG-Project-Key": projectKey },
      });
      if (res.ok) {
        const data = await res.json();
        setMyFeedbackList(data.items || []);
      }
    } catch (err) {
      console.warn("Could not fetch feedback history:", err);
    } finally {
      setIsLoadingHistory(false);
    }
  };

  return (
    <div id="rag-dev-mode-ui" className="font-sans">
      {/* Top Banner Ribbon */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-slate-950 px-4 py-1.5 text-xs font-bold flex items-center justify-between z-50 shadow-md">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-slate-950" />
          <span>Preview mode — changes go directly to the ReadyAimGo team</span>
        </div>
        <a href="?dev=off" className="underline hover:text-slate-800">
          Turn Off Preview Mode
        </a>
      </div>

      {/* Pick Mode Highlight Box */}
      {isPicking && hoveredRect && (
        <div
          style={{
            top: `${hoveredRect.top}px`,
            left: `${hoveredRect.left}px`,
            width: `${hoveredRect.width}px`,
            height: `${hoveredRect.height}px`,
          }}
          className="absolute border-2 border-amber-500 bg-amber-500/10 pointer-events-none z-50 transition-all rounded"
        >
          <span className="absolute -top-6 left-0 bg-amber-500 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded">
            &lt;{hoveredTag}&gt; — Click to pick
          </span>
        </div>
      )}

      {/* Floating Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <button
          onClick={fetchMyRequests}
          className="bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 shadow-xl rounded-full px-3 py-2 text-xs font-semibold flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[44px]"
        >
          <List className="w-4 h-4 text-amber-400" />
          <span>Your requests</span>
        </button>

        <button
          onClick={() => {
            setIsPicking(!isPicking);
            setPanelOpen(false);
          }}
          className={`min-h-[44px] px-4 py-3 rounded-full font-bold shadow-2xl text-sm flex items-center gap-2 transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
            isPicking ? "bg-amber-500 text-slate-950 animate-pulse" : "bg-church-navy text-white hover:bg-slate-800 border-2 border-amber-400"
          }`}
          aria-label="Suggest a change on this page"
        >
          <MessageSquare className="w-5 h-5 text-amber-400 fill-current" />
          <span>{isPicking ? "Click any element..." : "Suggest a change"}</span>
        </button>
      </div>

      {/* Suggestion Form Panel */}
      {panelOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto border-2 border-amber-400">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif font-bold text-xl text-church-navy">Suggest a Change</h3>
              <button onClick={() => setPanelOpen(false)} className="p-1 rounded text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {pickedData && (
              <div className="bg-slate-100 p-3 rounded-lg text-xs space-y-1 border border-slate-200">
                <span className="font-bold text-slate-700 block">Picked Element:</span>
                <p className="text-slate-800 italic line-clamp-2">&ldquo;{pickedData.elementText || pickedData.elementSelector}&rdquo;</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">What kind of change is this?</label>
                <div className="flex flex-wrap gap-1.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`px-2.5 py-1 text-xs rounded-full border font-medium transition-colors ${
                        category === cat.id ? "bg-church-navy text-white border-church-navy" : "bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your suggestion or note *</label>
                <textarea
                  required
                  maxLength={1500}
                  rows={4}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="What would you like this to say or look like?"
                  className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Urgency</label>
                <div className="flex gap-2">
                  {URGENCIES.map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUrgency(u.id)}
                      className={`flex-1 py-1.5 text-xs rounded-md border font-medium text-center ${
                        urgency === u.id ? "bg-amber-500 text-slate-950 font-bold border-amber-500" : "bg-white text-slate-700 border-slate-300"
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Your Name</label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Church member name"
                    className="w-full p-2 text-xs border rounded focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Your Email</label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="email@church.org"
                    className="w-full p-2 text-xs border rounded focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="screenshot"
                  checked={attachScreenshot}
                  onChange={(e) => setAttachScreenshot(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-amber-400"
                />
                <label htmlFor="screenshot" className="text-xs text-slate-600 flex items-center gap-1 cursor-pointer">
                  <Camera className="w-3.5 h-3.5 text-slate-500" />
                  <span>Attach visual screenshot of this page</span>
                </label>
              </div>

              {submitStatus !== "idle" && (
                <div className={`p-3 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                  submitStatus === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-300" : "bg-red-50 text-red-800 border border-red-300"
                }`}>
                  {submitStatus === "success" ? <Check className="w-4 h-4 text-emerald-600" /> : <AlertCircle className="w-4 h-4 text-red-600" />}
                  <span>{submitMessage}</span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setPanelOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 bg-church-navy hover:bg-slate-800 text-white font-bold text-xs rounded-lg shadow min-h-[44px]"
                >
                  {isSubmitting ? "Sending..." : "Submit Suggestion"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Your Requests Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex justify-end">
          <div className="bg-white max-w-md w-full h-full p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-serif font-bold text-xl text-church-navy">Your Requests</h3>
                <button onClick={() => setDrawerOpen(false)} className="p-1 rounded text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-600">
                Track status updates on suggestions sent to ReadyAimGo for this site.
              </p>

              {isLoadingHistory ? (
                <p className="text-xs text-slate-400">Loading requests...</p>
              ) : myFeedbackList.length === 0 ? (
                <div className="bg-slate-50 p-4 rounded-lg text-center text-xs text-slate-500 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-700">No requests recorded yet</p>
                  <p>Click &ldquo;Suggest a change&rdquo; to submit your first note.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {(myFeedbackList as Array<{ id: string; rawText: string; status: string; createdAt: string }>).map((item) => (
                    <div key={item.id} className="p-3 bg-slate-50 rounded-lg border text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                          item.status === "shipped" ? "bg-emerald-100 text-emerald-800" : item.status === "in_progress" ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"
                        }`}>
                          {item.status || "Received"}
                        </span>
                        <span className="text-[10px] text-slate-400">{item.createdAt?.slice(0, 10)}</span>
                      </div>
                      <p className="text-slate-800 font-medium line-clamp-2">{item.rawText}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t">
              <button
                onClick={() => setDrawerOpen(false)}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg min-h-[44px]"
              >
                Close Drawer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
