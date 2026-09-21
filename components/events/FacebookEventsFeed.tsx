import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { FacebookEventItem } from "@/lib/facebook/types";
import { siteConfig } from "@/site.config";

interface FacebookEventsFeedProps {
  events: FacebookEventItem[];
  title?: string;
  subtitle?: string;
}

export function FacebookEventsFeed({
  events,
  title = "Upcoming Services & Facebook Events",
  subtitle = "Synced in real-time from our Facebook page notices and church calendar.",
}: FacebookEventsFeedProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-800 pb-4 text-left">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
            Calendar & Worship Schedule
          </span>
          <h2 className="text-2xl sm:text-3xl font-light font-sans text-white tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 font-light mt-1">
            {subtitle}
          </p>
        </div>

        <a
          href={siteConfig.socials.facebook ? `${siteConfig.socials.facebook}/events` : "https://www.facebook.com/tcbchurchmke/events"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors self-start sm:self-auto"
        >
          <span>All Facebook Events</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="rounded-2xl overflow-hidden bg-[#181311] border border-stone-800/80 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl"
          >
            {evt.coverPhotoUrl && (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-900">
                <Image
                  src={evt.coverPhotoUrl}
                  alt={evt.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181311] via-transparent to-black/30" />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-300 border border-white/10">
                  {evt.isOnline ? "Online & In-Person" : "In-Person"}
                </div>
              </div>
            )}

            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between text-left">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{evt.formattedDate}</span>
                </div>

                <h3 className="text-xl font-light text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {evt.name}
                </h3>

                <p className="text-xs text-stone-300 font-light line-clamp-3 leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-800/80 space-y-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{evt.formattedTime}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="truncate">{evt.location}</span>
                </div>
              </div>
            </div>

            <div className="px-6 py-3.5 border-t border-stone-800/80 bg-stone-900/40 flex items-center justify-between">
              <a
                href={evt.permalinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
              >
                <span>RSVP on Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <Link
                href="/plan-a-visit"
                className="text-xs text-stone-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Plan Visit</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
