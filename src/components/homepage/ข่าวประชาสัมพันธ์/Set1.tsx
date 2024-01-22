import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
// import { Data65 } from "@components/database/Database";
import { Data66 } from "@components/database/Database";

export function Set1() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">Set 1</div>
              <p className="text-xs">
                เทคนิคกันทร์ของเเทร่ กับบรรยากาศงานกีฬาสีภายในนักเรียน นักศึกษา
                " ดอกจานเกมส์ " รู้เเพ้ รู้ชนะ รู้อภัย นักเรียน นักศึกษา
                วิทยาลัยเทคนิคกันทรลักษ์ คนเท่ๆ ต้องเจอเด็กเทคนิคกันทร์
                ฮิ้ววววววว วิทยาลัยดี นักเรียนดี การศึกษาครบ ใครจะไปสู้
                เเถมเด็กหน้าตาดี ไม่น้อยหน้าครู 🥰 👉เเล้วพรุ่งนี้ เจอกัน
                กับงานพิธีเปิดพร้อม ขบวนพเหรด กองเชียร์ เเละ รอบชิงชนะเลิศ
                ไว้เจอกับนะครับน้อนๆ
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data66.map((Data66) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data66.img66})`,
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
