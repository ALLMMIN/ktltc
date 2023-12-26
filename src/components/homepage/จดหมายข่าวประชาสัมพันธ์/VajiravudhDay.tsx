import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data5 } from "@components/database/ImgNew";

export function VajiravudhDay() {
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
                ๒๕ พฤศจิกายน ๒๕๖๖ วันวชิราวุธ พิธีถวายราชดุดีวันมหาธีราชเจ้า
              </div>
              <p className="text-xs">
                ๒๕ พฤศจิกายน ๒๕๖๖ วันวชิราวุธ พิธีถวายราชดุดีวันมหาธีราชเจ้า
                กองลูกเสือวิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์ โดย
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                มอบหมายให้ นายสมศักดิ์ จันทานิตย์ รองผู้อำนวยการ
                ฝ่ายพัฒนากิจการนักเรียนนักศึกษา เเละ ผู้กำกับ ลูกเสือจิตอาสา
                กองลูกเสือวิสามัญ วิทยาลัยเทคนิคกันทรลักษ์ จำนวน ๑ กอง
                เข้าร่วมพิธีวางพวงมาลา เเละถวายราชดุดี
                เนื่องในวันสมเด็จพระมหาธีรราชเจ้าวชิราวุธ
                ถือเป็นวันคล้ายวันสวรรคต พระบาทสมเด็จพระมงกุฏเกล้าเจ้าอยู่หัว
                รัชกาลที่ ๖ ด้วยน้อมสำนึกในพระมหาธิคุณของพระองค์
                ที่ได้พระราชทานกำเนิดลูกเสือไทย ประจำปี ๒๕๖๖ ณ ค่ายลูกเสือ
                อำเภอกันทรลักษ์
              </p>
              <div className="justify-center flex-col">
                <div>
                  {Data5.map((Data5) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data5.img5})`,
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
