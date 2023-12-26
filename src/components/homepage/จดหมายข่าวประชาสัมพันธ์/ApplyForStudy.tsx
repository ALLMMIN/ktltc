import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data1 } from "@components/database/ImgNew";

export function ApplyForStudy() {
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
                เปิดการรับสมัครบุคคลเข้าศึกษาต่อ
              </div>
              <p className="text-xs">
                อย่าปล่อยโอกาสให้หลุดมือ วิทยาลัยเทคนิคกันทรลักษ์ มีดีทุกด้าน
                ต้องลอง‼️ เปิดการรับสมัครบุคคลเข้าศึกษาต่อ เเต่ละสาขาวิชา
                📌ระดับประกาศนียบัตรวิชาชีพ #ปวช
                📌ระดับประกาศนียบัตรวิชาชีพชั้นสูง #ปวส ⚠️พลาดไม่ได้เเล้ว
                #มาเรียนเทคนิคกันทร์ ใบสมัครออนไลน์ กดลิงค์ที่นี่ <br />
                10 พฤศจิกายน 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data1.map((Data1) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data1.img1})`,
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
