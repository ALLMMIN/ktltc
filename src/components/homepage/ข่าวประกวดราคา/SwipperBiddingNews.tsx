import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { DataSwipperBiddingNews } from "@components/database/ข่าวประกวดราคา/DataSwipperBiddingNews";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

export default function SwipperBiddingNews() {
  return (
    <>
      <div className="flex items-center justify-center flex-col ">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%]   lg:max-w-[80%] " // min-w-[90%]
        >
          {/* ดึงข้อมูลจากหน้า  DataPressRelease มาแสดงผลที่หน้า SwipperPressRelease*/}
          {DataSwipperBiddingNews.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="mb-4 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[150px] lg:h-[200px] lg:w-[full] overflow-hidden cursor-pointer lg:max-h-[180px]  h-24 min-h-0 hover:min-h-ful">
                <div
                  className="absolute inset-0 bg-contain bg-center hover:scale-110 transition duration-500 cursor-pointer object-cover" //    lg:max-h-[180px] sm:max-h-[110px] rounded-lg
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />

                <RxArrowTopRight className=" absolute bottom-5  left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100  "></RxArrowTopRight>
              </div>
              <div className="relative flex flex-col pb-12  ">
                <h1 className="text-lg lg:text-1xl text-slate-400  ">
                  {item.name}
                </h1>
                <p className="text-sm  ">{item.review}</p>
                <p className="pt-4 text-lg lg:text-1xl text-slate-400 hover:text-sky-400 ">
                  {item.url}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
