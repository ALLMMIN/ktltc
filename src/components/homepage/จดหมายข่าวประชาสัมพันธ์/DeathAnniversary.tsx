import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data6 } from "@components/database/ImgNew";

export function DeathAnniversary() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">๑ ธันวาคม ๒๕๖๖</div>
              <p className="text-xs">
                ๑ ธันวาคม ๒๕๖๖ เป็นวันคล้ายวันสิ้นพระชนม์
                ของพลเอกสมเด็จพระเจ้าบรมวงค์เธอ กรมพระยาดำรงราชานุภาพ
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์ นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                มอบให้รองผู้อำนวยการทั้งสี่ฝ่าย เเละคณะครู
                ได้เข้าร่วมพิธีถวายสักการะ พระอนุสาวรีย์
                พลเอกสมเด็จพระเจ้าบรมวงค์เธอ กรมพระยาดำรงราชานุภาพ
                เพื่อเป็นการรำลึกถึงพระกรุณาธิคุณของพระองค์ท่าน
                ที่ได้ทรงทำคุณประโยชน์อย่างใหญ่หลวงเเก่ ประเทศชาติ
                โดยประธานในพิธี นายอนุพงศ์ สุขสมนิตย์
                ผู้ว่าราชการจังหวัดศรีสะเกษ
                ในครั้งนี้วิทยาลัยเทคนิคกันทรลักษ์ได้วางพวงมาลา
                เพื่อเป็นการรำลึกถึงพระกรุณาธิคุณของพระองค์ท่าน วันที่ ๑ ธันวาคม
                ๒๕๖๖ ณ อนุสาวรีย์กรมพระยาดำรงราชานุภาพ
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data6.map((Data6) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data6.img6})`,
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
