import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data21 } from "@components/database/Database";

export function VolunteerScout() {
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
                <div className="text-xl text-center">ลูกเสือจิตอาสา</div>
                <p className="text-xs">
                  ลูกเสือจิตอาสา โดย กองลูกเสือวิสามัญ วิทยาลัยกันทรลักษ์
                  #เทคนิคกันทร์ เเละผู้กำกับ
                  ได้ลงพื้นที่ทำความสะอาดบริเวณโดยรอบวิทยาลัยเทคนิคกันทรลักษ์
                  วันที่ 29 พฤศจิกายน 2566
                  <br />
                  เมื่อวันที่ 29 พฤศจิกายน 2566
                </p>

                <div className="justify-center flex-col">
                  <div>
                    {Data21.map((Data21) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-40">
                        <div
                          className="absolute inset-0 bg-cover bg-center  rounded-xl "
                          style={{
                            backgroundImage: `url(${Data21.img21})`,
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
