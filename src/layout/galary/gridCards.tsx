import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { saleItems } from "../../service/imageScript";

const GridCards = (): ReactElement => {
  const itemsUI = saleItems?.map((data, index) => {
    return (
      <Link key={index} to={`/PardisMobl/galary/:${index}`}>
        <div className="item group flex flex-col justify-center w-[90%] sm:w-full cursor-pointer p-4 mx-auto transition-colors duration-300 overflow-hidden relative hover:bg-gray-100">
          <LazyLoadImage
            alt={data.alt}
            src={data.src[0]}
            className="object-cover h-56" // use normal <img> attributes as props
          />
          <h1 className="font-bold pt-5">{data.heading}</h1>
          <p className="text-sm lg:text-base opacity-90 my-4 md:text-lg">
            {data.description}
          </p>
          <div className="filter absolute left-0 flex justify-center items-center w-full h-full bg-gray-700 bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-50">
            <span className="text-gray-700 bg-gray-200 p-2 rounded-full text-lg font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <div className="container max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
        {itemsUI}
      </div>
    </>
  );
};

export default GridCards;
