import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data14 } from "@components/database/ImgNew";

export function MrYotphon() {
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
                วิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                Congratulations ขอเเสดงความยินดี กับ นายยศพล เวณุโกเศศ
                ได้รับโปรดเกล้าฯให้ดำรงตำเเหน่ง เลขาธิการคณะกรรมการการอาชีวศึกษา
                สำนักงานคณะกรรมการการอาชีวศึกษา ตั้งเเต่วันที่ ๑๗ ธันวาคม ๒๕๖๖
                เป็นต้นไป วิทยาลัยเทคนิคกันทรลักษ์
                ขอให้ท่านมีสุขภาพร่างกายที่เเข็งเเรงยิ่งยืนนาน
                <br />
                21 ธันวาคม 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data14.map((Data14) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[100px] py-[200px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data14.img14})`,
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
