"use client";

import { useState } from "react";
import logo from "@/public/static/logo/white_text.png";
import Image from "next/image";
import Link from "next/link";

interface Pages {
  title: string;
  link: string;
}

export default function Navbar({ pages }: { pages: Array<Pages> }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute cursor-pointer top-0">
      <header className="p-6 w-screen md:p-8 lg:p-10 text-white ">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div>
            <Image src={logo} alt="Company Logo" width={100} height={100} />
          </div>

          {/* Navigation Links */}
          <nav
            className={`hidden md:flex text-sm md:text-base lg:text-lg font-bold gap-10 lg:gap-10 transition-all duration-300`}
          >
            {pages.map((page, index) => (
              <Link
                href={page.link}
                key={index}
                className="hover:text-gray-400 transition-colors"
              >
                {page.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button (SVG Hamburger Icon) */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative flex items-center justify-center w-8 h-8"
            >
              <svg
                className={`transition-transform duration-300 ${menuOpen ? "rotate-45" : ""
                  }`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16m-7 6h7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu */}
        {menuOpen && (
          <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-50 transition-opacity duration-300 transform ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4"
              aria-label="Close Menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4">
              {pages.map((page, index) => (
                <Link
                  href={page.link}
                  key={index}
                  className="text-white text-center text-lg font-bold hover:text-gray-400 transition-colors"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

