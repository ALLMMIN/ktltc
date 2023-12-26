import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data22 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function GraduationPhoto() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className="font-normal">
            <>
              <div className="text-xl text-center">รูปถ่ายรับปริญญา</div>
              <p className="text-xs">
                🧡💙 วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                มาเเจกบรรยากาศที่เต็มไปด้วย ความรัก อบอุ่น กับนักเรียน นักศึกษา
                เป็นที่ภาคภูมิใจของ คณะผู้บริหาร คุณครู เทคนิคกันทร์
                ที่มีต่อศิษย์ ผู้ที่กำลังจะจบการศึกษา ปวช.3 เเละ ปวส.2
                ปีการศึกษา 2566😍
                <br />
                เมื่อวันที่ 30 พฤศจิกายน 2566
              </p>
              <Link
                className="text-lg"
                to="https://drive.google.com/drive/folders/1IYCy5Z5eIIs7UI1xmB6KClv9az7zZzWn?fbclid=IwAR0AQSzlA5ND1nWHik6HFzLZVKm6wCFShcSrZ7giBv6L1QwGEfPr8Ta8Y2Q"
              >
                รูปภาพเพิ่มเติม
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data22.map((Data22) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data22.img22})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            ย้อนกลับ
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
