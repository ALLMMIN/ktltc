import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data15 } from "@components/database/ImgNew";

export function SummaryOfMeasures() {
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
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                มอบหมายให้
              </div>
              <p className="text-xs">
                นายสมศักดิ์ จันทานิตย์ รองผู้อำนวยการ
                ฝ่ายพัฒนากิจการนักเรียนนักศึกษา โครงการพิเศษฯ นายประดิษฐ์ ใจทรง
                งานปกครอง นายสมาน คำขาว ครูที่ปรึกษา นางสาวล้ำค่า จินาวัลย์
                งานกิจกรรมนักเรียน นักศึกษา นางสาวขนิษฐา เเสงเนตร นางสาวณัฏฐพัชร
                กล้าหาญ เข้าร่วมโครงการปรุมมาตรการ
                เเละเเนวทางการสรา้งความปลอดภัยของนักเรียนระบบออนไลน์ ZOOM
                Meeting
                <br />ณ วันที่ 13 ธันวาคม 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data15.map((Data15) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[auto] py-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data15.img15})`,
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
