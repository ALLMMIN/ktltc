import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data7 } from "@components/database/ImgNew";

export function HisMajestyTheKingsBirthday() {
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
                เมื่อวันที่ ๕ ธันวาคม ๒๕๖๖
              </div>
              <p className="text-xs">
                เมื่อวันที่ ๕ ธันวาคม ๒๕๖๖ ซึ่งเป็นวันคล้ายวันพระบรมราชสมภพ
                พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์ นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ มอบให้รองผู้อำนวยการ
                นายสมศักดิ์ จันทานิตย์ รองผู้อำนวยการ
                ฝ่ายพัฒนากิจการนักเรียนนักศึกษา นายอาทร ศรีมะณี รองผู้อำนวยการ
                ฝ่ายบริหารทรัพยากร เเละคณะครู
                ได้เข้าร่วมพิธีเจริญพุทธมนต์ทำบุญตักบาตรถวายพระราชกุศล
                เเละพิธีวางพานพุ่มดอกไม้ถวายราชสักการะ วันที่ ๕ ธันวาคม ๒๕๖๖ ณ
                สำนักงานอำเภอกันทรลักษ์#เทคนิคกันทร์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data7.map((Data7) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data7.img7})`,
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
