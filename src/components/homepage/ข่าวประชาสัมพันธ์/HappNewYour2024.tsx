import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data45 } from "@components/database/Database";

export function HappNewYour2024() {
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
                วิทยาลัยเทคนิคกันทรลักษ์ สวัสดีปีใหม่ ๒๕๖๗
              </div>
              <p className="text-xs">
                ในวารดิถีขึ้นปีใหม่ ขออำนาจสิ่งศักดิ์สิทธิ์
                ดลบัลดาลให้ท่านได้พบแต่ความสุข ความเจริญรุ่งเรืองโชคดี มั่งคั่ง
                ร่ำรวย มีกินมีใช้ ตลอดปีและตลอดไป
                <br />
                <br />
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                พร้อมคณะผู้บริหาร นางสาววิภาวรรณ สีเเดด รองผู้อำนวยการ
                ฝ่ายเเผนงานเเละความร่วมมือ นายอาทร ศรีมะณี รองผู้อำนวยการ
                ฝ่ายบริหารทรัพยากร นายสมศักดิ์ จันทานิตย์ รองผู้อำนวยการ
                ฝ่ายพัฒนากิจการนักเรียนนักศึกษา นางสาวภวิกา โพธิ์ขาว
                รองผู้อำนวยการ ฝ่ายวิชาการ ได้มอบคำอวยพรให้เเก่ คณะครู บุคลากร
                นักเรียน - นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์ ทุกคน
                ในวาระขึ้นปีใหม่ ๒๕๖๗
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data45.map((Data45) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data45.img45})`,
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
