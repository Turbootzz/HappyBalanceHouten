import React from "react";
//import { phone } from "../config/config";
import hblogo from "../assets/img/hb-logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <nav className="border-gray-200 dark:bg-maindarker">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a
              href="../pages/Home.jsx"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={hblogo} className="h-20" alt="HappyBalance Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Happy Balance
              </span>
            </a>
            {/* <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a
                href={"tel:" + phone}
                className="text-sm  text-gray-500 dark:text-white hover:underline"
              >
                {phone}
              </a>
            </div> */}
          </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-maindark">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                  <a
                    href="../pages/Home.jsx"
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="../pages/Contact.jsx"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="../pages/terms.jsx"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Voorwaarden
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  );
}
