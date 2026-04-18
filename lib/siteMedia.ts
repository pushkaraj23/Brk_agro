/**
 * Shared video and image URLs across the site.
 * Swap `SITE_VIDEOS` entries for files in `/public/media/*.mp4` when you have on-brand assets.
 */

export const SITE_VIDEOS = {
  /** Facility / line footage — Infrastructure hero, home infra brief, Quality lab panel */
  facilityProcessingMp4:
    "https://www.pexels.com/download/video/13422070/",
} as const;

/**
 * Quality page pillar cards — lab, analytics, inspection, operations, reporting, sustainability.
 * Unsplash (food / industry / data), aligned with pillar order in QualityAssuranceSection.
 */
export const QUALITY_PILLAR_IMAGES = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=75",
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=75",
] as const;

/** Poster for the Quality lab video panel (before / while video loads). */
export const QUALITY_LAB_VIDEO_POSTER =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80";
