import Link from "next/link";
import { MinistryDoc } from "@/lib/types";
import { BookOpen, HeartHandshake, Users, ArrowRight, Music, ShieldCheck } from "lucide-react";

interface MinistriesGridProps {
  ministries: MinistryDoc[];
}

export function MinistriesGrid({ ministries }: MinistriesGridProps) {
  const icons = [BookOpen, HeartHandshake, Users, Music, ShieldCheck];
  // Ensure we display multiples of 3 so no card is orphaned on desktop
  const count = Math.min(ministries.length >= 6 ? 6 : 3, ministries.length || 3);
  const featured = ministries.slice(0, count);

  return (
    <section className="w-full bg-[#181311] py-16 lg:py-24 px-4 sm:px-6 lg:px-12 text-stone-100">
      <div className="max-w-[1440px] mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm uppercase tracking-widest block">
            Serving Our Congregation & Community
          </span>
          <h2 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Ministries & Community Outreach
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
            Active ministries serving every generation through Christian education, food distributions, worship arts, senior care, and youth development.
          </p>
        </div>

        {/* 3-Column Dark Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((ministry, idx) => {
            const Icon = icons[idx % icons.length];
            const cleanName = ministry.name.replace(/\s*\[CONFIRM\]/gi, "");
            return (
              <div
                key={ministry.id}
                className="bg-[#120e0d] rounded-2xl p-7 sm:p-8 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 text-left"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-bold shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-light text-2xl text-white group-hover:text-amber-300 transition-colors">
                    {cleanName}
                  </h3>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {ministry.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800/80">
                  <Link
                    href={`/ministries/${ministry.slug || ministry.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All CTA */}
        <div className="text-center pt-4">
          <Link
            href="/ministries"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-800/80 hover:bg-stone-700 text-stone-100 hover:text-white font-medium rounded-xl transition-all border border-stone-700 text-xs uppercase tracking-wider shadow-lg"
          >
            <span>Explore All Ministries & Service Areas</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
