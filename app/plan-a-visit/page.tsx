"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import { MapPin, Phone, Clock, Send, Check, AlertCircle, Sparkles, Heart } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

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
        setStatusMsg("Thank you! We look forward to warmly welcoming you to worship at TCBC.");
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
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-4 sm:py-8 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto space-y-8 sm:space-y-12">
        
        {/* ============================================================
            HERO HEADER: Conforms to Pinterest dark framed aesthetic
            ============================================================ */}
        <div className="rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] shadow-2xl border border-stone-800/60 relative min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Background Photography with Warm Dark Gradient */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero-sanctuary.jpg"
              alt="Sanctuary prepared for worship"
              fill
              priority
              className="object-cover object-center scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181311] via-transparent to-black/50" />
          </div>

          {/* Watermark in background */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 pointer-events-none opacity-15 text-stone-300">
            <ChurchLogoWatermark size={320} />
          </div>

          {/* Top Bar Badge */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <ChurchLogo className="w-8 h-8 sm:w-10 sm:h-10" size={40} />
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-widest text-stone-300 font-light">
                  Tabernacle Community Baptist Church
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  Welcome to Your Spiritual Home
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>You Are Welcome Here</span>
            </span>
          </div>

          {/* Hero Editorial Headline */}
          <div className="relative z-10 space-y-4 max-w-3xl text-left my-auto py-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Visitor & Guest Experience
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans tracking-tight text-white leading-[1.1]">
              Plan Your Visit to <br className="hidden sm:inline" />
              Tabernacle
            </h1>
            <p className="text-stone-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl">
              We would love to worship with you this Sunday! Come experience joyful gospel praise, genuine community, and the life-changing Word of God.
            </p>
          </div>
        </div>

        {/* ============================================================
            VISIT INFO & RSVP FORM (Bento Grid)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {/* Left Info Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 space-y-6">
              <div className="border-b border-stone-800 pb-3">
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
                  Gathering Times
                </span>
                <h2 className="text-2xl font-light text-white font-sans tracking-tight">
                  When & Where
                </h2>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-stone-300 font-light">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Sunday Morning Worship</span>
                    <span>10:00 AM CST (In-person & Facebook Live)</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">Sanctuary Address</span>
                    <span>{siteConfig.address.formatted}</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium block">What to Wear</span>
                    <span>Come as you are — from Sunday best to comfortable casual attire.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="md:col-span-7 rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 space-y-6">
            <div className="border-b border-stone-800 pb-3">
              <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
                VIP Host Welcome
              </span>
              <h2 className="text-2xl font-light text-white font-sans tracking-tight">
                Let Us Know You&apos;re Coming
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Washington"
                  className="w-full px-4 py-3 bg-[#120e0d] border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@example.com"
                    className="w-full px-4 py-3 bg-[#120e0d] border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(414) 000-0000"
                    className="w-full px-4 py-3 bg-[#120e0d] border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                  Target Sunday Date
                </label>
                <input
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#120e0d] border border-stone-800 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 font-medium mb-1.5">
                  Any Questions or Accommodations?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Bringing children, wheelchair access, prayer needs..."
                  className="w-full px-4 py-3 bg-[#120e0d] border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>

              {status === "success" && (
                <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-xl text-xs font-medium flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{statusMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-950/60 border border-red-500/40 text-red-300 rounded-xl text-xs font-medium flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{statusMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-stone-950 font-semibold text-xs transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{status === "submitting" ? "Registering..." : "Reserve My Visit"}</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
