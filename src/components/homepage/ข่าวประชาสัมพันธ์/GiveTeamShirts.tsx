import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data35 } from "@components/database/Database";

export function GiveTeamShirts() {
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
                วิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                เมื่อวันที่ 15 ธันวาคม 2566 วิทยาลัยเทคนิคกันทรลักษ์
                ได้ส่งมอบเสื้อทีม KTLTC One team เข้าร่วมเเข่งขันทักษวิชาชีพ
                ระดับ ปวส. ปวช. ณ จังหวัดนครราชสีมา โดยนายสมศักดิ์ จันทานิตย์
                รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียนนักศึกษา
                เป็นตัวเเทนผู้ส่งมอบให้กับตัวเเทน นักเรียน นักศึกษา
                วิทยาลัยเทคนิคกันทรลักษ์{" "}
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data35.map((Data35) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data35.img35})`,
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
