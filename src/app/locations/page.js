import { ROUTES } from "@/constants/routes";
import { getSiteUrl } from "@/constants/site";
import LocationsSection from "@/components/sections/locations/LocationsSection";

export const metadata = {
  title: "Locations | Quantus Health",
  description:
    "Explore Quantus Health by location — healthcare technology solutions across states and regions.",
  keywords: [
    "Quantus Health locations",
    "Healthcare technology by state",
    "Medical software locations",
    "Regional healthcare solutions",
  ],
  alternates: {
    canonical: `${getSiteUrl()}${ROUTES.LOCATIONS.INDEX}`,
  },
};

export default function LocationsIndexPage() {
  return (
    <main className="font-sans">
      <LocationsSection />
    </main>
  );
}
