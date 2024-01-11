import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data20 } from "@components/database/Database";

export function ATP() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className=" ">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  โครงการพัฒนาศักยภาพสู่ความสำเร็จ
                </div>
                <p className="text-xs">
                  นักเรียน นักศึกษา #เทคนิคกันทร์ ได้เข้าฟังการบรรยายจาก ATP
                  โครงการพัฒนาศักยภาพสู่ความสำเร็จ #ฝึกงานประเทศญี่ปุ่น
                  ความสำเร็จของคุณ คือความสำเร็จของเรา
                  ทางวิทยาลัยเทคนิคกันทรลักษ์ ขอขอบคุณที่มอบสิ่งดีๆ
                  เเละโอกาศที่ดีในครั้งนี้
                  <br />
                  เมื่อวันที่ 29 พฤศจิกายน 2566
                </p>

                <div className="justify-center flex-col">
                  <div>
                    {Data20.map((Data20) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center  rounded-xl "
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
      </div>
    </>
  );
}
