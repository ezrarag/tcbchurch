import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight, History, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Tabernacle Community Baptist Church
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          About Our Faith Community
        </h1>
        <p className="text-lg text-slate-700 italic max-w-2xl mx-auto font-serif">
          &ldquo;{siteConfig.selfDescription}&rdquo; — {siteConfig.scriptureReference}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/about/history"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3 group"
        >
          <div className="w-12 h-12 bg-church-navy text-church-gold rounded-lg flex items-center justify-center">
            <History className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-xl text-church-navy group-hover:text-church-gold transition-colors">
            History & Heritage
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Discover the legacy and story of Tabernacle Community Baptist Church serving Milwaukee. [CONFIRM]
          </p>
          <div className="flex items-center gap-1.5 font-bold text-xs text-church-navy group-hover:text-church-gold pt-2">
            <span>Read our history</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        <Link
          href="/about/beliefs"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3 group"
        >
          <div className="w-12 h-12 bg-church-navy text-church-gold rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-xl text-church-navy group-hover:text-church-gold transition-colors">
            What We Believe
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our doctrinal foundations, gospel commitment, and Baptist faith tradition.
          </p>
          <div className="flex items-center gap-1.5 font-bold text-xs text-church-navy group-hover:text-church-gold pt-2">
            <span>Explore our beliefs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        <Link
          href="/about/leadership"
          className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-3 group"
        >
          <div className="w-12 h-12 bg-church-navy text-church-gold rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="font-serif font-bold text-xl text-church-navy group-hover:text-church-gold transition-colors">
            Pastoral Leadership
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Meet Reverend Dr. Donna Childs and our associate clergy and servant staff.
          </p>
          <div className="flex items-center gap-1.5 font-bold text-xs text-church-navy group-hover:text-church-gold pt-2">
            <span>View leadership roster</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
