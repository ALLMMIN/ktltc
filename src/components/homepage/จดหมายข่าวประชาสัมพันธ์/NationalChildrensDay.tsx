import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data19 } from "@components/database/ImgNew";

export function NationalChildrensDay() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                เมื่อวันที่ 13 มกราคม 2567 นางสาวทักษิณา ชมจันทร์
              </div>
              <p className="text-xs">
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ พร้อมด้วย นายสมศักดิ์
                จันทานิตย์ รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียนนักศึกษา คณะครู
                นักเรียน นักศึกษา เเละนักเรียนทุนนวัตกรรมสายอาชีพขั้นสูง
                เข้าร่วมกิจกรรม“วันเด็กเเห่งชาติ”เปิดบูธกิจกรรมให้กับเด็ก
                ๆได้เข้าร่วมอย่างสนุกสนาน มีของรางวัลเยอะเเยะมากมาย ณ
                ศาลเจ้าอำเภอกันทรลักษ์
                <br />ณ วันที่ 13 มกราคม 2567
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data19.map((Data19) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[auto] py-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data19.img19})`,
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
