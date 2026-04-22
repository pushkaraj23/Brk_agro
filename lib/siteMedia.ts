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
  "/photos/Modern food processing facility inspection.png",
  "/photos/Industrial food processing in action.png",
  "/photos/Food processing in a clean factory setting.png",
  "/photos/Fresh frozen vegetables processing area.png",
  "/photos/Fresh peas packing in sterile facility.png",
  "/photos/Sterile industrial food processing facility.png",
] as const;

/** Poster for the Quality lab video panel (before / while video loads). */
export const QUALITY_LAB_VIDEO_POSTER =
  "/photos/Clean industrial food processing plant.png";
