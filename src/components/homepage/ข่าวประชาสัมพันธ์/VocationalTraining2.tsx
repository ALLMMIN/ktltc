/* eslint-disable no-irregular-whitespace */

import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data82 } from "@components/database/Database";

export function VocationalTraining2() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">นางสาวทักษิณา ชมจันทร์</div>
              <p className="text-xs">
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ มอบหมายให้ นางสาวภวิกา​
                โพธิ์​ขาว​ รอง​ผู้​อำนวยการ ฝ่ายวิชาการ
                ปฏิบัติ​หน้าที่​เข้าร่วม​ ลงนาม​ MOU. กับบริษั​ท​ ฮอนด้า​
                ออโต​โมบิล​(ประเทศไทย)​ จำกัด​ ตามที่ได้รับมอบหมาย​จาก​
                นางสาวทักษิณา​ ชมจันทร์​ผู้อำนวยการวิทยาลัย​เทคนิค​กันทรลักษ์​
                ในวันที่​ 24​ มกราคม 2567​ ณ​ บริษัทฮอนด้า​
                ออ​โต​โม​บิล​(ประเทศไทย)​ จำกัด​ ณ จังหวัด​พระนคร​ศรี​อยุธยา
              </p>

              <br />
              <div className="justify-center flex-col ">
                <div>
                  {Data82.map((Data82) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data82.img82})`,
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
