export const siteConfig = {
  name: "Elysium Bookings",
  shortName: "Elysium",
  tagline: "Beauty, booked better.",
  description:
    "A mobile-first booking and admin platform for UK solo and micro beauty businesses that want cleaner bookings, calmer admin, and better visibility at tax time.",
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
      description: "A simple starting point for getting to know the platform.",
      fit: "Best for exploring the product and seeing whether Elysium fits your business.",
      featured: false
    },
    {
      name: "Starter",
      price: "\u00A319",
      period: "/month",
      description: "A practical everyday plan for solo beauty businesses that want cleaner bookings and calmer admin.",
      fit: "Best for independent businesses running appointments day to day.",
      featured: true
    },
    {
      name: "Pro",
      price: "\u00A330",
      period: "/month",
      description: "For businesses that want stronger visibility, smoother switching, and more operational control.",
      fit: "Best for businesses that want deeper reporting and stronger no-show protection.",
      featured: false
    }
  ],
  featureTruth: {
    liveNow: [
      {
        title: "Multi-business booking setup",
        description: "The platform supports separate business contexts rather than forcing everything into a single salon profile."
      },
      {
        title: "Client booking flow",
        description: "Clients can book through polished booking pages with availability, confirmation, and manage links."
      },
      {
        title: "Admin operations",
        description: "Admins can manage bookings, calendars, client records, services, branding, and day-to-day settings."
      },
      {
        title: "Rescheduling and cancellation flows",
        description: "Clients can manage their own bookings within each business policy, reducing back-and-forth admin."
      },
      {
        title: "Walk-in support",
        description: "The admin product includes walk-in booking support for same-day operational use."
      },
      {
        title: "Push reminders and review prompts",
        description: "Reminders and follow-up prompts reduce reliance on paid SMS-heavy setups."
      },
      {
        title: "Aftercare per service",
        description: "Services can include aftercare guidance so clients leave with the right instructions."
      },
      {
        title: "Financial summary dashboard",
        description: "Clear revenue totals, averages, and booking visibility help sole traders stay on top of admin."
      },
      {
        title: "Google Sheets export",
        description: "Booking and revenue data can be synced into Google Sheets for accountant and tax workflows."
      },
      {
        title: "Client import wizard",
        description: "Bring clients across from Fresha or other tools with a preview-first import flow that reduces switching friction."
      },
      {
        title: "Stripe card hold and no-show protection",
        description: "Protect your time with card holds placed 48 hours before appointments and charges only when you confirm a genuine no-show."
      }
    ],
    roadmap: [
      {
        title: "Occasion-based booking",
        description: "Coming soon: occasion-led booking with intake questions and follow-up journeys for more tailored services."
      }
    ]
  },
  homepage: {
    heroTitle: "Mobile-first booking and admin for UK solo and micro beauty businesses.",
    heroSummary:
      "Elysium Bookings helps independent beauty businesses run a polished booking experience, practical admin, and clearer reporting without the clutter of generic salon software.",
    audienceTitle: "Built for the beauty businesses generic booking tools rarely fit properly",
    differentiators: [
      {
        title: "Designed for niche beauty businesses",
        description: "A stronger fit for permanent jewellery, nails, lashes and brows, hair, and other service-led beauty businesses."
      },
      {
        title: "Client import wizard included",
        description: "Bring your client list across with less friction, so switching does not mean starting again from scratch."
      },
      {
        title: "No-show protection that respects your time",
        description: "Use Stripe card holds to protect appointment time and only charge when you confirm a genuine no-show."
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
          "It is built for UK solo and micro beauty businesses, with a particularly strong fit for permanent jewellery, nails, lashes and brows, hair, and similar appointment-led services."
      },
      {
        question: "Can I import my clients from another system?",
        answer:
          "Yes. The live client import wizard helps you bring clients across from Fresha and other tools with a preview-first workflow."
      },
      {
        question: "Is no-show protection available now?",
        answer:
          "Yes. Stripe card hold and no-show protection is live, with holds placed before appointments and charges only applied when a no-show is confirmed."
      },
      {
        question: "What is still coming next?",
        answer:
          "Occasion-based booking is the main feature on the current roadmap and is clearly shown as coming soon."
      }
    ]
  },
  featureSections: [
    {
      title: "Client booking experience",
      description:
        "Branded booking pages, clear availability, confirmation, and self-serve manage links make the client journey feel smooth from the start."
    },
    {
      title: "Admin tools",
      description:
        "Manage bookings, availability, client records, services, settings, and day-to-day operations without fighting through generic salon admin."
    },
    {
      title: "Client import wizard",
      description:
        "Seamlessly import your clients from Fresha or other tools with a preview-first workflow that reduces switching friction."
    },
    {
      title: "No-show protection",
      description:
        "Protect yourself from no-shows by placing holds 48 hours before appointments and charging only when you confirm a no-show."
    },
    {
      title: "Reminders and communication",
      description:
        "Push-based reminders and review prompts help keep communication timely without building the experience around paid SMS."
    },
    {
      title: "Aftercare",
      description:
        "Add aftercare guidance to services so clients can quickly find the right follow-up information after their appointment."
    },
    {
      title: "Financial summary",
      description:
        "Server-driven revenue views help sole traders understand totals, booking volume, and average booking value across useful time periods."
    },
    {
      title: "Google Sheets export",
      description:
        "Sync booking and revenue data into Google Sheets for accountant-friendly reporting and easier tax prep."
    }
  ],
  faqs: [
    {
      question: "Does Elysium Bookings rely on paid SMS reminders?",
      answer:
        "No. Elysium leans into push notifications for reminders and follow-up communication instead of depending on paid SMS as the core model."
    },
    {
      question: "Can clients manage their own bookings?",
      answer:
        "Yes. The live product includes manage links with self-serve rescheduling and cancellation flows, subject to each business policy."
    },
    {
      question: "Is Google Sheets export available now?",
      answer:
        "Yes. Google Sheets export is live and built to make accountant and tax workflows easier for sole traders."
    },
    {
      question: "Is aftercare available now?",
      answer:
        "Yes. Services can include aftercare guidance so clients can view relevant instructions alongside their booking details."
    },
    {
      question: "Can I import my clients into Elysium?",
      answer:
        "Yes. The client import wizard is live and built to reduce switching friction when moving from Fresha or another system."
    },
    {
      question: "Is no-show protection live?",
      answer:
        "Yes. Stripe card hold and no-show protection is live, giving businesses a cleaner way to protect time from missed appointments."
    },
    {
      question: "What is coming next?",
      answer:
        "Occasion-based booking is the current coming-soon feature and remains clearly separated from the live feature set."
    }
  ]
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

export function pageTitle(title?: string) {
  return title ? `${title} - ${siteConfig.name}` : siteConfig.name;
}
