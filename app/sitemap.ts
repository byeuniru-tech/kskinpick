import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";
import { clinics } from "@/lib/data/en/clinics";
import { treatments } from "@/lib/data/en/treatments";
import { blogPosts } from "@/lib/data/en/blog";

const baseUrl = siteConfig.url.replace(/\/$/, "");

function absoluteUrl(path: string) {
  if (path === "/") {
    return baseUrl;
  }

  return `${baseUrl}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/clinics"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/treatments"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const clinicRoutes: MetadataRoute.Sitemap = clinics.map((clinic) => ({
    url: absoluteUrl(`/clinics/${clinic.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const treatmentRoutes: MetadataRoute.Sitemap = treatments.map((treatment) => ({
    url: absoluteUrl(`/treatments/${treatment.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...clinicRoutes,
    ...treatmentRoutes,
    ...blogRoutes,
  ];
}