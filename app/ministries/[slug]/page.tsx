import { siteConfig } from "@/site.config";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export default function MinistryDetailPage({ params }: { params: { slug: string } }) {
  const ministry = siteConfig.ministries.find((m) => m.slug === params.slug) || siteConfig.ministries[0];

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto space-y-6 text-left">
        <Link
          href="/ministries"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Ministries</span>
        </Link>

        {/* Framed Detail Card */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] border border-stone-800/80 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="absolute top-6 right-6 pointer-events-none opacity-10 text-stone-300">
            <ChurchLogoWatermark size={180} />
          </div>

          <div className="relative z-10 border-b border-stone-800 pb-6 space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              {ministry.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-sans text-white tracking-tight leading-tight">
              {ministry.name}
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
              {ministry.summary}
            </p>
          </div>

          <div className="relative z-10 text-sm sm:text-base text-stone-300 font-light leading-relaxed space-y-4">
            <p>{ministry.description}</p>
          </div>

          {/* Info & Volunteer Box */}
          <div className="relative z-10 bg-[#120e0d] p-5 sm:p-6 rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                <span className="text-white font-medium block mb-0.5">Interested in Getting Involved?</span>
                Connect with church leadership or visit during our scheduled auxiliary gathering.
              </div>
            </div>

            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors whitespace-nowrap shadow-md"
            >
              Contact Church
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
