"use client";

import { useState } from "react";
import { siteConfig } from "@/site.config";
import { MapPin, Phone, Mail, Send, Check, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
          type: "contact",
          name,
          email,
          phone,
          message,
          private: false,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMsg("Your message has been sent to the church office. We will be in touch soon!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Could not send message. Please call us directly at " + siteConfig.phone);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Get in Touch
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Contact Church Office
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
          Have questions about services, membership, member records, or facility scheduling? Send us a message or reach out by phone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="font-serif font-bold text-xl text-church-navy border-b pb-2">
              Church Address & Phone
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>
                <a href={siteConfig.address.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 hover:text-church-gold">
                  <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.address.formatted}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2.5 hover:text-church-gold">
                  <Phone className="w-5 h-5 text-church-gold flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-church-gold">
                  <Mail className="w-5 h-5 text-church-gold flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
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
              <label className="block text-xs font-bold text-slate-700 mb-1">Message / Inquiry *</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we assist you?"
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
              <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
