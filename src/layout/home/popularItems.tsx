import { ReactElement, useState, lazy, Suspense } from "react";

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
}

export default function PopularItems(): ReactElement {
  const [navState, setNavState] = useState(0);
  const items: Image[] = [
    {
      src: [
        "https://img.freepik.com/free-photo/craftsman-using-circular-saw_1157-45888.jpg?size=626&ext=jpg",
      ],
      heading: "لورم ایپسوم متن ساختگی با تولید سادگی",
      description: `نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف`,
      alt: "محصولات محبوب",
    },
    {
      src: [
        "https://img.freepik.com/free-photo/craftsman-using-circular-saw_1157-45888.jpg?size=626&ext=jpg",
      ],
      heading: "لورم ایپسوم متن ساختگی با تولید سادگی",
      description: `نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف`,
      alt: "محصولات محبوب",
    },
    {
      src: [
        "https://img.freepik.com/free-photo/craftsman-using-circular-saw_1157-45888.jpg?size=626&ext=jpg",
      ],
      heading: "لورم ایپسوم متن ساختگی با تولید سادگی",
      description: `نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف`,
      alt: "محصولات محبوب",
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
