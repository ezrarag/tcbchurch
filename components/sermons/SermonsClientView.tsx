"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Calendar, User, BookOpen, Clock, Radio, ExternalLink, Filter } from "lucide-react";
import { FacebookSermonVideo } from "@/lib/facebook/types";
import { FacebookVideoModal } from "@/components/sermons/FacebookVideoModal";
import { siteConfig } from "@/site.config";

interface SermonsClientViewProps {
  sermons: FacebookSermonVideo[];
}

export function SermonsClientView({ sermons }: SermonsClientViewProps) {
  const [selectedSermon, setSelectedSermon] = useState<FacebookSermonVideo | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Empowered Living", "Midweek Discipleship", "Centennial Heritage (1926–2026)", "Faith in Action"];

  const filteredSermons = activeCategory === "All"
    ? sermons
    : sermons.filter((s) => s.series?.toLowerCase().includes(activeCategory.toLowerCase()));

  const featuredSermon = sermons[0];

  return (
    <div className="space-y-12">
      {/* Featured Latest Facebook Sermon */}
      {featuredSermon && (
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#181311] border border-stone-800/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Video Thumbnail with Play Button */}
            <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] group overflow-hidden bg-black">
              <Image
                src={featuredSermon.thumbnailUrl}
                alt={featuredSermon.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Play Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setSelectedSermon(featuredSermon)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-500"
                  aria-label={`Play ${featuredSermon.title}`}
                >
                  <Play className="w-7 h-7 fill-black ml-1 text-black" />
                </button>
              </div>

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white shadow-md">
                  <Radio className="w-3.5 h-3.5" />
                  <span>Featured Facebook Broadcast</span>
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
                <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded">
                  Duration: {featuredSermon.duration}
                </span>
                <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded">
                  {featuredSermon.viewCount} Views
                </span>
              </div>
            </div>

            {/* Right Sermon Information */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    {featuredSermon.series || "Sunday Message"}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-light font-sans text-white leading-tight">
                  {featuredSermon.title}
                </h2>

                <p className="text-sm text-stone-300 leading-relaxed font-light">
                  {featuredSermon.description}
                </p>

                <div className="space-y-2 text-xs text-stone-400 pt-2 border-t border-stone-800">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-amber-400" />
                    <span className="text-stone-200 font-medium">{featuredSermon.speaker}</span>
                  </div>
                  {featuredSermon.scripture && (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-200">{featuredSermon.scripture}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-stone-400" />
                    <span>{featuredSermon.date} • {featuredSermon.time}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setSelectedSermon(featuredSermon)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shadow-lg flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Sermon Now</span>
                </button>

                <a
                  href={featuredSermon.permalinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white font-medium text-xs transition-colors border border-stone-700/80 flex items-center gap-1.5"
                >
                  <span>Open on Facebook</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2 text-stone-200 text-sm font-light">
            <Filter className="w-4 h-4 text-amber-400" />
            <span>Filter Sermon Series:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-amber-500 text-stone-950 font-semibold shadow-md"
                    : "bg-stone-800/80 text-stone-300 hover:text-white hover:bg-stone-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sermon Grid (Pulled from Facebook) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="rounded-2xl overflow-hidden bg-[#181311] border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail with Play trigger */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-stone-900 cursor-pointer"
                  onClick={() => setSelectedSermon(sermon)}
                >
                  <Image
                    src={sermon.thumbnailUrl}
                    alt={sermon.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-5 h-5 fill-black ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/75 backdrop-blur text-[11px] text-stone-300 font-mono">
                    {sermon.duration}
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-5 space-y-2.5 text-left">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-medium">
                    <span>{sermon.series || "Sunday Service"}</span>
                    <span className="text-stone-400">{sermon.date}</span>
                  </div>

                  <h3
                    onClick={() => setSelectedSermon(sermon)}
                    className="text-lg font-light text-white group-hover:text-amber-300 transition-colors cursor-pointer leading-snug line-clamp-2"
                  >
                    {sermon.title}
                  </h3>

                  <p className="text-xs text-stone-400 line-clamp-2 leading-relaxed">
                    {sermon.description}
                  </p>

                  <div className="space-y-1 text-[11px] text-stone-400 pt-2 border-t border-stone-800/80">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-amber-400" />
                      <span>{sermon.speaker}</span>
                    </div>
                    {sermon.scripture && (
                      <div className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-amber-200/90">{sermon.scripture}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3.5 border-t border-stone-800/80 bg-stone-900/40 flex items-center justify-between">
                <button
                  onClick={() => setSelectedSermon(sermon)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch</span>
                </button>

                <a
                  href={sermon.permalinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-stone-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facebook Sermon Modal */}
      <FacebookVideoModal
        isOpen={Boolean(selectedSermon)}
        onClose={() => setSelectedSermon(null)}
        sermon={selectedSermon}
      />
    </div>
  );
}
