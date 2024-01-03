import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data44 } from "@components/database/Database";

export function QuotaRound1() {
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
                📍 ประกาศรายชื่อผู้ที่มีสิทธิ์เข้าศึกษาต่อ (โควตารอบ1) ระดับ
                ปวช. เเละ ปวส. ปีการ
              </div>
              <p className="text-xs">
                ศึกษา 2567 วิทยาลัยเทคนิคกันทรลักษ์ ประกาศ ณ วันที่ 29 ธันวาคม
                2566 สามารถดูรายชื่อได้ที่ลิ้งค์นี่
              </p>
              <iframe
                src="https://drive.google.com/file/d/15ZApWzwG5hHTIOsWHViw5qGbQIN7JQWt/preview"
                className="w-[100%] h-[500px] p-4 rounded-[30px] "
                allow="autoplay"
              ></iframe>

              <div className="justify-center flex-col ">
                <div>
                  {Data44.map((Data44) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data44.img44})`,
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
