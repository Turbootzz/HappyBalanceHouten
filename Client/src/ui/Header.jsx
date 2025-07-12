import React, { useState } from "react";
import hblogo from "../assets/img/hb-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <nav className="border-gray-200 bg-maindarker">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-3">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={hblogo} className="h-20" alt="HappyBalance Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-100">
              Happy Balance
            </span>
          </a>
          {/* Hamburger button for mobile */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Responsive nav links */}
        <div
          id="mobile-menu"
          className={`md:block ${menuOpen ? "block" : "hidden"}`}
        >
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex flex-col md:flex-row md:items-center">
              <ul className="flex flex-col md:flex-row font-medium space-y-2 md:space-y-0 md:space-x-8 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-gray-100 hover:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#overmij"
                    className="text-gray-100 hover:text-white hover:underline"
                  >
                    Over mij
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-100 hover:text-white hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/voorwaarden"
                    className="text-gray-100 hover:text-white hover:underline"
                  >
                    Voorwaarden
                  </a>
                </li>
                <li>
                  <a
                    href="/inschrijven"
                    className="text-gray-100 hover:text-white hover:underline"
                  >
                    InschrijfFormulier
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
