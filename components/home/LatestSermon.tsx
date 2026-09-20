"use client";

import { useState } from "react";
import Link from "next/link";
import { SermonDoc } from "@/lib/types";
import { Play, Video, BookOpen, Calendar, User, ArrowRight } from "lucide-react";

interface LatestSermonProps {
  sermon: SermonDoc | null;
}

export function LatestSermon({ sermon }: LatestSermonProps) {
  const [loadEmbed, setLoadEmbed] = useState(false);

  if (!sermon) return null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-b-4 border-church-gold">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sermon Media Embed / Lazy Poster */}
        <div className="lg:col-span-7 aspect-video bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative flex items-center justify-center">
          {loadEmbed ? (
            <iframe
              src={sermon.videoUrl.includes("youtube.com") || sermon.videoUrl.includes("youtu.be")
                ? `https://www.youtube.com/embed/${sermon.videoUrl.split("v=")[1] || ""}?autoplay=1`
                : sermon.videoUrl}
              title={sermon.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-church-navy to-slate-900 p-8 flex flex-col justify-between text-center items-center">
              <div className="space-y-1 mt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-church-gold">
                  {sermon.series || "Sunday Message"}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  {sermon.title}
                </h3>
              </div>

              {/* Play Button Trigger */}
              <button
                onClick={() => setLoadEmbed(true)}
                className="w-20 h-20 rounded-full bg-church-gold hover:bg-church-gold-hover text-church-navy flex items-center justify-center shadow-2xl hover:scale-105 transition-all group focus:outline-none focus:ring-4 focus:ring-white my-4"
                aria-label={`Play sermon video: ${sermon.title}`}
              >
                <Play className="w-8 h-8 fill-current ml-1 group-hover:scale-110 transition-transform" />
              </button>

              <p className="text-xs text-slate-400 mb-2">
                Click to load video stream (YouTube / Facebook Live)
              </p>
            </div>
          )}
        </div>

        {/* Sermon Details */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <div className="inline-flex items-center gap-1.5 bg-church-gold/20 text-church-gold text-xs font-bold px-3 py-1 rounded-full">
            <Video className="w-3.5 h-3.5" />
            <span>Latest Sermon Online</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white leading-tight">
            {sermon.title}
          </h2>

          <div className="space-y-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-church-gold" />
              <span>{sermon.speaker}</span>
            </div>
            {sermon.scripture && (
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-church-gold" />
                <span>Scripture: {sermon.scripture}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-church-gold" />
              <span>{sermon.date}</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Catch up on inspirational preaching and teaching from Tabernacle Community Baptist Church. Watch live every Sunday at 10:00 AM on Facebook Live or listen on our weekly prayer calls.
          </p>

          <div className="pt-2">
            <Link
              href="/watch"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-church-gold hover:bg-church-gold-hover text-white font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white text-sm min-h-[44px]"
            >
              <span>Explore All Messages & Archives</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
