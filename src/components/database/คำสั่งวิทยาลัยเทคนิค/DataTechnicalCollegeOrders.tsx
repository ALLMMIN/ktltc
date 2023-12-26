import na1 from "@assets/คำสั่งวิทยาลัย/na1.png";
import na2 from "@assets/คำสั่งวิทยาลัย/na2.png";
import na3 from "@assets/คำสั่งวิทยาลัย/na3.png";
// import error from "@assets/error.png";
import img1 from "@assets/คำสั่งวิทยาลัย/na1.png";
import img2 from "@assets/คำสั่งวิทยาลัย/na2.png";
import img3 from "@assets/คำสั่งวิทยาลัย/na3.png";
import {
  OrderToAppointACommittee,
  OrderToAppointATeacherAdvisor,
  OrderToAppointTheAdministrativeCommittee,
} from "@/components/homepage/คำสั่งวิทยาลัยเทคนิค/Story";
export const DataNewsAnnouncement = [
  //   name: `กรุณาเพิ่มข้อมูล`,
  //   backgroundImage: error,
  //   review: ` `,
  //   url: ` `,
  {
    name: `คำสั่งแต่งตั้งคณะกรรมการ`,
    backgroundImage: na1,
    review: `พิจารญาการกลับจากการฝึกประสบการณ์วิชาชีพและฝึกอาชีพก่อนกำหนด ประจำปีการศึกษา 2/2566`,
    url: <OrderToAppointACommittee />,
  },
  {
    name: `คำสั่งแต่งตั้งครูที่ปรึกษา`,
    backgroundImage: na2,
    review: `ประจำปีการศึกษา 2/256`,
    url: <OrderToAppointATeacherAdvisor />,
  },
  {
    name: `คำสั่งวิทยาลัยเทคนิคกันทรลักษ์`,
    backgroundImage: na3,
    review: `เรื่อง คำสั่งแต่งตั้งคณะกรรมการงานปกครอง`,
    url: <OrderToAppointTheAdministrativeCommittee />,
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
