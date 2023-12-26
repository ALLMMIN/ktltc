import {
  DeviceFeatures,
  ElectronicBidding,
  OrderToAppointACommittee,
} from "@/components/homepage/ข่าวประกวดราคา/Story";
import na1 from "@assets/ข่าวประกวดราคา/na1.png";
import na2 from "@assets/ข่าวประกวดราคา/na2.png";
import na3 from "@assets/ข่าวประกวดราคา/na3.png";
import img1 from "@assets/ข่าวประกวดราคา/na1.png";
import img2 from "@assets/ข่าวประกวดราคา/na2.png";
import img3 from "@assets/ข่าวประกวดราคา/na3.png";
export const DataSwipperBiddingNews = [
  // {
  //        name: `กรุณาเพิ่มข้อมูล`,
  //   backgroundImage: error,
  //   review: ` `,
  //   url: ` `,
  // },

  {
    name: `คำสั่งแต่งตั้งคณะกรรมการ`,
    backgroundImage: na1,
    review: `การพิจารณาการกลับจากการฝึกประสบการณ์วิชาชีพและฝึกอาชีพก่อนกำหนด ประจำปีการศึกษา 2/2566 `,
    url: <OrderToAppointACommittee />,
  },
  {
    name: `รายละเอียดคุณลักษณะเฉพาะอุปกรณ์การเรียน`,
    backgroundImage: na2,
    review: `รายละเอียดคุณลักษณะเฉพาะอุปกรณ์การเรียนของนักเรียนสายอาชีอาชีวะศึกษา ประจำปงบประมาณ 2566`,
    url: <DeviceFeatures />,
  },
  {
    name: `เอกสารประกวดราคาซื้อ `,
    backgroundImage: na3,
    review: `เอกสารประกวดราคาซื้อด้วยวิธีประกวดราคาอิเล็กทรอนิกส์ ( E-Didding)`,
    url: <ElectronicBidding />,
  },
];

export const Data1 = [
  {
    img1: img1,
  },
];
export const Data2 = [
  {
    img2: img2,
  },
];
export const Data3 = [
  {
    img3: img3,
  },
];
