import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const events = [
  {
    title: "Business Mixers",
    freq: "12× per year",
    img: `${basePath}/events/mixer.webp`,
    desc: "High-energy in-person mixers for business owners, entrepreneurs, and professionals. Build real relationships, find collaborators, and grow your network.",
    bullets: ["Meet decision-makers & industry leaders", "Guest speakers & live demos", "Premium drinks & vibrant atmosphere"],
  },
  {
    title: "Summit Events",
    freq: "7 summits in 2026",
    img: `${basePath}/events/summit.jpg`,
    desc: "Deep-dive themed summits covering Finance, Tech, Entrepreneurship, Marketing, Health & more. Half-day format with panels, workshops, and open networking.",
    bullets: ["Finance, Tech, Entrepreneur, Creator & more", "Every 3rd Thursday | 4–8 PM", "Expert panels + open networking"],
  },
  {
    title: "Business Showcases",
    freq: "4× per year",
    img: `${basePath}/events/showcase.webp`,
    desc: "Expo-style events where businesses display their products and services to a room full of engaged buyers, investors, and collaborators.",
    bullets: ["Table booths for direct exposure", "Generate leads & close deals", "San Diego's top entrepreneurs"],
  },
  {
    title: "Bay Cruise",
    freq: "Annual | Jun 25, 2026",
    img: `${basePath}/events/cruise.webp`,
    desc: "Elite networking aboard the Bella Luna Yacht on San Diego Bay. Sunset views of the skyline, complimentary bites, drinks, and unforgettable connections.",
    bullets: ["Bella Luna Yacht, San Diego Bay", "Sunset views & skyline backdrop", "Limited tickets — sell out fast"],
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

const sponsors = [
  { name: "PowerTeam", src: `${basePath}/sponsors/powerteam.jpg` },
  { name: "SD Yachts", src: `${basePath}/sponsors/sd-yachts.png` },
  { name: "Virtual Synergy", src: `${basePath}/sponsors/vsi.png` },
  { name: "AList", src: `${basePath}/sponsors/alist.png` },
  { name: "Music Box", src: `${basePath}/sponsors/musicbox.png` },
  { name: "BIG", src: `${basePath}/sponsors/big.webp` },
  { name: "Blowfish Tequila", src: `${basePath}/sponsors/blowfish.webp` },
  { name: "Real Deal Wellness", src: `${basePath}/sponsors/rdw.webp` },
];

export default function HomePage() {
  return (
    <>
      {/* Hero with photo background */}
      <section className="relative bg-gray-950 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${basePath}/events/hero.webp)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-950/85 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_theme(colors.brand)/15,_transparent_70%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-36 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/logo.png`} alt="SD Networking Events" className="mb-8 h-16 w-auto" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 border border-brand/40 text-brand-light text-xs font-semibold tracking-wider uppercase mb-6">
            San Diego&apos;s Premier Business Network
          </div>
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
        <div className="border-t border-white/10 bg-black/40 backdrop-blur-sm relative">
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

      {/* Events grid with photos */}
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
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-light mb-1">{e.freq}</div>
                    <h3 className="text-2xl font-black">{e.title}</h3>
                  </div>
                </div>
                <div className="px-6 py-5 flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{e.desc}</p>
                  <ul className="space-y-1.5">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-brand font-bold mt-0.5">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
      <section className="py-20 bg-gradient-to-br from-gray-950 to-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-2xl mb-4">🏆</div>
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
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-brand/20 flex items-center justify-center text-2xl mb-4">🎤</div>
            <h3 className="text-2xl font-black mb-3">Sponsor or Speak</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Get your brand in front of 150,000+ San Diego professionals. Sponsor an event,
              host a table, or speak at one of our summit events.
            </p>
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl transition-all hover:scale-105 text-sm"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Founder section with photo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/events/james.webp`}
                alt="James Hickey, Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                About the Founder
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
                Founded by James Hickey
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                James Hickey is a digital marketing strategist and entrepreneur with 18+ years of
                experience. From humble monthly mixers to a full calendar of 24 annual events,
                SD Networking has become the connective tissue of San Diego&apos;s business
                community.
              </p>
              <div className="flex flex-wrap gap-3">
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
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Trusted By
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Our Sponsors & Partners</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The brands and businesses that make SD Networking Events possible.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sponsors.map((s) => (
              <div
                key={s.name}
                className="aspect-[3/2] bg-white rounded-xl border border-gray-100 flex items-center justify-center p-6 hover:border-brand/30 hover:shadow-md transition-all grayscale hover:grayscale-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/sponsor"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-brand hover:text-brand-dark transition-colors text-sm"
            >
              Become a Sponsor →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
