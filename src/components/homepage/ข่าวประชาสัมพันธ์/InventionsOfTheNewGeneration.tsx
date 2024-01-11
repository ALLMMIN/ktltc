import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data17 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function InventionsOfTheNewGeneration() {
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
                  กิจกรรมการประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่ ระดับสถานศึกษา
                </div>
                <p className="text-xs">
                  ภาพบรรยายกาศ การจัดกิจกรรมการประกวดสิ่งประดิษฐ์ของคนรุ่นใหม่
                  ระดับสถานศึกษา เพื่อส่งประกวดต่อในระดับจังหวัดศรีสะเกษ โดย
                  นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                  มอบหมายให้ นางสาววิภาวรรณ สีเเดด
                  รองผู้อำนวยการฝ่ายเเผนงานเเละความร่วมมือ ประธานกล่าวเปิดงาน
                  มอบใบประกาศเกียรติให้เเก่คณะกรรมการตัดสิน
                  มอบรางวัลให้กับนักเรียน นักศึกษาที่กล้าเเสดงออก
                  เเละเดินชมผลงานสิ่งประดิษฐ์ที่ส่งเข้าประกวด ประเภทที่ 1
                  สิ่งประดิษฐ์ด้านนวัตกรรมเเละเทคโนโลยีการเกษตร
                  อุตสาหกรรมสมัยใหม่ ประเภทที่ 2
                  สิ่งประดิษฐ์ด้านนวัตกรรมเเละเทคโนโลยีดิจิทัล ปัญญาประดิษฐ์
                  ประเภทที่ 3 สิ่งประดิษฐ์ด้านนวัตกรรมเเละเทคโนโลยีพลังงาน
                  สิ่งเเวดล้อม ประเภทที่ 4
                  สิ่งประดิษฐ์ด้านนวัตกรรมเเละเทคโนโลยีอาหาร ประเภทที่ 5
                  สิ่งประดิษฐ์ด้านนวัตกรรมเเละเทคโนโลยีเพื่อสุขภาพ (health care)
                  ประเภทที่ 6
                  สิ่งประดิษฐ์ด้านนวัตกรรมเเละเทคโนโลยีผลิดภัณฑ์เชิงพาณิชย์
                  กิจกรรมเต็มไปด้วยความสุข สนุกสนาน ของคณะผู้บริหาร คณะครู
                  บุคลากร เเละนักเรียน นักศึกษา ณ โดมอเนกประสงค์
                  วิทยาลัยเทคนิคกันทรลักษ์ ในวันที่ 22 พฤศจิกายน 2566
                  <br />
                  เมื่อวันที่ 21 พฤศจิกายน 2566
                </p>
                <Link
                  className="text-lg"
                  to="https://drive.google.com/drive/folders/1j44lnCfRX_4LhfDzKptdisvPAG7dOT-a"
                >
                  รูปภาพเพิ่มเติม
                </Link>
                <div className=" justify-center flex-col ">
                  <div>
                    {Data17.map((Data17) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl  "
                          style={{
                            backgroundImage: `url(${Data17.img17})`,
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
