import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data4 } from "@components/database/ImgNew";

export function DrivingSkills() {
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
                การจัดการแข่งขันทักษะขับขี่ปลอดภัย
              </div>
              <p className="text-xs">
                วันที่ 23 พฤศจิกายน 2566 นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                เข้าร่วมการจัดการแข่งขันทักษะขับขี่ปลอดภัย นายสง่า แต่เชื้อสาย
                ผู้ช่วยเลขาธิการคณะกรรมการการอาชีวศึกษา
                เป็นประธานในพิธีเปิดการแข่งขัน ทักษะขับขี่ปลอดภัย
                ระดับภาคคะวันออกเฉียงเหนือ ครั้งที่33 โดยมี นายสมเกียรติ
                หงส์เทศากร หัวหน้าเจ้าหน้าที่บริหารกลุ่มส่งเสริมการขับขี่ปลอดภัย
                บริษัท ไทยฮอนด้า จำกัด นาย กิตติพล เกียรติสุรนนท์
                รองกรรมการผู้จัดการ เกียรติสุรนนท์ กรุ๊ป
                พร้อมด้วยคณะผู้บริหารสถานศึกษา ครู เเละบุคลากรทางการศึกหา ณ
                ศูนย์ฝึกขับขี่ปลอดภัยฮอนด้า เกียจติสุรนนท์ยโสธร จ.อุบลราชธานี
                ในระหว่างวันที่ 21 -23 พฤศจิกายน 2566
                ทั้งนี้เพื่อการพัฒนาคุณภาพทักษะการขับขี่
                รวมทั้งการเเลกเปลี่ยนความรู้ซึ่งกันเเละกัน
                เพื่อจะได้เผยเเพร่ความรู้
                การขับขี่ปลอดภัยสู่สังคมอย่างมีประสิทธิภาพสูงสุด
                เเละสืบไปอย่างยั่งยืน
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data4.map((Data4) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data4.img4})`,
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
