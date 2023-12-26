// import {
//   RxCrop,
//   RxDesktop,
//   RxPencil2,
//   RxReader,
//   RxRocket,
//   RxAccessibility,
// } from "react-icons/rx";

// import img1 from "../../assets/admin.jpg";
// import a1 from "../../assets/01/04.jpg";
// import b1 from "../../assets/02/1.jpg";
// import c3 from "../../assets/03/3.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/free-mode";

// import { FreeMode, Pagination } from "swiper/modules";

// import { RxArrowTopRight } from "react-icons/rx";

// const Test = () => {
//   return (
//     <>
//       Test
//       <div className="flex items-center justify-center flex-col ">
//         <Swiper
//           breakpoints={{
//             340: {
//               slidesPerView: 2,
//               spaceBetween: 15,
//             },
//             700: {
//               slidesPerView: 3,
//               spaceBetween: 15,
//             },
//           }}
//           freeMode={true}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[FreeMode, Pagination]}
//           className="max-w-[90%] lg:max-w-[80%]"
//         >
//           {data.map((item) => (
//             <SwiperSlide key={item.name}>
//               <div className="mb-4 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[150px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
//                 <div
//                   className="absolute inset-0 bg-cover bg-center "
//                   style={{ backgroundImage: `url(${item.backgroundImage})` }}
//                 />

//                 <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100">
//                   Learn More
//                 </RxArrowTopRight>
//               </div>
//               <div className="relative flex flex-col ">
//                 {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px] " /> */}
//                 <div className="backdrop-blur-sm hover:backdrop-blur-lg">
//                   <h1 className="text-xl lg:text-1xl text-slate-400 hover:text-sky-400 ">
//                     {item.name}
//                   </h1>
//                   <p className="text-xs  ">{item.review}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// const data = [
//   {
//     icon: RxCrop,
//     name: `วิทยาลัยเทคนิคกันทรลักษ์`,
//     backgroundImage: a1,
//     review: `เข้าร่วมประชุมการแข่งขันทักษะวิชาชีพ. 7 พฤศจิกายน 2566`,
//   },
//   {
//     icon: RxDesktop,
//     name: `ตลาดมินิ วิทยาลัยเทคนิคกันทรลักษ์`,
//     backgroundImage: b1,
//     review: `สาขาการตลาด ขอเชิญชวน นักเรียน-นักศึกษา บุคลากร ไปเที่ยวชม ชิม
//     อุตหนุน ที่ตลาดมินิ 9 พฤศจิกายน 2566`,
//   },
//   {
//     icon: RxPencil2,
//     name: ` วิทยาลัยเทคนิคกันทรลักษ์`,
//     backgroundImage: c3,
//     review: ` ได้รับการประเมินองค์การมาตรฐานดีเด่น 7 พฤศจิกายน 2566.`,
//   },
//   {
//     icon: RxRocket,
//     name: `john Mogan`,
//     backgroundImage: img1,
//     review: `Lorem ipsum dolor sit amet`,
//   },
//   {
//     icon: RxReader,
//     name: `john Mogan`,
//     backgroundImage: img1,
//     review: `Lorem ipsum dolor sit amet`,
//   },
//   {
//     icon: RxAccessibility,
//     name: `john Mogan`,
//     backgroundImage: img1,
//     review: `Lorem ipsum dolor sit amet`,
//   },
// ];
// export default Test;

export default function Test() {
  return <div>Test</div>;
}
