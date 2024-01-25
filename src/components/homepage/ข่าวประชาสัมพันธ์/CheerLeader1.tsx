// CheerLeader

import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import C2 from "@assets/ข่าวประชาสัมพันธ์/57/2.mp4";

export function CheerLeader1() {
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
                ผู้นำเชียร์ เเละกองเชียร์ งานกีฬาสีภายในนักเรียน นักศึกษา
              </div>
              <p className="text-xs">
                "ดอกจานเกมส์ "วิทยาลัยเทคนิคกันทรลักษ์ ปีการศึกษา 2566 <br />
                คคณะสีฟ้า ผู้นำเชียร์ รางวัลชนะเลิศ 🥇 กองเชียร์ - Stand Cheer
                รองชนะเลิศอันดับ 1 🥈
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={C2}></iframe>
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
