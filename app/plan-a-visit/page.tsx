"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { MapPin, Phone, Clock, Send, Check, AlertCircle } from "lucide-react";

export default function PlanAVisitPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [message, setMessage] = useState("");
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
          type: "visit",
          name,
          email,
          phone,
          message: `Planned Visit Date: ${visitDate || "Not specified"}. Note: ${message}`,
          private: false,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMsg("Thank you! We look forward to welcoming you to worship at TCBC.");
        setName("");
        setEmail("");
        setPhone("");
        setVisitDate("");
        setMessage("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Could not submit your visit request. Please call us directly at " + siteConfig.phone);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Welcome to TCBC
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Plan Your Visit
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
          We would love to worship with you! Whether joining in-person on Medford Avenue or connecting on our prayer call, you are family here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Expectations & Times */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-serif font-bold text-xl text-church-navy border-b pb-2">
              Worship Times & Location
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                <a
                  href={siteConfig.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-church-gold underline font-medium"
                >
                  {siteConfig.address.formatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-church-navy">Sunday Worship:</span> 10:00 AM
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-church-navy">Prayer Line:</span> {siteConfig.callInLine}
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-church-navy text-white p-6 rounded-2xl shadow-md space-y-3 border-l-4 border-church-gold">
            <h3 className="font-serif font-bold text-lg text-white">What to Expect</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Warm gospel music, heartfelt prayer, authentic fellowship, and empowering biblical preaching from Pastor Rev. Dr. Donna Childs. Dress comfortably — come as you are!
            </p>
          </div>
        </div>

        {/* Right Column: RSVP / Visit Form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
          <h2 className="font-serif font-bold text-2xl text-church-navy mb-4">
            Let Us Know You&apos;re Coming
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(414) 000-0000"
                  className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Target Sunday / Date</label>
              <input
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Questions or Special Needs?</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any seating needs, children bringing, or prayer requests..."
                className="w-full p-3 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-church-gold focus:outline-none"
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
              <span>{status === "submitting" ? "Sending..." : "Submit Visit Request"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
