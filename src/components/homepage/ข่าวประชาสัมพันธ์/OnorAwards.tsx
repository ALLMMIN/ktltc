// OnorAwards

import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data77 } from "@components/database/Database";

export function OnorAwards() {
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
                {" "}
                เช้าวันที่ 23 มกราคม 2567 
              </div>
              <p className="text-xs">
                ได้รับเกียรติจาก นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ <br />
                👉มอบโล่รางวัล Honor awards สิ่งประดิษฐ์ของคนรุ่นใหม่ ประเภทที่
                1 ด้านนวัตกรรมเเละเทคโนโลยีการเกษตร อุตสาหกรรมสมัยใหม่
                <br />
                👉มอบรางวัลรองชนะเลิศอันดับ 2" อุปกรณ์วัดความอ่อน-เเก่ของทุเรียน
                NIR KTL-TC 01 " การประกวดเเข่งขันสิ่งประดิษฐ์ของคนรุ่นใหม่
                ประเภทที่ 1 ระดับภาคตะวันออกเฉียงเหนือ พร้อมเงินทุนการศึกษา
                เเละกล่าวชื่นชมให้โอวาทกับ ครู นักเรียนนักศึกษาที่ไปเเข่งขัน
                เเละนักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์ ณ โดมอเนกประสงค์
                วิทยาลัยเทคนิคกันทรลักษ์ โดยมีนักประดิษฐ์ ดังนี้ <br />
                1. นายยศพล นีละเสน
                <br />
                2.นายธีรนัย วระพุฒ
                <br />
                3.นางสาวสุปราณี วงค์เสน่ห์
                <br />
                4.นางสาวเเสงสายทอง บุญธรรม
                <br />
                5.นางสาวฐิติยาภรณ์ จอมใส
                <br />
                ครูที่ปรึกษา <br />
                1.นางสาววิภาวรรณ สีเเดด รองผู้อำนวยการฝ่ายเเผนงานเเละความร่วมมือ
                <br />
                2.นายกิตติ ผลดี
                <br />
                3.นางวีนัส สุวรรณ
                <br />
                4.นางสาวคำโฮม คูณสว่าง
                <br />
                5.นายประสิทธิ์ จันพูล
                <br />
                👉คนเท่ๆเขาได้ไปต่อระดับชาติ‼️🥰 เจอกัน 15 - 18 กุมภาพันธ์ 2567
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data77.map((Data77) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data77.img77})`,
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
