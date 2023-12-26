import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data2 } from "@components/database/Database";

export function MiniMarKet() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  ตลาดมินิ วิทยาลัยเทคนิคกันทรลักษ์
                </div>
                <p className="text-xs">
                  ห้ามพลาด สาขางานการตลาด ขอเชิญชวน นักเรียน - นักศึกษา บุลลากร
                  ไปเที่ยวชม ชิม อุดหนุน ช็อป ได้ที่ตลาดมินิ
                  ตรงข้ามโดมอเนกประสงต์ วิทยาลัยเทคนิคกันทรักล์
                  ของหลากหลายมากมาย ลูกชิ้น ยำขนมจีน ขนมปังปิ้ง หมึกย่าง และอื่น
                  ๆ เจอกันอีกวันพรุ้งนี้
                  <br />
                  เมื่อวันที่ 9 พฤศจิกายน 2566
                </p>
                <div className=" justify-center flex-col ">
                  <div>
                    {Data2.map((Data2) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
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
          <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              ย้อนกลับ
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
