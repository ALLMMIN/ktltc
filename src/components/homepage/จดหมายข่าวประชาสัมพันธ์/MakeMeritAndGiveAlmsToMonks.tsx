import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data2 } from "@components/database/ImgNew";

export function MakeMeritAndGiveAlmsToMonks() {
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
                พิธีทำบุญตักบาตร เนื่องในวัน ทำบุญคุณลาน
              </div>
              <p className="text-xs">
                วันที่ ๒๑ พฤศจิกายน ๒๕๖๖ ผสานครบรอบ ๑๑ ปี วันเปลี่ยนชื่อเป็น
                วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทรลักษ์ ล้วนประจักษ์เเหล่งวิชามหาสาร
                เเสนร่มเย็นเด่นสง่าตลอดการ ปณิธานอุดมการเรามั่นคง อีกปีที่มาถึง
                วันครบรอบ ๑๑ ปี การเปลี่ยนชื่อสถาบัน วิทยาลัยเทคนิคกันทรลักษ์
                🟠วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์ จัดกิจกรรมทำบุญตักบาตร
                เนื่องในวันครบรอบ ๑๑ ปี ของการเปลี่ยนชื่อสถาบัน จากวิทยาลัยอาชีพ
                กันทรลักษ์ เป็นวิทยาลัยเทคนิคกันทรลักษ์ นำโดย นางสาวทักษิณา
                ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ คณะผู้บริหาร คณะครู
                บุคลากร เเละนักเรียน นักศึกษา ณ
                โดมอเนกประสงค์วิทยาลัยเทคนิคกันทรลักษ์ ในวันที่ ๒๑ พฤศจิกายน
                ๒๕๖๖
              </p>

              <div className="justify-center flex-col ">
                <div>
                  {Data2.map((Data2) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data2.img2})`,
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
