import { siteConfig } from "@/site.config";
import { User, ShieldCheck } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      <div className="border-b border-slate-200 pb-4 text-center">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Spiritual Leadership & Ministry Staff
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Pastoral Leadership
        </h1>
      </div>

      {/* Senior Pastor Feature Card */}
      <div className="bg-white rounded-2xl p-8 border-2 border-church-gold shadow-lg flex flex-col md:flex-row gap-8 items-center">
        <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-church-navy text-church-gold flex flex-col items-center justify-center p-4 text-center border-4 border-church-gold flex-shrink-0 shadow-md">
          <User className="w-12 h-12 text-church-gold mb-1" />
          <span className="font-serif font-bold text-sm text-white">{siteConfig.pastorTitle}</span>
          <span className="font-serif font-semibold text-xs text-slate-300">{siteConfig.pastorName}</span>
        </div>

        <div className="space-y-4 text-slate-800 text-left flex-1">
          <div>
            <span className="text-xs font-bold text-church-gold uppercase tracking-wider">Senior Pastor</span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-church-navy">
              {siteConfig.pastorTitle} {siteConfig.pastorName}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Reverend Dr. Donna Childs serves as Senior Pastor of Tabernacle Community Baptist Church. Under Pastor Childs&apos; visionary spiritual leadership, TCBC continues its mission of empowering believers, teaching biblical truth, and extending Christ-centered healing throughout Milwaukee.
          </p>
        </div>
      </div>

      {/* Associate Clergy & Servant Staff Placeholders */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
          <h2 className="font-serif font-bold text-2xl text-church-navy">
            Associate Clergy & Servant Staff
          </h2>
          {/* TODO confirm: Roster pending confirmation */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-church-cream p-6 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-500 mx-auto flex items-center justify-center font-bold">
              <ShieldCheck className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="font-serif font-bold text-lg text-church-navy">Associate Clergy</h3>
            <p className="text-xs text-slate-500">Official clergy roster to be updated upon pastoral confirmation.</p>
          </div>

          <div className="bg-church-cream p-6 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-500 mx-auto flex items-center justify-center font-bold">
              <ShieldCheck className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="font-serif font-bold text-lg text-church-navy">Deacon & Ministry Board</h3>
            <p className="text-xs text-slate-500">Deacon and trustee board serving the church body.</p>
          </div>

          <div className="bg-church-cream p-6 rounded-xl border border-slate-200 text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-slate-200 text-slate-500 mx-auto flex items-center justify-center font-bold">
              <ShieldCheck className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="font-serif font-bold text-lg text-church-navy">Church Administration</h3>
            <p className="text-xs text-slate-500">Administrative team and office ministry staff.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
