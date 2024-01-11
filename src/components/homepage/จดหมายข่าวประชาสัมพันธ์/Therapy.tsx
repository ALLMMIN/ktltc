import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data12 } from "@components/database/ImgNew";

export function Therapy() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                โครงการชุมชนบำบัดอย่างยั่งยืนในตำบลแพร่ระบาดยาเสพติดสูงสุด 100
                ตำบลตามนโยบายเร่งด้วนของรัฐ
              </div>
              <p className="text-xs">
                เมื่อ วันที่ 18 ธันวาคม 2566 นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ มอบหมายให้ นายอาทร ศรีมะณี
                รองผู้อำนวย ฝ่ายบริหารทรัพยากร พร้อมคณะผู้บริหาร คณะครู
                วิทยาลัยเทคนิคกันทรลักษ์
                เข้าร่วมกิจกรรมโครงการชุมชนบำบัดอย่างยื่นในตำบลแพร่ระบาดยาเสพติดสูงสุด
                100 ตำบลตามนโยบาย เร่งด่วนของรัฐบาล ระหว่างเดือน ธันวาคม 2566
                ถึง เมษายน 2567 เป็นระยะเวลา 4 เดือน เพื่อนำความสุขไปสู่ลูกหลาน
                เเก้ไขปัญหายาเสพติด กระบวนการป้องกัน เเละบำบัด
                โดยการมีส่วนร่วมกับชุมชน สร้าง รูปเเบบความเข้มเเข็ง
                ในการเเก้ไขปัญหาอย่างยั่งยืน ณ หอประชุมโรงเรียน กระเเชงวิทยา
                ตำบลกระเเวง อำเภอกันทรลักษ์ จังหวัดศรีสะเกษ
                <br />
                18 ธันวาคม 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data12.map((Data12) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data12.img12})`,
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
