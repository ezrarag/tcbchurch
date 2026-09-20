import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Quote, ArrowRight } from "lucide-react";

export function PastorWelcome() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Pastor Placeholder Image/Avatar (Tasteful neutral block per guidelines) */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl bg-church-navy text-church-gold flex flex-col items-center justify-center p-6 text-center shadow-lg border-4 border-church-gold flex-shrink-0">
          <span className="font-serif font-bold text-3xl">TCBC</span>
          <span className="text-xs text-slate-300 mt-2 font-sans">{siteConfig.pastorTitle}</span>
          <span className="font-serif font-semibold text-white text-base leading-tight">{siteConfig.pastorName}</span>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4 text-slate-800 text-left flex-1">
          <div className="flex items-center gap-2 text-church-gold font-semibold text-sm uppercase tracking-wider">
            <Quote className="w-5 h-5 text-church-gold fill-current" />
            <span>Welcome Message from Our Pastor</span>
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-church-navy leading-tight">
            Greetings in the Name of Our Lord Jesus Christ
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Welcome to Tabernacle Community Baptist Church. We are a preaching, teaching, and healing community of faith dedicated to empowering and transforming lives through God&apos;s holy Word. Whether you are seeking a church home, prayer support, or searching for answers about faith, you are welcome here.
          </p>
          <div className="pt-2">
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 font-bold text-church-navy hover:text-church-gold transition-colors text-base group focus:outline-none focus:ring-2 focus:ring-church-gold rounded p-1"
            >
              <span>Learn more about Pastoral Leadership & Clergy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
