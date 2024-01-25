/* eslint-disable no-irregular-whitespace */

import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data83 } from "@components/database/Database";

export function Backdrop() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">นางสาวทักษิณา ชมจันทร์</div>
              <p className="text-xs">
                ได้รับเกียตริจาก นางสาวทักษิณา ชมจัทนร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ <br />
                👉กล่าวเปิดงานการประชุม เเละสัมมนาปฏิบัติการเชิงวิชาชีพ เรื่อง
                "การจัดตกเเต่ง Backdrop ในโอกาสต่าง ๆ " เเละ
                "โครงการส่งเสริมบุคลิกภาพของพนักงานบริการ" ประจำปีงบประมาน 2566{" "}
                <br />
                👉มอบเกียรติบัตร เเละของที่ระลึกให้กับ นายวิเชตศักดิ์ ไชยสุนทร
                (ครูพี่อ๊อฟ) เป็นวิทยากรให้ความรู้ในการจัดดอกไม้/โครงสร้างต่าง ๆ
                <br />
                👉มอบเกียรติบัตรสำหรับ นักเรียน นักศึกษา ปวช. เเละ ปวส.
                ที่ผ่านการอบรมโครงสร้างการส่งเสริมบุคลิกภาพของพนักงานบริการ{" "}
                <br />
                ทั้งนี้วิทยาลัยเทคนิคกันทรลักษ์ ขอขอบคุณทุกฝ่าย
                เเละขอขอบคุณนายวิเชตศักดิ์ ไชยสุนทร (ครูพี่อ๊อฟ)
                ที่สละเวลามาให้ความรู้ในครั้งนี้ <br />
                วันที่ 25 มกราคม 2567 ณ เเผนกวิชาการโรงเเรม
                วิทยาลัยเทคนิคกันทรลักษ์
              </p>

              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data83.map((Data83) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data83.img83})`,
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
