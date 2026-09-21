import Link from "next/link";
import { siteConfig } from "@/site.config";
import { MapPin, Phone, Video, Clock, Heart, Award } from "lucide-react";
import { StarLogo } from "@/components/ui/StarLogo";

export function Footer() {
  return (
    <footer className="w-full bg-[#120e0d] text-stone-300 py-16 lg:py-24 px-4 sm:px-6 lg:px-12 border-t border-stone-800 text-left">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1: Church Identity & Centennial */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <StarLogo className="w-8 h-8 text-amber-300" />
            <div>
              <span className="font-sans font-medium text-lg text-white block">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-amber-400 font-medium flex items-center gap-1">
                <Award className="w-3 h-3 text-amber-400" />
                100 Years of Grace (1926–2026)
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p className="text-xs text-amber-200/80 italic font-serif">
            &ldquo;{siteConfig.selfDescription}&rdquo; — {siteConfig.scriptureReference}
          </p>
        </div>

        {/* Column 2: Location & Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-stone-800 pb-2">
            Contact & Location
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-stone-300 font-light">
            <li>
              <a
                href={siteConfig.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1"
              >
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address.formatted}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1"
              >
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Phone: {siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.callInLineRaw}`}
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1"
              >
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Prayer Call: {siteConfig.callInLine}</span>
              </a>
            </li>
            <li>
              <span className="text-xs text-stone-400 pl-6 block">
                Access Code: {siteConfig.callInAccessCode}
              </span>
            </li>
          </ul>
        </div>

        {/* Column 3: Worship Times & Facebook Live */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-stone-800 pb-2">
            Weekly Services
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300 font-light">
            {siteConfig.serviceTimes.map((service, idx) => (
              <li key={idx} className="border-b border-stone-800/50 pb-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">{service.label}</span>
                  <span className="text-amber-400">{service.time}</span>
                </div>
                {service.note && (
                  <span className="text-[11px] text-stone-400 block">{service.note}</span>
                )}
              </li>
            ))}
          </ul>
          {siteConfig.socials.facebook && (
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Facebook Live Broadcasts</span>
            </a>
          )}
        </div>

        {/* Column 4: Quick Navigation & Online Giving */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-stone-800 pb-2">
            Explore & Connect
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-300 font-light mb-6">
            <li>
              <Link href="/about" className="hover:text-amber-400 transition-colors">
                About & Believing Community
              </Link>
            </li>
            <li>
              <Link href="/plan-a-visit" className="hover:text-amber-400 transition-colors">
                Plan Your Sunday Visit
              </Link>
            </li>
            <li>
              <Link href="/sermons" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <span>Sermons & Facebook Live</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-amber-400 transition-colors">
                Events & Church Calendar
              </Link>
            </li>
            <li>
              <Link href="/ministries" className="hover:text-amber-400 transition-colors">
                Ministries & Volunteer Service
              </Link>
            </li>
            <li>
              <Link href="/prayer" className="hover:text-amber-400 transition-colors">
                Submit Prayer Request
              </Link>
            </li>
          </ul>

          <Link
            href="/give"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Online Giving (Tithe & Offering)</span>
          </Link>
        </div>
      </div>

      {/* Bottom Legal & Attribution Bar */}
      <div className="border-t border-stone-800/80 pt-6 mt-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
        <p>
          &copy; 1926–{new Date().getFullYear()} {siteConfig.name}. All rights reserved. Celebrating 100 Years in Milwaukee, WI.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-stone-200 transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-stone-200 transition-colors">
            Terms of Use
          </Link>
          <span>•</span>
          <Link href="/admin/login" className="text-stone-400 hover:text-stone-200 transition-colors">
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
