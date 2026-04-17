import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const events = [
  {
    title: "Business Mixers",
    freq: "12× per year",
    desc: "High-energy in-person mixers for business owners, entrepreneurs, and professionals. Build real relationships, find collaborators, and grow your network.",
    bullets: ["Meet decision-makers & industry leaders", "Guest speakers & live demos", "Premium drinks & vibrant atmosphere"],
    color: "from-blue-600 to-blue-800",
  },
  {
    title: "Summit Events",
    freq: "7 summits in 2026",
    desc: "Deep-dive themed summits covering Finance, Tech, Entrepreneurship, Marketing, Health & more. Half-day format with panels, workshops, and open networking.",
    bullets: ["Finance, Tech, Entrepreneur, Creator & more", "Every 3rd Thursday | 4–8 PM", "Expert panels + open networking"],
    color: "from-brand to-brand-dark",
  },
  {
    title: "Business Showcases",
    freq: "4× per year",
    desc: "Expo-style events where businesses display their products and services to a room full of engaged buyers, investors, and collaborators.",
    bullets: ["Table booths for direct exposure", "Generate leads & close deals", "San Diego's top entrepreneurs"],
    color: "from-violet-600 to-violet-800",
  },
  {
    title: "Bay Cruise",
    freq: "Annual | Jun 25, 2026",
    desc: "Elite networking aboard the Bella Luna Yacht on San Diego Bay. Sunset views of the skyline, complimentary bites, drinks, and unforgettable connections.",
    bullets: ["Bella Luna Yacht, San Diego Bay", "Sunset views & skyline backdrop", "Limited tickets — sell out fast"],
    color: "from-cyan-600 to-cyan-800",
  },
];

const summits = [
  { name: "Finance Summit", date: "Jan 15, 2026" },
  { name: "Technology Summit", date: "Mar 19, 2026" },
  { name: "Entrepreneur Summit", date: "May 21, 2026" },
  { name: "Influencer & Creator Summit", date: "Jun 18, 2026" },
  { name: "Health & Wellness Summit", date: "Jul 16, 2026" },
  { name: "Travel & Leisure Summit", date: "Sep 18, 2026" },
  { name: "Digital Marketing & AI Summit", date: "Nov 19, 2026" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/logo.png`} alt="SD Networking Events" className="mb-8 h-16 w-auto" />
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            Where San Diego<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
              Business Grows
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
            24+ events annually — mixers, showcases, summits & bay cruises — connecting
            over 150,000 professionals across San Diego.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.eventbrite.com/o/sd-networking-events-jmh-marketing-group-2305019979"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-brand/30"
            >
              View Event Calendar →
            </Link>
            <Link
              href="/join"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-all hover:scale-105"
            >
              Become a Member
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-white/10 bg-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-3 gap-4 text-center">
            {[["24+", "Events Annually"], ["150K+", "Professional Network"], ["18+", "Years Experience"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-black text-brand-light">{val}</div>
                <div className="text-xs md:text-sm text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Our Events</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Four formats, one mission — creating the best networking in San Diego.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((e) => (
              <div
                key={e.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`bg-gradient-to-r ${e.color} px-6 py-5 text-white`}>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">{e.freq}</div>
                  <h3 className="text-xl font-black">{e.title}</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{e.desc}</p>
                  <ul className="space-y-1.5">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 font-bold mt-0.5">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="https://www.eventbrite.com/o/sd-networking-events-jmh-marketing-group-2305019979"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-colors"
            >
              Browse All Events on Eventbrite →
            </Link>
          </div>
        </div>
      </section>

      {/* 2026 Summit Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-brand/10 text-brand-dark text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                2026 Summit Series
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Seven Themed Summits.<br />One City.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                Each summit brings together industry leaders for a focused half-day of panels,
                workshops, and high-quality networking. Every 3rd Thursday, 4–8 PM.
              </p>
              <Link
                href="https://www.eventbrite.com/o/sd-networking-events-jmh-marketing-group-2305019979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-colors text-sm"
              >
                Reserve Your Spot →
              </Link>
            </div>
            <div className="space-y-2">
              {summits.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand/30 hover:bg-brand/5 transition-colors group"
                >
                  <span className="font-semibold text-gray-800 text-sm group-hover:text-brand-dark">{s.name}</span>
                  <span className="text-xs font-medium text-gray-500 group-hover:text-brand">{s.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Split */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-black mb-3">Become a VIP Member</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Get access to every event, exclusive member perks, priority registration, and
              deep discounts. Join San Diego&apos;s most connected business community.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl transition-all hover:scale-105 text-sm"
            >
              Join Today →
            </Link>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="text-2xl font-black mb-3">Sponsor or Speak</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Get your brand in front of 150,000+ San Diego professionals. Sponsor an event,
              host a table, or speak at one of our summit events.
            </p>
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all hover:scale-105 text-sm"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
            Founded by James Hickey
          </h2>
          <p className="text-gray-500 leading-relaxed text-lg mb-6">
            SD Networking Events was founded by James Hickey, a digital marketing strategist and
            entrepreneur with 18+ years of experience. From humble monthly mixers to a full calendar
            of 24 annual events, SD Networking has become the connective tissue of San Diego&apos;s
            business community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="px-5 py-2.5 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-brand hover:text-brand-dark transition-colors text-sm"
            >
              Our Story
            </Link>
            <Link
              href="https://go.oncehub.com/JMHMarketingGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-colors text-sm"
            >
              Book a Zoom with James →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
