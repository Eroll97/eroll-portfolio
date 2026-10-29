// Shared by the Pricing page and assistant to keep published facts consistent.
export const pricingData = [
  {
    id: "wordpress",
    name: "WordPress",
    subtitle:
      "Business websites, service sites and blogs — fast, SEO-ready and easy to manage.",
    icon: "W",
    plans: [
      {
        name: "Starter",
        description:
          "Perfect for small businesses that need a clean, professional online presence.",
        price: "$150",
        priceType: "ONE-TIME",
        tag: "Up to 5 pages",
        features: [
          "Home, About, Services, Contact + 1 page",
          "Mobile-responsive design",
          "Contact form with email notifications",
          "Basic on-page SEO setup",
          "Google Maps & social links",
          "Speed-optimized setup",
        ],
        delivery: "5–7 DAYS DELIVERY",
      },
      {
        name: "Business",
        description:
          "The complete package for service businesses — like the sites in my portfolio.",
        price: "$300",
        priceType: "ONE-TIME",
        tag: "Up to 10 pages",
        features: [
          "Custom design (Elementor / custom theme)",
          "Service pages + blog setup",
          "Lead capture forms & pop-ups",
          "Speed & Core Web Vitals optimization",
          "On-page SEO for every page",
          "WhatsApp / live chat integration",
          "Google Analytics & Search Console",
        ],
        delivery: "7–14 DAYS DELIVERY",
        popular: true,
      },
      {
        name: "Premium / WooCommerce",
        description:
          "Large business sites or full online stores with WooCommerce.",
        price: "$600",
        priceType: "STARTING AT",
        tag: "15+ pages or full store",
        features: [
          "Everything in Business",
          "WooCommerce store setup",
          "Up to 50 products added",
          "Payment gateway & shipping setup",
          "Advanced speed optimization",
          "Admin training video",
          "30 days post-launch support",
        ],
        delivery: "2–3 WEEKS DELIVERY",
      },
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    subtitle:
      "Conversion-focused Shopify stores — set up properly and ready to sell from day one.",
    icon: "S",
    plans: [
      {
        name: "Basic Store",
        description:
          "A clean store on a free theme — ideal for launching your first products.",
        price: "$250",
        priceType: "ONE-TIME",
        tag: "Core store pages",
        features: [
          "Theme setup & branding",
          "Up to 10 products added",
          "Home, About, Contact & policy pages",
          "Payment & shipping configuration",
          "Basic navigation & collections",
          "Mobile-ready checkout",
        ],
        delivery: "4–6 DAYS DELIVERY",
      },
      {
        name: "Standard Store",
        description:
          "Customized design and everything configured — built for a professional online shopping experience.",
        price: "$450",
        priceType: "ONE-TIME",
        tag: "Full store + custom sections",
        features: [
          "Premium theme customization",
          "Up to 50 products with collections",
          "Custom homepage sections",
          "Essential apps (reviews, upsell, email pop-up)",
          "Discount & shipping rules",
          "Basic email automation (abandoned cart)",
          "On-page SEO for products",
        ],
        delivery: "1–2 WEEKS DELIVERY",
        popular: true,
      },
      {
        name: "Premium Store",
        description:
          "A fully custom, conversion-optimized store for serious brands.",
        price: "$800",
        priceType: "STARTING AT",
        tag: "Fully custom store",
        features: [
          "Everything in Standard",
          "Custom design & landing pages",
          "Up to 200 products migrated/added",
          "Conversion rate optimization",
          "Advanced app stack & integrations",
          "Store training video",
          "30 days post-launch support",
        ],
        delivery: "2–3 WEEKS DELIVERY",
      },
    ],
  },
  {
    id: "gohighlevel",
    name: "GoHighLevel",
    subtitle:
      "Websites, funnels and CRM automation inside GHL — built to capture and convert leads 24/7.",
    icon: "G",
    plans: [
      {
        name: "Funnel Build",
        description:
          "A high-converting funnel for your offer — landing page, form and thank-you flow.",
        price: "$200",
        priceType: "ONE-TIME",
        tag: "1 funnel + 2 pages",
        features: [
          "Landing page + thank-you page",
          "Opt-in form or survey",
          "Email & SMS confirmation automation",
          "Calendar booking step (optional)",
          "Tracking pixels installed",
          "Mobile-optimized design",
        ],
        delivery: "3–5 DAYS DELIVERY",
      },
      {
        name: "Website + CRM Setup",
        description:
          "Full GHL website with pipelines and follow-up automation — my most-requested build.",
        price: "$450",
        priceType: "ONE-TIME",
        tag: "Website + CRM",
        features: [
          "Complete GHL website (up to 8 pages)",
          "Sales pipeline & opportunity stages",
          "Calendar & appointment booking",
          "Automated email/SMS follow-ups",
          "Missed-call text-back automation",
          "Lead forms wired into the CRM",
          "Reporting dashboard setup",
        ],
        delivery: "1–2 WEEKS DELIVERY",
        popular: true,
      },
      {
        name: "Complete Automation Suite",
        description:
          "The full machine: website, funnels, CRM and an AI agent working around the clock.",
        price: "$900",
        priceType: "STARTING AT",
        tag: "Complete system",
        features: [
          "Everything in Website + CRM",
          "Sales funnel(s) for your offers",
          "AI agent for chat & lead qualification",
          "Advanced multi-step workflows",
          "Snapshot of the whole system",
          "Third-party integrations (Zapier etc.)",
          "30 days post-launch support",
        ],
        delivery: "2–4 WEEKS DELIVERY",
      },
    ],
  },
];
