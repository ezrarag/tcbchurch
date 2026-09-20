import { siteConfig } from "@/site.config";
import Link from "next/link";
import { Heart, ExternalLink, Smartphone, Mail, FileText, ShieldCheck } from "lucide-react";

export default function GivePage() {
  const { giving } = siteConfig;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 bg-church-gold/15 text-church-gold rounded-full flex items-center justify-center mx-auto shadow-sm">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Online & Community Giving
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
          Thank you for supporting Tabernacle Community Baptist Church. Your generosity empowers worship, ministry, Christian education, and community outreach.
        </p>
      </div>

      {/* Online Giving Action Buttons (AccessACS Links) */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-church-gold/40 shadow-lg space-y-6">
        <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
          <h2 className="font-serif font-bold text-2xl text-church-navy">Give Online</h2>
          <span className="text-xs font-bold text-church-gold flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" /> Secure via AccessACS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href={giving.memberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-church-navy hover:bg-slate-800 text-white rounded-xl shadow font-bold text-center flex flex-col items-center justify-center gap-2 group transition-colors min-h-[70px]"
          >
            <div className="flex items-center gap-2 text-base">
              <span>Give Online (Members Login)</span>
              <ExternalLink className="w-4 h-4 text-church-gold group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-xs text-slate-300 font-normal">AccessACS Member Portal</span>
          </a>

          <a
            href={giving.nonMemberUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-church-gold hover:bg-church-gold-hover text-white rounded-xl shadow font-bold text-center flex flex-col items-center justify-center gap-2 group transition-colors min-h-[70px]"
          >
            <div className="flex items-center gap-2 text-base">
              <span>First time or Guest? Start here</span>
              <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-xs text-amber-100 font-normal">AccessACS Guest Online Portal</span>
          </a>
        </div>
      </div>

      {/* Text-to-Give Card */}
      <div className="bg-church-navy text-white p-6 sm:p-8 rounded-2xl shadow-md border-l-4 border-church-gold flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-church-gold font-bold text-lg">
            <Smartphone className="w-6 h-6" />
            <span>Text-to-Give</span>
          </div>
          <p className="text-xl sm:text-2xl font-serif font-bold text-white">
            {giving.textToGive}
          </p>
          <p className="text-xs text-slate-300">
            Simply send a text message to give quickly and securely from your mobile phone.
          </p>
        </div>
      </div>

      {/* Fund List & Mail Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-serif font-bold text-xl text-church-navy flex items-center gap-2">
            <Heart className="w-5 h-5 text-church-gold" />
            <span>Designated Ministry Funds</span>
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {giving.funds.map((fund, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-church-gold flex-shrink-0" />
                <span>{fund}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-serif font-bold text-xl text-church-navy flex items-center gap-2">
            <Mail className="w-5 h-5 text-church-gold" />
            <span>Giving by Mail</span>
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Checks or money orders can be made payable to <strong>Tabernacle Community Baptist Church</strong> and mailed to:
          </p>
          <p className="text-xs font-mono bg-slate-50 p-3 rounded border border-slate-200 text-slate-800">
            {giving.mailingAddress}
          </p>
        </div>
      </div>

      {/* Annual Statement Inquiry Line */}
      <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-amber-700 flex-shrink-0" />
          <span>Need a copy of your annual tax giving statement?</span>
        </div>
        <Link href="/contact" className="font-bold underline hover:text-church-navy">
          Contact Church Administrator &rarr;
        </Link>
      </div>
    </div>
  );
}
