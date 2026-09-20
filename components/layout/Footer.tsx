import Link from "next/link";
import { siteConfig } from "@/site.config";
import { MapPin, Phone, Video, Clock, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-church-navy text-slate-200 pt-12 pb-8 border-t-4 border-church-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Column 1: Church Identity */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-church-gold flex items-center justify-center font-serif text-church-navy font-bold text-xl">
              TCBC
            </div>
            <span className="font-serif font-bold text-xl text-white">
              {siteConfig.shortName}
            </span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p className="text-xs text-slate-400 italic">
            &ldquo;{siteConfig.selfDescription}&rdquo; — {siteConfig.scriptureReference}
          </p>
        </div>

        {/* Column 2: Location & Contact */}
        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-4 border-b border-slate-700 pb-2">
            Contact & Location
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={siteConfig.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded p-1"
              >
                <MapPin className="w-5 h-5 text-church-gold flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address.formatted}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded p-1"
              >
                <Phone className="w-5 h-5 text-church-gold flex-shrink-0" />
                <span>Phone: {siteConfig.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.callInLineRaw}`}
                className="flex items-center gap-2.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded p-1"
              >
                <Phone className="w-5 h-5 text-church-gold flex-shrink-0" />
                <span>Prayer Call: {siteConfig.callInLine} ({siteConfig.callInAccessCode})</span>
              </a>
            </li>
            {siteConfig.socials.facebook && (
              <li>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-church-gold transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold rounded p-1"
                >
                  <Video className="w-5 h-5 text-church-gold flex-shrink-0" />
                  <span>Facebook Live Worship</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Column 3: Service Times */}
        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-4 border-b border-slate-700 pb-2">
            Service Times
          </h3>
          <ul className="space-y-2.5 text-sm">
            {siteConfig.serviceTimes.map((service, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-church-gold flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white">{service.label}: </span>
                  <span>{service.day} at {service.time}</span>
                  {service.note && <span className="block text-xs text-slate-400">{service.note}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-bold text-white mb-4 border-b border-slate-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/plan-a-visit" className="hover:text-church-gold transition-colors block py-1">Plan Your Visit</Link></li>
            <li><Link href="/about/leadership" className="hover:text-church-gold transition-colors block py-1">Pastoral Leadership</Link></li>
            <li><Link href="/watch" className="hover:text-church-gold transition-colors block py-1">Watch Livestream & Sermons</Link></li>
            <li><Link href="/ministries" className="hover:text-church-gold transition-colors block py-1">Ministries & Outreach</Link></li>
            <li><Link href="/give" className="hover:text-church-gold transition-colors block py-1 flex items-center gap-1.5"><Heart className="w-4 h-4 text-church-gold fill-current" /> Give Online</Link></li>
            <li><Link href="/prayer" className="hover:text-church-gold transition-colors block py-1">Submit Prayer Request</Link></li>
            <li><Link href="/admin" className="hover:text-church-gold transition-colors block py-1 text-slate-400">Admin Portal</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Pastor: {siteConfig.pastorTitle} {siteConfig.pastorName}.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <span>•</span>
          <Link href="/admin" className="hover:underline">Staff Login</Link>
        </div>
      </div>
    </footer>
  );
}
