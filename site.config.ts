export interface ServiceTime {
  label: string;
  day: string;
  time: string;
  note?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  selfDescription: string;
  scriptureReference: string;
  pastorName: string;
  pastorTitle: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    formatted: string;
    mapUrl: string;
  };
  phone: string;
  phoneRaw: string;
  callInLine: string;
  callInLineRaw: string;
  callInAccessCode: string;
  email: string;
  socials: {
    facebook?: string;
    youtube?: string;
  };
  serviceTimes: ServiceTime[];
  giving: {
    provider: "external-link" | "zeffy" | "custom";
    memberUrl: string;
    nonMemberUrl: string;
    textToGive: string;
    mailingAddress: string;
    note: string;
    funds: string[];
  };
  nav: {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
  }[];
  featureFlags: {
    enableDevMode: boolean;
    enableLivestreamEmbed: boolean;
    enableOnlineGiving: boolean;
    enableMemberForms: boolean;
  };
}

export const siteConfig: SiteConfig = {
  name: "Tabernacle Community Baptist Church",
  shortName: "TCBC",
  tagline: "Empowering and Transforming Lives Through the Word of God",
  selfDescription: "a preaching, teaching, healing community of faith [CONFIRM]",
  scriptureReference: "Matthew 4:23",
  pastorName: "Donna Childs",
  pastorTitle: "Reverend Dr.",
  address: {
    street: "2500 W Medford Ave",
    city: "Milwaukee",
    state: "WI",
    zip: "53206",
    formatted: "2500 W Medford Ave, Milwaukee, WI 53206 [CONFIRM]",
    mapUrl: "https://maps.google.com/?q=2500+W+Medford+Ave,+Milwaukee,+WI+53206",
  },
  phone: "(414) 562-1129 [CONFIRM]",
  phoneRaw: "4145621129",
  callInLine: "1-669-275-1164",
  callInLineRaw: "16692751164",
  callInAccessCode: "No access code required",
  email: "office@tcb-church.com",
  socials: {
    facebook: "https://www.facebook.com/tcbchurchmke",
    youtube: "https://www.youtube.com/@tcbchurchmke",
  },
  serviceTimes: [
    {
      label: "Sunday Worship Service",
      day: "Sunday",
      time: "10:00 AM",
      note: "In-Person & Facebook Live",
    },
    {
      label: "TIPS for Growth",
      day: "Tuesday",
      time: "6:30 PM",
      note: "Interactive Bible Study",
    },
    {
      label: "Daily Morning Devotionals",
      day: "Monday – Saturday",
      time: "7:00 AM",
      note: "Phone Line: 1-669-275-1164",
    },
    {
      label: "Thursday Prayer Call",
      day: "Thursday",
      time: "11:00 AM",
      note: "Phone Line: 1-669-275-1164",
    },
    {
      label: "Sunday School [CONFIRM]",
      day: "Sunday",
      time: "9:00 AM",
      note: "All Ages Welcome",
    },
    {
      label: "Wednesday Bible Study [CONFIRM]",
      day: "Wednesday",
      time: "12:00 PM & 6:00 PM",
      note: "Midweek Refresh",
    },
  ],
  giving: {
    provider: "external-link",
    memberUrl: "https://secure.accessacs.com/access/memberlogin.aspx?sn=158603",
    nonMemberUrl: "https://secure.accessacs.com/access/nonmemberlogin.aspx?sn=158603",
    textToGive: "Text TCBC to 73256",
    mailingAddress: "Tabernacle Community Baptist Church, Attn: Finance, 2500 W Medford Ave, Milwaukee, WI 53206",
    note: "All gifts support TCBC ministries, community outreach, and Christian education.",
    funds: ["General Tithes & Offerings", "Building & Property Maintenance", "Christian School & Youth", "Community Outreach & Counseling"],
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Story & History", href: "/about/history" },
        { label: "What We Believe", href: "/about/beliefs" },
        { label: "Pastoral Leadership", href: "/about/leadership" },
      ],
    },
    { label: "Plan a Visit", href: "/plan-a-visit" },
    { label: "Services & Times", href: "/services" },
    { label: "Watch Online", href: "/watch" },
    { label: "Ministries", href: "/ministries" },
    { label: "Announcements", href: "/announcements" },
    { label: "Give", href: "/give" },
    { label: "Prayer Request", href: "/prayer" },
    { label: "Contact", href: "/contact" },
  ],
  featureFlags: {
    enableDevMode: true,
    enableLivestreamEmbed: true,
    enableOnlineGiving: true,
    enableMemberForms: true,
  },
};
