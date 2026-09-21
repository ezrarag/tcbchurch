import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";
import { ArrowRight, Sparkles, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Ministries & Auxiliaries | Tabernacle Community Baptist Church",
  description: "Explore the ~30 active auxiliaries, outreach programs, and spiritual ministries at Tabernacle Community Baptist Church in Milwaukee.",
};

export default function MinistriesPage() {
  const categories = [
    "Spiritual & Education",
    "Care & Outreach",
    "Fellowship & Arts",
    "Service & Operations",
  ];

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
              src="/images/bible-study.jpg"
              alt="Church members gathering for Bible study fellowship"
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

          {/* Header Top Badge */}
          <div className="relative z-10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <ChurchLogo className="w-8 h-8 sm:w-10 sm:h-10" size={40} />
              <div className="flex flex-col text-left">
                <span className="text-xs uppercase tracking-widest text-stone-300 font-light">
                  Tabernacle Community Baptist Church
                </span>
                <span className="text-xs sm:text-sm font-medium text-white">
                  30 Active Auxiliaries & Programs
                </span>
              </div>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Serving Milwaukee</span>
            </div>
          </div>

          {/* Hero Editorial Headline */}
          <div className="relative z-10 space-y-4 max-w-3xl text-left my-auto py-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Spiritual Life & Community Service
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans tracking-tight text-white leading-[1.1]">
              Equipping Believers, <br className="hidden sm:inline" />
              Serving Neighbors
            </h1>
            <p className="text-stone-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl">
              From our senior citizen ministries and youth initiatives to the Food Pantry and Urban Ministries Sunday School, discover where you can grow, worship, and serve.
            </p>
          </div>

          {/* Bottom Quick Stats Strip */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-12 text-xs text-stone-300">
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">~30</span>
              <span className="font-light">Active Ministries</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">4</span>
              <span className="font-light">Ministry Spheres</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">100</span>
              <span className="font-light">Years of Grace</span>
            </div>
          </div>
        </div>

        {/* ============================================================
            MINISTRY CATEGORY SECTIONS (Dark Bento Grids)
            ============================================================ */}
        <div className="space-y-12 sm:space-y-16">
          {categories.map((cat) => {
            const catMinistries = siteConfig.ministries.filter((m) => m.category === cat);
            if (catMinistries.length === 0) return null;

            return (
              <section key={cat} className="space-y-6">
                <div className="border-b border-stone-800 pb-3 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
                      Focus Area
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-light text-white font-sans tracking-tight">
                      {cat}
                    </h2>
                  </div>
                  <span className="text-xs text-stone-400 font-mono">
                    {catMinistries.length} Ministries
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catMinistries.map((min) => (
                    <div
                      key={min.slug}
                      className="rounded-2xl bg-[#181311] p-6 sm:p-7 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl text-left"
                    >
                      <div className="space-y-3">
                        <span className="text-[10px] font-semibold text-amber-400/90 uppercase tracking-widest block">
                          {min.category}
                        </span>
                        <h3 className="text-xl font-light text-white group-hover:text-amber-300 transition-colors leading-snug">
                          {min.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                          {min.summary}
                        </p>
                      </div>

                      <div className="pt-4 mt-6 border-t border-stone-800/80 flex items-center justify-between">
                        <Link
                          href={`/ministries/${min.slug}`}
                          className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>Explore ministry</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-[#1c1614] to-[#120e0d] border border-stone-800 p-8 sm:p-12 text-center space-y-4">
          <HeartHandshake className="w-10 h-10 text-amber-400 mx-auto" />
          <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            Interested in Serving or Joining a Ministry?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light max-w-xl mx-auto">
            Whether your gift is singing, teaching, hospitality, or community outreach, there is a place for your talents in God&apos;s house.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shadow-lg"
            >
              Contact Church Office
            </Link>
            <Link
              href="/plan-a-visit"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
