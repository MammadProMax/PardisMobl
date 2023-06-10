import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { saleItems } from "../service/imageScript";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalaryItem = () => {
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (id) {
    const index = parseInt(id.slice(1));
    const data = saleItems[index];

    // code here

    return (
      <>
        <div className="item group flex flex-col justify-center w-1/2 py-[1.85rem] px-4 my-10 mx-auto relative">
          <div className="slider mb-8">
            <Slider {...settings}>
              {data.src.map((_, index) => (
                <LazyLoadImage
                  alt={data.alt}
                  src={_}
                  className="h-[36rem] object-contain" // use normal <img> attributes as props
                />
              ))}
            </Slider>
          </div>

          <h1 className="text-md lg:text-lg font-bold my-4 md:text-lg">
            {data.heading}
          </h1>
          <p className="text-md lg:text-base my-4 md:text-lg">
            {data.description}
          </p>
          <p className="text-sm lg:text-base opacity-90 my-4 md:text-lg">
            {data.detail}
          </p>
        </div>
      </>
    );
  }
  return <h1>چیزی پیدا نشد</h1>;
};

export default GalaryItem;
