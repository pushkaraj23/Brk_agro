export const siteConfig = {
  name: "BRK Agro",
  tagline: "Frozen Corn & Retort Corn — From Farm to Export",
  description:
    "BRK Agro is an India-based manufacturer and exporter of Frozen Corn and Retort Corn — advanced IQF processing, retort technology, hygienic infrastructure, and export-ready packaging for global buyers.",
  phone: "+91 98765 43210",
  email: "exports@brkagro.com",
  website: "www.brkagro.com",
  address:
    "BRK Agro Processing Unit, Industrial Area, Nashik, Maharashtra, India",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why BRK Agro", href: "/why-brk-agro" },
  { label: "Products", href: "/products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  badge: "Trusted Manufacturer & Exporter",
  headlineTop: "Premium Frozen",
  headlineBottom: "Corn Products",
  subheadline: "Frozen with Care, Delivered with Trust",
  description:
    "Export-ready Frozen Corn and Retort Corn from trusted farm sourcing — advanced IQF and retort processing that preserves taste, color, and nutrition.",
  primaryCta: "Explore Products",
  secondaryCta: "Get in Touch",
  stats: [
    { label: "Export Ready" },
    { label: "Farm Fresh Sourcing" },
    { label: "Advanced Freezing" },
    { label: "Quality Assured" },
  ],
};

export const aboutContent = {
  badge: "About BRK Agro",
  headline:
    "Leading Processor & Exporter of Premium Frozen Corn & Retort Corn",
  /** Short line for the About page hero */
  heroIntro:
    "With dedicated IQF and retort lines and a quality-first culture, BRK Agro supplies export-grade Frozen Corn and Retort Corn to distributors, brands, and food service partners worldwide.",
  /** Home “About” teaser */
  briefLead:
    "From trusted Indian farms to global buyers — we specialize in Frozen Corn and Retort Corn using JBT IQF and advanced retort systems that lock in sweetness, color, and food safety at scale.",
  description:
    "BRK Agro is a focused processor and exporter of Frozen Corn and Retort Corn from India. Our Nashik facility combines hygienic handling, JBT IQF freezing for kernels, and retort technology for shelf-stable corn on the cob — so every batch meets consistent export specifications, traceability, and international food safety expectations.",
  features: [
    {
      title: "Natural Taste",
      description:
        "IQF and retort parameters are tuned to preserve the sweet, fresh-eating character of premium sweet corn.",
    },
    {
      title: "Fresh Color",
      description:
        "Rapid freezing and controlled thermal processing help kernels and cobs retain a bright, appealing appearance.",
    },
    {
      title: "Nutritional Value",
      description:
        "Minimal, well-controlled processing helps retain the nutritional appeal buyers expect from quality frozen and retort corn.",
    },
    {
      title: "Long Shelf Life",
      description:
        "Frozen lines stay in deep freeze; retort packs are shelf-stable — both designed for dependable distribution.",
    },
  ],
};

export const missionContent = {
  badge: "Our Purpose",
  mission: {
    title: "Our Mission",
    description:
      "To supply Frozen Corn and Retort Corn that meet rigorous international standards for quality, safety, and consistency — while growing transparent, long-term relationships with farmers and customers worldwide.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To be a globally trusted name in value-added corn for food manufacturing and retail — recognized for dependable supply, disciplined process control, and continuous improvement in IQF and retort processing.",
  },
};

export const whyBrkFeatures = [
  {
    title: "Trusted Farm Sourcing",
    description:
      "We work with selected growers so sweet corn arrives at the plant at the right maturity — ready for IQF or retort processing without delay.",
  },
  {
    title: "Advanced Freezing Technology",
    description:
      "JBT IQF lines freeze kernels individually for free-flowing, export-grade Frozen Corn with reliable texture and appearance.",
  },
  {
    title: "Hygienic Processing",
    description:
      "Corn moves through controlled, sanitized process paths — from intake and cutting to freezing, retort, and packing.",
  },
  {
    title: "Export-Ready Packaging",
    description:
      "Bulk, retail, and vacuum formats are built for international logistics, labeling expectations, and cold chain or ambient needs.",
  },
  {
    title: "Strict Sorting & Grading",
    description:
      "Sorting and grading upstream keep only suitable cobs and kernels in the line — supporting uniform finished product.",
  },
  {
    title: "Consistent Quality",
    description:
      "QC checks from raw material to dispatch help keep specifications stable shipment after shipment.",
  },
];

/** Use case on product detail pages — each entry has a hero image for quick scanning. */
export type ProductApplication = {
  title: string;
  image: string;
};

export const products = [
  {
    name: "Frozen Corn",
    shortName: "Frozen Corn",
    slug: "sweet-corn",
    tagline: "Golden & Naturally Sweet",
    description:
      "Premium quality frozen corn kernels, individually quick frozen to lock in natural sweetness and vibrant golden color.",
    longDescription:
      "Our Frozen Corn is sourced from trusted farming partners across India's prime agricultural belts. Harvested at peak maturity for maximum sweetness, each kernel is individually quick-frozen using JBT's advanced IQF technology. The result is a free-flowing, premium-grade product that retains its natural golden color, sweet flavor, and crisp texture — ready for global markets.",
    image: "/home/sweet_corn.png",
    gradient: "from-amber-300 via-yellow-400 to-amber-500",
    bgColor: "#FEF3C7",
    color: "green" as const,
    features: ["Natural Sweetness", "Vibrant Golden Color", "IQF Processed", "Export Grade"],
    specifications: {
      "Product": "IQF Frozen Corn Kernels",
      "Variety": "Super Sweet",
      "Processing": "Individual Quick Freezing (IQF)",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      "Packaging": "Bulk bags (10kg, 20kg) & Retail packs (200g, 500g, 1kg)",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: [
      {
        title: "Ready meals & frozen dinners",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Soups, salads & stir-fries",
        image:
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Snack mixes & toppings",
        image:
          "https://images.unsplash.com/photo-1566471181032-6eacd4d0ef5d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Retail frozen packs",
        image:
          "https://images.unsplash.com/photo-1604712614926-a3d133a4bde3?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Food service & HoReCa",
        image:
          "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80",
      },
    ] satisfies ProductApplication[],
  },
  {
    name: "Retort Corn",
    shortName: "Retort Corn",
    slug: "corn-on-cobs",
    tagline: "Retort-Processed Freshness",
    description:
      "Whole corn on the cob, vacuum packed using advanced retort technology for superior freshness and shelf stability.",
    longDescription:
      "Our Retort Corn is processed using state-of-the-art retort technology, ensuring exceptional shelf stability without compromising on taste or nutrition. Each cob is carefully selected for size and sweetness, then vacuum-sealed and retort-processed — making them shelf-stable, convenient, and ready to heat-and-eat.",
    image: null,
    gradient: "from-yellow-300 via-amber-400 to-yellow-500",
    bgColor: "#FEF9C3",
    color: "red" as const,
    features: ["Retort Processed", "Vacuum Sealed", "Shelf Stable", "Heat & Eat"],
    specifications: {
      "Product": "Retort Corn on Cobs",
      "Type": "Whole Cobs (2 per pack)",
      "Processing": "Advanced Retort Technology",
      "Storage": "Ambient (no refrigeration needed)",
      "Shelf Life": "18 months",
      "Packaging": "Vacuum pouches (2-pack, 4-pack) & Bulk cartons",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: [
      {
        title: "Retail ready-to-eat packs",
        image:
          "https://images.unsplash.com/photo-1606787366850-de6333d43346?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "BBQ & grilling",
        image:
          "https://images.unsplash.com/photo-1529193591184-1a58e9267659?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Food service & restaurants",
        image:
          "https://images.unsplash.com/photo-1414235077427-387989a7e28c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Convenience stores",
        image:
          "https://images.unsplash.com/photo-1555529909-5b4e45c8c6cc?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Export markets",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd38c64a8?auto=format&fit=crop&w=1200&q=80",
      },
    ] satisfies ProductApplication[],
  },
];

export const infrastructure = [
  {
    title: "JBT's Advanced IQF Technology",
    description:
      "Our facility is equipped with JBT's latest Individual Quick Freezing technology, ensuring each piece is frozen individually for premium quality and free-flowing product.",
  },
  {
    title: "Advanced Retort Technology",
    description:
      "State-of-the-art retort processing for vacuum-packed products, delivering extended shelf life while maintaining natural taste and nutrition.",
  },
  {
    title: "Hygienic Processing Facility",
    description:
      "Our production environment adheres to the highest hygiene standards with controlled access, sanitization protocols, and clean-room areas.",
  },
  {
    title: "Temperature Controlled Storage",
    description:
      "Large-capacity cold storage maintained at optimal temperatures to ensure consistent product quality from processing to dispatch.",
  },
  {
    title: "Export-Ready Packaging",
    description:
      "Multi-format packaging solutions designed for international markets — from bulk packs to retail-ready formats, meeting global compliance.",
  },
  {
    title: "Strict Sorting & Grading",
    description:
      "Advanced sorting and grading systems ensure only suitable sweet corn enters our processing line, supporting uniform finished product.",
  },
];

export const processSteps = [
  { step: 1, title: "Farm Sourcing", description: "Sweet corn sourced directly from trusted farming partners at the right maturity." },
  { step: 2, title: "Sorting & Grading", description: "Rigorous selection to ensure only premium quality raw material." },
  { step: 3, title: "Processing", description: "Cleaned, cut, and prepared in our hygienic facility." },
  { step: 4, title: "Freezing", description: "Individual Quick Freezing using advanced IQF technology." },
  { step: 5, title: "Packaging", description: "Export-standard packaging for quality preservation." },
  { step: 6, title: "Cold Storage & Dispatch", description: "Temperature-controlled storage and timely global dispatch." },
];

export const trustStats = [
  { value: "100%", label: "Export Grade Quality" },
  { value: "24/7", label: "Cold Chain Monitoring" },
  { value: "ISO", label: "Certified Processing" },
  { value: "50+", label: "Global Partners" },
];

export const trustPoints = [
  "International quality certifications and compliance",
  "End-to-end cold chain management and monitoring",
  "Complete batch traceability system",
  "Consistent product specifications across batches",
  "Reliable and timely delivery schedules",
  "Dedicated export documentation and support team",
];

export const contactInfo = {
  companyName: "BRK Agro",
  address: "BRK Agro Processing Unit, Industrial Area, Nashik, Maharashtra, India",
  phone: "+91 98765 43210",
  email: "exports@brkagro.com",
  website: "www.brkagro.com",
};

export const socialLinks = {
  whatsapp: "https://wa.me/919876543210",
  instagram: "#",
  linkedin: "#",
};

export const enquiryTypes = [
  "Product Enquiry",
  "Distribution / Partnership",
  "Export Enquiry",
  "General Enquiry",
];
