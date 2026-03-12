export const siteConfig = {
  name: "Elysium Bookings",
  shortName: "Elysium",
  tagline: "Beauty, booked better.",
  description:
    "A mobile-first booking platform for UK solo and micro beauty businesses that want cleaner bookings, calmer admin, and better visibility for tax time.",
  domain: "elysiumbookings.com",
  url: "https://elysiumbookings.com",
  locale: "en-GB",
  ctas: {
    primary: {
      label: "Contact Elysium",
      href: "mailto:support@elysiumbookings.com"
    },
    secondary: {
      label: "View features",
      href: "/features"
    }
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ],
  footerNavigation: {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" }
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  },
  focusSegments: ["Permanent jewellery", "Nails", "Lashes and brows", "Hair"],
  socialLinks: [],
  contact: {
    supportEmail: "support@elysiumbookings.com",
    privacyEmail: "privacy@elysiumbookings.com"
  },
  legal: {
    businessLegalName: "Elysium Bookings",
    registeredAddress: "44 Stokesay Drive, Cheadle, Staffordshire, ST10 1YU, United Kingdom",
    privacyContact: "privacy@elysiumbookings.com",
    effectiveDate: "June 2025"
  },
  pricing: [
    {
      name: "Free",
      price: "\u00A30",
      period: "/month",
      description: "A simple starting point for exploring a leaner beauty booking setup.",
      fit: "Best for early setup and getting familiar with the product direction.",
      featured: false
    },
    {
      name: "Starter",
      price: "\u00A319",
      period: "/month",
      description: "A practical everyday plan for solo beauty businesses that want clearer bookings and admin.",
      fit: "Best for independent businesses running appointments day to day.",
      featured: true
    },
    {
      name: "Pro",
      price: "\u00A335",
      period: "/month",
      description: "For businesses that want stronger admin visibility and export-friendly workflows.",
      fit: "Best for businesses that want deeper visibility and cleaner reporting.",
      featured: false
    }
  ],
  featureTruth: {
    liveNow: [
      {
        title: "Multi-business booking setup",
        description: "The app is built around separate business contexts rather than a single salon profile."
      },
      {
        title: "Client booking flow",
        description: "Clients can book through branded booking pages with availability, confirmation, and manage links."
      },
      {
        title: "Admin booking operations",
        description: "Admins can view bookings, calendar activity, approvals, client records, and core settings."
      },
      {
        title: "Self-serve rescheduling and cancellations",
        description: "Bookings include manage flows with policy-based cut-offs."
      },
      {
        title: "Walk-in support",
        description: "The admin product includes walk-in booking support for same-day operational use."
      },
      {
        title: "Push reminders and review prompts",
        description: "The product includes mobile push notification infrastructure, reminder flows, and review prompts."
      },
      {
        title: "Aftercare per service",
        description: "Services can carry aftercare guidance that is shown in the booking experience."
      },
      {
        title: "Financial summary dashboard",
        description: "Admins can see revenue summaries and service-level breakdowns with UK tax-year support."
      },
      {
        title: "Google Sheets export",
        description: "Admins can connect Google Sheets and sync booking and revenue data into Drive."
      }
    ],
    roadmap: [
      {
        title: "Stripe-connected card hold protection",
        description: "No-show protection is being handled carefully and is shown publicly as a roadmap item rather than a confirmed live feature."
      }
    ]
  },
  homepage: {
    heroTitle: "Booking and admin that fit UK beauty businesses better.",
    heroSummary:
      "Elysium Bookings is a mobile-first platform for solo and micro beauty businesses that want a cleaner client journey, a more practical admin setup, and less friction around day-to-day bookings.",
    audienceTitle: "Built for the beauty businesses generic salon tools often miss",
    differentiators: [
      {
        title: "Made for niche beauty workflows",
        description: "Elysium is especially relevant for permanent jewellery, nails, lashes and brows, and hair."
      },
      {
        title: "Mobile-first where it matters",
        description: "The booking journey and admin experience are designed to work cleanly on phones, not just desktops."
      },
      {
        title: "Practical for sole traders",
        description: "Financial summaries and Google Sheets export help bridge the gap between appointments and tax admin."
      }
    ],
    soleTraderPoints: [
      "Financial summaries built around clear revenue totals, booking counts, and average booking value.",
      "Google Sheets export for accountants, bookkeeping, and tax-season workflows.",
      "A calmer admin view for people who are doing treatments, admin, and finance themselves."
    ],
    faqs: [
      {
        question: "Who is Elysium Bookings built for?",
        answer:
          "It is built primarily for UK solo and micro beauty businesses, with a strong fit for permanent jewellery, nails, lashes and brows, and hair."
      },
      {
        question: "Is Google Sheets export available now?",
        answer:
          "Yes. The current product includes Google Sheets connection and spreadsheet sync so businesses can move booking and revenue data into Google Drive."
      },
      {
        question: "Do you support aftercare content?",
        answer:
          "Yes. Services can include aftercare guidance so clients can see relevant instructions alongside their booking journey."
      },
      {
        question: "Is no-show card hold protection live?",
        answer:
          "It is on the roadmap and is clearly treated that way on this site. It is not presented as a confirmed live feature here."
      }
    ]
  },
  featureSections: [
    {
      title: "Client booking experience",
      description:
        "Branded booking pages, clear availability, appointment confirmation, calendar files, and manage links for changes after booking."
    },
    {
      title: "Admin tools",
      description:
        "Booking views, approvals, calendar management, client records, branding controls, services, availability, and business settings."
    },
    {
      title: "Reminders and communication",
      description:
        "Push-based reminders and follow-up flows reduce reliance on paid SMS-heavy setups."
    },
    {
      title: "Aftercare",
      description:
        "Optional aftercare content can sit alongside a service so the booking experience stays useful after the appointment is made."
    },
    {
      title: "Financial summary",
      description:
        "Server-driven revenue views help sole traders understand totals, booking volume, and average value across useful time periods."
    },
    {
      title: "Google Sheets export",
      description:
        "Booking and revenue data can be synced into Google Sheets for easier accountant and tax workflows."
    }
  ],
  faqs: [
    {
      question: "Does Elysium Bookings use paid SMS reminders as the core communication model?",
      answer:
        "No. The product direction leans into push notifications instead of building the experience around paid SMS dependence."
    },
    {
      question: "Can clients manage their own bookings?",
      answer:
        "Yes. The current product includes manage links and self-serve rescheduling and cancellation flows, subject to each business policy."
    },
    {
      question: "Is it designed for UK businesses?",
      answer:
        "Yes. The product direction and admin reporting are grounded in UK solo and micro beauty business workflows."
    },
    {
      question: "Do you support Google integrations?",
      answer:
        "Yes. Google Sheets export is part of the current product and the legal pages on this site account for Google-connected data flows."
    },
    {
      question: "What is coming next?",
      answer:
        "Stripe-connected card hold and no-show protection is the clearest public roadmap item at the moment."
    }
  ]
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function pageTitle(title?: string) {
  return title ? `${title} — ${siteConfig.name}` : siteConfig.name;
}
