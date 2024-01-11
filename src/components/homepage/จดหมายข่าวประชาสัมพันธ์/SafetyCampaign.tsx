import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data18 } from "@components/database/ImgNew";

export function SafetyCampaign() {
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
                เมื่อ วันที่ 28 ธันวาคม 2566 นางสาวทักษิณา ชมจันทร์
              </div>
              <p className="text-xs">
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                เข้าร่วมการจัดกิจกรรมรฌรงค์ความปลอดภัยในการใช้รถใช้ถนน
                “ขับขี่ปลอดภัย เมืองไทยไรอุบัติเหตุ” พร้อมกับ นายสมศักดิ์
                จันทานิตย์ รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียนนักศึกษา คณะครู
                นักเรียน นักศึกษา
                เข้าร่วมเพื่อเตรียมความพร้อมในการป้องกันเเละลดอุบัติเหตุทางถนน
                ช่วงเทศกาลปีใหม่2567 เเละการขับเคลื่อนวาระจังหวัดศรีสะเกษ
                ในประเด็น 256 วัน ศรีสะเกษขับขี่ปลอดภัย
                โดยเน้นการปรับเปลี่ยนนิสัย ทั้งนี้ นายสุกิจ เหลืองสกุลไทย
                นายอำเภอกันทรลักษ์ เป็นประธาน
                ในพิธีเปิดกิจกรรมรฌรงค์ความปลอดภัยในการใช้รถใช้ถนน วันที่ 28
                ธันวาคม 2566 ณ ที่ว่าการอำเภอกันทรลักษ์ พร้อมคณะ ณ วัดโนนสูง
                ต.กระเเซง อ.กันทรลักษ์ จ.ศรีสะเกษ
                <br />ณ วันที่ 28 ธันวาคม 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data18.map((Data18) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[auto] py-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data18.img18})`,
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
