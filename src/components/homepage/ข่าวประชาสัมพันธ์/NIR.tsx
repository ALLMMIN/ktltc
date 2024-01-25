import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
// import { Data65 } from "@components/database/Database";
import { Data68 } from "@components/database/Database";

export function NIR() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">ว้าววว</div>
              <p className="text-xs">
                ว้าววว เทคนิคกันทร์ของเเทร่ วิทยาลัยเทคนิคกันทรลักษ์
                ขอเเสดงความยินดีกับ นักเรียน นักศึกษา ครูที่ปรึกษา
                ได้รับรางวัลรองชนะเลิศอันดับ 2 "
                อุปกรณ์วัดความอ่อน-เเก่ของทุเรียน NIR KTL-TC 01 "
                การประกวดเเข่งขันสิ่งประดิษฐ์ของคนรุ่นใหม่ ประเภทที่ 1
                เเละได้รับรางวัล Honor awards สิ่งประดิษฐ์ของคนรุ่นใหม่
                ประเภทที่ 1 ด้านนวัตกรรมเเละเทคโนโลยีการเกษตร อุตสาหกรรมสมัยใหม่
                ระดับภาคตะวันออกเฉียงเหนือ วันที่ 17 - 19 มกราคม 2567 ณ
                วิทยาลัยเทคนิคกาญจนาภิเษกอุดรธานี สำนักงานกรรมการการอาชีวศึกษา
                👉คนเท่ๆเขาได้ไปต่อระดับชาติ‼️🥰 เจอกัน 15 - 18 กุมภาพันธ์ 2567
              </p>

              <div className="justify-center flex-col ">
                <div>
                  {Data68.map((Data68) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data68.img68})`,
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
