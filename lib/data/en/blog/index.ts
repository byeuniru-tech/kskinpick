import { threadLiftInKorea } from "./thread-lift-in-korea";
import { picoLaserInKorea } from "./pico-laser-in-korea";
import { rejuranInKorea } from "./rejuran-in-korea";
import { potenzaInKorea } from "./potenza-in-korea";
import { ultherapyInKorea } from "./ultherapy-in-korea";
import { botoxInKorea } from "./botox-in-korea";
import { acneScarTreatmentKorea } from "./acne-scar-treatment-korea";

import { juvelookInKorea } from "./juvelook-in-korea";
import { skinBoosterInKorea } from "./skin-booster-in-korea";
import { shurinkInKorea } from "./shurink-in-korea";
import { thermageInKorea } from "./thermage-in-korea";
import { laserToningKorea } from "./laser-toning-korea";

import { rejuranCostKorea } from "./how-much-does-rejuran-cost-in-korea";
import { ultherapyCostKorea } from "./how-much-does-ultherapy-cost-in-korea";
import { potenzaCostKorea } from "./how-much-does-potenza-cost-in-korea";
import { botoxCostKorea } from "./how-much-does-botox-cost-in-korea";

import { koreanSkinClinicPricesGuide } from "./korean-skin-clinic-prices-guide";

import { howToChooseASkinClinicInKorea } from "./how-to-choose-a-skin-clinic-in-korea";
import { areKoreanSkinClinicsSafe } from "./are-korean-skin-clinics-safe";
import { bestAreaForSkinClinicsInSeoul } from "./best-area-for-skin-clinics-in-seoul";

import { gettingSkinTreatmentDuringKoreaTrip } from "./getting-skin-treatment-during-korea-trip";
import { koreanSkinClinicForForeignersGuide } from "./korean-skin-clinic-for-foreigners-guide";

export type { BlogCategory, BlogPost } from "./types";

export const blogPosts = [
  threadLiftInKorea,
  picoLaserInKorea,
  koreanSkinClinicForForeignersGuide,
  gettingSkinTreatmentDuringKoreaTrip,
  bestAreaForSkinClinicsInSeoul,
  areKoreanSkinClinicsSafe,
  howToChooseASkinClinicInKorea,

  koreanSkinClinicPricesGuide,
  botoxCostKorea,
  potenzaCostKorea,
  ultherapyCostKorea,
  rejuranCostKorea,

  laserToningKorea,
  thermageInKorea,
  shurinkInKorea,
  skinBoosterInKorea,
  juvelookInKorea,

  rejuranInKorea,
  potenzaInKorea,
  ultherapyInKorea,
  botoxInKorea,
  acneScarTreatmentKorea,
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const featuredBlogPosts = blogPosts.slice(0, 6);