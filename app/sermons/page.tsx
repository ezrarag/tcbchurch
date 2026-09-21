import { getFacebookSermons } from "@/lib/facebook/client";
import { SermonsClientView } from "@/components/sermons/SermonsClientView";
import { StarLogo } from "@/components/ui/StarLogo";
import { FacebookLiveBadge } from "@/components/ui/FacebookLiveBadge";
import { siteConfig } from "@/site.config";
import { Phone, Radio, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sermons & Facebook Broadcasts | Tabernacle Community Baptist Church",
  description: "Watch recent Sunday morning worship messages and midweek studies from Tabernacle Community Baptist Church, streamed via Facebook Live with Rev. Dr. Donna Childs.",
};

export const revalidate = 60; // Refresh every 60 seconds

export default async function SermonsPage() {
  const sermons = await getFacebookSermons(12);

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto space-y-12">
        
        {/* Header Breadcrumb & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/80 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <StarLogo className="w-6 h-6 text-amber-400" />
              <FacebookLiveBadge isLive={false} />
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans tracking-tight text-white">
              Sermons & Messages
            </h1>

            <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
              Experience the Word of God through our live worship broadcasts and sermon archives, pulled directly from our Facebook ministry community.
            </p>
          </div>

          {/* Direct Facebook Link & Audio Worship line */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={siteConfig.socials.facebook || "https://www.facebook.com/tcbchurchmke"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-lg transition-colors"
            >
              <Radio className="w-4 h-4" />
              <span>Facebook Live Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call-In: {siteConfig.callInLine}</span>
            </div>
          </div>
        </div>

        {/* Client-side Filterable Sermons Display */}
        <SermonsClientView sermons={sermons} />

        {/* Bottom Banner: Stay Connected on Facebook */}
        <div className="rounded-2xl bg-gradient-to-r from-stone-900 to-black border border-stone-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h3 className="text-xl sm:text-2xl font-light text-white font-sans">
              Never Miss a Sunday Message or Community Notice
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light max-w-xl">
              Follow @tcbchurchmke on Facebook for weekly worship streams, prayer requests, choir ministry, and urgent church announcements.
            </p>
          </div>

          <a
            href={siteConfig.socials.facebook || "https://www.facebook.com/tcbchurchmke"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl whitespace-nowrap"
          >
            Follow on Facebook
          </a>
        </div>

      </div>
    </div>
  );
}
