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
  "/photos/Fresh peas packing in sterile facility refined.png",
  "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  "/photos/Fresh frozen vegetables processing area.png",
  "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRyb2wlMjByb29tfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
  "/photos/Warehouse worker managing boxed cargo.png",
] as const;

/** Poster for the Quality lab video panel (before / while video loads). */
export const QUALITY_LAB_VIDEO_POSTER =
  "/photos/Clean industrial food processing plant.png";
