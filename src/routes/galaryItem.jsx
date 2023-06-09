import { useParams } from "react-router-dom";

import { saleItems } from "../layout/galary/gridCards";

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
        <div className="item group flex flex-col justify-center w-1/2 p-4 my-10 mx-auto relative">
          <div className="slider">
            <Slider {...settings}>
              {data.src.map((_, index) => (
                <img key={index} src={_} alt={data.alt} />
              ))}
            </Slider>
          </div>

          <h1 className="text-sm lg:text-base opacity-90 my-4 md:text-lg">
            {data.heading}
          </h1>
          <p className="text-sm lg:text-base opacity-90 my-4 md:text-lg">
            {data.description}
          </p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </>
    );
  }
  return <h1>چیزی پیدا نشد</h1>;
};

export default GalaryItem;
