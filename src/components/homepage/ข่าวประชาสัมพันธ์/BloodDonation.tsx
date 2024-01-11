import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data26 } from "@components/database/Database";

export function BloodDonation() {
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
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์ คณะผู้บริหาร ครู บุคลากร
                เเละนักเรียน นักศึกษา ได้เข้าร่วม บริจาคโลหิต
                เพื่อช่วยชีวิตเพื่อนมนุษย์
              </div>
              <p className="text-xs">
                เช้าวันที่ 7 ธันวาคม 2566 วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                คณะผู้บริหาร ครู บุคลากร เเละนักเรียน นักศึกษา ได้เข้าร่วม
                "บริจาคโลหิต เพื่อช่วยชีวิตเพื่อนมนุษย์" 💉 โดย
                วิทยาลัยเทคนิคกันทรลักษ์ ร่วมกับ โรงพยาบาลกันทรลักษ์
                ลานบริจาคโลหิต ณ โอมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์
                วิทยาลัยเทคนิคกันทรลักษ์ ขอขอบคุณ Kantharalak hospital :
                โรงพยาบาลกันทรลักษ์
                ที่ได้มอบโอกาสเเละสิ่งดีๆให้กับพวกเราชาวเทคนิคกันทร์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data26.map((Data26) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data26.img26})`,
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
