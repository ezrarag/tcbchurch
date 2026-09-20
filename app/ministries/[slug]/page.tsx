import { getPublishedMinistries } from "@/lib/firebase/firestore";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default async function MinistryDetailPage({ params }: { params: { slug: string } }) {
  const ministries = await getPublishedMinistries();
  const ministry = ministries.find((m) => m.slug === params.slug || m.id === params.slug) || ministries[0];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Link href="/ministries" className="inline-flex items-center gap-1.5 text-sm font-bold text-church-navy hover:text-church-gold">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Ministries</span>
      </Link>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
        <div className="border-b border-slate-200 pb-4 space-y-2">
          <span className="text-xs font-bold text-church-gold uppercase tracking-wider block">Ministry Focus</span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-church-navy">
            {ministry.name}
          </h1>
          <p className="text-base text-slate-600 italic">
            {ministry.summary}
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-4">
          <p>{ministry.description}</p>
        </div>

        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <span>
            For enrollment, volunteer interest, or questions regarding this ministry, please contact the church office or submit a contact inquiry.
          </span>
        </div>
      </div>
    </div>
  );
}
