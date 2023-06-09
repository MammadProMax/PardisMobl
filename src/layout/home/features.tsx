import { ReactElement } from "react";

export default function Features(): ReactElement {
  return (
    <>
      <section
        id="features"
        className="py-16 px-16 text-xl md:text-2xl font-semibold   overflow-hidden"
      >
        <div className="title text-center mx-auto text-emerald-950 max-w-4xl space-y-4">
          <h1>
            ما به بیش از
            <span className="text-lime-350 text-2xl md:text-3xl mx-1 font-bold">
              1500
            </span>{" "}
            تولید کننده در شهر های مجاور برای بازاریابی کمک خواهیم کرد
          </h1>
          <ul className="flex justify-center md:gap-16 py-6 gap-4 sm:gap-8 font-medium text-xl md:text-2xl">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mx-3 opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              تهران
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mx-3 opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              پردیس
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mx-3 opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              ملایر
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline-block mx-3 opacity-60"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              کرج
            </li>
          </ul>
        </div>
        <div className="main-feat flex flex-col items-center lg:flex-row-reverse justify-center gap-8 md:gap-16 py-12">
          <div className="side-Left-img shrink-0 relative">
            <span
              className="w-[6%] h-[14%] absolute bg-white bottom-2/3 right-0
        "
            ></span>
            <span
              className="w-1/5 h-[10%] absolute bg-white -top-3 left-[27%]
        "
            ></span>
            <span
              className="w-1/6 h-[15%] absolute bg-white -bottom-3 -left-2
        "
            ></span>
            <img
              src="https://img.freepik.com/free-photo/teaching-apprentice-use-drill-press_1098-13556.jpg?size=626&ext=jpg&ga=GA1.2.101894552.1685980370&semt=sph"
              alt="کارکنان در کارگاه های ما"
              className="w-64 h-80 md:w-[29rem] md:h-[37rem] object-cover"
            />
          </div>
          <div className="top-right-img basis-auto shrink-0">
            <div className="relative w-fit mx-auto lg:mr-auto">
              <span
                className="w-[11%] h-[27%] absolute bg-white -right-1 -bottom-1
        "
              ></span>
              <span
                className="w-1/5 h-[13%] absolute bg-white top-[-2%] left-[27%]
        "
              ></span>
              <img
                src="https://img.freepik.com/free-photo/craftsman-using-circular-saw_1157-45888.jpg?size=626&ext=jpg"
                alt="کارگاه های ما"
                className="w-72 md:w-[30rem]"
              />
            </div>
            <p className="max-w-xl text-center leading-relaxed mt-12 md:mt-24 max-sm:text-base">
              با خرید از پردیس تولید کنندگان داخلی را حمایت و زمان خود را برای
              پیدا کردن مدل محبوب خود ذخیره کنید
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
