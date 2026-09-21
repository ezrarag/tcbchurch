import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/site.config";
import { ArrowRight, History, Heart, ShieldCheck, Award, Sparkles } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export const metadata = {
  title: "About Us | Tabernacle Community Baptist Church",
  description: "Learn about Tabernacle Community Baptist Church in Milwaukee: our 100-year legacy of grace, what we believe, and pastoral leadership.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-4 sm:py-8 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto space-y-8 sm:space-y-12">
        
        {/* ============================================================
            HERO HEADER: Conforms to Pinterest dark framed aesthetic
            ============================================================ */}
        <div className="rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] shadow-2xl border border-stone-800/60 relative min-h-[360px] sm:min-h-[440px] flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Background Photography with Warm Dark Gradient */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/hero-sanctuary.jpg"
              alt="Historic sanctuary of Tabernacle Community Baptist Church"
              fill
              priority
              className="object-cover object-center scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181311] via-transparent to-black/50" />
          </div>

          {/* Watermark in background */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 pointer-events-none opacity-15 text-stone-300">
            <ChurchLogoWatermark size={320} />
          </div>

          {/* Top Bar Badge */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <ChurchLogo className="w-8 h-8 sm:w-10 sm:h-10" size={40} />
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-widest text-stone-300 font-light">
                  Tabernacle Community Baptist Church
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  Founded 1926 • Milwaukee, WI
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Centennial Heritage (1926–2026)</span>
            </span>
          </div>

          {/* Hero Editorial Headline */}
          <div className="relative z-10 space-y-4 max-w-3xl text-left my-auto py-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Our Calling & Faith Community
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans tracking-tight text-white leading-[1.1]">
              A Light of Hope in <br className="hidden sm:inline" />
              the Heart of Milwaukee
            </h1>
            <p className="text-stone-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl">
              &ldquo;{siteConfig.selfDescription}&rdquo;
            </p>
            <span className="text-xs text-amber-400 font-mono block">
              — {siteConfig.scriptureReference}
            </span>
          </div>

          {/* Bottom Highlights Strip */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-12 text-xs text-stone-300">
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">100</span>
              <span className="font-light">Years of Service</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">Rev. Dr. Donna Childs</span>
              <span className="font-light">• Pastor</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">2500 W Center St</span>
              <span className="font-light">• Milwaukee</span>
            </div>
          </div>
        </div>

        {/* ============================================================
            ABOUT PILLARS (Bento Grid)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {/* History Card */}
          <Link
            href="/about/history"
            className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <History className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-white group-hover:text-amber-300 transition-colors">
                History & Heritage
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Discover our journey from a small prayer gathering in 1926 through a century of transformative civil rights, community service, and Christian fellowship.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>Read church history</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Beliefs Card */}
          <Link
            href="/about/beliefs"
            className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-white group-hover:text-amber-300 transition-colors">
                What We Believe
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Our foundational Baptist doctrines, gospel conviction, the authority of Scripture, and our commitment to living the love of Christ daily.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>Explore our beliefs</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Leadership Card */}
          <Link
            href="/about/leadership"
            className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-light text-white group-hover:text-amber-300 transition-colors">
                Pastoral Leadership
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Meet Reverend Dr. Donna Childs, our pastoral shepherds, ministerial associates, and dedicated church servants guiding Tabernacle today.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <span>View leadership roster</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
