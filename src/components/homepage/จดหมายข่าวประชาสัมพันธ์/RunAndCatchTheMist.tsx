import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data8 } from "@components/database/ImgNew";

export function RunAndCatchTheMist() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">10 ธันวาคม 2566 </div>
              <p className="text-xs">
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                พร้อมคณะผู้บริหาร คณะครูวิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                เข้าร่วมกิจกรรมการเเข่งขัน เดิน - วิ่ง มินิฮาล์ฟมาราธอน
                สู่อุทยานเเห่งชาติเขาพระวิหาร ครั้งที่ 26 ประจำปีงบประมาณ 2567
                “วิ่งคว้าหมอก หยอกตะวัน MO E-DANG RUN 2023” เข้าสู่เส้นชัย
                ในวันอาทิตย์ ที่ 10 ธันวาคม 2566 ณ อุทยานเเห่งชาติเขาพระวิหาร
                ต.เสาธงชัย อ.กันทรลักษ์ จ.ศรีสะเกษ
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data8.map((Data8) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
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
    </>
  );
}
