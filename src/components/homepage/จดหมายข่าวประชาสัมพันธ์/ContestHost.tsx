import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data13 } from "@components/database/ImgNew";

export function ContestHost() {
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
                โครงการชุมชนบำบัดอย่างยั่งยืนในตำบลแพร่ระบาดยาเสพติดสูงสุด 100
                ตำบลตามนโยบายเร่งด้วนของรัฐ
              </div>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทรลักษ์
                ได้รับมอบป้ายเจ้าภาพจัดการแข่งขันสิ่งประดิษฐ์ของคนรุ่นใหม่
                ระดับอาชีวศึกษาจังหวัด ประจำปีการศึกษา 2567 จาก ดร.ณัฐวิชญ์
                ศิริรัชฎานันท์ ผู้อำนวยการสำนักงานอาชีวศึกษาจังหวัดศรีสะเกษ
                วิทยาลัยเทคนิคกันทรลักษ์
                เป็นเกียรติอย่างยิ่งที่ได้รับเป็นเจ้าภาพในการจัดประกวด
                พร้อมยินดีต้อนรับทุกท่าน
                <br />
                15 ธันวาคม 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data13.map((Data13) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px] ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data13.img13})`,
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
