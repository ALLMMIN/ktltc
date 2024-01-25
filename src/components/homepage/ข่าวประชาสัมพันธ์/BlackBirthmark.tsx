// BlackBirthmark

import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data78 } from "@components/database/Database";

export function BlackBirthmark() {
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
                ถ้าครูยังสอนเด็กด้วยเนื้อหาวันนี้
              </div>
              <p className="text-xs">
                "ถ้าครูยังสอนเด็กด้วยเนื้อหาวันนี้ แบบเมื่อวันวาน เท่ากับว่า
                กำลังจะขโมยอนาคตวันพรุ่งนี้ ของเด็กๆ ไป
                เราต้องสร้างเด็กอาชีวะวันนี้ เพื่อสร้างประเทศเข้มแข็งในวันหน้า"
                เรืออากาศโทสมพร ปานดำ รองเลขาธิการคณะกรรมการอาชีวศึกษา
              </p>

              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data78.map((Data78) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data78.img78})`,
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
