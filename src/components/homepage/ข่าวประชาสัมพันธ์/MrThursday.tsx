import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data46 } from "@components/database/Database";

export function MrThursday() {
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
                วันที่ 2 มกราคม 2567 วิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                "ยินดีต้อนรับ" นายพฤหัสบดี ผลวิสุทธิ์ เนื่องในโอกาสบรรจุ
                เเละเเต่งตั้ง ตำเเหน่งครูผู้ช่วย แผนกวิชาอิเล็ดทรอนิกส์ ณ
                วิทยาลัยเทคนิคกันทรลักษ์
                <br />
                <br />
                ภาพบรรยากาศทางวิทยาลัยเทคนิคเดชอุดม คณะผู้บริหาร ครู ได้ส่งมอบ
                นายพฤหัสบดี ผลวิสุทธิ์ เนื่องในโอกาสบรรจุ เเละเเต่งตั้ง
                ตำเเหน่งครูผู้ช่วย ครูแผนกวิชาอิเล็กทรอนิกส์ โดย นางสาวทักษณา
                ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ คณะผู้บริหาร ครู
                เเสดงความ"ยินดีต้อนรับ" มอบช่อดอกไม้ ให้กับ นายพฤหัสบดี
                ผลวิสุทธิ์ ครูแผนกวิชาอิเล็กทรอนิกส์ เเละวิทยาลัยเทคนิคเดชอุดม
                ได้มอบของขวัญสวัสดีปีใหม่ให้กับผู้บริหารวิทยาลัยเทคนิคกันทรลักษ์
                วิทยาลัยเทคนิคกันทรลักษ์ สวัสดีปีใหม่ ๒๕๖๗
                ขออำนาจสิ่งศักดิ์สิทธิ์ ดลบัลดาลให้ท่านได้พบแต่ความสุข
                ความเจริญรุ่งเรืองโชคดี มั่งคั่ง ร่ำรวย มีกินมีใช้
                ตลอดปีและตลอดไป วันที่ 2 มกราคม 2567 ณ วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data46.map((Data46) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data46.img46})`,
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
