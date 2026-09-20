import { getPublishedAnnouncements } from "@/lib/firebase/firestore";
import { Bell, Pin, Calendar } from "lucide-react";

export default async function AnnouncementsPage() {
  const announcements = await getPublishedAnnouncements(15);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <span className="text-church-gold font-bold text-xs uppercase tracking-wider block">
          Church Bulletins & News
        </span>
        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-church-navy">
          Announcements
        </h1>
      </div>

      <div className="space-y-6">
        {announcements.map((ann) => (
          <div
            key={ann.id}
            className={`p-6 rounded-xl border shadow-sm space-y-3 ${
              ann.pinned ? "bg-church-navy text-white border-church-gold border-l-4" : "bg-white text-slate-800 border-slate-200"
            }`}
          >
            <div className="flex items-center justify-between">
              {ann.pinned ? (
                <span className="inline-flex items-center gap-1 bg-church-gold/20 text-church-gold text-xs font-bold px-2.5 py-1 rounded">
                  <Pin className="w-3.5 h-3.5" />
                  <span>Pinned Highlight</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-church-gold bg-amber-50 px-2.5 py-1 rounded">
                  <Bell className="w-3.5 h-3.5" />
                  <span>Announcement</span>
                </span>
              )}
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{ann.publishAt?.slice(0, 10)}</span>
              </div>
            </div>

            <h2 className="font-serif font-bold text-2xl">{ann.title}</h2>
            <p className="text-sm leading-relaxed">{ann.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
