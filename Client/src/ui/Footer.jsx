import React from "react";

import hblogo from "../assets/img/hb-logo.png";
import { email } from "../config/config";

export default function Footer() {
  return (
    <footer className="bg-maindarker grow">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img
                src={hblogo}
                className="h-20 me-3"
                alt="Happy Balance Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Happy Balance
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-xs md:text-sm font-semibold text-white uppercase">
                Contact
              </h2>
              <ul className="text-main text-xs md:text-sm font-medium">
                <li className="mb-4">
                  <a href={"mailto:" + email} className="hover:text-white">
                    {email}
                  </a>
                </li>
                <li>
                  <a href= "https://linkedin.com/in/ingrideilander" className="hover:text-white">
                    (LinkedIn) Ingrid Eilander
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xs md:text-sm font-semibold text-white uppercase">
                Social Media
              </h2>
              <ul className="text-main text-xs md:text-sm font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/happy_balancehouten/"
                    className="hover:text-white "
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/ingrideilander"
                    className="hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xs md:text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-main text-xs md:text-sm font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-white">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs md:text-sm text-white sm:text-center">
            © 2024{" "}
            <a href="/" className="hover:underline">
              HappyBalanceHouten™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/ingrideilander"
              className="text-white hover:text-main"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/happy_balancehouten/"
              className="text-white hover:text-main ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ingrideilander"
              className="text-white hover:text-main ms-5"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                fill="#fff"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a href="/" className="text-white hover:text-main ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path
                  className="st0"
                  d="M511.878,247.973l-21.488,0.672l21.488-0.68c-2.168-69.219-31.732-131.348-77.876-175.949
		C387.882,27.377,324.93-0.004,256.13,0.004c-2.718,0-5.443,0.046-8.176,0.13h0.016C178.743,2.294,116.622,31.858,72.013,78.002
		C27.382,124.122,0,187.074,0,255.874c0,2.709,0.046,5.435,0.13,8.16c2.168,69.22,31.732,131.347,77.875,175.949
		c46.113,44.632,109.065,72.02,177.865,72.013c2.694,0,5.42-0.038,8.16-0.13c69.227-2.16,131.355-31.724,175.957-77.876
		c44.64-46.121,72.021-109.065,72.013-177.857C512,253.416,511.962,250.699,511.878,247.973z M102.921,107.894
		c19.64-20.29,43.274-36.647,69.67-47.891c-10.961,15.77-20.336,34.426-28.045,55.304H96.089
		C98.303,112.779,100.585,110.306,102.921,107.894z M75.692,142.664h60.112c-8.282,30.212-13.327,63.906-14.365,99.661H43.472
		C45.77,205.914,57.243,171.938,75.692,142.664z M75.647,369.344c-18.351-29.121-29.808-63.044-32.144-99.661h78.028
		c1.046,35.732,5.954,69.471,14.236,99.661H75.647z M107.898,409.083c-4.091-3.962-7.984-8.114-11.748-12.381h48.442
		c4.099,11.091,8.579,21.67,13.594,31.396c4.405,8.518,9.16,16.487,14.252,23.847C148.37,441.654,126.523,427.082,107.898,409.083z
		 M242.329,468.524c-5.931-0.374-11.809-0.946-17.603-1.801c-2.404-1.573-4.809-3.282-7.213-5.236
		c-16.381-13.313-31.778-35.831-43.694-64.784h68.51V468.524z M242.329,369.344h-78.15c-8.794-29.411-14.267-63.365-15.381-99.661
		h93.531V369.344z M242.329,242.325h-93.448c1.115-36.327,6.618-70.235,15.42-99.661h78.028V242.325z M242.329,115.306h-68.433
		c2.71-6.588,5.542-12.954,8.595-18.84c10.298-19.969,22.404-35.647,35.022-45.945c2.366-1.924,4.732-3.604,7.099-5.16
		c5.832-0.862,11.74-1.48,17.717-1.863V115.306z M436.369,142.664c18.351,29.128,29.8,63.044,32.136,99.661h-78.02
		c-1.046-35.732-5.954-69.471-14.236-99.661H436.369z M404.11,102.917c4.092,3.961,7.985,8.114,11.756,12.389h-48.441
		c-4.099-11.092-8.58-21.672-13.596-31.396c-4.412-8.527-9.167-16.496-14.267-23.847C363.63,70.353,385.484,84.918,404.11,102.917z
		 M269.687,43.476c5.924,0.374,11.801,0.954,17.587,1.802c2.412,1.58,4.824,3.282,7.229,5.244
		c16.381,13.32,31.778,35.823,43.686,64.784h-68.502V43.476z M269.687,142.664h78.15c8.794,29.411,14.267,63.364,15.381,99.661
		h-93.531V142.664z M269.687,269.683h93.448c-1.114,36.327-6.618,70.242-15.42,99.661h-78.028V269.683z M329.525,415.534
		c-10.297,19.976-22.412,35.655-35.022,45.953c-2.359,1.924-4.725,3.595-7.091,5.152c-5.832,0.863-11.74,1.481-17.725,1.862v-71.799
		h68.426C335.402,403.289,332.57,409.648,329.525,415.534z M409.087,404.106c-19.64,20.29-43.266,36.64-69.655,47.884
		c10.962-15.771,20.328-34.419,28.037-55.288h48.449C413.698,399.22,411.423,401.694,409.087,404.106z M436.308,369.344h-60.105
		c8.29-30.206,13.336-63.906,14.374-99.661h77.952C466.23,306.086,454.757,340.07,436.308,369.344z"
                />
              </svg>
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
