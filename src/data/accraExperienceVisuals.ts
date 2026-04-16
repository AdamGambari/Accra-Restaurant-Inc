import accraFront from "@/accra-experience/FRONT IMAGE.jpg";
import accraInterior1 from "@/accra-experience/INTERIOR-1.jpg";
import accraInterior2 from "@/accra-experience/INTERIOR-2.jpg";
import accraInterior3 from "@/accra-experience/INTERIOR-3.jpg";
import accraInterior4 from "@/accra-experience/INTERIOR-4.jpg";
import accraInterior5 from "@/accra-experience/INTERIOR-5.jpg";
import accraPhoto032 from "@/accra-experience/PHOTO-2026-04-15-20-41-32.jpg";
import accraPhoto032_2 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 2.jpg";
import accraPhoto032_3 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 3.jpg";
import accraPhoto032_4 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 4.jpg";
import accraPhoto032_5 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 5.jpg";
import accraPhoto032_6 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 6.jpg";
import accraPhoto032_7 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 7.jpg";
import accraPhoto032_8 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 8.jpg";
import accraPhoto032_9 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 9.jpg";
import accraPhoto032_10 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 10.jpg";
import accraPhoto032_11 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 11.jpg";
import accraPhoto032_12 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 12.jpg";
import accraPhoto032_13 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 13.jpg";
import accraPhoto032_14 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 14.jpg";
import accraPhoto032_15 from "@/accra-experience/PHOTO-2026-04-15-20-41-32 15.jpg";
import accraPhoto033 from "@/accra-experience/PHOTO-2026-04-15-20-41-33.jpg";
import accraPhoto033_2 from "@/accra-experience/PHOTO-2026-04-15-20-41-33 2.jpg";
import accraPhoto033_3 from "@/accra-experience/PHOTO-2026-04-15-20-41-33 3.jpg";

export type AccraVisual = { src: string; alt: string };

export const accraExperienceVisuals: AccraVisual[] = [
  { src: accraFront, alt: "Accra Restaurant storefront" },
  { src: accraInterior1, alt: "Accra Restaurant dining area" },
  { src: accraInterior2, alt: "Accra Restaurant interior" },
  { src: accraInterior3, alt: "Accra Restaurant seating" },
  { src: accraInterior4, alt: "Accra Restaurant atmosphere" },
  { src: accraInterior5, alt: "Accra Restaurant interior detail" },
  { src: accraPhoto032, alt: "Accra Restaurant gallery photo 1" },
  { src: accraPhoto032_2, alt: "Accra Restaurant gallery photo 2" },
  { src: accraPhoto032_3, alt: "Accra Restaurant gallery photo 3" },
  { src: accraPhoto032_4, alt: "Accra Restaurant gallery photo 4" },
  { src: accraPhoto032_5, alt: "Accra Restaurant gallery photo 5" },
  { src: accraPhoto032_6, alt: "Accra Restaurant gallery photo 6" },
  { src: accraPhoto032_7, alt: "Accra Restaurant gallery photo 7" },
  { src: accraPhoto032_8, alt: "Accra Restaurant gallery photo 8" },
  { src: accraPhoto032_9, alt: "Accra Restaurant gallery photo 9" },
  { src: accraPhoto032_10, alt: "Accra Restaurant gallery photo 10" },
  { src: accraPhoto032_11, alt: "Accra Restaurant gallery photo 11" },
  { src: accraPhoto032_12, alt: "Accra Restaurant gallery photo 12" },
  { src: accraPhoto032_13, alt: "Accra Restaurant gallery photo 13" },
  { src: accraPhoto032_14, alt: "Accra Restaurant gallery photo 14" },
  { src: accraPhoto032_15, alt: "Accra Restaurant gallery photo 15" },
  { src: accraPhoto033, alt: "Accra Restaurant gallery photo 16" },
  { src: accraPhoto033_2, alt: "Accra Restaurant gallery photo 17" },
  { src: accraPhoto033_3, alt: "Accra Restaurant gallery photo 18" }
];

/** First six images for the home-page “Visuals” teaser; full list on `/visuals`. */
export const accraHomeGalleryPreview = accraExperienceVisuals.slice(0, 6);
