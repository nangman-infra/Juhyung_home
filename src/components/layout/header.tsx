"use client";

import Link from "next/link";
import { useState } from "react";
import { nav_items } from "@/constants/ui";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold lowercase">
            juhyung
          </Link>

          {/* desktop navigation */}
          <ul className="hidden md:flex gap-8">
            {nav_items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue-600 transition-colors lowercase"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* mobile navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2">
            {nav_items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 hover:text-blue-600 transition-colors lowercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};
