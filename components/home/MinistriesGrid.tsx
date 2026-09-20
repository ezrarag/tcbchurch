import Link from "next/link";
import { MinistryDoc } from "@/lib/types";
import { BookOpen, HeartHandshake, Users, ArrowRight, Music, ShieldCheck } from "lucide-react";

interface MinistriesGridProps {
  ministries: MinistryDoc[];
}

export function MinistriesGrid({ ministries }: MinistriesGridProps) {
  const icons = [BookOpen, HeartHandshake, Users, Music, ShieldCheck];
  const featured = ministries.slice(0, 6);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-church-gold font-bold text-xs sm:text-sm uppercase tracking-wider block">
            Serving Our Congregation & Community
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-church-maroon">
            Ministries & Community Outreach
          </h2>
          <p className="text-base text-slate-600">
            Over 30 active ministries serving every generation through Urban Ministries Christian education, food distributions, worship arts, senior care, and youth development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((ministry, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={ministry.id} className="bg-church-cream rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-church-maroon text-church-gold flex items-center justify-center font-bold shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-church-maroon">
                    {ministry.name}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {ministry.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80">
                  <Link
                    href={`/ministries/${ministry.slug || ministry.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-church-maroon hover:text-church-gold transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/ministries"
            className="inline-flex items-center gap-2 px-6 py-3 bg-church-maroon hover:bg-rose-900 text-white font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-church-gold min-h-[44px]"
          >
            <span>Explore All ~30 Verified TCBC Ministries</span>
            <ArrowRight className="w-4 h-4 text-church-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}
