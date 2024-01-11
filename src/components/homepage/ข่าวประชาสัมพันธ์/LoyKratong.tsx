import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data18 } from "@components/database/Database";

export function LoyKratong() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className=" ">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  🔸สุขสันต์วันลอยกระทง🔸
                </div>
                <p className="text-xs">
                  ลอยกระทงลงน้ำใส พร้อมตั้งใจตั้งจิตอธิฐาน ขอขมาต่อแม่พระคงคา
                  ที่ลูกยาใช้น้ำอย่างฟุ่มเฟือย ต่อจากนี้ลูกน้อยขอตั้งจิต
                  ลูกจะคิดก่อนใช้ทุกแห่งหน ขอแม่นั้นเชื่อใจไม่ทุกข์ทน
                  ขอลูกจงสุขสำราญตลอดไป ๒๗ พฤศจิกายน ๒๕๖๖
                  🔸สุขสันต์วันลอยกระทง🔸
                  วิทยาลัยเทคนิคขอเป็นส่วนหนึ่งในการสืบทอดประเพณีที่งดงาม
                  กราบขอขมาพระแม่คงคาขอพระแม่คงคาโปรดนำพาความเป็นสิริมงคลและความเจริญรุ่งเรืองมาสู่ชีวิตของชาววิทยาลัยเทคนิคกันทรลักษ์
                  ด้วยเทอญ คณะผู้บริหาร ครู บุคลากรวิทยาลัยเทคนิค
                  ขออวยพรให้นักเรียน - นักศึกษา จงเที่ยวงานวันลอยกระทงอย่างมีสติ
                  เกิดความสุข ความทุกข์ความโศกโรคภัยทั้งหลายจงลอยออกไป
                  ขอให้มีแต่ ความสุขสดใส ลอยเข้ามาในชีวิต
                </p>

                <div className=" justify-center flex-col ">
                  <div>
                    {Data18.map((Data18) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl  "
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
      </div>
    </>
  );
}
