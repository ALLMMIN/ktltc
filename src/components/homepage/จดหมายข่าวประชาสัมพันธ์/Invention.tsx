import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data3 } from "@components/database/ImgNew";

export function Invention() {
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
                การจัดประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่ ระดับสถานศึกษา
              </div>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                จัดกิจกรรมการประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่ ระดับสถานศึกษา
                เพื่อส่งประกวดต่อในระดับจังหวัดศรีสะเกษ โดย นางสาวทักษิณา
                ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ มอบหมายให้
                นางสาววิภาวรรณ สีเเดด รองผู้อำนวยการฝ่ายเเผนงานเเละความร่วมมือ
                ประธานกล่าวเปิดงาน พร้อม คณะผู้บริหาร คณะครู บุคลากร
                เเละนักเรียน นักศึกษา ณ โดมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์
                ในวันที่ 22 พฤศจิกายน 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data3.map((Data3) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data3.img3})`,
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
