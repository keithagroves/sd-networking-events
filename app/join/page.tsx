import Link from "next/link";

export const metadata = {
  title: "VIP Membership | SD Networking Events",
  description: "Join SD Networking Events as a VIP member and get access to all 24+ events, exclusive perks, and San Diego's best professional network.",
};

export default function JoinPage() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          VIP Membership
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
          Join SD Networking Events
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          Become a VIP Annual Member and unlock priority access, event discounts, and exclusive
          networking opportunities across all 24+ SD Networking Events each year.
        </p>
        <Link
          href="https://sdnetworkingevents.com/join/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-bold text-lg rounded-xl hover:bg-blue-800 transition-colors"
        >
          Become a VIP Member →
        </Link>
      </div>
    </section>
  );
}
