import { Layout } from "@/Layout";

export default function Test() {
  return (
    <>
      <Layout>
        <div>Test</div>
        <div className="options">
          <div className="option active">
            <div className="label">
              <div className="icon">
                <i className="fas fa-walking"></i>
              </div>
              <div className="info">
                <div className="main">Ultricies</div>
                <div className="sub">Elit ut aliquam purus sit</div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pb-24 pt-24">
          <SwiperTest />
        </div> */}
      </Layout>
    </>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// https://swiperjs.com/react      Swiper React Components
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SwiperTest = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
