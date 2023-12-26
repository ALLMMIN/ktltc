import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data11 } from "@components/database/ImgNew";

export function PromoteHealthOfTheElderly() {
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
                วันจันทร์ที่ 18 ธันวาคม 2566
              </div>
              <p className="text-xs">
                วันจันทร์ที่ 18 ธันวาคม 2566 นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ มอบหมาย ให้ นายอาทร ศรีมะณี
                รองผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                เข้าร่วมโครงการชุมชนบำบัดอย่างยั่งยืนในตำบลแพร่ระบาดยาเสพติดสูงสุด
                100 ตำบลตามนโยบายเร่งด่วนของรัฐบาล ณ โรงเรียนกระแซงวิทยา
                ต.กระแซง อ.กันทรลักษ์ จ.ศรีสะเกษ
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data11.map((Data11) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data11.img11})`,
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
