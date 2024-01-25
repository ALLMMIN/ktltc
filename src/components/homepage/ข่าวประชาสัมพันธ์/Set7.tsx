import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data73 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function Set7() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center"> Set 7</div>
              <p className="text-xs">
                Set 7 พบกับบรรยากาศช่วงเช้าของวันที่ 19 มกราคม 2567
                งานกีฬาสีภายในนักเรียน นักศึกษา " ดอกจานเกมส์ " รู้เเพ้ รู้ชนะ
                รู้อภัย นักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์ ผู้นำเชียร์
                เเละกองเชียร์ งานกีฬาสีภายในนักเรียน นักศึกษา "ดอกจานเกมส์
                "วิทยาลัยเทคนิคกันทรลักษ์ ปีการศึกษา 2566 <br />
                บรรยากาศการมอบรางวัลกีฬาเเต่ละประเภท โดย นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการเทคนิคกันทรลักษ์ มอบหมายให้ นายอาทร ศรีมะณี
                รองผู้อำนวยการฝ่ายบริหารทรัพยากร นายสมศักดิ์ จันทานิตย์
                รองผู้อำนวยการฝ่ายพัฒนากิจการนักเรียน นักศึกษา นางสาวภวิกา
                โพธิ์ขาว รองผู้อำนวยการฝ่ายวิชาการ ขึ้นมอบรางวัลให้เเก่นักเรียน
                นักศึกษา เเละได้รับเกียรติจาก นายสมศักดิ์ จันทานิตย์
                รองผู้อำนวยการฝ่ายพัฒนากิจการนักเรียน นักศึกษา
                กล่าวปิดงานกีฬาสีภายในนักเรียน นักศึกษา " ดอกจานเกมส์ " รู้เเพ้
                รู้ชนะ รู้อภัย นักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                ปีการศึกษา 2566 ไว้เจอกันปีหน้านะค้าบบบบบบ 🥰🥰
              </p>
              <Link
                className="text-lg"
                to="https://drive.google.com/drive/folders/1DOCOly_wqOFXMdkHZpv5C2YR4GDZIMop?fbclid=IwAR0TLCxbV00zfjT1Kv3wAjQOHGRnLLYP9MYI8eknJh80n6xdPf8_OfLeMwI"
              >
                รูปภาพเพิ่มเติม
              </Link>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data73.map((Data73) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data73.img73})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          </Typography>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            ย้อนกลับ
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
