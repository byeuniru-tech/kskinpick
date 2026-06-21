import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ClinicDetail from "@/components/clinics/ClinicDetail";
import { clinics } from "@/lib/data/en/clinics";
import { siteConfig } from "@/lib/seo/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function absoluteUrl(path: string) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  if (path.startsWith("http")) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${baseUrl}${path}`;
  }

  return `${baseUrl}/${path}`;
}

function getClinicBySlug(slug: string) {
  return clinics.find((item) => item.slug === slug);
}

function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    return {};
  }

  const title = `${clinic.name} in ${clinic.district}, ${clinic.city}`;
  const description = clinic.shortDescription;
  const pageUrl = `/clinics/${clinic.slug}`;
  const ogImage = absoluteUrl(clinic.coverImage);

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${clinic.name} | ${siteConfig.displayName}`,
      description,
      url: pageUrl,
      siteName: siteConfig.displayName,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${clinic.name} skin clinic in ${clinic.district}, ${clinic.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${clinic.name} | ${siteConfig.displayName}`,
      description,
      images: [ogImage],
    },
  };
}

export function generateStaticParams() {
  return clinics.map((clinic) => ({
    slug: clinic.slug,
  }));
}

export default async function ClinicPage({ params }: Props) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  const clinicUrl = absoluteUrl(`/clinics/${clinic.slug}`);
  const clinicImage = absoluteUrl(clinic.coverImage);

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    description: clinic.shortDescription,
    image: clinicImage,
    url: clinicUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressRegion: clinic.district,
      addressCountry: "KR",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "South Korea",
      },
      {
        "@type": "Audience",
        audienceType: "International patients",
      },
    ],
    medicalSpecialty: "Dermatology",
    availableService: clinic.specialties.map((specialty) => ({
      "@type": "MedicalProcedure",
      name: specialty,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Clinics",
        item: absoluteUrl("/clinics"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: clinic.name,
        item: clinicUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(clinicSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />
      <ClinicDetail clinic={clinic} />
    </>
  );
}