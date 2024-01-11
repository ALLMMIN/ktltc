import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data51 } from "@components/database/Database";
import { Data53 } from "@components/database/Database";
import { Data54 } from "@components/database/Database";

export function Congratulations1() {
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
                ก้าวเล็กๆ น้อยๆ ในเเต่ละวัน จะรวมกันเป็นผลลัพธ์ที่ยิ่งใหญ่
              </div>
              <p className="text-xs">
                VideoMedia VideoMedia วิทยาลัยเทคนิคกันทร์
                ขอส่งต่อผลผลิตที่ยิ่งใหญ่ "ขอเเสดงความยินดีเป็นอย่างยิ่งกับ"
                นายภาสวุฒิ ป้อมหิน เเผนกไฟฟ้ากำลัง
                ได้เข้าศึกษาต่อในระดับอุดมศึกษา มหาวิทยาลัยราชภัฏอุบลราชธานี
                คณะเกษตรศาสตร์ สาขาสัตวศาสตร์ วิทยาศาสตรบัณฑิต
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data51.map((Data51) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data51.img51})`,
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

export function Congratulations2() {
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
                วิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                ขอเเสดงความยินดีกับ ดร.นิติ นาชิต
                ที่ปรึกษาด้านมาตรฐานอาชีวศึกษาธุรกิจเเละบริการ
                ในโอกาสที่คณะรัฐมนตรี (ครม.)
                ได้เห็นชอบเเต่งตั้งโยกย้ายข้าราชการพลเรือนสามัญให้ดำรงตำเเหน่ง
                รองเลขาธิการสภาการศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                ขอให้ท่านมีสุขภาพร่างกายที่เเข็งเเรงยิ่งยืนนาน
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data53.map((Data53) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data53.img53})`,
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

export function Surrender() {
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
                วิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทรลักษ์ ยินดีต้อนรับ ผู้ปกครอง
                เเละนักเรียน-นักศึกษา เข้ารับการมอบตัว โควตารอบที่ 1 วันที่ 10
                มกราคม 2567 <br />
                ณ โดมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์ <br />
                ⚙️มาเป็นครอบครัวเทคนิคกันทร์ ⚙️
                <br />
                #มาเรียนเทคนิคกันทร์
                <br />
                #เทคนิคกันทร์
                <br />
                #ปวช
                <br />
                #ปวส
                <br />
                #สายอาชีพ
                <br />
                #เทคนิคกันทรลักษ์
                <br />
                #งานประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์
                <br />
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data54.map((Data54) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data54.img54})`,
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
