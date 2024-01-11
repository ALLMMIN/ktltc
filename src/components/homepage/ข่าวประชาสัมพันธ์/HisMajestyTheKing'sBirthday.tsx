import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data25 } from "@components/database/Database";

export function HisMajestyTheKingsBirthday() {
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
                วันคล้ายวันพระบรมราชสมภพ พระบาทสมเด็จพระบรมชนกาธิเบศร
                มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร
              </div>
              <p className="text-xs">
                "เฉลิมพระชนม์ เฉลิมชัย ชโยฤกษ์ บายศรีเบิก ฟ้าสีทอง ผ่องเวหน
                พระบุญญา พระบารมี พระฯภูมิพล เกริกสกล ภูมิแผ่นดิน ภิญโญไทย" ๕
                ธันวาคม ๒๕๖๖ เป็นภาพบรรยากาศพิธีวันคล้ายวันพระบรมราชสมภพ
                พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                ได้เข้าร่วมพิธีเจริญพุทธมนต์ทำบุญตักบาตรถวายพระราชกุศล
                เเละพิธีวางพานพุ่มดอกไม้ถวายราชสักการะ ณ
                สำนักงานอำเภอกันทรลักษ์#เทคนิคกันทร์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data25.map((Data25) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data25.img25})`,
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
