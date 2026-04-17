import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/join", label: "Membership" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-black text-brand-light">SD</span>
            <span className="text-lg font-black text-white">NETWORKING EVENTS</span>
          </div>
          <p className="text-sm">San Diego's premier professional networking organization.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} SD Networking Events. All rights reserved.
      </div>
    </footer>
  );
}
