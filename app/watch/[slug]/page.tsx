import { getPublishedSermons } from "@/lib/firebase/firestore";
import Link from "next/link";
import { ArrowLeft, User, BookOpen, Calendar, ExternalLink } from "lucide-react";
import { ChurchLogo, ChurchLogoWatermark } from "@/components/ui/ChurchLogo";

export default async function SermonDetailPage({ params }: { params: { slug: string } }) {
  const sermons = await getPublishedSermons(10);
  const sermon = sermons.find((s) => s.slug === params.slug || s.id === params.slug) || sermons[0];

  return (
    <div className="w-full bg-[#221c19] text-stone-100 min-h-screen py-6 sm:py-10 px-3 sm:px-6 lg:px-10">
      <div className="max-w-[1000px] mx-auto space-y-6 text-left">
        <Link
          href="/sermons"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Sermons</span>
        </Link>

        {/* Framed Sermon Card */}
        <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-[#181311] border border-stone-800/80 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="absolute top-6 right-6 pointer-events-none opacity-10 text-stone-300">
            <ChurchLogoWatermark size={180} />
          </div>

          <div className="relative z-10 border-b border-stone-800 pb-6 space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              {sermon.series || "Sunday Worship Message"}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-sans text-white tracking-tight leading-tight">
              {sermon.title}
            </h1>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 text-xs text-stone-300 bg-[#120e0d] p-4 rounded-xl border border-stone-800">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-400" />
              <span>Speaker: {sermon.speaker}</span>
            </div>
            {sermon.scripture && (
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Scripture: {sermon.scripture}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Date: {sermon.date}</span>
            </div>
          </div>

          <div className="relative z-10 aspect-video bg-black/60 rounded-2xl border border-stone-800 overflow-hidden flex items-center justify-center p-6 text-center">
            <a
              href={sermon.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <span>Watch Video Stream</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
