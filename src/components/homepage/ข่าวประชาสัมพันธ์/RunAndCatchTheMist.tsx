import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data29 } from "@components/database/Database";

export function RunAndCatchTheMist() {
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
                ภาพบรรยากาศยามเช้าของ วันที่ 10 ธันวาคม 2566
              </div>
              <p className="text-xs">
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                พร้อมคณะผู้บริหาร คณะครูวิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                เข้าร่วมกิจกรรม “วิ่งคว้าหมอก หยอกตะวัน MO E-DANG RUN 2023”
                การเเข่งขันเดิน - วิ่ง มินิฮาล์ฟมาราธอน
                สู่อุทยานเเห่งชาติเขาพระวิหาร ครั้งที่ 26 ประจำปีงบประมาณ 2567 ณ
                อุทยานเเห่งชาติเขาพระวิหาร ต.เสาธงชัย อ.กันทรลักษ์ จ.ศรีสะเกษ
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data29.map((Data29) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data29.img29})`,
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
