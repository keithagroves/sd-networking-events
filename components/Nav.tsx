"use client";

import Link from "next/link";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const links = [
  { href: "/", label: "Home" },
  { href: "/join", label: "Membership" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${basePath}/logo.png`} alt="SD Networking Events" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-blue-700 transition-colors uppercase"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://www.eventbrite.com/o/sd-networking-events-jmh-marketing-group-2305019979"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-blue-700 text-white text-sm font-bold rounded-lg hover:bg-blue-800 transition-colors"
          >
            Events →
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800 mb-1" />
          <div className="w-5 h-0.5 bg-gray-800" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase text-gray-700 hover:text-blue-700"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://www.eventbrite.com/o/sd-networking-events-jmh-marketing-group-2305019979"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-700 text-white text-sm font-bold rounded-lg text-center hover:bg-blue-800"
          >
            View Events →
          </Link>
        </div>
      )}
    </header>
  );
}
