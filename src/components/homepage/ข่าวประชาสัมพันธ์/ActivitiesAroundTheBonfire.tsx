import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data15 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function ActivitiesAroundTheBonfire() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">กิจกรรมรอบกองไฟ🔥</div>
              <p className="text-xs">
                โอ้เมื่อมีไฟ ไฟ ไฟ ลุกขึ้นแจ่มจ้า สุขอุราเมื่อเรามา พร้อมหน้ากัน
                คืนวันนี้มีสุขปลดเปลื้องทุกข์รับความสำราญ
                เธอกับฉันนั้นมาเล่นรอบกองไฟ (ซ้ำ)
                ไฟมันลุกมีความร้อนไม่อาทรความร้อนของไฟ ไฟจะลุกจะร้อนเพียงใด
                สุขฤทัยร่วมวงเฮฮา (ซ้ำ)
                🐯กิจกรรมสำคัญของการเข้าค่ายลูกเสือที่ขาดไม่ได้ คือ
                กิจกรรมรอบกองไฟ🔥#เทคนิคกันทร์ ณ วันที่ 18 พฤศจิกายน 2566 นำโดย
                นางสาววิภาวรรณ สีเเดด รองผู้อำนวยการ ฝ่ายเเผนงานเเละความร่วมมือ
                ประธานกล่าวเปิดงาน รวมถึงผู้ติดตาม คณะผู้บริหาร ครู ผู้กำกับ
                เเละบุคลากร วิทยาลัยเทคนิคกันทรลักษ์
                คณะลูกเสือขอขอบคุณผู้ใหญ่ใจดี นางสาววิภาวรรณ สีเเดด
                รองผู้อำนวยการ ฝ่ายเเผนงานเเละความร่วมมือ
                เเละผู้ที่ไม่ได้เอ่ยนามในครั้งนี้ ที่ได้นำ ขนม น้ำ อาหาร
                มามอบให้ในกิจกรรมรอบกองไฟ คณะลูกเสือขอขอบคุณ คณะผู้บริหาร
                ผู้กำกับ ครู บุคลากร พยาบาล เเม่ครัว ภารโรง พร้อมฝ่ายอื่น
                ๆที่ไม่ได้เอ่ยถึง คอยสนับสนุนกิจกรรม เเละ
                ดูเเลลูกเสือทุกนายเป็นอย่างดี จนสามารถผ่านพ้นกิจกรรมไปด้วยดี
                ลูกเสือ พร้อมกับทีมวิทยาลัยเทคนิคกันทรลักษ์ ขอขอบพระคุณ
                เเละขออวยพรให้ทุกท่านจงมีสุขภาพร่างกายที่เเข็งเเรง
                <br />
                เมื่อวันที่ 18 พฤศจิกายน 2566
              </p>
              <Link
                className="text-lg"
                to="https://drive.google.com/drive/folders/1PcgozxbKKuRJzwNqcz35DWoHDeBqWgJX"
              >
                รูปภาพเพิ่มเติม
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data15.map((img15) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${img15.img15})`,
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
