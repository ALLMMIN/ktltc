// VNET3

import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data75 } from "@components/database/Database";

export function VNET3() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">วันที่ 21 มกราคม 2567</div>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทรลักษ์
                ได้ทดสอบทางการศึกษาระดับชาติด้านอาชีวศึกษา (V-NET)
                ด้วยระบบดิจิทัล ปีการศึกษา 2566 ปวช.3 (ช่วงเช้า)
              </p>

              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data75.map((Data75) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data75.img75})`,
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
