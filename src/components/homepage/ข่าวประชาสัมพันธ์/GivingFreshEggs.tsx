import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data49 } from "@components/database/Database";

export function GivingFreshEggs() {
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
                เช้าวันศุกร์ที่ 5 มกราคม 2567
              </div>
              <p className="text-xs">
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                พร้อมคณะผู้บริการ ได้มอบไข่ไก่สด ให้กับเจ้าหน้าที่ขับรถ รับ -
                ส่ง ประจำของนักเรียน นักศึกษา วิทยาเทคนิคกันทรลักษ์
                เนื่องในขึ้นปีใหม่ 2567 ณ บริเวณลานสำนักงานรถรับ - ส่ง นักเรียน
                นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์ ขอขอบคุณทุกท่านที่ได้ดูเเล
                นักเรียน นักศึกษาของเราปลอดภัยทุกคนในการเดินทาง
                เเละขออวยพรให้ทุกท่านสุขภาพ ร่างกายเเข็งเเรง
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data49.map((Data49) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px] ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data49.img49})`,
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
