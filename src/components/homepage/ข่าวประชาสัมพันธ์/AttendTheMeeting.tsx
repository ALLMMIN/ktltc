import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data27 } from "@components/database/Database";

export function AttendTheMeeting() {
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
                นาางสาวภวิกา โพธิ์ขาว รองผู้อำนวยการฝ่ายวิชาการ
              </div>
              <p className="text-xs">
                วันที่ 7 ธันวาคม 2566 นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ มอบหมายให้ นาางสาวภวิกา
                โพธิ์ขาว รองผู้อำนวยการฝ่ายวิชาการ
                เข้าร่วมประชุมคณะทำงานการขับเคลื่อนพัฒนากำลังแรงงานรองอุตสาหกรรมยานยนต์ไฟฟ้า
                ครั้งที่ 1/2566 ณ สถาบันพัฒนาฝีมือแรงงาน 7 อุบลราชธานี
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data27.map((Data27) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data27.img27})`,
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
