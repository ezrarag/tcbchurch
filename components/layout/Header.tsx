"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Phone, Video, MapPin, Menu, X, Heart } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-church-navy text-white sticky top-0 z-40 shadow-md">
      {/* Top Announcement Bar */}
      <div className="bg-church-navy-light text-xs sm:text-sm py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded px-1 min-h-[30px]"
            >
              <Phone className="w-3.5 h-3.5 text-church-gold" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`tel:${siteConfig.callInLineRaw}`}
              className="hidden md:flex items-center gap-1.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded px-1 min-h-[30px]"
            >
              <Phone className="w-3.5 h-3.5 text-church-gold" />
              <span>Prayer Line: {siteConfig.callInLine}</span>
            </a>
            <a
              href={siteConfig.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded px-1 min-h-[30px]"
            >
              <MapPin className="w-3.5 h-3.5 text-church-gold" />
              <span>{siteConfig.address.formatted}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {siteConfig.socials.facebook && (
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-church-gold/20 hover:bg-church-gold text-white font-medium py-1 px-2.5 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold"
              >
                <Video className="w-3.5 h-3.5 text-church-gold hover:text-white" />
                <span>Facebook Live</span>
              </a>
            )}
            <Link
              href="/give"
              className="flex items-center gap-1 bg-church-gold hover:bg-church-gold-hover text-white font-semibold py-1 px-3 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Give</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-church-gold rounded p-1">
          <div className="w-10 h-10 rounded-full bg-church-gold flex items-center justify-center font-serif text-church-navy font-bold text-xl border-2 border-white/20 group-hover:scale-105 transition-transform">
            TCBC
          </div>
          <div>
            <span className="block font-serif font-bold text-lg sm:text-xl text-white tracking-tight leading-tight group-hover:text-church-gold transition-colors">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-slate-300 font-sans tracking-wide">
              {siteConfig.address.city}, {siteConfig.address.state}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-slate-100 hover:text-church-gold hover:bg-slate-800/60 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold min-h-[44px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/plan-a-visit"
            className="ml-2 px-4 py-2 text-sm font-bold text-church-navy bg-white hover:bg-slate-100 rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold min-h-[44px] flex items-center"
          >
            Plan a Visit
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-church-gold min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-church-navy border-t border-slate-700/80 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {siteConfig.nav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-slate-100 hover:text-church-gold hover:bg-slate-800/80 rounded-md min-h-[44px]"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 space-y-1 my-1 border-l-2 border-church-gold/40">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-300 hover:text-white min-h-[40px] flex items-center"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-3 border-t border-slate-700 flex flex-col gap-2">
            <Link
              href="/plan-a-visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 font-bold text-church-navy bg-white hover:bg-slate-100 rounded-md min-h-[44px] flex items-center justify-center"
            >
              Plan a Visit
            </Link>
            <Link
              href="/give"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center px-4 py-3 font-bold text-white bg-church-gold hover:bg-church-gold-hover rounded-md min-h-[44px] flex items-center justify-center"
            >
              Give Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
