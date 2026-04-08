export const siteConfig = {
  name: "BRK Agro",
  tagline: "Premium Frozen Fruits & Vegetables",
  description:
    "Leading manufacturer and exporter of premium frozen fruits and vegetables, delivering quality from farm to fork.",
  phone: "+91 98765 43210",
  email: "exports@brkagro.com",
  website: "www.brkagro.com",
  address:
    "BRK Agro Processing Unit, Industrial Area, Nashik, Maharashtra, India",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Quality", href: "/quality" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  badge: "Trusted Manufacturer & Exporter",
  headlineTop: "Premium Frozen",
  headlineBottom: "Fruits & Vegetables",
  subheadline: "Frozen with Care, Delivered with Trust",
  description:
    "Export-ready quality from trusted farm sourcing and advanced IQF processing — retaining natural taste, color, and nutrition in every product.",
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
  headline: "Leading Processor & Exporter of Premium Frozen Produce",
  description:
    "BRK Agro is a leading processor and exporter of premium frozen fruits and vegetables from India. With state-of-the-art infrastructure and a commitment to quality, we process fresh farm produce using advanced IQF technology, ensuring that every product retains its natural taste, fresh color, nutritional value, and enjoys a long shelf life.",
  features: [
    {
      title: "Natural Taste",
      description:
        "Advanced freezing preserves the authentic flavor profile of fresh produce.",
    },
    {
      title: "Fresh Color",
      description:
        "Our IQF process locks in the vibrant, natural colors of fruits and vegetables.",
    },
    {
      title: "Nutritional Value",
      description:
        "Quick freezing at optimal temperatures retains essential vitamins and minerals.",
    },
    {
      title: "Long Shelf Life",
      description:
        "Proper processing and cold chain management ensure extended product life.",
    },
  ],
};

export const missionContent = {
  badge: "Our Purpose",
  mission: {
    title: "Our Mission",
    description:
      "To deliver world-class frozen fruits and vegetables that meet the highest international standards of quality, safety, and taste — while building sustainable partnerships with farmers and buyers across the globe.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To become a globally recognized leader in the frozen food industry, known for innovation in processing technology, unwavering commitment to quality, and creating lasting value for our partners, customers, and communities.",
  },
};

export const whyBrkFeatures = [
  {
    title: "Trusted Farm Sourcing",
    description:
      "We work directly with selected farmers to ensure the highest quality raw produce, sourced fresh and processed promptly.",
  },
  {
    title: "Advanced Freezing Technology",
    description:
      "Our facility uses JBT's latest IQF technology for individual quick freezing that preserves taste, texture, and nutrition.",
  },
  {
    title: "Hygienic Processing",
    description:
      "Every step of our production follows strict hygiene protocols in a state-of-the-art, sanitized facility.",
  },
  {
    title: "Export-Ready Packaging",
    description:
      "Products are packaged to meet international export standards, ensuring safe transit and extended shelf life.",
  },
  {
    title: "Strict Sorting & Grading",
    description:
      "Advanced sorting systems ensure only the finest produce enters our processing line, guaranteeing uniform quality.",
  },
  {
    title: "Consistent Quality",
    description:
      "Rigorous quality checks at every stage — from sorting and grading to final packaging — ensure batch-to-batch consistency.",
  },
];

export const products = [
  {
    name: "Frozen Sweet Corn Kernels",
    shortName: "Sweet Corn",
    slug: "sweet-corn",
    tagline: "Golden & Naturally Sweet",
    description:
      "Premium quality sweet corn kernels, individually quick frozen to lock in natural sweetness and vibrant golden color.",
    longDescription:
      "Our Frozen Sweet Corn Kernels are sourced from trusted farming partners across India's prime agricultural belts. Harvested at peak maturity for maximum sweetness, each kernel is individually quick-frozen using JBT's advanced IQF technology. The result is a free-flowing, premium-grade product that retains its natural golden color, sweet flavor, and crisp texture — ready for global markets.",
    image: "/home/sweet_corn.png",
    gradient: "from-amber-300 via-yellow-400 to-amber-500",
    bgColor: "#FEF3C7",
    color: "green" as const,
    features: ["Natural Sweetness", "Vibrant Golden Color", "IQF Processed", "Export Grade"],
    specifications: {
      "Product": "IQF Frozen Sweet Corn Kernels",
      "Variety": "Super Sweet",
      "Processing": "Individual Quick Freezing (IQF)",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      "Packaging": "Bulk bags (10kg, 20kg) & Retail packs (200g, 500g, 1kg)",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: ["Ready meals & frozen dinners", "Soups, salads & stir-fries", "Snack mixes & toppings", "Retail frozen packs", "Food service & HoReCa"],
  },
  {
    name: "Frozen Green Peas",
    shortName: "Green Peas",
    slug: "green-peas",
    tagline: "Farm-Fresh Tenderness",
    description:
      "Tender, bright green peas carefully selected and flash-frozen to preserve their fresh-from-the-pod taste and texture.",
    longDescription:
      "Our Frozen Green Peas are hand-picked at the optimal stage of tenderness and immediately processed to lock in their delicate flavor. Each pea undergoes rigorous sorting and grading before IQF freezing, resulting in a consistently tender, vibrant-green product with a sweet, garden-fresh taste — perfect for both retail and food service applications worldwide.",
    image: "/home/green_peas.png",
    gradient: "from-green-400 via-emerald-500 to-green-600",
    bgColor: "#D1FAE5",
    color: "red" as const,
    features: ["Garden-Fresh Taste", "Bright Green Color", "Uniform Size", "Flash Frozen"],
    specifications: {
      "Product": "IQF Frozen Green Peas",
      "Variety": "Premium Tender",
      "Processing": "Individual Quick Freezing (IQF)",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      "Packaging": "Bulk bags (10kg, 20kg) & Retail packs (200g, 500g, 1kg)",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: ["Curries & gravies", "Rice dishes & pulao", "Mixed vegetable blends", "Soups & stews", "Retail frozen packs"],
  },
  {
    name: "Frozen Cut Beans",
    shortName: "Cut Beans",
    slug: "cut-beans",
    tagline: "Crisp & Nutritious",
    description:
      "Precisely cut and IQF-processed beans that maintain their crisp texture and rich green color after freezing.",
    longDescription:
      "Our Frozen Cut Beans are sourced from premium farm harvests and processed within hours of picking. Precisely cut to uniform lengths and individually quick-frozen, they retain their natural crunch, deep green color, and full nutritional profile. Ideal for mixed vegetable blends, ready meals, and direct retail — meeting the strictest international quality standards.",
    image: null,
    gradient: "from-lime-400 via-green-500 to-emerald-600",
    bgColor: "#ECFCCB",
    color: "green" as const,
    features: ["Uniform Cut Size", "Crisp Texture", "Rich Green Color", "No Additives"],
    specifications: {
      "Product": "IQF Frozen Cut Beans",
      "Cut Size": "20–25mm standard (custom available)",
      "Processing": "Individual Quick Freezing (IQF)",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      "Packaging": "Bulk bags (10kg, 20kg) & Retail packs (200g, 500g, 1kg)",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: ["Mixed vegetable blends", "Ready meals & frozen dinners", "Stir-fries & sautés", "Soups & casseroles", "Institutional catering"],
  },
  {
    name: "Frozen Cauliflower",
    shortName: "Cauliflower",
    slug: "cauliflower",
    tagline: "Pure White Florets",
    description:
      "Carefully processed cauliflower florets, frozen at peak freshness to retain their natural white color and mild flavor.",
    longDescription:
      "Our Frozen Cauliflower Florets are hand-selected for uniform size and pristine quality. Each floret is blanched to preserve its natural white color and mild, sweet flavor before being individually quick-frozen. The result is a versatile, ready-to-cook product ideal for international cuisines — from gratins and curries to steamed side dishes.",
    image: null,
    gradient: "from-stone-100 via-gray-200 to-stone-300",
    bgColor: "#F5F5F4",
    color: "red" as const,
    features: ["Hand-Selected Florets", "Natural White Color", "Mild Sweet Flavor", "Ready to Cook"],
    specifications: {
      "Product": "IQF Frozen Cauliflower Florets",
      "Floret Size": "30–50mm (customizable)",
      "Processing": "Blanched & IQF Frozen",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      "Packaging": "Bulk bags (10kg, 20kg) & Retail packs (500g, 1kg)",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: ["Gratins & bakes", "Curries & stir-fries", "Steamed side dishes", "Soup bases", "Retail & food service"],
  },
  {
    name: "Frozen Diced Carrot",
    shortName: "Diced Carrot",
    slug: "diced-carrot",
    tagline: "Vibrant & Uniform",
    description:
      "Uniformly diced carrots, quick-frozen to preserve their sweet flavor, firm texture, and vibrant orange hue.",
    longDescription:
      "Our Frozen Diced Carrots are sourced from select farms known for producing naturally sweet, deep-orange varieties. Precision-diced to uniform dimensions and immediately IQF-processed, they retain their firm bite, bright color, and nutritional richness. A versatile ingredient for mixed vegetable packs, ready meals, soups, and institutional catering worldwide.",
    image: null,
    gradient: "from-orange-300 via-orange-400 to-amber-500",
    bgColor: "#FED7AA",
    color: "green" as const,
    features: ["Precision Diced", "Bright Orange Color", "Sweet Flavor", "Nutrient Rich"],
    specifications: {
      "Product": "IQF Frozen Diced Carrots",
      "Dice Size": "10×10mm standard (custom available)",
      "Processing": "Individual Quick Freezing (IQF)",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "24 months",
      "Packaging": "Bulk bags (10kg, 20kg) & Retail packs (200g, 500g, 1kg)",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: ["Mixed vegetable blends", "Soups & broths", "Fried rice & noodles", "Baby food preparations", "Institutional catering"],
  },
  {
    name: "Vacuum Packed Corn on Cobs",
    shortName: "Corn on Cobs",
    slug: "corn-on-cobs",
    tagline: "Retort-Processed Freshness",
    description:
      "Whole corn on the cob, vacuum packed using advanced retort technology for superior freshness and shelf stability.",
    longDescription:
      "Our Vacuum Packed Corn on Cobs are processed using state-of-the-art retort technology, ensuring exceptional shelf stability without compromising on taste or nutrition. Each cob is carefully selected for size and sweetness, then vacuum-sealed and retort-processed — making them shelf-stable, convenient, and ready to heat-and-eat.",
    image: null,
    gradient: "from-yellow-300 via-amber-400 to-yellow-500",
    bgColor: "#FEF9C3",
    color: "red" as const,
    features: ["Retort Processed", "Vacuum Sealed", "Shelf Stable", "Heat & Eat"],
    specifications: {
      "Product": "Vacuum Packed Corn on Cobs",
      "Type": "Whole Cobs (2 per pack)",
      "Processing": "Advanced Retort Technology",
      "Storage": "Ambient (no refrigeration needed)",
      "Shelf Life": "18 months",
      "Packaging": "Vacuum pouches (2-pack, 4-pack) & Bulk cartons",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: ["Retail ready-to-eat packs", "BBQ & grilling", "Food service & restaurants", "Convenience stores", "Export markets"],
  },
  {
    name: "Frozen French Fries",
    shortName: "French Fries",
    slug: "french-fries",
    tagline: "Crispy Every Time",
    description:
      "Perfectly cut and par-fried premium french fries, flash frozen for crispy results every time — ideal for HoReCa and retail.",
    longDescription:
      "Our Frozen French Fries are crafted from select potato varieties known for their ideal starch-to-moisture ratio. Precision-cut, par-fried in premium vegetable oil, and flash-frozen to lock in that perfect golden crunch. Whether air-fried, deep-fried, or oven-baked, they deliver consistent crispiness and flavor — trusted by restaurants, QSRs, and retail brands worldwide.",
    image: "/home/french-fries.png",
    gradient: "from-amber-200 via-yellow-300 to-amber-400",
    bgColor: "#FEF3C7",
    color: "green" as const,
    features: ["Par-Fried", "Golden Crispy", "Premium Potatoes", "Multi-Cook Ready"],
    specifications: {
      "Product": "Frozen Par-Fried French Fries",
      "Cut": "9mm Straight Cut (Crinkle & Wedge available)",
      "Processing": "Par-Fried & Flash Frozen",
      "Storage Temp": "-18°C or below",
      "Shelf Life": "18 months",
      "Packaging": "Bulk bags (10kg, 15kg) & Retail packs (500g, 1kg, 2.5kg)",
      "Certifications": "HACCP, ISO 22000",
    },
    applications: ["Quick service restaurants (QSR)", "Hotels & restaurants (HoReCa)", "Retail frozen packs", "Street food & snack bars", "Institutional catering"],
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
      "Advanced sorting and grading systems ensure only the finest produce enters our processing line, guaranteeing uniform quality.",
  },
];

export const processSteps = [
  { step: 1, title: "Farm Sourcing", description: "Fresh produce sourced directly from trusted farming partners." },
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

export const enquiryTypes = [
  "Product Enquiry",
  "Distribution / Partnership",
  "Export Enquiry",
  "General Enquiry",
];
