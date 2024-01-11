import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data1 } from "@components/database/Database";

export function LongDialog() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className=" ">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  วิทยาลัยเทคนิคกันทรลักษ์
                </div>
                <p className="text-xs">
                  วิทยาลัยเทคนิคกันทรลักษ์ เข้าร่วมประชุมการแข่งขันทักษะวิชาชีพ
                  <br />
                  เมื่อวันที่ 7 พฤศจิกายน 2566
                </p>
                <div className="justify-center flex-col ">
                  <div>
                    {Data1.map((Data1) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl "
                          style={{
                            backgroundImage: `url(${Data1.img1})`,
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
      </div>
    </>
  );
}
