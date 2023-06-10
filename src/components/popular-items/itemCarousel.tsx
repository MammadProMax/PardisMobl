import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Image } from "../../layout/home/popularItems";

type AppProps = {
  navigation: number;
  items: Omit<Image, "detail">[];
};

export default function ItemCarousel({
  navigation,
  items,
}: Required<AppProps>): ReactElement {
  return (
    <div
      className={`transition duration-700 ease-x ${
        navigation === 1
          ? `lg:-translate-y-[39.5rem] md:-translate-y-[36rem] -translate-y-[23.5rem]`
          : navigation === 2
          ? `lg:-translate-y-[79rem] md:-translate-y-[72rem] -translate-y-[49rem]`
          : ""
      }`}
    >
      {items.map((data, index) => {
        return (
          <div key={index} className="item max-w-2xl my-6">
            <img
              src={data.src[0]}
              alt={data.alt}
              className="object-cover h-[200px] w-[288px] md:h-[361px] md:w-[528px] lg:h-[417px] lg:w-[617px]"
            />
            <h1 className="text-base md:text-2xl font-semibold py-3">
              {data.heading}
            </h1>
            <p className="text-sm md:text-lg opacity-90 my-4 max-w-xl">
              {data.description}
            </p>
            <button className="bg-emerald-950 text-white text-xs md:text-base py-2 px-5 mr-px transition-transform rounded-lg hover:scale-105">
              <Link to="/PardisMobl/galary">مشاهده</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}
