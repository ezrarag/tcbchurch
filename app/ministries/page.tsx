import { getPublishedMinistries } from "@/lib/firebase/firestore";
import Link from "next/link";
import { BookOpen, HeartHandshake, Users, ArrowRight } from "lucide-react";

export default async function MinistriesPage() {
  const ministries = await getPublishedMinistries();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Programs & Outreach
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Ministries at TCBC
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
          Equipping believers, encouraging families, and serving our neighborhood with Christ&apos;s love.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ministries.map((min) => (
          <div key={min.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-church-navy text-church-gold flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="font-serif font-bold text-xl text-church-navy">
                {min.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {min.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href={`/ministries/${min.slug || min.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-church-navy hover:text-church-gold"
              >
                <span>Read details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
