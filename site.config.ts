export interface ServiceTime {
  label: string;
  day: string;
  time: string;
  note?: string;
}

export interface MinistryItem {
  name: string;
  slug: string;
  category: "Spiritual & Education" | "Care & Outreach" | "Fellowship & Arts" | "Service & Operations";
  summary: string;
  description: string;
  order: number;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  selfDescription: string;
  scriptureReference: string;
  pastorName: string;
  pastorTitle: string;
  centennialTagline: string;
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
  ministries: MinistryItem[];
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
  centennialTagline: "Celebrating 100 Years of Faith, Hope & Service (1926–2026)",
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
      label: "Church School (Sunday School)",
      day: "Sunday",
      time: "9:00 AM",
      note: "All Ages — Urban Ministries Curriculum",
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
      label: "Midweek Bible Study [CONFIRM]",
      day: "Wednesday",
      time: "12:00 PM & 6:00 PM",
      note: "Midweek Refresh",
    },
  ],
  ministries: [
    {
      name: "Church School (Sunday School)",
      slug: "church-school",
      category: "Spiritual & Education",
      summary: "Biblical instruction using the Urban Ministries curriculum for all age groups.",
      description: "Church School meets every Sunday morning at 9:00 AM, grounding children, youth, and adults in the Word of God using rich Urban Ministries study materials.",
      order: 1,
    },
    {
      name: "Evangelism Ministry",
      slug: "evangelism",
      category: "Spiritual & Education",
      summary: "Sharing the Gospel of Jesus Christ across Milwaukee and surrounding communities.",
      description: "Dedicated to personal witness, door-to-door outreach, and community soul-winning.",
      order: 2,
    },
    {
      name: "Christian Education",
      slug: "christian-education",
      category: "Spiritual & Education",
      summary: "Comprehensive spiritual formation, workshops, and teacher training.",
      description: "Developing lifelong disciples through structured Bible studies, leadership training, and theological workshops.",
      order: 3,
    },
    {
      name: "Vacation Bible School (VBS)",
      slug: "vbs",
      category: "Spiritual & Education",
      summary: "Annual summer Bible adventure for children, youth, and families.",
      description: "A week-long summer ministry packed with biblical teaching, music, crafts, and fellowship.",
      order: 4,
    },
    {
      name: "Bereavement & Care Giver Support",
      slug: "bereavement-caregiver",
      category: "Care & Outreach",
      summary: "Compassionate grief support, home visits, and caregiver encouragement.",
      description: "Walking alongside families during times of loss, illness, and bereavement with prayer, comfort, and practical care.",
      order: 5,
    },
    {
      name: "Calling & Caring Ministry",
      slug: "calling-and-caring",
      category: "Care & Outreach",
      summary: "Regular pastoral telephone check-ins for homebound and sick members.",
      description: "Ensuring no member feels isolated by providing regular calls, encouragement, and prayer.",
      order: 6,
    },
    {
      name: "Food Pantry & Clothing Ministry",
      slug: "food-pantry-clothing",
      category: "Care & Outreach",
      summary: "Providing emergency groceries, meals, and clean clothing for neighbors in need.",
      description: "Meeting vital community needs on Medford Avenue through weekly food distributions and seasonal coat drives.",
      order: 7,
    },
    {
      name: "Health & Wellness Ministry",
      slug: "health-and-wellness",
      category: "Care & Outreach",
      summary: "Promoting physical, mental, and emotional health awareness.",
      description: "Offering health screenings, wellness seminars, exercise classes, and blood pressure checks.",
      order: 8,
    },
    {
      name: "Brotherhood Ministry",
      slug: "brotherhood",
      category: "Fellowship & Arts",
      summary: "Men of TCBC united for spiritual growth, mentorship, and service.",
      description: "Building strong Christian men through prayer breakfasts, brotherhood retreats, and community service projects.",
      order: 9,
    },
    {
      name: "Women's / Sisterhood Ministry",
      slug: "womens-sisterhood",
      category: "Fellowship & Arts",
      summary: "Empowering women in faith, fellowship, leadership, and service.",
      description: "Gathering sisters in Christ for prayer, annual women's conferences, and sisterly encouragement.",
      order: 10,
    },
    {
      name: "55 Plus Seniors Ministry",
      slug: "55-plus-seniors",
      category: "Fellowship & Arts",
      summary: "Active fellowship, outings, and spiritual enrichment for senior adults.",
      description: "Honoring our wisdom generation with monthly luncheons, trips, and intergenerational service.",
      order: 11,
    },
    {
      name: "Young Adult Ministry",
      slug: "young-adults",
      category: "Fellowship & Arts",
      summary: "Discipleship, networking, and contemporary fellowship for young adults.",
      description: "Navigating life, career, and faith for adults ages 18–35.",
      order: 12,
    },
    {
      name: "Youth & Children's Ministry",
      slug: "youth-and-children",
      category: "Fellowship & Arts",
      summary: "Nurturing faith, character, and joy in children from toddlers to teens.",
      description: "Engaging youth in Sunday learning, youth choir, retreats, and leadership development.",
      order: 13,
    },
    {
      name: "Nursery Care",
      slug: "nursery",
      category: "Fellowship & Arts",
      summary: "Safe, loving childcare during Sunday worship services.",
      description: "Providing parents peace of mind during worship with trained, caring nursery volunteers.",
      order: 14,
    },
    {
      name: "Music & Worship Arts",
      slug: "music-and-worship-arts",
      category: "Fellowship & Arts",
      summary: "Choirs, praise team, musicians, and liturgical dance expression.",
      description: "Leading the congregation into dynamic, spirit-filled worship through sacred music and creative arts.",
      order: 15,
    },
    {
      name: "Dorcas Circle",
      slug: "dorcas-circle",
      category: "Fellowship & Arts",
      summary: "Dedicated women focused on sewing, mission projects, and benevolence.",
      description: "Following the biblical example of Dorcas (Acts 9:36) in crafting items and ministering to families in need.",
      order: 16,
    },
    {
      name: "Common Ground Community Outreach",
      slug: "common-ground",
      category: "Care & Outreach",
      summary: "Civic engagement, neighborhood improvement, and advocacy.",
      description: "Partnering with community organizations for housing, education, and social justice in Milwaukee.",
      order: 17,
    },
    {
      name: "Hospitality Ministry",
      slug: "hospitality",
      category: "Service & Operations",
      summary: "Welcoming visitors and hosting church repasts and fellowship dinners.",
      description: "Creating a warm, gracious atmosphere for members, guests, and special celebrations.",
      order: 18,
    },
    {
      name: "Ushers, Nurses & Greeters",
      slug: "ushers-nurses-greeters",
      category: "Service & Operations",
      summary: "Sanctuary order, warm door greetings, and medical comfort assistance.",
      description: "Serving the congregation during services to ensure orderly, safe, and reverent worship.",
      order: 19,
    },
    {
      name: "Van & Transportation Ministry",
      slug: "transportation",
      category: "Service & Operations",
      summary: "Providing rides to Sunday worship for members and community residents.",
      description: "Ensuring transportation is available for seniors and members needing rides to church.",
      order: 20,
    },
    {
      name: "Media & Communications",
      slug: "media-communications",
      category: "Service & Operations",
      summary: "Audio/visual engineering, Facebook Live streaming, and website updates.",
      description: "Broadcasting the Gospel beyond our walls through video production, sound engineering, and digital media.",
      order: 21,
    },
    {
      name: "Scholarship Committee",
      slug: "scholarship",
      category: "Spiritual & Education",
      summary: "Financial awards and encouragement for graduating high school & college students.",
      description: "Investing in the higher education of TCBC youth through annual scholarship grants.",
      order: 22,
    },
    {
      name: "Member Spotlight & History",
      slug: "member-spotlight",
      category: "Fellowship & Arts",
      summary: "Celebrating faithful members, history, and centennial testimonies.",
      description: "Highlighting individual stories of faith and dedication across our 100-year history.",
      order: 23,
    },
    {
      name: "Visitors & Guests Reception",
      slug: "visitors-and-guests",
      category: "Service & Operations",
      summary: "Welcoming first-time guests with information and pastoral follow-up.",
      description: "Ensuring every visitor feels valued and supported from their first moment at TCBC.",
      order: 24,
    },
  ],
  giving: {
    provider: "external-link",
    memberUrl: "https://secure.accessacs.com/access/memberlogin.aspx?sn=158603",
    nonMemberUrl: "https://secure.accessacs.com/access/nonmemberlogin.aspx?sn=158603",
    textToGive: "Text TCBC to 73256",
    mailingAddress: "Tabernacle Community Baptist Church, Attn: Finance, 2500 W Medford Ave, Milwaukee, WI 53206",
    note: "All gifts support TCBC ministries, community outreach, and Christian education.",
    funds: ["General Tithes & Offerings", "Building & Property Maintenance", "Urban Youth & Church School", "Food Pantry & Community Outreach"],
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Story & 100-Year History", href: "/about/history" },
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
