import { getPublishedSermons } from "@/lib/firebase/firestore";
import Link from "next/link";
import { ArrowLeft, User, BookOpen, Calendar } from "lucide-react";

export default async function SermonDetailPage({ params }: { params: { slug: string } }) {
  const sermons = await getPublishedSermons(10);
  const sermon = sermons.find((s) => s.slug === params.slug || s.id === params.slug) || sermons[0];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <Link href="/watch" className="inline-flex items-center gap-1.5 text-sm font-bold text-church-navy hover:text-church-gold">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Sermon Archive</span>
      </Link>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-church-gold bg-amber-50 px-3 py-1 rounded inline-block">
            {sermon.series || "Sunday Sermon"}
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-church-navy">
            {sermon.title}
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-church-gold" />
            <span>Speaker: {sermon.speaker}</span>
          </div>
          {sermon.scripture && (
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-church-gold" />
              <span>Scripture: {sermon.scripture}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-church-gold" />
            <span>Date: {sermon.date}</span>
          </div>
        </div>

        <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden flex items-center justify-center">
          <a
            href={sermon.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-church-gold hover:bg-church-gold-hover text-white font-bold rounded-lg shadow"
          >
            Watch Video Stream on Facebook / YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
