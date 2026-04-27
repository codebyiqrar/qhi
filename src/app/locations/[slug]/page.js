import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllLocationSlugs,
  getLocationBySlug,
  LOCATIONS_PATH,
} from "@/constants/locations";
import { getSiteUrl } from "@/constants/site";
import { ComingSoon } from "@/app/specialities/[slug]/page";

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};

  const canonical = `${getSiteUrl()}${LOCATIONS_PATH}/${slug}`;

  return {
    title: `${loc.label} | Quantus Health`,
    description: loc.description,
    alternates: { canonical },
    openGraph: {
      title: `${loc.label} | Quantus Health`,
      description: loc.description,
      url: `${LOCATIONS_PATH}/${slug}`,
      siteName: "Quantus Health",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${loc.label} | Quantus Health`,
      description: loc.description,
    },
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  return (
    <main className="bg-white px-4 py-16 font-dm-sans pt-30">
      {/* <div className="mx-auto max-w-3xl">
        <nav className="text-sm text-[#5f6368]">
          <Link href={LOCATIONS_PATH} className="hover:text-[#10172A]">
            Locations
          </Link>
          <span className="mx-2" aria-hidden>
            /
          </span>
          <span className="text-[#10172A]">{loc.label}</span>
        </nav>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#10172A] md:text-4xl">
          {loc.label}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[#5f6368]">
          {loc.description}
        </p>
        <div className="mt-10">
          <Link
            href={LOCATIONS_PATH}
            className="inline-flex items-center text-[15px] font-medium text-[#2847C5] hover:underline"
          >
            ← All locations
          </Link>
        </div>
      </div> */}
      <ComingSoon />
    </main>
  );
}
