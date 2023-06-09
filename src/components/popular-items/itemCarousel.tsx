import { ReactElement } from "react";

import { Image } from "../../layout/home/popularItems";

type AppProps = {
  navigation: number;
  items: Image[];
};

export default function ItemCarousel({
  navigation,
  items,
}: Required<AppProps>): ReactElement {
  return (
    <div
      className={`transition duration-700 ease-x ${
        navigation === 1
          ? `lg:-translate-y-[39.5rem] md:-translate-y-[35rem] -translate-y-[24.8rem]`
          : navigation === 2
          ? `lg:-translate-y-[79rem] md:-translate-y-[71rem] -translate-y-[49rem]`
          : ""
      }`}
    >
      {items.map((data, index) => {
        return (
          <div key={index} className="item max-w-2xl my-6">
            <img src={data.src} alt={data.alt} />
            <h1 className="text-base md:text-2xl font-semibold py-3">
              {data.heading}
            </h1>
            <p className="text-sm md:text-lg opacity-90 my-4 max-w-xl">
              {data.description}
            </p>
            <button className="bg-emerald-950 text-white text-xs md:text-base py-2 px-5 mr-px transition-transform rounded-lg hover:scale-105">
              مشاهده
            </button>
          </div>
        );
      })}
    </div>
  );
}
