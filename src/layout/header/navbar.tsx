import { ReactElement } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar(): ReactElement {
  return (
    <>
      <nav className="text-emerald-850 py-3 fixed w-full bg-white top-0 z-50 shadow-md">
        <div className="container max-w-7xl flex flex-row justify-between mx-auto items-cente p-3 ">
          <div className="search-bar flex flex-row-reverse px-4 gap-8">
            <div className="search-bar-search hidden md:flex flex-row items-center gap-6 ring-1 ring-gray-400 p-2 rounded-3xl">
              <input
                type="text"
                className="outline-none w-32 pr-3 bg-transparent"
                placeholder="جستجو"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="search-bar-buy flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <button className="hidden md:block px-7 py-2 bg-lime-350 rounded-3xl transition-all active:bg-lime-550 hover:scale-105">
                خرید
              </button>
            </div>
          </div>
          <div className="navigate flex flex-row w-64 justify-between items-center">
            <div className="options">
              <ul className="flex flex-row gap-4 text-sm sm:text-base">
                <li>
                  <NavLink
                    to="/PardisMobl/galary"
                    className={({ isActive }) =>
                      ` ${
                        isActive ? "opacity-100 font-semibold" : "opacity-80"
                      }`
                    }
                  >
                    گالری
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-80 transition hover:opacity-100"
                  >
                    درباره ما
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="opacity-80 transition hover:opacity-100"
                  >
                    شرایط
                  </a>
                </li>
              </ul>
            </div>
            <div className="logo">
              <Link
                to="/PardisMobl/"
                className="text-2xl font-semibold font-pacifico relative bottom-1 pl-4 cursor-pointer"
              >
                Pardis
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="devider mt-[5rem] md:mt-[5.5rem]"></div>
    </>
  );
}
