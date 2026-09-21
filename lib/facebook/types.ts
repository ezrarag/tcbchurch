export interface FacebookSermonVideo {
  id: string;
  title: string;
  description: string;
  speaker: string;
  scripture?: string;
  date: string; // YYYY-MM-DD or readable
  time?: string;
  series?: string;
  duration?: string;
  videoUrl: string;
  embedUrl: string;
  permalinkUrl: string;
  thumbnailUrl: string;
  liveStatus: "LIVE" | "VOD" | "SCHEDULED";
  viewCount?: number;
}

export interface FacebookEventItem {
  id: string;
  name: string;
  description: string;
  startTime: string; // ISO or readable
  endTime?: string;
  formattedDate: string; // e.g. "Sunday, Oct 5, 2026"
  formattedTime: string; // e.g. "10:00 AM - 11:30 AM CST"
  location: string;
  isOnline: boolean;
  ticketUri?: string;
  permalinkUrl: string;
  coverPhotoUrl?: string;
}

export interface FacebookServiceNotification {
  id: string;
  title: string;
  message: string;
  date: string;
  type: "service" | "event" | "livestream" | "announcement";
  permalinkUrl: string;
  isLive?: boolean;
}
