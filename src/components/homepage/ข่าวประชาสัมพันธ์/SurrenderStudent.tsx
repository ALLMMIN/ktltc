import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
// import { Data56 } from "@components/database/Database";
import { Data56 } from "@components/database/Database";

export function SurrenderStudent() {
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
                พบกับบรรยากาศการเข้ามอบตัวนักเรียน
              </div>
              <p className="text-xs">
                นักศึกษา ในโควตา รอบที่ 1 ของวิทยาลัยเทคนิคกันทรลักษ์
                มาเป็นครอบครัวเทคนิคกันทร์นะค้าบบ วันที่ 10 มกราคม 2567 ณ
                โดมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data56.map((Data56) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data56.img56})`,
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
