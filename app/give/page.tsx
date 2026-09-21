import { siteConfig } from "@/site.config";
import Link from "next/link";
import Image from "next/image";
import { Heart, ExternalLink, Smartphone, Mail, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export const metadata = {
  title: "Give Online & Community Stewardship | Tabernacle Community Baptist Church",
  description: "Support the ministries and gospel work of Tabernacle Community Baptist Church through secure online giving, text-to-give, and mail.",
};

export default function GivePage() {
  const { giving } = siteConfig;

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
              alt="Church sanctuary illuminated with sunlight"
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
                  Christian Stewardship & Tithes
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Secure Giving</span>
            </span>
          </div>

          {/* Hero Editorial Headline */}
          <div className="relative z-10 space-y-4 max-w-3xl text-left my-auto py-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Honoring God with Our Resources
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light font-sans tracking-tight text-white leading-[1.1]">
              Faithful Stewardship, <br className="hidden sm:inline" />
              Generous Hearts
            </h1>
            <p className="text-stone-300 text-sm sm:text-lg font-light leading-relaxed max-w-2xl">
              Thank you for partnering in the work of God at Tabernacle. Your tithes and free-will offerings empower Sunday worship, Christian education, senior outreach, and our community food pantry.
            </p>
          </div>

          {/* Bottom Scripture Strip */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-12 text-xs text-stone-300">
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">2 Cor 9:7</span>
              <span className="font-light">• &ldquo;God loves a cheerful giver&rdquo;</span>
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm sm:text-base mr-1.5">AccessACS</span>
              <span className="font-light">• Bank-grade encryption</span>
            </div>
          </div>
        </div>

        {/* ============================================================
            ONLINE GIVING ACTION PORTAL (Bento Grid)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Member Portal */}
          <div className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition-all">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                AccessACS Portal
              </span>
              <h2 className="text-2xl font-light text-white">
                Member Giving Portal
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Log in to your church member profile to manage recurring tithes, view giving statements, and pledge to designated church funds.
              </p>
            </div>

            <a
              href={giving.memberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <span>Give Online (Member Login)</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Guest / Non-Member Portal */}
          <div className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 flex flex-col justify-between space-y-6 hover:border-amber-500/40 transition-all">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                Quick & Guest Giving
              </span>
              <h2 className="text-2xl font-light text-white">
                Guest Online Giving
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                First time giving or visiting online? Give quickly with credit, debit, or bank transfer without creating a member account.
              </p>
            </div>

            <a
              href={giving.nonMemberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/10 shadow-lg flex items-center justify-center gap-2"
            >
              <span>First-Time Guest Giving</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Text-to-Give & Mail Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Text-to-Give */}
          <div className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-light text-white">
                Text-to-Give
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Send a simple text message with your gift amount to give directly from your mobile phone in seconds:
            </p>
            <div className="text-2xl font-mono font-light text-amber-300 bg-[#120e0d] p-4 rounded-xl border border-stone-800 text-center">
              {giving.textToGive}
            </div>
          </div>

          {/* Giving by Mail */}
          <div className="rounded-2xl sm:rounded-[28px] bg-[#181311] p-6 sm:p-8 border border-stone-800 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-light text-white">
                Giving by Mail
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              Checks or money orders can be made payable to <strong>Tabernacle Community Baptist Church</strong> and addressed to:
            </p>
            <div className="text-xs font-mono text-stone-200 bg-[#120e0d] p-4 rounded-xl border border-stone-800 leading-relaxed">
              {giving.mailingAddress}
            </div>
          </div>
        </div>

        {/* Designated Funds Strip */}
        <div className="rounded-2xl bg-[#181311] p-6 sm:p-8 border border-stone-800 space-y-4 text-left">
          <h3 className="text-lg font-light text-white flex items-center gap-2">
            <Heart className="w-4 h-4 text-amber-400" />
            <span>Designated Ministry Funds</span>
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {giving.funds.map((fund, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-[#120e0d] border border-stone-800 text-xs text-stone-300"
              >
                {fund}
              </span>
            ))}
          </div>
        </div>

        {/* Tax Statement Notice */}
        <div className="rounded-2xl bg-[#120e0d] p-5 sm:p-6 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-stone-300 font-light">
              Need a copy of your annual charitable giving tax statement?
            </span>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/10 transition-colors whitespace-nowrap"
          >
            Contact Church Office &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
