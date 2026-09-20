export type ContentStatus = "draft" | "published";

export interface BaseDoc {
  id?: string;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
  updatedBy?: string;
}

export interface SiteSettingsDoc {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  serviceTimes: {
    label: string;
    day: string;
    time: string;
    note?: string;
  }[];
  socials: {
    facebook?: string;
    youtube?: string;
  };
  livestreamUrl: string;
  giving: {
    provider: "external-link" | "zeffy" | "custom";
    url: string;
    note: string;
    manualOptions: string[];
    fundList: string[];
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImageUrl?: string;
  };
  updatedAt: string;
  updatedBy: string;
}

export interface AlertDoc extends BaseDoc {
  message: string;
  severity: "info" | "warning" | "urgent";
  startsAt: string;
  expiresAt: string;
}

export interface AnnouncementDoc extends BaseDoc {
  title: string;
  body: string;
  imagePath?: string;
  pinned: boolean;
  publishAt: string;
  expiresAt?: string;
}

export interface EventDoc extends BaseDoc {
  title: string;
  slug: string;
  startAt: string;
  endAt: string;
  recurrence: "none" | "weekly" | "monthly";
  location: string;
  description: string;
  imagePath?: string;
  rsvpEnabled: boolean;
}

export interface SermonDoc extends BaseDoc {
  title: string;
  slug: string;
  speaker: string;
  date: string;
  series?: string;
  scripture?: string;
  videoUrl: string; // YouTube or Facebook
  audioUrl?: string;
  notesPdfPath?: string;
}

export interface MinistryDoc extends BaseDoc {
  name: string;
  slug: string;
  summary: string;
  description: string;
  leader?: string;
  meetingTime?: string;
  contactEmail?: string;
  imagePath?: string;
  order: number;
}

export interface StaffDoc extends BaseDoc {
  name: string;
  role: string;
  bio: string;
  photoPath?: string;
  order: number;
}

export interface PageDoc extends BaseDoc {
  slug: string;
  title: string;
  bodyRichText: string;
}

export interface BulletinDoc extends BaseDoc {
  title: string;
  date: string;
  pdfPath: string;
}

export interface SubmissionDoc {
  id?: string;
  type: "visit" | "contact" | "prayer";
  name: string;
  email?: string;
  phone?: string;
  message: string;
  private: boolean;
  createdAt: string;
  handled: boolean;
  handledAt?: string;
  handledBy?: string;
}

export interface AdminUserDoc {
  uid: string;
  email: string;
  role: "owner" | "editor";
  createdAt: string;
  updatedAt: string;
}
