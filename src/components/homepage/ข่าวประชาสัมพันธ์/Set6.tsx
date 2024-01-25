import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data72 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function Set6() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center"> Set 6</div>
              <p className="text-xs">
                Set 6 วิทยาลัยเทคนิคกันทรลักษ์ นำโดย นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ เเละคณะผู้บริหาร ครู
                บุคลากรทางการศึกษา นักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                ขอบขอพระคุณ ผู้สนับสนุนเเต่ละหน่วยงานที่ให้ความช่วยเหลือ
                มอบทุนสนันสนุน
                เเละวงโยธวาทิตที่ได้บรรเลิงเพลงนำขบวนในกิจกรรมการกีฬาสีภายใน
                "ดอกจานเกมส์" ขอขอบคุณเป็นอย่างสูง ทั้งที่กล่าวนาม
                เเละมิได้กล่าวนาม วิทยาลัยเทคนิคกันทรลักษ์
                ขออวยพรให้ทุกท่านจงมีสุขภาพร่างกายที่เเข็งเเรง
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
                  {Data72.map((Data72) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data72.img72})`,
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
