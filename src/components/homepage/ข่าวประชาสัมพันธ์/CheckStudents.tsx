import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data28 } from "@components/database/Database";

export function CheckStudents() {
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
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                วันศุกร์ ที่ 8 ธันวาคม 2566 นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ นำ นายสมศักดิ์ จันทานิตย์
                รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียนนักศึกษา
                และคณะครูที่ปรึกษา เข้าตรวจนักเรียน นักศึกษา
                ที่มาพร้อมกับสายรถรับส่ง
                ตรวจตามมาตราการรักษาความปลอดภัยในสถานศึกษา
                โดยให้สถานศึกษาทุกเเห่งประกาศให้พื้นที่ในสถานศึกษาเป็นเขตปลอดอาวุธทุกชนิด
                (อาวุธปืน) ตามนโยบาย ของ สอศ. ณ วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data28.map((Data28) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data28.img28})`,
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
