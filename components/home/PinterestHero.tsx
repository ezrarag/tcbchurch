"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Facebook, Youtube, Award, Heart } from "lucide-react";
import { StarLogo, StarWatermark } from "@/components/ui/StarLogo";
import { FacebookVideoModal } from "@/components/sermons/FacebookVideoModal";
import { FacebookSermonVideo } from "@/lib/facebook/types";
import { siteConfig } from "@/site.config";

interface PinterestHeroProps {
  latestSermon: FacebookSermonVideo;
  nextServiceInfo: {
    title: string;
    dateTimeFormatted: string;
    note: string;
    learnMoreUrl: string;
  };
}

export function PinterestHero({ latestSermon, nextServiceInfo }: PinterestHeroProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="w-full bg-[#221c19] py-4 sm:py-8 px-3 sm:px-6 lg:px-10">
      {/* Outer Framed Canvas matching Pinterest design */}
      <div className="max-w-[1440px] mx-auto rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] shadow-2xl border border-stone-800/60 flex flex-col">
        
        {/* ============================================================
            TOP SECTION: Sanctuary Hero with Navigation & Editorial Title
            ============================================================ */}
        <div className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] w-full flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Background Sanctuary Photography with Sunbeams */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero-sanctuary.jpg"
              alt="Sunlight pouring through church stained-glass windows onto the sanctuary altar"
              fill
              priority
              className="object-cover object-center scale-[1.02] transform transition-transform duration-1000"
            />
            {/* Elegant warm vignette overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181311] via-transparent to-black/40" />
          </div>

          {/* Top Bar: Brand Star Logo (Left) and Social Links (Right) */}
          <header className="relative z-10 flex items-start justify-between w-full">
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
              <StarLogo className="w-8 h-8 sm:w-10 sm:h-10 text-amber-100 transition-transform duration-300 group-hover:rotate-45" />
              <div className="flex flex-col text-left">
                <span className="font-sans font-light tracking-wide text-xs sm:text-sm text-stone-200 uppercase leading-tight">
                  Tabernacle Community
                </span>
                <span className="font-sans font-medium text-xs sm:text-sm text-white leading-tight">
                  Baptist Church
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full mt-1.5 w-fit">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>100 Years of Grace</span>
                </span>
              </div>
            </Link>

            {/* Top Right Social Circle Buttons */}
            <div className="flex items-center gap-2.5">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our X Twitter profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-stone-200 hover:text-white transition-colors border border-white/10"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={siteConfig.socials.facebook || "https://www.facebook.com/tcbchurchmke"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page for live services and announcements"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-stone-200 hover:text-white transition-colors border border-white/10"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href={siteConfig.socials.youtube || "https://www.youtube.com/@tcbchurchmke"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-stone-200 hover:text-white transition-colors border border-white/10"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </header>

          {/* Middle Body: Headline on Left, Vertical Navigation on Right */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
            {/* Left Headline (Taking a step toward the light) */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white font-sans leading-[1.08]">
                Take a step <br className="hidden sm:inline" />
                toward the light
              </h1>
              <p className="text-lg sm:text-2xl text-stone-200/90 font-light max-w-xl leading-relaxed">
                Discover faith, hope, <br className="hidden sm:inline" />
                and a home for your soul
              </p>
            </div>

            {/* Right Vertical Navigation & Community Stack */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-8">
              <nav aria-label="Main floating navigation" className="flex flex-col space-y-3.5 text-left lg:text-right">
                <Link
                  href="/about"
                  className="text-stone-300 hover:text-white text-base sm:text-lg font-light tracking-wide transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/ministries"
                  className="text-stone-300 hover:text-white text-base sm:text-lg font-light tracking-wide transition-colors"
                >
                  Serve
                </Link>
                <Link
                  href="/sermons"
                  className="text-stone-300 hover:text-white text-base sm:text-lg font-light tracking-wide transition-colors flex items-center lg:justify-end gap-1.5"
                >
                  <span>Sermons</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                </Link>
                <Link
                  href="/events"
                  className="text-stone-300 hover:text-white text-base sm:text-lg font-light tracking-wide transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/give"
                  className="text-amber-400 hover:text-amber-300 text-base sm:text-lg font-medium tracking-wide transition-colors flex items-center lg:justify-end gap-1.5"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Give</span>
                </Link>
              </nav>

              {/* Join Us CTA with Avatar Stack */}
              <div className="flex flex-col items-start lg:items-end space-y-2.5">
                <Link
                  href="/plan-a-visit"
                  className="inline-flex items-center gap-1.5 text-stone-200 hover:text-white text-base sm:text-lg font-light group"
                >
                  <span>Join us</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Avatar Stack with + badge */}
                <div className="flex items-center -space-x-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#181311] relative">
                    <Image
                      src="/images/avatar-1.jpg"
                      alt="Church member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#181311] relative">
                    <Image
                      src="/images/avatar-2.jpg"
                      alt="Church member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#181311] relative">
                    <Image
                      src="/images/avatar-3.jpg"
                      alt="Church member"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-700/80 border-2 border-[#181311] flex items-center justify-center text-xs font-medium text-stone-200">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM BENTO ROW (3 Cards matching the Pinterest Layout)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full border-t border-stone-800/80 bg-[#120e0d]">
          
          {/* Bento Card 1 (Cols 1-5): Member Portrait + Black Quote Card */}
          <div className="md:col-span-5 grid grid-cols-2 min-h-[220px] sm:min-h-[260px] border-b md:border-b-0 md:border-r border-stone-800/80">
            {/* Left Half: Member Portrait Photo */}
            <div className="relative w-full h-full min-h-[200px] overflow-hidden bg-stone-900">
              <Image
                src="/images/member-portrait.jpg"
                alt="Smiling church member holding an open Bible"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right Half: Black Quote Card */}
            <div className="bg-black p-6 sm:p-7 flex flex-col justify-between text-left">
              {/* Quotation mark icon */}
              <div className="text-stone-400 font-serif text-3xl sm:text-4xl leading-none select-none">
                “
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed my-auto">
                We want to be a family where people can connect and benefit from friendships in Christ.
              </p>
              <div className="text-[10px] uppercase tracking-wider text-amber-500/80 font-medium">
                Community & Fellowship
              </div>
            </div>
          </div>

          {/* Bento Card 2 (Cols 6-8): Bible Study Overhead Photo with Play Button */}
          <div className="md:col-span-3 relative min-h-[220px] sm:min-h-[260px] overflow-hidden group border-b md:border-b-0 md:border-r border-stone-800/80">
            <Image
              src="/images/fellowship-study.jpg"
              alt="Hands of believers gathered around open Bibles and scripture study"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle dark vignette */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

            {/* Centered Circular Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 hover:bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-amber-500/50"
                aria-label="Play latest sermon video"
              >
                <Play className="w-6 h-6 fill-black ml-1" />
              </button>
            </div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
              <span className="font-light truncate">Latest Facebook Message</span>
              <span className="text-amber-400 font-mono text-[10px]">WATCH</span>
            </div>
          </div>

          {/* Bento Card 3 (Cols 9-12): White Card (Sunday Worship Service) */}
          <div className="md:col-span-4 bg-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left min-h-[220px] sm:min-h-[260px]">
            {/* Star Watermark in bottom right */}
            <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-30 text-stone-400">
              <StarWatermark size={140} />
            </div>

            {/* Card Content */}
            <div className="relative z-10 space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-stone-500 font-bold block">
                Next Gathering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight text-stone-900 leading-tight">
                {nextServiceInfo.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 font-light">
                {nextServiceInfo.dateTimeFormatted}
              </p>
            </div>

            {/* Bottom Link with Arrow */}
            <div className="relative z-10 pt-4">
              <Link
                href="/sermons"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-stone-900 hover:text-amber-700 transition-colors group"
              >
                <span className="underline underline-offset-4 decoration-stone-300 group-hover:decoration-amber-700">
                  Learn More
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Facebook Video Modal */}
      <FacebookVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        sermon={latestSermon}
      />
    </section>
  );
}
