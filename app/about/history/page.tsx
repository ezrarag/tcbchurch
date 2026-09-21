import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Award, ShieldCheck, ArrowLeft } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export const metadata = {
  title: "100 Years of Grace | History of Tabernacle Community Baptist Church",
  description: "Explore the 100-year history (1926–2026) of Tabernacle Community Baptist Church serving Milwaukee, Wisconsin.",
};

export default function HistoryPage() {
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

        {/* Framed History Container */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] border border-stone-800/80 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8">
          <div className="absolute top-8 right-8 pointer-events-none opacity-10 text-stone-300">
            <ChurchLogoWatermark size={240} />
          </div>

          <div className="relative z-10 border-b border-stone-800 pb-6 space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold px-3 py-1 rounded-full text-xs">
              <Award className="w-3.5 h-3.5" />
              <span>Centennial Celebration (1926–2026)</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light font-sans text-white tracking-tight leading-tight">
              100 Years of Faith & Grace
            </h1>
            <p className="text-base sm:text-lg text-stone-300 font-light">
              The living heritage of Tabernacle Community Baptist Church in Milwaukee.
            </p>
          </div>

          <div className="relative z-10 space-y-6 text-sm sm:text-base text-stone-300 font-light leading-relaxed">
            <div className="bg-[#120e0d] border border-stone-800 p-5 sm:p-6 rounded-2xl space-y-2">
              <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block">
                Centennial Milestone
              </span>
              <p className="text-sm text-stone-200">
                Tabernacle Community Baptist Church is honored to celebrate 100 years of Christ-centered ministry, social witness, and community transformation in Milwaukee, Wisconsin.
              </p>
            </div>

            <p className="text-base sm:text-lg text-stone-200 font-normal leading-relaxed">
              For a century, Tabernacle Community Baptist Church has stood as a pillar of spiritual strength, civic leadership, and gospel service. Rooted in the rich Black Baptist tradition, TCBC has faithfully nurtured generations of families across Milwaukee.
            </p>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                Our Foundation: Matthew 4:23
              </h2>
              <p>
                Guided by Matthew 4:23 — &ldquo;Jesus went throughout Galilee, teaching in their synagogues, proclaiming the good news of the kingdom, and healing every disease and sickness among the people&rdquo; — our congregation lives out the calling to be a preaching, teaching, and healing community of faith.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                Centennial Legacy & Pastoral Vision
              </h2>
              <p>
                Under the pastoral leadership of {siteConfig.pastorTitle} {siteConfig.pastorName}, Tabernacle Community Baptist Church continues to expand its reach. Through Urban Ministries Christian education, over 30 active auxiliary ministries, daily morning prayer lines, and neighborhood food distributions, TCBC remains committed to empowering and transforming lives through the Word of God for generations to come.
              </p>
            </div>

            <div className="bg-[#120e0d] p-6 rounded-2xl border border-stone-800 space-y-3 mt-6">
              <h3 className="text-base font-medium text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Preserving Our Heritage</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-400">
                For member spotlight submissions, historical photographs, or archival inquiries regarding our 100-year history, please contact the Church Office.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors"
                >
                  Contact Church Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
