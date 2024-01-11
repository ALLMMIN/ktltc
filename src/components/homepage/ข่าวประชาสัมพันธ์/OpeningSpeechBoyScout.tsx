import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data9 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function OpeningSpeechBoyScout() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  พบกับการเดินทางไกลของ🐯🐯กลุ่มลูกเสือ
                </div>
                <p className="text-xs">
                  บรรยากาศการเปิดกองลูกเสือประจำวันที่ 17 พฤศจิกายน 2566
                  #เทคนิคกันทร์ โดย นายสมศักดิ์ จันทานิตย์ รองผู้อำนวยการ
                  ฝ่านพัฒนากิจการนักเรียนนักศึกษา ในการกล่าวเปิดกอง ลูกเสือ
                  เเละผู้กำกับทุกนาย ได้ปฏิบัติหน้าอย่างเต็มที่ 🐯
                  รูปภาพเพิ่มเติม ดาวน์โหลดได้ที่นี่
                  <br />
                  เมื่อวันที่ 17 พฤศจิกายน 2566
                </p>
                <Link
                  className="text-lg"
                  to="https://drive.google.com/drive/folders/1P2p88Nc3wuFCpev_ALRM3DRZq1t7iJDz"
                >
                  รูปภาพเพิ่มเติม
                </Link>
                <div className=" justify-center flex-col ">
                  <div>
                    {Data9.map((Data9) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl"
                          style={{
                            backgroundImage: `url(${Data9.img9})`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </Typography>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              ย้อนกลับ
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
