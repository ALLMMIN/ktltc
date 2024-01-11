// import na1 from "../../../assets/ข่าวประกาศ/na1.png";
import na1 from "@assets/ข่าวประกาศ/na1.png";
import na2 from "@assets/ข่าวประกาศ/na2.png";
import na3 from "@assets/ข่าวประกาศ/na3.png";
import na4 from "@assets/ข่าวประกาศ/na4.png";
import na5 from "@assets/ข่าวประกาศ/na5.jpg";
import na6 from "@assets/ข่าวประกาศ/na6.png";
import img1 from "@assets/ข่าวประกาศ/na1.png";
import img2 from "@assets/ข่าวประกาศ/na2.png";
import img3 from "@assets/ข่าวประกาศ/na3.png";
import img4 from "@assets/ข่าวประกาศ/na4.png";
import img5 from "@assets/ข่าวประกาศ/na5.jpg";
import img6 from "@assets/ข่าวประกาศ/na5.1.jpg";
import img7 from "@assets/ข่าวประกาศ/na7.png";

import {
  ListOfThoseWhoPassedTheAssessment,
  ListOfThoseWhoPassedTheSelection,
  OneRecruitingPeople,
  ProductivityReport,
  RecruitingConstructionTeachers,
  RecruitingPeople,
} from "../../homepage/ข่าวประกาศ/Story";
import { ApplyForStudy } from "../../homepage/ข่าวประกาศ/Story";

export const NewsAnnouncement = [
  {
    name: `รายชื่อผู้ผ่านการเลือกสรรและสรรหาเพื่อจัดจ้างเป็นพนักงานราชการทั่วไป`,
    backgroundImage: na6,
    review: `21 ธันวาคม 2566 `,
    url: <ListOfThoseWhoPassedTheSelection />,
  },
  {
    name: `รายชื่อผู้ที่ผ่านการประเมินสมรรถนะครั้งที่ ๑ (สอบข้อเขียน) และมีสิทธิเข้ารับการประเมินสมรรถนะครั้งที่ ๒ (สัมภาษณ์)`,
    backgroundImage: na6,
    review: `15 ธันวาคม 2566 `,
    url: <ListOfThoseWhoPassedTheAssessment />,
  },
  {
    name: `รายงานผลิตผลของสถานศึกษา ( สผ.5 ) ประจำปีงบประมาณ 2566`,
    backgroundImage: na5,
    review: ` `,
    url: <ProductivityReport />,
  },
  {
    name: `ประกาศวิทยาลัยเทคนิคกันทรลักษ์ เรื่องรับสมัครบุคคลเพื่อสรรหาและเลือกสรรเป็นพนักงานราชการทั่วไป`,
    backgroundImage: na1,
    review: ` `,
    url: <OneRecruitingPeople />,
  },
  {
    name: `ประกาศวิทยาลัยเทคนิคกันทรลักษ์`,
    backgroundImage: na2,
    review: `การรับสมัครบุคคลเข้าศึกษาต่อระดับประกาศนียบัตรวิชาชีพ (ปวช.) และระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)  ประจำปีการศึกษา  2567`,
    url: <ApplyForStudy />,
  },
  {
    name: `ประกาศวิทยาลัยเทคนิคกันทรลักษ์`,
    backgroundImage: na3,
    review: `เรื่อง รับสมัครบุคคลเพื่อสรรหาและเลือกสรรเป็นพนักงานราชการทั่วไป`,
    url: <RecruitingPeople />,
  },
  {
    name: `ประกาศวิทยาลัยเทคนิคกันทรลักษ์`,
    backgroundImage: na4,
    review: `เรื่อง ประกาศรับสมัครครูพิเศษสอน (แผนกวิชาช่างก่อสร้าง)`,
    url: <RecruitingConstructionTeachers />,
  },
];

export const Data6 = [
  {
    img6: img7,
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

export const Data4 = [
  {
    img4: img4,
  },
];
export const Data5 = [
  {
    img5: img5,
  },
  {
    img5: img6,
  },
];
