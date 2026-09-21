import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowLeft, BookOpen, Heart, Sun, Church } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export const metadata = {
  title: "What We Believe | Tabernacle Community Baptist Church",
  description: "Doctrinal foundations and statement of faith for Tabernacle Community Baptist Church.",
};

export default function BeliefsPage() {
  const beliefs = [
    {
      title: "The Holy Scriptures",
      desc: "We believe the Holy Bible is the inspired, infallible, and authoritative Word of God, serving as our supreme rule for faith, Christian conduct, and everyday living.",
      icon: BookOpen,
    },
    {
      title: "The Triune God",
      desc: "We believe in one eternal God, creator of heaven and earth, existing eternally in three distinct persons: God the Father, God the Son (Jesus Christ), and God the Holy Spirit.",
      icon: Sun,
    },
    {
      title: "Salvation in Jesus Christ",
      desc: "We believe salvation is a free gift of God's sovereign grace through faith in Jesus Christ, who died for our sins, was buried, and rose triumphantly from the grave on the third day.",
      icon: Heart,
    },
    {
      title: "The Church & The Great Commission",
      desc: "We believe the local church is a body of believers united to worship God, nurture one another in love, and carry the Gospel of hope and deliverance throughout Milwaukee and the world.",
      icon: Church,
    },
  ];

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto space-y-6 text-left">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About</span>
        </Link>

        {/* Framed Beliefs Container */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] border border-stone-800/80 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
          <div className="absolute top-8 right-8 pointer-events-none opacity-10 text-stone-300">
            <ChurchLogoWatermark size={240} />
          </div>

          <div className="relative z-10 border-b border-stone-800 pb-6 space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              Doctrinal Statement
            </span>
            <h1 className="text-3xl sm:text-5xl font-light font-sans text-white tracking-tight leading-tight">
              What We Believe
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light">
              Grounded in the Holy Scriptures, centered in the saving grace of Jesus Christ.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#120e0d] p-6 border border-stone-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-light text-white leading-snug">
                      {b.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-10 pt-4 border-t border-stone-800 text-xs text-stone-400 font-light">
            Tagline: &ldquo;{siteConfig.tagline}&rdquo; — {siteConfig.selfDescription} ({siteConfig.scriptureReference}). Full Baptist Articles of Faith available through pastoral study.
          </div>
        </div>
      </div>
    </div>
  );
}
