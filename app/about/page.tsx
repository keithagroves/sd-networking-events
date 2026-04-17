import Link from "next/link";

export const metadata = {
  title: "About | SD Networking Events",
  description: "Learn about SD Networking Events and founder James Hickey — San Diego's premier professional networking organization.",
};

export default function AboutPage() {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          About Us
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
          San Diego&apos;s Premier Networking Organization
        </h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            SD Networking Events is San Diego&apos;s premier networking organization, founded by
            James Hickey — a seasoned digital marketing strategist and entrepreneur with over 18
            years of experience.
          </p>
          <p>
            We host 24 events annually, including business mixers, showcases, expos, and
            summits — connecting business owners, entrepreneurs, and startups to foster growth
            and innovation. Our network reaches over 150,000+ professionals across San Diego.
          </p>
          <h2 className="text-2xl font-black text-gray-900 mt-10">Our Mission</h2>
          <p>
            To empower San Diego&apos;s business community by creating dynamic platforms where
            entrepreneurs, business owners, and startups can connect, collaborate, and thrive.
            Through curated events and strategic partnerships, we drive economic growth and
            support local businesses throughout the region.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="https://go.oncehub.com/JMHMarketingGroup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-colors"
          >
            Book a Zoom with James →
          </Link>
        </div>
      </div>
    </section>
  );
}
