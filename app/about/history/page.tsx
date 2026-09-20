import { siteConfig } from "@/site.config";

export default function HistoryPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Our Heritage
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-4xl text-church-navy">
          History of Tabernacle Community Baptist Church
        </h1>
      </div>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-800 text-base leading-relaxed">
        <p className="bg-amber-50 border-l-4 border-church-gold p-4 text-xs font-semibold text-amber-900 rounded">
          Note: Specific historical dates, founding pastor details, and anniversary milestones are marked [CONFIRM] until verified by church leadership archives.
        </p>

        <p>
          Tabernacle Community Baptist Church has stood as a beacon of faith, hope, and Christian service in the city of Milwaukee, Wisconsin. Rooted in the Black Baptist tradition, TCBC has maintained a steadfast commitment to preaching the uncompromising Word of God, nurturing spiritual transformation, and providing community support.
        </p>

        <h2 className="font-serif font-bold text-2xl text-church-navy">
          A Legacy of Preaching, Teaching, and Healing
        </h2>
        <p>
          Guided by Matthew 4:23 — &ldquo;Jesus went throughout Galilee, teaching in their synagogues, proclaiming the good news of the kingdom, and healing every disease and sickness among the people&rdquo; — our church family has ministered to generations of believers and neighbors on Medford Avenue.
        </p>

        <h2 className="font-serif font-bold text-2xl text-church-navy">
          Community Impact & Christian Education
        </h2>
        <p>
          Beyond weekly worship services, TCBC has extended its ministry through Christian education, early childhood care, and pastoral counseling. Today, under the leadership of {siteConfig.pastorTitle} {siteConfig.pastorName}, Tabernacle Community Baptist Church continues to empower and transform lives through the Word of God.
        </p>
      </div>
    </div>
  );
}
