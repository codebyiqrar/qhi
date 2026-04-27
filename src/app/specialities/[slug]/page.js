import Link from "next/link";
import { notFound } from "next/navigation";

import {
	getAllSpecialitySlugs,
	getSpecialityBySlug,
	SPECIALITIES_PATH,
} from "@/constants/specialities";
import { getSiteUrl } from "@/constants/site";
import CardiologySpecialityDetail from "@/components/specialities/CardiologySpecialityDetail";

export function generateStaticParams() {
	return getAllSpecialitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const speciality = getSpecialityBySlug(slug);
	if (!speciality) return {};

	const canonical = `${getSiteUrl()}${SPECIALITIES_PATH}/${slug}`;

	return {
		title: `${speciality.label} | Quantus Health`,
		description: speciality.description,
		alternates: { canonical },
		openGraph: {
			title: `${speciality.label} | Quantus Health`,
			description: speciality.description,
			url: `${SPECIALITIES_PATH}/${slug}`,
			siteName: "Quantus Health",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: `${speciality.label} | Quantus Health`,
			description: speciality.description,
		},
	};
}

export default async function SpecialityDetailPage({ params }) {
	const { slug } = await params;
	const speciality = getSpecialityBySlug(slug);
	if (!speciality) notFound();

	if (slug === "cardiology") {
		return <CardiologySpecialityDetail />;
	}

	return (
		<main className=" bg-white px-4 py-16 font-dm-sans pt-30">
			{/* <div className="mx-auto max-w-3xl">
				<nav className="text-sm text-[#5f6368]">
					<Link href={SPECIALITIES_PATH} className="hover:text-[#10172A]">
						Specialities
					</Link>
					<span className="mx-2" aria-hidden>
						/
					</span>
					<span className="text-[#10172A]">{speciality.label}</span>
				</nav>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-[#10172A] md:text-4xl">
					{speciality.label}
				</h1>
				<p className="mt-4 text-base leading-relaxed text-[#5f6368]">
					{speciality.description}
				</p>
				<div className="mt-10">
					<Link
						href={SPECIALITIES_PATH}
						className="inline-flex items-center text-[15px] font-medium text-[#2847C5] hover:underline"
					>
						← All specialities
					</Link>
				</div>
			</div> */}
			<ComingSoon message="This page is coming soon" />
		</main>
	);
}

export const ComingSoon = ({ message = "This page is coming soon" }) => {
	return (
		<div className=" bg-white  font-dm-sans min-h-52">
			<div className="mx-auto max-w-3xl  text-center">
				<h1 className="text-3xl font-bold tracking-tight text-[#10172A] md:text-4xl">
					{message}
				</h1>
				{/* <p className="text-base leading-relaxed text-[#5f6368]">
					We are working on this page and it will be available soon.
				</p> */}
			</div>
		</div>
	);
};