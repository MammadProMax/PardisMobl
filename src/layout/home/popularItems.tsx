import { ReactElement, useState, lazy, Suspense } from "react";
import F1Mobl from "../../assets/Mohtava/Mobl/1/321f8b3871ecf3718ed0a8827e9240f9c7e2b64d_1642682074.jpg";
import F2Mobl from "../../assets/Mohtava/Mobl/2/2c144312393d14d50cf0d628af5d0d2c5d921d6e_1659594664.jpg";
import F3Mobl from "../../assets/Mohtava/Mobl/3/1e48acf73b5a8312baa745cbc426b63b502ed16f_1643011732.jpg";

const Navigator = lazy(
  () => import("../../components/popular-items/navigator")
);
const ItemCarousel = lazy(
  () => import("../../components/popular-items/itemCarousel")
);

export interface Image {
  src: string[];
  heading: string;
  description: string;
  alt: string;
  detail: string;
}

export default function PopularItems(): ReactElement {
  const [navState, setNavState] = useState(0);
  const items: Omit<Image, "detail">[] = [
    {
      src: [F1Mobl],
      heading: "مبل راحتی 8 نفره مدل دیبا",
      description: `کاناپه : ۲۰۰ قسمت ال : ۱۰۰ کاناپه تخت خواب شو : ۲۲۰ مبل تک نفره : ۹۰ سانتی‌متر`,
      alt: "محصولات",
    },
    {
      src: [F2Mobl],
      heading: "مبل راحتی 8 نفره مدل کارلو کرنر",
      description: `کاناپه : ۲۰۰ قسمت ال : ۱۰۰ کاناپه تخت خواب شو : ۲۲۰ مبل تک نفره : ۹۰ سانتی‌متر`,
      alt: "محصولات",
    },
    {
      src: [F3Mobl],
      heading: "مبل راحتی 8 نفره مدل نیلز",
      description: `دارای یک عدد کاناپه ۳ نفره چستر و یک عدد کاناپه ۳نفره ماهیچه ای و دو عدد مبل تک نفره`,
      alt: "محصولات",
    },
  ];
  return (
    <>
      <section
        id="popular-items"
        className="text-right bg-rose-30 py-20 pb-12 text-emerald-950"
      >
        <h1 className="text-center text-2xl sm:text-4xl font-semibold px-5">
          محصولات محبوب
        </h1>
        <p className="text-center text-lg md:text-2xl font-light text-gray-500 py-4 px-5">
          پر بازدید ترین و محبوب ترین محصولات را مشاهده کنید
        </p>
        <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto my-16 gap-8 md:gap-16 lg:gap-32">
          <Suspense fallback={<h1>loading</h1>}>
            <Navigator setNav={setNavState} navigation={navState} />
            <div className="items-carousel shrink-0 w-72 h-[25rem] md:w-[33rem] md:h-[36rem] overflow-hidden flex flex-col lg:h-[40rem] lg:w-auto">
              <ItemCarousel navigation={navState} items={items} />
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
}
