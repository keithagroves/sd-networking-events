import Link from "next/link";

export const metadata = {
  title: "Sponsor or Speak | SD Networking Events",
  description: "Sponsor an SD Networking Event or apply to speak at a summit. Reach 150,000+ San Diego professionals.",
};

export default function SponsorPage() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          Sponsorships & Speaking
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
          Sponsor or Speak at SD Networking
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          Put your brand in front of San Diego&apos;s most engaged professional community.
          Sponsorship packages, speaking slots at summits, and showcase tables are available.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://sdnetworkingevents.com/sponsor/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-700 text-white font-bold text-lg rounded-xl hover:bg-violet-800 transition-colors"
          >
            View Sponsorship Options →
          </Link>
          <Link
            href="https://go.oncehub.com/JMHMarketingGroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold text-lg rounded-xl hover:border-violet-600 hover:text-violet-700 transition-colors"
          >
            Book a Zoom with James
          </Link>
        </div>
      </div>
    </section>
  );
}
