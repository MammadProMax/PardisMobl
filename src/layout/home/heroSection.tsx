import { ReactElement } from "react";
import { Link } from "react-router-dom";

export default function HeroSection(): ReactElement {
  return (
    <>
      <section
        id="hero-section"
        className="bg-emerald-950 flex flex-row h-auto justify-center gap-8 py-16 overflow-hidden"
      >
        <div className="info flex flex-col text-right md:max-w-md xl:max-w-xl space-y-4 px-7 md:px-0">
          <h1 className="text-white mx-auto text-3xl md:text-4xl md:leading-[1.2] lg:text-5xl lg:leading-[1.4] font-semibold pt-0 md:pt-24 pr-11 leading-normal">
            جایی برای خرید سرویس های چوبی مدرن با قیمت های مناسب
          </h1>
          <p className="text-gray-200 opacity-70 pr-11 w-11/12 py-3">
            با یک نگاه کوچک به گالری ما از گذراندن ساعت ها برای پیدا کردن سرویس
            مورد نظر خود اجتناب کنید
          </p>
          <Link
            to="/PardisMobl/galary"
            className="bg-lime-350 w-fit py-2 px-7 mr-11 mt-3 rounded-3xl transition-all active:bg-lime-550 hover:scale-105 group relative"
          >
            <span className="transition duration-200 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 absolute left-[0.75rem] top-[0.68rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </span>
            مشاهده محصولات ما
          </Link>
        </div>
        <div className="datail md:flex hidden ">
          <div className="pic relative shrink-0">
            <span
              className="w-[6%] h-[14%] absolute bg-emerald-950 top-0 right-0
        "
            ></span>
            <span
              className="w-1/5 h-[10%] absolute bg-emerald-950 -top-3 left-[13%]
        "
            ></span>
            <span
              className="w-1/5 h-[8%] absolute bg-emerald-950 bottom-0 right-6
        "
            ></span>
            <span
              className="w-[12%] h-[15%] absolute bg-emerald-950 bottom-0 left-0
        "
            ></span>
            <img
              className="lg:w-[25rem] lg:h-[32rem] w-[20rem] h-[27rem] object-cover"
              src="https://i1.delgarm.com/i/798/0008/09/%DA%86%DB%8C%D8%AF%D9%85%D8%A7%D9%86%20%D9%86%D8%B4%DB%8C%D9%85%D9%86/617ea11953016.jpg"
              alt="تصویر مبلمان خانگی پردیس"
            />
          </div>
          <div className="details-text self-center text-white pr-16 text-center space-y-10 hidden xl:block min-w-max">
            <div className="first-tip space-x-2">
              <h6 className="text-sm opacity-70">پشتیبانی و خدمات</h6>{" "}
              <span className="text-lime-350 text-2xl font-semibold opacity-100">
                24
              </span>
              <span className="text-sm opacity-70">ساعته</span>
            </div>
            <div className="sec-tip">
              <h3 className="text-2xl text-lime-350 font-semibold">40+</h3>
              <h6 className="text-sm opacity-70">مدل کار چوبی</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
