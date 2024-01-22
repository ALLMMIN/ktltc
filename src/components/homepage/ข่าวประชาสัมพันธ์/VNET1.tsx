import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
// import { Data65 } from "@components/database/Database";
import { Data65 } from "@components/database/Database";

export function VNET1() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center"> 18 มกราคม 2567 </div>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทรลักษ์
                ได้เข้ารับการตรวจเยี่ยมติดตามสนามสอบทางการศึกษาระดับชาติด้านอาชีวศึกษา
                (V-NET) โดย นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ นางสาวภวิกา โพธิ์ขาว
                รองผู้อำนวยการ ฝ่ายวิชาการ คณะครู วิทยาลัยเทคนิคกันทรลักษ์
                ได้เข้าต้อนรับ นายวินัย จันทรเกษม ผู้เชี่ยวชาญฯ พร้อมคณะ
                เข้าตรวจเยี่ยมติดตามสนามสอบทางการศึกษาระดับชาติด้านอาชีวศึกษา
                (V-NET) ปีการศึกษา 2566 ระหว่างวันที่ 18 -20,25 มกราคม 2567
                เพื่อติดตามดำเนินงานของสนามสอบให้เป็นไปตามมาตราฐานการทดสอบทางการศึกษาระดับชาติ
                สทศ. กำหนด ณ สนามสอบวิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data65.map((Data65) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data65.img65})`,
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
