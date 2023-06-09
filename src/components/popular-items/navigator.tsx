import { ReactElement, Dispatch, SetStateAction, useEffect } from "react";

type AppProps = {
  setNav: Dispatch<SetStateAction<number>>;
  navigation: number;
};
export default function Navigator({
  setNav,
  navigation,
}: Required<AppProps>): ReactElement {
  useEffect(() => {
    const recentChosen = document.querySelector(
      ".scale-110.text-lime-350.-translate-y-2"
    ); // element that is highlighted
    const chosenElement = document.querySelector(
      `.filters li:nth-child(${navigation + 1})`
    ); // element gonna highlighte
    recentChosen?.classList.remove(
      "scale-110",
      "text-lime-350",
      "-translate-y-2",
      "-translate-x-5",
      "max-md:-translate-y-1"
    );
    // highlite tailwind classes
    chosenElement?.classList.add(
      "scale-110",
      "text-lime-350",
      "-translate-y-2",
      "-translate-x-5",
      "max-md:-translate-y-1"
    );
  }, [navigation]);
  const filter: string[] = ["کلاسیک", "مدرن", "جدید"];

  return (
    <div className="type flex flex-col-reverse lg:flex-row gap-2 lg:gap-3 h-fit w-fit">
      <div className="navigator h-1 lg:w-1 lg:h-auto rounded-xl bg-gray-300 bg-opacity-60 relative">
        <span
          className={`
          inline-block h-full w-8 md:w-10 lg:w-full lg:h-8 scale-[1.6] md:scale-[1.8] rounded-lg
         bg-lime-350 transition-transform duration-700 absolute right-3 md:right-4 lg:right-0
           ${
             navigation === 0
               ? ""
               : navigation === 1
               ? "lg:translate-y-28 lg:translate-x-0 md:-translate-x-24 -translate-x-20"
               : "lg:translate-y-56 lg:translate-x-0 md:-translate-x-[11.5rem] -translate-x-40"
           }`}
        ></span>
      </div>
      <ul className="filters lg:w-28 text-3xl lg:space-y-10 font-semibold flex flex-row lg:flex-col gap-9">
        {filter.map((data, index) => (
          <li
            key={index}
            className="cursor-pointer transition-all duration-500 text-lg md:text-2xl lg:text-3xl lg:translate-y-0 max-lg:translate-x-0"
            onClick={() => setNav(index)}
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  );
}
