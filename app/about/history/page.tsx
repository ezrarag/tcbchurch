import { siteConfig } from "@/site.config";
import { Award, ShieldCheck } from "lucide-react";

export default function HistoryPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <div className="inline-flex items-center gap-1.5 bg-church-gold/20 text-church-gold font-bold px-3 py-1 rounded-full text-xs mb-2">
          <Award className="w-4 h-4 text-church-gold" />
          <span>Centennial Celebration (1926–2026)</span>
        </div>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-maroon">
          100 Years of Faith & Service
        </h1>
        <p className="text-base text-slate-600 font-serif italic pt-1">
          History of Tabernacle Community Baptist Church
        </p>
      </div>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-800 text-base leading-relaxed">
        <div className="bg-amber-50 border-l-4 border-church-gold p-4 text-xs font-semibold text-amber-900 rounded space-y-1">
          <span className="font-bold block">Centennial Milestone (100th Anniversary):</span>
          <p>
            Tabernacle Community Baptist Church is celebrating 100 years of ministry in Milwaukee, Wisconsin. Specific founding charter documents and historical anniversary timelines are preserved in our church archives. {/* TODO confirm exact charter dates */}
          </p>
        </div>

        <p className="text-lg leading-relaxed font-serif">
          For a century, Tabernacle Community Baptist Church has stood as a pillar of spiritual strength, civic leadership, and gospel service in the city of Milwaukee. Rooted in the rich Black Baptist tradition, TCBC has ministered faithfully to generations of families on Medford Avenue.
        </p>

        <h2 className="font-serif font-bold text-2xl text-church-maroon">
          Our Foundation: Matthew 4:23
        </h2>
        <p>
          Guided by Matthew 4:23 — &ldquo;Jesus went throughout Galilee, teaching in their synagogues, proclaiming the good news of the kingdom, and healing every disease and sickness among the people&rdquo; — our congregation has lived out the mandate of being a preaching, teaching, and healing community of faith.
        </p>

        <h2 className="font-serif font-bold text-2xl text-church-maroon">
          Centennial Legacy & Pastoral Leadership
        </h2>
        <p>
          Under the current pastoral leadership of {siteConfig.pastorTitle} {siteConfig.pastorName}, Tabernacle Community Baptist Church continues to expand its reach. Through Urban Ministries Christian education, over 30 active auxiliary ministries, daily morning prayer calls, and food distributions, TCBC remains committed to empowering and transforming lives through the Word of God for the next century.
        </p>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 mt-6">
          <h3 className="font-serif font-bold text-xl text-church-maroon flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-church-gold" />
            <span>Preserving Our Heritage</span>
          </h3>
          <p className="text-xs text-slate-600">
            For member spotlight submissions, historical photos, or archival inquiries regarding our 100-year history, please contact the Church Administrator or Member Spotlight Ministry committee.
          </p>
        </div>
      </div>
    </div>
  );
}
