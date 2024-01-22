import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data20 } from "@components/database/ImgNew";

export function CertificateOfHonor() {
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
                วันอังคารที่ ๑๖ มกราคม ๒๕๖๗
              </div>
              <p className="text-xs">
                โดย นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                พร้อมคณะผู้บริหาร ครู วิทยาลัยเทคนิคกันทรลักษ์
                เข้าร่วมกิจกรรมวันครู เพื่อน้อมรำลึก ต่อบูรพาจารย์
                ส่งเสริมเเละยกย่องเชิดชูเกียรติครูเเละผู้ประกอบวิชาชีพ
                ทำบุญตักบาตรอาหารเเห้งเเก่พระสงฆ์ เเละกราบขอพรเเก่ครูผู้อาวุโส
                ทั้งนี้ ขอเเสดงความยินดีกับ นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                ได้รับเกียรติบัตรเชิดชูเกียรติ “วันครูอาชีวศึกษา” ประจำปี ๒๕๖๗
                รางวัลผู้บริหารดีเด่น พร้อมด้วยรองผู้อำนวยการทั้ง ๔ ฝ่าย
                ได้รับเกรียติจากประธาน ดร. ณัฐวิชญ์ ศิริรัชฎานันท์
                มอบเกียรติบัตรเชิดชูเกียรติในครั้งนี้ ณ วิทยาลัยเทคนิคศรีสะเกษ
                <br />ณ วันที่ 16 มกราคม 2567
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data20.map((Data20) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[auto] py-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data20.img20})`,
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
