"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { Bell, Calendar, Video, AlertCircle, FileText, CheckCircle2, Clock, Upload } from "lucide-react";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "announcements" | "events" | "sermons" | "submissions">("dashboard");
  const [statusMessage, setStatusMessage] = useState("");

  // Client-side image resize helper to max 1600px and WebP conversion
  const processImageWebP = async (file: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        const maxDim = 1600;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("WebP conversion failed"));
          },
          "image/webp",
          0.85
        );
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleTestRevalidate = async () => {
    setStatusMessage("Revalidating public pages...");
    try {
      const res = await fetch("/api/revalidate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: "/" }),
      });
      if (res.ok) {
        setStatusMessage("Public home page successfully published and revalidated!");
      } else {
        setStatusMessage("Revalidation request failed.");
      }
    } catch {
      setStatusMessage("Error calling revalidate API.");
    }
  };

  return (
    <div className="space-y-8">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-300 pb-3">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`px-4 py-2 text-sm font-bold rounded-lg ${activeTab === "dashboard" ? "bg-church-navy text-white" : "bg-white text-slate-700 hover:bg-slate-200"}`}
        >
          Dashboard Overview
        </button>
        <button
          onClick={() => setActiveTab("announcements")}
          className={`px-4 py-2 text-sm font-bold rounded-lg ${activeTab === "announcements" ? "bg-church-navy text-white" : "bg-white text-slate-700 hover:bg-slate-200"}`}
        >
          Announcements
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`px-4 py-2 text-sm font-bold rounded-lg ${activeTab === "events" ? "bg-church-navy text-white" : "bg-white text-slate-700 hover:bg-slate-200"}`}
        >
          Events & Services
        </button>
        <button
          onClick={() => setActiveTab("sermons")}
          className={`px-4 py-2 text-sm font-bold rounded-lg ${activeTab === "sermons" ? "bg-church-navy text-white" : "bg-white text-slate-700 hover:bg-slate-200"}`}
        >
          Sermons & Media
        </button>
        <button
          onClick={() => setActiveTab("submissions")}
          className={`px-4 py-2 text-sm font-bold rounded-lg ${activeTab === "submissions" ? "bg-church-navy text-white" : "bg-white text-slate-700 hover:bg-slate-200"}`}
        >
          Visitor & Prayer Form Inbox
        </button>
      </div>

      {statusMessage && (
        <div className="p-4 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-xl text-sm font-semibold flex items-center justify-between">
          <span>{statusMessage}</span>
          <button onClick={() => setStatusMessage("")} className="text-xs underline">Dismiss</button>
        </div>
      )}

      {/* DASHBOARD TAB */}
      {activeTab === "dashboard" && (
        <div className="space-y-8">
          {/* What Needs Attention Card */}
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-xl">
              <AlertCircle className="w-6 h-6 text-amber-700" />
              <span>What Needs Attention Today</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-amber-950">
              <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
                <span className="font-bold text-sm block">1 Unhandled Prayer Submission</span>
                <p>Private prayer request awaiting pastor review.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
                <span className="font-bold text-sm block">No Expiring Alerts</span>
                <p>All active alert banners are up to date.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-1">
                <span className="font-bold text-sm block">Weekly Service Times</span>
                <p>Sunday Worship: 10:00 AM (Facebook Live & In-person).</p>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-serif font-bold text-xl text-church-navy">Quick Actions for Church Secretary</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              <button
                onClick={() => setActiveTab("announcements")}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border text-center space-y-2 group transition-colors"
              >
                <Bell className="w-6 h-6 text-church-gold mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-800">Post Announcement</span>
              </button>

              <button
                onClick={() => setActiveTab("events")}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border text-center space-y-2 group transition-colors"
              >
                <Calendar className="w-6 h-6 text-church-gold mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-800">Add Event</span>
              </button>

              <button
                onClick={() => setActiveTab("sermons")}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border text-center space-y-2 group transition-colors"
              >
                <Video className="w-6 h-6 text-church-gold mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-800">Add Sermon</span>
              </button>

              <button
                onClick={handleTestRevalidate}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border text-center space-y-2 group transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-800">Publish Changes</span>
              </button>

              <button
                onClick={() => setActiveTab("submissions")}
                className="p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border text-center space-y-2 group transition-colors"
              >
                <FileText className="w-6 h-6 text-church-navy mx-auto group-hover:scale-110 transition-transform" />
                <span className="block text-xs font-bold text-slate-800">View Inbox</span>
              </button>

              <div className="p-4 bg-slate-50 rounded-xl border text-center space-y-2 relative cursor-pointer">
                <Upload className="w-6 h-6 text-slate-500 mx-auto" />
                <span className="block text-xs font-bold text-slate-800">Upload WebP Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    if (e.target.files?.[0]) {
                      try {
                        const webp = await processImageWebP(e.target.files[0]);
                        setStatusMessage(`Image optimized to WebP (${Math.round(webp.size / 1024)} KB) and ready for upload.`);
                      } catch {
                        setStatusMessage("Image processing error.");
                      }
                    }
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Current Site Settings Overview */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h2 className="font-serif font-bold text-xl text-church-navy">Active Church Info</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div>
                <strong>Church Name:</strong> {siteConfig.name} ({siteConfig.shortName})
              </div>
              <div>
                <strong>Senior Pastor:</strong> {siteConfig.pastorTitle} {siteConfig.pastorName}
              </div>
              <div>
                <strong>Address:</strong> {siteConfig.address.formatted}
              </div>
              <div>
                <strong>Phone Line:</strong> {siteConfig.phone}
              </div>
              <div>
                <strong>Call-In Prayer Line:</strong> {siteConfig.callInLine} (No code)
              </div>
              <div>
                <strong>Giving Provider:</strong> AccessACS ({siteConfig.giving.textToGive})
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANNOUNCEMENTS TAB */}
      {activeTab === "announcements" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="font-serif font-bold text-2xl text-church-navy">Manage Church Announcements</h2>
          <form className="space-y-4 max-w-xl">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Announcement Title *</label>
              <input type="text" required placeholder="Title" className="w-full p-2.5 text-sm border rounded-lg" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Announcement Body *</label>
              <textarea rows={4} required placeholder="Full text..." className="w-full p-2.5 text-sm border rounded-lg" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="pinned" className="rounded text-church-gold" />
              <label htmlFor="pinned" className="text-xs font-semibold text-slate-700">Pin to home page top slot</label>
            </div>
            <button
              type="button"
              onClick={handleTestRevalidate}
              className="px-5 py-2.5 bg-church-navy text-white font-bold text-xs rounded-lg min-h-[44px]"
            >
              Publish Announcement
            </button>
          </form>
        </div>
      )}

      {/* EVENTS TAB */}
      {activeTab === "events" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="font-serif font-bold text-2xl text-church-navy">Manage Calendar Events</h2>
          <p className="text-xs text-slate-600">Add, edit, or update church services and special events.</p>
          <div className="bg-slate-50 p-4 rounded-xl border text-xs space-y-2">
            <span className="font-bold text-slate-800">Current Regular Services:</span>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              {siteConfig.serviceTimes.map((s, idx) => (
                <li key={idx}><strong>{s.label}:</strong> {s.day} @ {s.time}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* SERMONS TAB */}
      {activeTab === "sermons" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="font-serif font-bold text-2xl text-church-navy">Manage Sermon Media</h2>
          <form className="space-y-4 max-w-xl">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Sermon Title *</label>
              <input type="text" required placeholder="Title" className="w-full p-2.5 text-sm border rounded-lg" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Speaker *</label>
              <input type="text" defaultValue={`${siteConfig.pastorTitle} ${siteConfig.pastorName}`} className="w-full p-2.5 text-sm border rounded-lg" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Video Stream Link (YouTube / Facebook)</label>
              <input type="url" placeholder="https://www.facebook.com/..." className="w-full p-2.5 text-sm border rounded-lg" />
            </div>
            <button
              type="button"
              onClick={handleTestRevalidate}
              className="px-5 py-2.5 bg-church-navy text-white font-bold text-xs rounded-lg min-h-[44px]"
            >
              Publish Sermon
            </button>
          </form>
        </div>
      )}

      {/* SUBMISSIONS TAB */}
      {activeTab === "submissions" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="font-serif font-bold text-2xl text-church-navy">Form Submission Inbox</h2>
          <p className="text-xs text-slate-600">Submissions received via Visit, Contact, and Prayer forms.</p>
          <div className="space-y-3">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-amber-900 uppercase">Prayer Request (Private)</span>
                <span className="text-slate-500">2 hours ago</span>
              </div>
              <p className="text-slate-800 italic">&ldquo;Please pray for strength and healing for our family this week.&rdquo;</p>
              <span className="block text-[11px] text-slate-500">From: Sister Mary [CONFIRM] • Phone: (414) 555-0199</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
