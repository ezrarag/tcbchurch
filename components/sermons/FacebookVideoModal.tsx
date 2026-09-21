"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Radio, BookOpen, Calendar, User } from "lucide-react";
import { FacebookSermonVideo } from "@/lib/facebook/types";

interface FacebookVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  sermon: FacebookSermonVideo | null;
}

export function FacebookVideoModal({ isOpen, onClose, sermon }: FacebookVideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !sermon) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-church-cardDark text-white rounded-2xl border border-stone-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800/80 bg-stone-900/60">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Radio className="w-3 h-3" />
              <span>Facebook Broadcast</span>
            </span>
            <span className="text-xs text-stone-400">{sermon.date}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Embed Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={sermon.embedUrl}
            className="w-full h-full border-0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title={sermon.title}
          />
        </div>

        {/* Details & Actions Footer */}
        <div className="p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1.5 flex-1">
              <h2 id="video-modal-title" className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                {sermon.title}
              </h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-300">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  {sermon.speaker}
                </span>
                {sermon.scripture && (
                  <span className="flex items-center gap-1 text-amber-200">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    {sermon.scripture}
                  </span>
                )}
                <span className="flex items-center gap-1 text-stone-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {sermon.time || "10:00 AM CST"}
                </span>
              </div>
            </div>

            <a
              href={sermon.permalinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors shadow-lg self-start whitespace-nowrap"
            >
              <span>Watch on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-sm text-stone-300 leading-relaxed border-t border-stone-800/80 pt-3">
            {sermon.description}
          </p>
        </div>
      </div>
    </div>
  );
}
