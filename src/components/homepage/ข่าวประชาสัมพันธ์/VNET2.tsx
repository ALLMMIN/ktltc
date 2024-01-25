// VNET2
import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data74 } from "@components/database/Database";

export function VNET2() {
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
                {" "}
                👉ประกาศ!!!!!!! ประชาสัมพันธ์
              </div>
              <p className="text-xs">
                ขอเชิญชวน เด็กเทคนิคกันทร์ ปวช. 3🤩🥸😎
                เข้าสอบทางการศึกษาระดับชาติด้านอาชีวศึกษา (V-NET)
                #คนเท่ๆอย่างเราอย่าลืมมาสอบกันเยอะๆนะค้าบ <br /> ‼️‼️ย้ำ !!
                อย่าลืมนำบัตรประจำตัวประชาชน หรือ
                บัตรประจำตัวนักเรียนที่มีรูปถ่าย หรือ
                บัตรที่มีรูปภ่ายที่ทางราชการออกให้
                <br />
                👉อย่าลืมอ่านข้อปฏิบัติในการทดสอบทางการศึกษาระดับชาติด้านอาชีวศึกษา
                (V-NET)ปีการศึกษา 2566 <br />
                👉อย่าลืมดูเวลาเเละวันสอบ วันที่เข้าสอบ
                <br />
                วันที่ 21 เเละ 27 - 28 มกราคม 2567 สนามสอบ ณ
                วิทยาลัยเทคนิคกันทรลักษ์
              </p>

              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data74.map((Data74) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data74.img74})`,
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
