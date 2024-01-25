/* eslint-disable no-irregular-whitespace */
// VocationalTraining
import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data80 } from "@components/database/Database";

export function VocationalTraining() {
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
                เมื่อวันที่ 23 มกราคม 2567
              </div>
              <p className="text-xs">
                โดย นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                มอบหมายให้ นางสาวภวิกา​ โพธิ์​ขาว​ รองผู้อำนวยการ ฝ่ายวิชาการ​
                และนายไพฑูรย์​ พ่อค้า​ หัวหน้างานอาชีวศึกษา​ระบบ​ทวิภาคี​
                นิเทศ​กำกับ​ติดตาม​นักศึกษา​ฝึกงาน/ฝึกอาชีพ​
                นักศึกษา​แผนก​วิชาช่างไฟฟ้ากำลัง​แผนกวิชาช่างอิเล็กทรอนิกส์​
                แผนกวิชาช่างกลโรงงาน บริษัท​โทโฮกุ​ โซลูชั่น​ส์ จำกัด ณ
                จังหวัดพระนคร​ศรี​อยุธยา​
              </p>

              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data80.map((Data80) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data80.img80})`,
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
