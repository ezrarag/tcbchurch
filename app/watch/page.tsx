import { getPublishedSermons } from "@/lib/firebase/firestore";
import { siteConfig } from "@/site.config";
import Link from "next/link";
import { Video, Phone, BookOpen, Calendar, User, ArrowRight } from "lucide-react";

export default async function WatchPage() {
  const sermons = await getPublishedSermons(10);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Online Ministry & Sermon Archive
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Watch Live & Messages
        </h1>
        <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
          Join our Facebook Live worship services every Sunday at 10:00 AM or listen to archived sermons and prayer calls.
        </p>
      </div>

      {/* Primary Livestream Embed Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl border-b-4 border-church-gold space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700 pb-4">
          <div className="flex items-center gap-2 text-church-gold font-bold text-lg">
            <Video className="w-5 h-5" />
            <span>Facebook Live Worship Stream</span>
          </div>
          {siteConfig.socials.facebook && (
            <a
              href={siteConfig.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-church-gold hover:bg-church-gold-hover text-white font-bold text-xs rounded transition-colors"
            >
              Open Facebook Live Channel
            </a>
          )}
        </div>

        <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center border border-slate-700">
          <div className="text-center p-6 space-y-3">
            <span className="text-xs font-bold text-church-gold uppercase tracking-wider block">
              Sunday Worship — 10:00 AM CST
            </span>
            <h2 className="font-serif font-bold text-2xl text-white">
              Live Stream Broadcast
            </h2>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Broadcasts go live every Sunday at 10:00 AM. Click the button above to join us on Facebook.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Phone className="w-4 h-4 text-church-gold" />
          <span>Call-In Audio Worship: <strong>{siteConfig.callInLine}</strong> (No access code required)</span>
        </div>
      </div>

      {/* Sermon Archives */}
      <div className="space-y-6">
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-church-navy border-b pb-2">
          Sermon Archive
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-church-gold bg-amber-50 px-2.5 py-1 rounded inline-block">
                {sermon.series || "Sunday Message"}
              </span>
              <h3 className="font-serif font-bold text-xl text-church-navy">
                {sermon.title}
              </h3>

              <div className="space-y-1 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-church-gold" />
                  <span>{sermon.speaker}</span>
                </div>
                {sermon.scripture && (
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-church-gold" />
                    <span>Scripture: {sermon.scripture}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-church-gold" />
                  <span>{sermon.date}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href={`/watch/${sermon.slug || sermon.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-church-navy hover:text-church-gold"
                >
                  <span>Watch or listen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
