import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Heart, Smartphone, ExternalLink } from "lucide-react";

export function GiveCTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-church-cream border-b border-slate-200">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-md border-2 border-church-gold/30 text-center space-y-6">
        <div className="w-14 h-14 bg-church-gold/10 text-church-gold rounded-full flex items-center justify-center mx-auto">
          <Heart className="w-7 h-7 fill-current" />
        </div>

        <div className="space-y-2 max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-church-navy">
            Support the Ministry & Mission of TCBC
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Your tithes and generous offerings enable us to preach the Gospel, support Christian education, care for families, and serve the Milwaukee community.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={siteConfig.giving.memberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-church-gold hover:bg-church-gold-hover text-white font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-church-navy"
          >
            <span>Give Online (AccessACS)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link
            href="/give"
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-church-navy hover:bg-slate-800 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-church-gold"
          >
            <Smartphone className="w-4 h-4 text-church-gold" />
            <span>Text-to-Give & Mail Options</span>
          </Link>
        </div>

        <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
          Secure giving managed via AccessACS (ACS Technologies). {siteConfig.giving.textToGive}
        </p>
      </div>
    </section>
  );
}
