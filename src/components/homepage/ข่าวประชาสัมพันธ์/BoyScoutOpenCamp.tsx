import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data8 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function BoyScoutOpenCamp() {
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
                  พบกับการเดินทางไกลของ🐯🐯กลุ่มลูกเสือ
                </div>
                <p className="text-xs">
                  บรรยากาศช่วงบ่ายวันที่ 17 พฤศจิกายน 2566 #เทคนิคกันทร์
                  ลูกเสือได้การเดินทางไกลผจญภัย ลูกเสือ เเละผู้กำกับทุกนาย
                  ได้เริ่มเข้าสู่ค่ายลูกเสืออย่างเป็นทางการ
                  เเละเตรียมที่พักอาศัย ก่อนที่จะเริ่มกิจกรรมเปิดกองลูกเสือ 🐯
                  <br />
                  เมื่อวันที่ 17 พฤศจิกายน 2566
                </p>
                <Link
                  className="text-lg"
                  to="https://drive.google.com/drive/folders/1P2p88Nc3wuFCpev_ALRM3DRZq1t7iJDz"
                >
                  รูปภาพเพิ่มเติม
                </Link>
                <div className="justify-center flex-col">
                  <div>
                    {Data8.map((Data8) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center  rounded-xl "
                          style={{
                            backgroundImage: `url(${Data8.img8})`,
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
