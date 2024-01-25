import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data79 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function Esport() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                ถ้าครูยังสอนเด็กด้วยเนื้อหาวันนี้
              </div>
              <p className="text-xs">
                ก็มาดิค้าบ น้อนๆ ถึงเวลาเเล้ว ศึกการประชันฝีมือ เด็กเทคนิคกันทร์
                กับกิจกรรม "พร้อมทะยานไปด้วยกัน เพื่อหาสุดยอดนักเเข่ง Esport"{" "}
                <br />
                👉รับสมัครแล้วตั้งแต่วันนี้ถึง 28 ม.ค.2567 เวลา 16.30 น.
                (ไม่เสียค่าใช้จ่ายในการสมัคร) <br />
                แบ่งการแข่งขันเป็น 2 ประเภท ได้แก่
                <br />
                1. นักเรียนนักศึกษาวิทยาลัยเทคนิคกันทรลักษ์
                <br />
                2. นักเรียนระดับชั้นมัธยมศึกษาปีที่ 3 - 6 (ทุกสังกัด
                แต่ต้องเป็นโรงเรียนเดียวกัน) ผู้แข่งขันสามารถสมัครได้เพียง 1
                คนต่อ 1 ทีมเท่านั้น ทีมละไม่น้อยกว่า 5 คน สำรองไม่เกิน 2 คน{" "}
                <br />
                วันแข่งขันจะประกาศให้ทราบภายหลังจากปิดรับสมัครแล้ว
                การแข่งขันรอบคัดเลือกจะแข่งขันแบบออนไลน์ <br />
                วันจันทร์ - ศุกร์ ตั้งแต่ เวลา 16.30 น. วันเสาร์ - อาทิตย์
                ตั้งแต่ เวลา 11.00 น. <br />
                ผู้เข้าร่วมแข่งขัน หากเข้าถึงรอบชิงชนะเลิศ
                ต้องสามารถมาทำการแข่งขันแบบออฟไลน์ ที่วิทยาลัยเทคนิคกันทรลักษ์{" "}
                <br />
                ในวันอาทิตย์ที่ 11 กุมภาพันธ์ 2567
              </p>
              <Link
                className="text-lg"
                to="https://forms.gle/oBfcSbV3so6Ks5w59"
              >
                ลิ้งค์สมัคร
              </Link>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data79.map((Data79) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data79.img79})`,
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
