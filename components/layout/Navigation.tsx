"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";
import { Menu, X, Phone, Heart, Video } from "lucide-react";
import { ChurchLogo } from "@/components/ui/ChurchLogo";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Listen for custom trigger from hero or other page triggers
  useEffect(() => {
    const handleOpen = () => setMobileOpen(true);
    window.addEventListener("open-mobile-menu", handleOpen);
    return () => window.removeEventListener("open-mobile-menu", handleOpen);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* 1. Desktop & Subpage Header (Renders on subpages like /about, /sermons, /events, /give, /ministries) */}
      {!isHome && (
        <header
          aria-label="Subpage navigation"
          className="w-full bg-[#181311]/95 backdrop-blur-md border-b border-stone-800/80 sticky top-0 z-40 text-stone-200 shadow-xl"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <ChurchLogo className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" size={36} />
              <div className="flex flex-col text-left">
                <span className="font-sans font-light tracking-wide text-xs text-stone-300 uppercase leading-tight">
                  Tabernacle Community
                </span>
                <span className="font-sans font-medium text-sm text-white leading-tight">
                  Baptist Church
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Desktop main menu" className="hidden lg:flex items-center space-x-1 text-sm font-light">
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
            </nav>

            {/* Mobile Header Controls on Subpages (Inline, No Hanging Button) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/give"
                className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shadow-md flex items-center gap-1"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Give</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-stone-200 hover:text-white transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>
      )}

      {/* 2. Mobile Slide-out Full-Screen Drawer Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-full max-w-sm mx-auto space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Brand & Close Button */}
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-3">
                <ChurchLogo className="w-9 h-9" size={36} />
                <div>
                  <span className="block text-xs font-light text-stone-400 uppercase leading-tight">
                    Tabernacle Community
                  </span>
                  <span className="block text-sm font-medium text-white leading-tight">
                    Baptist Church
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-amber-400" />
              </button>
            </div>

            {/* Navigation links */}
            <nav aria-label="Mobile drawer navigation" className="flex flex-col space-y-2.5 pt-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-light text-stone-200 hover:text-amber-400 transition-colors py-1.5 px-2 rounded-lg hover:bg-stone-800/40"
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
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Give Online</span>
              </Link>

              {siteConfig.socials.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#1877F2]/90 hover:bg-[#1877F2] text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
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

          <div className="text-center text-xs text-stone-500 pb-2">
            Tap outside or click ✕ to close
          </div>
        </div>
      )}
    </>
  );
}
