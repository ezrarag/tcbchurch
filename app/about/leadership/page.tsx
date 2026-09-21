import Link from "next/link";
import { siteConfig } from "@/site.config";
import { User, ShieldCheck, ArrowLeft, Mail, Phone } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export const metadata = {
  title: "Pastoral Leadership | Tabernacle Community Baptist Church",
  description: "Meet Reverend Dr. Donna Childs and ministerial leadership at Tabernacle Community Baptist Church in Milwaukee.",
};

export default function LeadershipPage() {
  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto space-y-8 text-left">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About</span>
        </Link>

        {/* Senior Pastor Showcase Card */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] border border-stone-800/80 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
          <div className="absolute top-8 right-8 pointer-events-none opacity-10 text-stone-300">
            <ChurchLogoWatermark size={240} />
          </div>

          <div className="relative z-10 border-b border-stone-800 pb-6 space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              Spiritual Shepherding & Pulpit Ministry
            </span>
            <h1 className="text-3xl sm:text-5xl font-light font-sans text-white tracking-tight leading-tight">
              Pastoral Leadership
            </h1>
          </div>

          {/* Pastor Feature Bento */}
          <div className="relative z-10 rounded-2xl bg-[#120e0d] p-6 sm:p-8 border border-stone-800 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-amber-500/20 to-stone-900 border-2 border-amber-400/60 flex flex-col items-center justify-center p-4 text-center flex-shrink-0 shadow-xl">
              <User className="w-12 h-12 text-amber-400 mb-1" />
              <span className="font-sans font-medium text-xs text-white leading-tight">{siteConfig.pastorTitle}</span>
              <span className="font-sans font-light text-[11px] text-stone-300">{siteConfig.pastorName}</span>
            </div>

            <div className="space-y-3 flex-1 text-left">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                Senior Pastor
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white leading-snug">
                {siteConfig.pastorTitle} {siteConfig.pastorName}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Reverend Dr. Donna Childs serves as Senior Pastor of Tabernacle Community Baptist Church. Under Pastor Childs&apos; faithful spiritual leadership, TCBC continues its century-long mission of empowering believers, teaching biblical truth, and extending Christ-centered healing throughout Milwaukee.
              </p>
            </div>
          </div>

          {/* Ministry Servant Boards */}
          <div className="relative z-10 space-y-6 pt-4">
            <div className="border-b border-stone-800 pb-2">
              <h2 className="text-xl sm:text-2xl font-light text-white">
                Ministerial Staff & Servant Boards
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-[#120e0d] p-6 rounded-2xl border border-stone-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-light text-white">Associate Clergy</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Ministerial associates supporting Sunday worship, pastoral care, and pulpit preaching.
                </p>
              </div>

              <div className="bg-[#120e0d] p-6 rounded-2xl border border-stone-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-light text-white">Deacons & Trustees</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Serving the congregation in communion, benevolence, and physical church stewardship.
                </p>
              </div>

              <div className="bg-[#120e0d] p-6 rounded-2xl border border-stone-800 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-light text-white">Ministry Auxiliaries</h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Leaders of our ~30 active auxiliaries, youth programs, and community outreach efforts.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-400">
              Questions or ministerial appointments?
            </span>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
