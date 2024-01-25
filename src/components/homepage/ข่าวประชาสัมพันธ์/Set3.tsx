import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data69 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function Set3() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center"> Set 3</div>
              <p className="text-xs">
                พบกับบรรยากาศช่วงเช้าของวันที่ 19 มกราคม 2567
                งานกีฬาสีภายในนักเรียน นักศึกษา " ดอกจานเกมส์ " รู้เเพ้ รู้ชนะ
                รู้อภัย นักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                เดินชบวนพาเหรดของเเต่ละสี นำเสนอเป็นขบวนสืบสานประเพณี
                ความเป็นอยู่ของชนเผ่าต่าง ๆในจังหวัดศรีสะเกษทั้งหมด 4 เผ่า คือ
                เผ่าลาว เผ่าเสวย เผ่าเขมร เผ่าเยอ
                ทุกสีจัดหนักจัดเต็มไปด้วยความอลังการ ที่คนเท่ๆ
                ต้องเจอเด็กเทคนิคกันทร์ ฮิ้ววววววว วิทยาลัยดี นักเรียนดี
                การศึกษาครบ ใครจะไปสู้ เเถมเด็กหน้าตาดี ไม่น้อยหน้าครู 🥰 <br />
                ฝากกดไลค์ กดเเชร์กันเยอะๆนะค้าบบบ ให้เขารู้ว่าเทคนิคกันทร์คนเท่
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
                  {Data69.map((Data69) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data69.img69})`,
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
