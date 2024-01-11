import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data50 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function QuotaRoundone() {
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
                ประกาศ ❗️โอกาสกลับมาอีกครั้ง
              </div>
              <p className="text-xs">
                ใครที่สมัครรอบโควตารอบที่ 1 ไม่ทัน ถ้าพึ่งเสียใจไป😍
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์ ได้เปิดรับสมัครรอบโควตา
                รอบที่ 2 👩‍🏭
                <br />
                👉รับสมัครตั้งเเต่วันที่ 2 มกราคม - 29 กุมภาพันธ์ 2567
                <br />
                หลักฐานการสมัคร
                <br />
                1.ใบสมัครที่กรอกข้อความถูกต้องครบถ้วนชัดเจน
                <br />
                2.สำเนาทะเบียนบ้าน จำนวน 1 ฉบับ
                <br />
                3.สำเบาบัตรประจำตัวประชาชนบิดา จำนวน 1 ฉบับ
                <br />
                4.สำเบาบัตรประจำตัวประชาชนมารดา จำนวน 1 ฉบับ
                <br />
                5.สำเบาบัตรประจำตัวประชาชนของนักเรียน - นักศึกษา จำนวน 1 ฉบับ
                <br />
                6.สำเนาหลักฐานเเสดงความสำเร็จการศึกษาตามระดับ ม.3 , ม.6 หรือ
                เทียบเท่า จำนวน 2 ฉบับ หรือ ระเบียนเเสดงผลการเรียน 5 ภาคเรียน
                หรือ ใบรับรองผลการเรียน จำนวน 1 ฉบับ
                <br />
                7.หลักฐานอื่นๆ ที่เเสดงถึงความรู้ ความสามารถพิเศษ
                <br />
                8.หลักฐานการเปลี่ยนชื่อ (ถ้ามี)
                <br />
                9.รูปถ่ายหน้าตรงตามเครื่องเเบบนักเรียน
                นักศึกษาของเเต่ละสถานศึกษา ไม่สวมหมวก เเละเเว่นดำ ขนาด 1 นิ้ว
                จำนวน 3 เเผ่น <br />
                10.สูติบัตร จำนวน 1 เเผ่น
                <br />
                หมายเหตุ‼️
                <br />
                นักเรียนที่สมัครเข้าศึกษาต่อ ในระดับ ปวช. เเละระดับ ปวส.
                ในโควตารอบ2นี้
                สามารถยื่นใบสมัครที่เเนบเอกสารครบเรียบร้อยเเล้วได้ที่ห้องงานทะเบียน
                พร้อมจ่ายเงินค่ามอบตัวได้ที่ห้องการเงินได้เลย
                <br />
                ค่ามอบตัว ระดับ ปวช. จำนวน 1,010 บาท
                <br />
                ค่ามอบตัว ระดับ ปวส. จำนวน 1,310 บาท
                <br />
                ใบสมัครออนไลน์ กดลิงค์ที่นี่ <br />
                ใบสมัครออนไลน์
                <br />
                <Link
                  className="text-lg"
                  to="https://admission.vec.go.th/web/student.htm?mode=init"
                >
                  ใบสมัครออนไลน์
                </Link>
                <br />
                หรือมาสมัครเรียนกับตนเองได้ที่ ห้องทะเบียน ตึกอำนวยการ
                วิทยาลัยเทคนิคกันทรลักษ์ พร้อมยินดีต้ิอนรับทุกท่าน
                <br />
              </p>

              <div className="justify-center flex-col ">
                <div>
                  {Data50.map((Data50) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px] ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data50.img50})`,
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
