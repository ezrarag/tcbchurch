import { siteConfig } from "@/site.config";
import Link from "next/link";
import { BookOpen, HeartHandshake, Users, ArrowRight, ShieldCheck, Music } from "lucide-react";

export default function MinistriesPage() {
  const categories = [
    "Spiritual & Education",
    "Care & Outreach",
    "Fellowship & Arts",
    "Service & Operations",
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Auxiliaries, Programs & Outreach (~30 Ministries)
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-maroon">
          Ministries at TCBC
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto">
          Equipping believers, serving senior citizens, guiding youth, feeding neighbors, and declaring the Gospel across Milwaukee.
        </p>
      </div>

      {/* Category Sections */}
      {categories.map((cat) => {
        const catMinistries = siteConfig.ministries.filter((m) => m.category === cat);
        if (catMinistries.length === 0) return null;

        return (
          <div key={cat} className="space-y-6">
            <div className="border-b-2 border-church-gold/40 pb-2">
              <h2 className="font-serif font-bold text-2xl text-church-maroon">{cat}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catMinistries.map((min) => (
                <div key={min.slug} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-church-gold uppercase tracking-wider block">
                      {min.category}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-church-maroon">
                      {min.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {min.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      href={`/ministries/${min.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-church-maroon hover:text-church-gold"
                    >
                      <span>Learn more details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
