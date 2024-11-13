import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <p className="text-sm font-semibold text-gray-800">Neem contact op:</p>

      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Naam"
          className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-maindarker"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-maindarker"
        />
        <input
          type="text"
          placeholder="Onderwerp"
          className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-maindarker"
        />
        <textarea
          placeholder="Bericht"
          rows="6"
          className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-maindarker"
        ></textarea>
        <button
          type="button"
          className="text-white bg-maindark hover:bg-maindarker tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="#fff"
            className="mr-2"
            viewBox="0 0 548.244 548.244"
          >
            <path
              fill-rule="evenodd"
              d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
              clip-rule="evenodd"
              data-original="#000000"
            />
          </svg>
          Send Message
        </button>
      </form>
    </div>
  );
}
