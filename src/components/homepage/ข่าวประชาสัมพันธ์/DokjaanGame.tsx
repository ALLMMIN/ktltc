// DokjaanGame
import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data63 } from "@components/database/Database";

export function DokjaanGame() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">ประชาสัมพันธ์</div>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทรลักษ์ ขอเชิญชวน นักเรียน นักศึกษา ชาวน้ำเงิน
                - เเสด ทุกคน เข้าร่วมกิจกรรม "งานกีฬาภายในดอกจานเกมส์"
                ระหว่างวันที่ 18 - 19 มกราคม 2567 ณ วิทยาลัยเทคนิคกันทรลักษ์
                ร่วมพิธิเปิด 19 มกราคม 2567
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data63.map((Data63) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[auto] py-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data63.img63})`,
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
