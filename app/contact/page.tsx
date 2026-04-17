import Link from "next/link";

export const metadata = {
  title: "Contact | SD Networking Events",
  description: "Get in touch with SD Networking Events. Book a Zoom call with James Hickey or reach out about events.",
};

export default function ContactPage() {
  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
          Get in Touch
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
          Contact SD Networking Events
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-10">
          Interested in sponsoring, speaking, or just want to learn more?
          Book a call directly with James Hickey.
        </p>
        <Link
          href="https://go.oncehub.com/JMHMarketingGroup"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white font-bold text-lg rounded-xl hover:bg-brand-dark transition-colors"
        >
          Book a Zoom Call with James →
        </Link>
      </div>
    </section>
  );
}
