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
import { Data81 } from "@components/database/Database";

export function VocationalTraining1() {
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
                เมื่อวันที่ 24 มกราคม 2567
              </div>
              <p className="text-xs">
                โดย นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                มอบหมายให้ นางสาวภวิกา​ โพธิ์​ขาว​ รอง​ผู้​อำนวยการ ฝ่ายวิชาการ
                และนายไพฑูรย์​ พ่อค้า​ หัวหน้างานอาชีวศึกษา​ระบบ​ทวิภาคี
                ติดตามกำกับดูแล​ นักศึกษา​ฝึกงาน​ฝึกอาชีพ​
                นักศึกษา​แผนกวิชาช่างยนต์ และแผนกวิชาช่างไฟฟ้า บริษัท​
                ฮอนด้าโรจิสติกส์​ อยุธยา​ ณ จังหวัดพระนคร​ศรี​อยุธยา​
              </p>

              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data81.map((Data81) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data81.img81})`,
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
