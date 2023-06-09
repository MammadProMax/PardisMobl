import { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <>
      <div className=" bg-emerald-950 ">
        <div
          id="footer"
          className="max-w-6xl flex flex-row-reverse justify-between mx-auto py-6 px-5 text-white items-center"
        >
          <h1 className="logo font-pacifico text-2xl sm:text-4xl">Pardis</h1>
          <ul className="links flex gap-6 text-xs sm:text-base">
            <li className="opacity-60 transition-opacity hover:opacity-90">
              <a href="#">ارتباط با ما</a>
            </li>
            <li className="opacity-60 transition-opacity hover:opacity-90">
              <a href="#">نماد اعتماد</a>
            </li>
            <li className="opacity-60 transition-opacity hover:opacity-90">
              <a href="#">فضای مجازی</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
