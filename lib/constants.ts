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
    name: "Sweet Corn",
    shortName: "Sweet Corn",
    slug: "sweet-corn",
    tagline: "Golden & Naturally Sweet",
    description:
      "Premium frozen sweet corn kernels, individually quick frozen to preserve natural sweetness and bright color.",
    longDescription:
      "Our sweet corn is sourced from trusted farming partners and harvested at peak maturity for ideal flavor. Kernels are processed and frozen quickly for export-grade consistency, delivering a free-flowing product with appealing texture and dependable quality across shipments.",
    image: "/products/sweet_corn.png",
    gradient: "from-amber-300 via-yellow-400 to-amber-500",
    bgColor: "#FEF3C7",
    color: "green" as const,
    features: ["Natural Sweetness", "Vibrant Golden Color", "IQF Processed", "Export Grade"],
    specifications: {
      "Product": "IQF Frozen Corn Kernels",
      "Variety": "Super Sweet",
      "Brix": "Min 9",
      "Quality": "Free of Insects, Pest Infestation and Foreign matter",
      "Processing": "Individual Quick Freezing (IQF)",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      "Packaging": "400 G x 20 Pkt = 8 Kg / Carton\n2.5 Kg x 4 Pkt = 10 Kg / Carton\n30kg Bulk PP Bags",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: [
      {
        title: "Ready meals & frozen dinners",
        image: "/photos/Frozen mixed vegetables in packaging display.png",
      },
      {
        title: "Soups, salads & stir-fries",
        image: "/photos/Frozen vegetable processing line in action.png",
      },
      {
        title: "Snack mixes & toppings",
        image: "/photos/Modern food packaging in action.png",
      },
      {
        title: "Retail frozen packs",
        image: "/photos/Industrial food packaging in action.png",
      },
      {
        title: "Food service & HoReCa",
        image: "/photos/Food processing in a clean factory setting.png",
      },
    ] satisfies ProductApplication[],
  },
  {
    name: "Corn on Cobs",
    shortName: "Corn Cobs",
    slug: "corn-on-cobs",
    tagline: "Whole Cobs, Export Ready",
    description:
      "Whole corn cobs processed for excellent taste, texture, and convenience in international retail and food service channels.",
    longDescription:
      "Our corn on cobs are selected for uniformity and sweetness, then processed in a hygienic, quality-controlled facility. Designed for reliable export performance, they are suitable for modern retail, food service, and value-added meal solutions.",
    image: "/products/corn-on-cobs.png",
    gradient: "from-yellow-300 via-amber-400 to-yellow-500",
    bgColor: "#FEF9C3",
    color: "red" as const,
    features: ["Retort Processed", "Vacuum Sealed", "Shelf Stable", "Heat & Eat"],
    specifications: {
      "Product": "Retort Corn on Cobs",
      "Type": "Whole Cobs (2 per pack)",
      "Brix": "Min 9",
      "Quality": "Free of Insects, Pest Infestation and Foreign matter",
      "Processing": "Advanced Retort Technology",
      "Storage": "Ambient (no refrigeration needed)",
      "Shelf Life": "18 months",
      "Packaging": "4 Cobs x 12 Pkt = 48 Cobs / Carton",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: [
      {
        title: "Retail ready-to-eat packs",
        image: "/photos/Frozen mixed vegetables in packaging display.png",
      },
      {
        title: "BBQ & grilling",
        image: "/photos/Industrial food processing in action.png",
      },
      {
        title: "Food service & restaurants",
        image: "/photos/Food processing in a clean factory setting.png",
      },
      {
        title: "Convenience stores",
        image: "/photos/Modern food packaging in action.png",
      },
      {
        title: "Export markets",
        image: "/photos/Industrial warehouse with forklift operation.png",
      },
    ] satisfies ProductApplication[],
  },
  {
    name: "French Fries",
    shortName: "Fries",
    slug: "french-fries",
    tagline: "Crisp-Cut Frozen Fries",
    description: "Uniform frozen fries crafted for quick service, retail, and foodservice use.",
    longDescription:
      "Our frozen french fries are processed from quality raw material with strict sorting and process controls. They are built for consistent cooking performance, appealing color, and dependable texture for high-volume use.",
    image: "/products/french-fries.png",
    gradient: "from-amber-300 via-orange-300 to-yellow-400",
    bgColor: "#FFF4DB",
    color: "red" as const,
    features: ["Uniform Cut", "Fast Cooking", "Consistent Texture", "Foodservice Ready"],
    specifications: {
      Product: "Frozen French Fries",
      Brix: "N/A",
      Quality: "Free of Insects, Pest Infestation and Foreign matter",
      Processing: "Cut, Blanched, Frozen",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      Packaging: "400 G x 20 Pkt = 8 Kg / Carton\n2.5 Kg x 4 Pkt = 10 Kg / Carton\n30kg Bulk PP Bags",
      Certifications: "HACCP, ISO 22000",
    },
    applications: [
      { title: "Quick service restaurants", image: "/photos/Industrial food processing in action.png" },
      { title: "Retail freezer aisles", image: "/photos/Frozen mixed vegetables in packaging display.png" },
      { title: "Institutional kitchens", image: "/photos/Industrial food packaging in action.png" },
      { title: "Export distribution", image: "/photos/Warehouse worker managing boxed cargo.png" },
      { title: "Foodservice supply chains", image: "/photos/Industrial warehouse with forklift operation.png" },
    ] satisfies ProductApplication[],
  },
  {
    name: "Mixed Vegetables",
    shortName: "Mixed Veg",
    slug: "mixed-vegetables",
    tagline: "Balanced Frozen Mix",
    description: "A colorful blend of frozen vegetables for versatile cooking applications.",
    longDescription:
      "Our mixed vegetables are prepared in a clean, controlled facility with careful grading and process checks. The blend offers convenience, visual appeal, and reliable quality for retail packs and food service recipes.",
    image: "/products/mixed_veggies.png",
    gradient: "from-green-300 via-lime-300 to-emerald-400",
    bgColor: "#E9F8E7",
    color: "green" as const,
    features: ["Colorful Blend", "Consistent Grade", "Convenient Use", "Export Quality"],
    specifications: {
      Product: "IQF Mixed Vegetables",
      Brix: "N/A",
      Quality: "Free of Insects, Pest Infestation and Foreign matter",
      Processing: "Cleaned, Graded, IQF",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      Packaging: "400 G x 20 Pkt = 8 Kg / Carton\n2.5 Kg x 4 Pkt = 10 Kg / Carton\n30kg Bulk PP Bags",
      Certifications: "HACCP, ISO 22000",
    },
    applications: [
      { title: "Ready meal production", image: "/photos/Fresh frozen vegetables processing area.png" },
      { title: "Frozen food packs", image: "/photos/Frozen mixed vegetables in packaging display.png" },
      { title: "Foodservice recipes", image: "/photos/Food processing in a clean factory setting.png" },
      { title: "Retail private label", image: "/photos/Modern food packaging in action.png" },
      { title: "Global distribution", image: "/photos/Warehouse worker managing boxed cargo.png" },
    ] satisfies ProductApplication[],
  },
  {
    name: "Green Peas",
    shortName: "Green Peas",
    slug: "green-peas",
    tagline: "Fresh Green IQF Peas",
    description: "Tender green peas frozen quickly to preserve color, shape, and natural taste.",
    longDescription:
      "Our green peas are processed with attention to freshness and consistency at every stage. Controlled handling and freezing help preserve their bright appearance and eating quality for domestic and export markets.",
    image: "/products/green_peas.png",
    gradient: "from-emerald-300 via-green-400 to-lime-400",
    bgColor: "#E6F8EC",
    color: "green" as const,
    features: ["Bright Color", "Tender Texture", "Consistent Sizing", "IQF Processed"],
    specifications: {
      Product: "IQF Green Peas",
      Brix: "8 - 9 Approx",
      Quality: "Free of Insects, Pest Infestation and Foreign matter",
      Processing: "Sorted, Blanched, IQF",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      Packaging: "400 G x 20 Pkt = 8 Kg / Carton\n2.5 Kg x 4 Pkt = 10 Kg / Carton\n30kg Bulk PP Bags",
      Certifications: "HACCP, ISO 22000",
    },
    applications: [
      { title: "Retail frozen packs", image: "/photos/Fresh peas packing in sterile facility.png" },
      { title: "Prepared foods", image: "/photos/Frozen vegetable processing line in action.png" },
      { title: "Food manufacturing", image: "/photos/Industrial food processing machine in factory.png" },
      { title: "Export cartons", image: "/photos/Industrial warehouse with forklift operation.png" },
      { title: "Cold chain logistics", image: "/photos/Cold storage inventory check close-up.png" },
    ] satisfies ProductApplication[],
  },
  {
    name: "Green Beans",
    shortName: "Green Beans",
    slug: "green-beans",
    tagline: "Crisp Frozen Beans",
    description: "Cleaned and frozen green beans with consistent cut and texture.",
    longDescription:
      "Our green beans are selected and processed for shape consistency and product appeal. Hygienic handling and strict quality checks support dependable performance in foodservice and retail.",
    image: "/products/green-beans.png",
    gradient: "from-green-300 via-emerald-300 to-teal-300",
    bgColor: "#EAF8F1",
    color: "green" as const,
    features: ["Uniform Cut", "Crisp Bite", "Clean Processing", "Export Ready"],
    specifications: {
      Product: "Frozen Green Beans",
      Brix: "N/A",
      Quality: "Free of Insects, Pest Infestation and Foreign matter",
      Processing: "Trimmed, Cut, Frozen",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      Packaging: "400 G x 20 Pkt = 8 Kg / Carton\n2.5 Kg x 4 Pkt = 10 Kg / Carton\n30kg Bulk PP Bags",
      Certifications: "HACCP, ISO 22000",
    },
    applications: [
      { title: "Prepared meal kits", image: "/photos/Fresh frozen vegetables processing area.png" },
      { title: "Retail frozen blends", image: "/photos/Frozen mixed vegetables in packaging display.png" },
      { title: "Foodservice kitchens", image: "/photos/Industrial food processing in action.png" },
      { title: "Packhouse distribution", image: "/photos/Industrial food packaging in action.png" },
      { title: "Warehouse supply", image: "/photos/Warehouse worker managing boxed cargo.png" },
    ] satisfies ProductApplication[],
  },
  {
    name: "Diced Carrots",
    shortName: "Diced Carrots",
    slug: "diced-carrots",
    tagline: "Uniform Carrot Dice",
    description: "Neatly diced frozen carrots prepared for fast, consistent use in recipes.",
    longDescription:
      "Our diced carrots are processed to maintain shape consistency and bright appearance. This format helps reduce prep time while ensuring dependable quality for institutional and retail applications.",
    image: "/products/diced-carrots.png",
    gradient: "from-orange-300 via-amber-300 to-yellow-300",
    bgColor: "#FFF1E5",
    color: "red" as const,
    features: ["Uniform Dice", "Bright Color", "Easy Portioning", "Production Efficient"],
    specifications: {
      Product: "Frozen Diced Carrots",
      Brix: "N/A",
      Quality: "Free of Insects, Pest Infestation and Foreign matter",
      Processing: "Washed, Diced, Frozen",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      Packaging: "400 G x 20 Pkt = 8 Kg / Carton\n2.5 Kg x 4 Pkt = 10 Kg / Carton\n30kg Bulk PP Bags",
      Certifications: "HACCP, ISO 22000",
    },
    applications: [
      { title: "Soup and stew bases", image: "/photos/Food processing in a clean factory setting.png" },
      { title: "Frozen meal manufacturing", image: "/photos/Frozen vegetable processing line in action.png" },
      { title: "Retail frozen packs", image: "/photos/Modern food packaging in action.png" },
      { title: "Industrial processing", image: "/photos/Industrial food processing machine in factory.png" },
      { title: "Export cartons", image: "/photos/Industrial warehouse with forklift operation.png" },
    ] satisfies ProductApplication[],
  },
  {
    name: "Cauliflower",
    shortName: "Cauliflower",
    slug: "cauliflower",
    tagline: "Selected Frozen Florets",
    description: "Carefully selected cauliflower processed for consistency and clean presentation.",
    longDescription:
      "Our cauliflower products are processed under hygienic conditions with grading standards that support uniformity. They are suitable for premium frozen packs, meal manufacturing, and foodservice channels.",
    image: "/products/cauliflower.png",
    gradient: "from-stone-200 via-amber-100 to-yellow-100",
    bgColor: "#FFFDF2",
    color: "green" as const,
    features: ["Selected Florets", "Clean Processing", "Uniform Quality", "Cold Chain Ready"],
    specifications: {
      Product: "Frozen Cauliflower",
      Brix: "N/A",
      Quality: "Free of Insects, Pest Infestation and Foreign matter",
      Processing: "Floret Cutting and Freezing",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      Packaging: "400 G x 20 Pkt = 8 Kg / Carton\n2.5 Kg x 4 Pkt = 10 Kg / Carton\n30kg Bulk PP Bags",
      Certifications: "HACCP, ISO 22000",
    },
    applications: [
      { title: "Retail packs", image: "/photos/Frozen mixed vegetables in packaging display.png" },
      { title: "Foodservice prep", image: "/photos/Industrial food processing in action.png" },
      { title: "Meal production lines", image: "/photos/Food processing in a clean factory setting.png" },
      { title: "Cold storage handling", image: "/photos/Cold storage inventory check close-up.png" },
      { title: "Export shipment", image: "/photos/Industrial warehouse with forklift operation.png" },
    ] satisfies ProductApplication[],
  },
  {
    name: "Retort Corn",
    shortName: "Retort Corn",
    slug: "retort-corn",
    tagline: "Shelf-Stable Corn Format",
    description: "Retort-processed corn for ambient storage and reliable distribution.",
    longDescription:
      "Our retort corn line is designed for shelf-stable convenience while maintaining quality and taste. It is ideal for broad distribution where ambient handling and long shelf life are key requirements.",
    image: "/products/retort-corn.png",
    gradient: "from-yellow-300 via-amber-300 to-orange-300",
    bgColor: "#FFF7D6",
    color: "red" as const,
    features: ["Shelf Stable", "Convenient Format", "Heat and Serve", "Retail Friendly"],
    specifications: {
      Product: "Retort Processed Corn",
      Brix: "Min 9",
      Quality: "Free of Insects, Pest Infestation and Foreign matter",
      Processing: "Retort Thermal Processing",
      Storage: "Ambient",
      "Shelf Life": "18 months",
      Packaging: "4 Cobs x 12 Pkt = 48 Cobs / Carton",
      Certifications: "HACCP, ISO 22000",
    },
    applications: [
      { title: "Retail convenience packs", image: "/photos/Strawberry sorting in a modern factory.png" },
      { title: "Ambient distribution", image: "/photos/Warehouse worker managing boxed cargo.png" },
      { title: "Export orders", image: "/photos/Industrial warehouse with forklift operation.png" },
      { title: "Processed food channels", image: "/photos/Industrial food processing machine in factory.png" },
      { title: "Quality inspection flow", image: "/photos/Modern food processing facility inspection.png" },
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
