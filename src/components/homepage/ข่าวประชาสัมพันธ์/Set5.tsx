import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data71 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function Set5() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center"> Set 5</div>
              <p className="text-xs">
                Set 5 พบกับบรรยากาศช่วงเช้าของวันที่ 19 มกราคม 2567
                พิธีเปิดงานกีฬาสีภายในนักเรียน นักศึกษา " ดอกจานเกมส์ " รู้เเพ้
                รู้ชนะ รู้อภัย นักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                👉ได้รับเกียตริจาก นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                เป็นประธานในพิธีเปิดงานกีฬาสีในครั้งนี้ พร้อมด้วยบรรยากาศ
                นักกีฬาอาวุโสได้กล่าวคำปฏิญาณของนักกีฬา นักกีฬาวิ่งคบเพลิง
                เเละการเดินขบวนเคารพท่านประธานของเหล่านักเรียน นักศึกษา
              </p>
              <Link
                className="text-lg"
                to="https://drive.google.com/drive/folders/1DOCOly_wqOFXMdkHZpv5C2YR4GDZIMop?fbclid=IwAR0TLCxbV00zfjT1Kv3wAjQOHGRnLLYP9MYI8eknJh80n6xdPf8_OfLeMwI"
              >
                รูปภาพเพิ่มเติม
              </Link>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data71.map((Data71) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data71.img71})`,
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
