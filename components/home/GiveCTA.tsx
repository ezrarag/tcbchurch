import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Heart, Smartphone, ExternalLink, ShieldCheck } from "lucide-react";

export function GiveCTA() {
  return (
    <section className="w-full bg-[#221c19] py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-stone-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#181311] rounded-2xl sm:rounded-3xl border border-stone-800/80 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden text-center space-y-8">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

          {/* Heart Icon Emblem */}
          <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Heart className="w-8 h-8 fill-current" />
          </div>

          {/* Headline & Body */}
          <div className="space-y-3 max-w-2xl mx-auto relative z-10">
            <span className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-widest block">
              Generosity & Faithful Stewardship
            </span>
            <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Support the Ministry & Mission of TCBC
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Your tithes and generous offerings enable us to preach the Gospel, support Christian education, care for families in need, and expand outreach across Milwaukee.
            </p>
          </div>

          {/* Giving Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
            <a
              href={siteConfig.giving.memberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            >
              <span>Give Online (AccessACS)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/give"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-stone-800/80 hover:bg-stone-700 text-stone-200 hover:text-white font-medium rounded-xl transition-all border border-stone-700 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            >
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>Text-to-Give & Mail Options</span>
            </Link>
          </div>

          {/* Trust & Security footnote */}
          <div className="pt-6 border-t border-stone-800/80 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs text-stone-400 relative z-10">
            <ShieldCheck className="w-4 h-4 text-amber-400/80 flex-shrink-0" />
            <span>Secure giving managed via AccessACS (ACS Technologies). {siteConfig.giving.textToGive}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
