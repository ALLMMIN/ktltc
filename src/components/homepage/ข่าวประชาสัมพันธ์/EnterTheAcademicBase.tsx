import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data13 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function EnterTheAcademicBase() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className="font-normal">
            <>
              <div className="text-xl text-center">
                กิจกรรมเข้าฐานวิชาการ เเละฐานทดสอบกำลังใจ
              </div>
              <p className="text-xs">
                👉บรรยากาศกิจกรรมเข้าฐานวิชาการ เเละฐานทดสอบกำลังใจ อิอิ นำโดย
                นายสมศักดิ์ จันทานิตย์ รองผู้อำนวยการ
                ฝ่ายพัฒนากิจการนักเรียนนักศึกษา เเละ ผู้กำกับ ครู บุคลากร
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                👉ขอให้ลูกเสือเก็บเกี่ยวความรู้
                ประสบการณ์ที่จะนำไปใช้ในอนาคตอย่างได้อย่างสมบูรณ์เเบบ
                <br />
                เมื่อวันที่ 18 พฤศจิกายน 2566
              </p>
              <Link
                className="text-lg"
                to="https://drive.google.com/drive/folders/1P2p88Nc3wuFCpev_ALRM3DRZq1t7iJDz"
              >
                รูปภาพเพิ่มเติม
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data13.map((Data13) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data13.img13})`,
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
    </>
  );
}
