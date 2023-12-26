import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data40 } from "@components/database/Database";

export function GiveAdvice() {
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
                วิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                👉วิทยาลัยเทคนิคกันทรลักษ์ ขอยินดีตอนรับ นายสุริยา สามเเก้ว
                ครูวิทยาลัยเทคนิคเดชอุดม ที่ได้สละเวลามาให้คำปรึกษาเเก่ ครู
                นักเรียน - นักศึกษา
                ในการประเมินเเละให้คำเเนะนำสิ่งประดิษฐ์ของคนรุ่นใหม่
                เพื่อไปเเข่งขันต่อในระดับภาค ณ วิทยาลัยเทคนิคกาญจนาภิเษกอุดรธานี
                จังหวัดอุดรธานี วันที่ 17 - 19 มกราคม 2567 <br />
                👉วิทยาลัยเทคนิคกันทรลักษ์ ขอขอบพระคุณ นายสุริยา สามเเก้ว
                ครูวิทยาลัยเทคนิคเดชอุดม ที่ได้ให้คำเเนะนำเป็นอย่างดี
                เเละได้ความรู้ที่จะนำไปปรับเเก้ไปอย่างสมบูรณ์เเบบ
                <br />
                👉วิทยาลัยเทคนิคกันทรลักษ์
                ขออวยพรให้ท่านจงมีสุขภาพร่างการที่เเข็งเเรง <br />
                วันที่ 25 ธันวาคม 2566 ณ ห้องประชุมอัฉริยะ อาคารวิทยบริการ
                วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data40.map((Data40) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data40.img40})`,
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
