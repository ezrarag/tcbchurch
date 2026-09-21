"use client";

import React, { useState } from "react";
import { X, CheckCircle, Calendar, Clock, MapPin, ExternalLink, Users, Sparkles } from "lucide-react";
import { FacebookEventItem } from "@/lib/facebook/types";

interface EventRsvpModalProps {
  event: FacebookEventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function EventRsvpModal({ event, isOpen, onClose }: EventRsvpModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    attendanceType: "in-person",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen || !event) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/events/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: event.id,
          eventName: event.name,
          ...formData,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit RSVP");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "1",
      attendanceType: "in-person",
      notes: "",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity"
      onClick={handleReset}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#181311] text-stone-100 rounded-3xl border border-stone-800 shadow-2xl p-6 sm:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                RSVP Confirmed & Recorded
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-white">
                We Look Forward to Seeing You!
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-md mx-auto">
                Your reservation for <strong>{event.name}</strong> has been saved directly to our church registry.
              </p>
            </div>

            {/* Sync with Facebook button */}
            <div className="p-4 rounded-2xl bg-[#120e0d] border border-stone-800/80 space-y-3 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Dual Facebook Sync</span>
              </div>
              <p className="text-xs text-stone-300 font-light">
                Would you also like to mark yourself as &quot;Going&quot; on the official Facebook event page to notify friends and follow live updates?
              </p>
              <a
                href={event.permalinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-xl transition-colors shadow-md"
              >
                <span>Connect & RSVP on Facebook Event</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs rounded-xl uppercase tracking-wider transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                RSVP for Service or Event
              </span>
              <h2 className="text-2xl font-light font-sans text-white tracking-tight leading-snug mt-1">
                {event.name}
              </h2>

              <div className="mt-3 space-y-1 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{event.formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{event.formattedTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-900/40 border border-red-700 rounded-xl text-xs text-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sister Mary Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#120e0d] border border-stone-800 text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120e0d] border border-stone-800 text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(414) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120e0d] border border-stone-800 text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120e0d] border border-stone-800 text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="1">1 (Just me)</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5+">5+ family/party</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-300 mb-1">
                    Attendance Type
                  </label>
                  <select
                    value={formData.attendanceType}
                    onChange={(e) => setFormData({ ...formData, attendanceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#120e0d] border border-stone-800 text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="in-person">In-Person Sanctuary</option>
                    <option value="online">Online Facebook Live</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-300 mb-1">
                  Prayer Request or Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any questions or prayer intentions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#120e0d] border border-stone-800 text-stone-100 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Users className="w-4 h-4" />
                  <span>{isSubmitting ? "Saving RSVP..." : "Confirm RSVP on Website"}</span>
                </button>
              </div>

              <div className="text-center">
                <a
                  href={event.permalinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-stone-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                >
                  <span>Or RSVP directly on Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
