"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";
import { Menu, X, Phone, Heart, Video } from "lucide-react";
import { StarLogo } from "@/components/ui/StarLogo";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {/* 1. Desktop Subpage Header (ONLY renders on subpages like /about, /sermons, /events, /give) */}
      {!isHome && (
        <nav
          aria-label="Subpage navigation"
          className="w-full bg-[#181311] border-b border-stone-800/80 sticky top-0 z-40 text-stone-200 shadow-xl"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <StarLogo className="w-8 h-8 text-amber-200 transition-transform duration-300 group-hover:rotate-45" />
              <div className="flex flex-col text-left">
                <span className="font-sans font-light tracking-wide text-xs text-stone-300 uppercase leading-tight">
                  Tabernacle Community
                </span>
                <span className="font-sans font-medium text-sm text-white leading-tight">
                  Baptist Church
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-1 text-sm font-light">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      isActive
                        ? "text-amber-400 font-medium bg-stone-800/60"
                        : "text-stone-300 hover:text-white hover:bg-stone-800/40"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <Link
                href="/give"
                className="ml-3 px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shadow-md flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Give</span>
              </Link>
            </div>
          </div>
        </nav>
      )}

      {/* 2. Minimal Fixed Mobile Menu Button (ONLY on mobile screens) */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-11 h-11 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md border border-stone-700/80 text-stone-200 hover:text-white flex items-center justify-center shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 3. Mobile Slide-out Drawer Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/85 backdrop-blur-md flex flex-col justify-between p-6 pt-20 animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-full max-w-sm mx-auto space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Church Brand in Drawer */}
            <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
              <StarLogo className="w-9 h-9 text-amber-300" />
              <div>
                <span className="block text-xs font-light text-stone-400 uppercase">
                  Tabernacle Community
                </span>
                <span className="block text-base font-medium text-white">
                  Baptist Church
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-3">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-light text-stone-200 hover:text-amber-400 transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-stone-800 space-y-3">
              <Link
                href="/give"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Give Online</span>
              </Link>

              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Facebook Live Stream</span>
                </a>
              )}

              <div className="flex items-center gap-2 text-xs text-stone-400 pt-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Prayer Call: {siteConfig.callInLine}</span>
              </div>
            </div>
          </div>

          <div className="text-center text-[11px] text-stone-500 pt-6">
            Tap outside to close
          </div>
        </div>
      )}
    </>
  );
}
