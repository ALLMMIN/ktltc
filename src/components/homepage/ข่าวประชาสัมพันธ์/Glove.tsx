import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data31 } from "@components/database/Database";

export function Glove() {
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
                ขอแสดวความยินดีกับ แผนกวิชาคอมพิวเตอร์ธุรกิจ
              </div>
              <p className="text-xs">
                การประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่
                การประกวดสิ่งดิษฐ์ด้านนวัตกรรมเทคโนโลยีเพื่อสุขภาพ ระดับจังหวัด
                ถึงมือประคบบรรเทาอาการปวดประจำเดือน
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data31.map((Data31) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data31.img31})`,
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
