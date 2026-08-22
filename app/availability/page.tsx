import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import AvailabilityCalendar from "./AvailabilityCalendar";
import { getAvailability } from "@/lib/availability";

export const revalidate = 300;

// Calendar data is fetched from Google. Rendering this route on demand keeps a
// temporary upstream API failure from failing the whole Netlify deployment.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Availability | It's Ammar.",
  description: "Ammar's current availability.",
};

export default async function AvailabilityPage() {
  const availability = await getAvailability();

  return (
    <main className="min-h-screen bg-[#03050a] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-3 pb-3 sm:px-6 sm:pb-6 lg:px-8">
        <Navbar />
        <AvailabilityCalendar {...availability} />
      </div>
    </main>
  );
}
