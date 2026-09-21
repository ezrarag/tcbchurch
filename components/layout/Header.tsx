"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Phone, Video, MapPin, Menu, X, Heart, Award } from "lucide-react";
import { StarLogo } from "@/components/ui/StarLogo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#181311] text-white sticky top-0 z-40 shadow-xl border-b border-stone-800/80">
      {/* Top Announcement & Centennial Bar */}
      <div className="bg-[#120e0d] text-xs py-2 px-4 border-b border-stone-800/80">
        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 font-medium px-2.5 py-0.5 rounded-full text-[11px] border border-amber-500/20">
              <Award className="w-3 h-3 text-amber-400" />
              <span>100 Years of Grace (1926–2026)</span>
            </div>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 min-h-[30px]"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`tel:${siteConfig.callInLineRaw}`}
              className="hidden md:flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 min-h-[30px]"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Prayer Call: {siteConfig.callInLine}</span>
            </a>
            <a
              href={siteConfig.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1 min-h-[30px]"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.address.formatted}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {siteConfig.socials.facebook && (
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white font-medium py-1 px-2.5 rounded-full text-xs transition-colors border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Video className="w-3.5 h-3.5 text-blue-400 hover:text-white" />
                <span>Facebook Live</span>
              </a>
            )}
            <Link
              href="/give"
              className="flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold py-1 px-3 rounded-full text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-white shadow-md"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Give</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1">
          <StarLogo className="w-9 h-9 text-amber-200 transition-transform duration-300 group-hover:rotate-45" />
          <div>
            <span className="block font-sans font-light tracking-wide text-xs text-stone-300 uppercase leading-tight">
              Tabernacle Community
            </span>
            <span className="block font-sans font-medium text-base sm:text-lg text-white tracking-tight leading-tight group-hover:text-amber-200 transition-colors">
              Baptist Church
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm font-light text-stone-300 hover:text-white hover:bg-stone-800/60 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[40px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/plan-a-visit"
            className="ml-3 px-4 py-2 text-xs font-semibold text-stone-950 bg-stone-100 hover:bg-white rounded-xl shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-[40px] flex items-center"
          >
            Plan a Visit
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14100e] border-t border-stone-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {siteConfig.nav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-light text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 rounded-lg min-h-[44px]"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1 my-1 border-l-2 border-stone-700">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-stone-400 hover:text-white min-h-[40px] flex items-center"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <Link
              href="/plan-a-visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 font-semibold text-stone-950 bg-stone-100 hover:bg-white rounded-xl min-h-[44px] flex items-center justify-center"
            >
              Plan a Visit
            </Link>
            <Link
              href="/give"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 font-semibold text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-xl min-h-[44px] flex items-center justify-center shadow-md"
            >
              Give Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
