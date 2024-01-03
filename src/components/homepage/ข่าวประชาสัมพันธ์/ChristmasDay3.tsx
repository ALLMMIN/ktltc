import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data43 } from "@components/database/Database";

export function ChristmasDay3() {
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
                ( Set 2) เทศกาลเเห่งความสุขกลับมาอีกครั้ง
              </div>
              <p className="text-xs">
                มื่อวันที่ 27 ธันวาคม 2566 วิทยาลัยเทคนิคกันทรลักษ์
                ได้จัดกิจกรรมเทศกาล (Thai and West Traditional) รวม
                เทศกาลฮาโลวีน ผีตาโขน สารทเดือนสิบเเละประเพณีรำผีฟ้า
                เเละโครงการวันคลิสต์มาส (Christmas Day)
                ภาพบรรยากาศกิจกรรมเต็มไปด้วยความสุขสนาน มีความสุข
                พบรอยยิ้มเเละเสียงหัวเราะ ของนักเรียน - นักศึกษา
                ทั้งนี้ยังได้รับเกียรติจาก <br />
                👉นางสาววิภาวรรณ สีเเดด รองผู้อำนวยการฝ่ายเเผนงานเเละความร่วมมือ
                มอบเกียรติบัตร พร้อมเงินรางวัลให้กับผู้ที่ชนะการประกวดชุด ซานต้า
                Christmas
                <br />
                👉นางสาวภวิกา โพธิ์ขาว รองผู้อำนวยการฝ่ายวิชาการ มอบเกียรติบัตร
                พร้อมเงินรางวัลให้กับผู้ที่ชนะการประกวดชุดผีฮาโลวีน เเละ
                ผู้ที่ชนะการประกวดรองเพลงสากล
                <br />
                👉นางวีนัส สุวรรณ หัวหน้าเเผนกวิชาสามัญสัมพันธ์ มอบเกียรติบัตร
                พร้อมเงินรางวัลให้กับผู้ที่ชนะการประกวดชุด เเซนตี้ Christmas
                <br />ณ โดมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์
                วิทยาลัยเทคนิคกันทรลักษ์ ขอขอบคุณคณะผู้บริหาร
                คณะครูเเผนกวิชาสามัญสัมพันธ์ คณะครู บุคลากร นักเรียน - นักศึกษา
                ที่ได้จัดกิจกรรมที่มอบความสุขให้กับทุกคน เเละกิจกรรมดีๆเช่นนี้
                ไว้เจอกันปีหน้า วิทยาลัยเทคนิคกันทรลักษ์สวัสดีปีใหม่ 2567
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data43.map((Data43) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data43.img43})`,
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
