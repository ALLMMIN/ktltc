import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data14 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function MoraleTestingBase() {
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
                  กิจกรรมเข้าฐานวิชาการ เเละฐานทดสอบกำลังใจ
                </div>
                <p className="text-xs">
                  พบกับ👉บรรยากาศกิจกรรมเข้าฐานวิชาการ เเละฐานทดสอบกำลังใจ เเล้ว
                  มาชมบรรยากาศความน่ารัก ความคุข ตบก เฮฮา ในการเข้าฐานผจญภัย
                  กับเหล่าผู้กำกับ ลูกเสือ ณ ค่ายลูกเสือวิทยาลัยเทคนิคกันทรลักษ์
                  วันที่ 18 พฤศจิกายน 2566 👉ขอให้ลูกเสือเก็บเกี่ยวความรู้
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
                <div className=" justify-center flex-col ">
                  <div>
                    {Data14.map((Data14) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl"
                          style={{
                            backgroundImage: `url(${Data14.img14})`,
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
