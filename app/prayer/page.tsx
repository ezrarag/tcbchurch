"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { Heart, Send, Check, AlertCircle, Lock } from "lucide-react";

export default function PrayerPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [requestText, setRequestText] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "prayer",
          name: name || "Anonymous",
          email,
          phone,
          message: requestText,
          private: isPrivate,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMsg("Your prayer request has been received by Pastor Childs and the TCBC Prayer Team.");
        setName("");
        setEmail("");
        setPhone("");
        setRequestText("");
        setIsPrivate(true);
      } else {
        throw new Error("Prayer submission failed");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Could not send prayer request. Please call our Prayer Line at " + siteConfig.callInLine);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <div className="w-14 h-14 bg-church-gold/15 text-church-gold rounded-full flex items-center justify-center mx-auto shadow-sm">
          <Heart className="w-7 h-7 fill-current" />
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Submit a Prayer Request
        </h1>
        <p className="text-base text-slate-700 leading-relaxed">
          &ldquo;Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.&rdquo; — Philippians 4:6
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Your Name (Optional)</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Leave blank to submit anonymously"
              className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email (Optional)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="For pastoral follow-up"
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Phone (Optional)</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="For pastoral call"
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Your Prayer Need *</label>
            <textarea
              required
              rows={5}
              value={requestText}
              onChange={(e) => setRequestText(e.target.value)}
              placeholder="Share your prayer request..."
              className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
            />
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-church-gold" />
              <div>
                <span className="block font-bold text-xs text-church-navy">Keep Private for Clergy Only</span>
                <span className="block text-[11px] text-slate-500">Private requests are shared only with Pastor Childs.</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
              className="w-5 h-5 rounded text-church-gold focus:ring-church-gold"
            />
          </div>

          {status === "success" && (
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-semibold flex items-center gap-2 border border-emerald-300">
              <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}

          {status === "error" && (
            <div className="p-3 bg-red-50 text-red-800 rounded-lg text-xs font-semibold flex items-center gap-2 border border-red-300">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 bg-church-navy hover:bg-slate-800 text-white font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Send className="w-4 h-4 text-church-gold" />
            <span>{status === "submitting" ? "Sending..." : "Submit Prayer Request"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
