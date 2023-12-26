import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data16 } from "@components/database/ImgNew";

export function FixItCenter() {
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
                เมื่อ วันที่ 25 ธันวาคม 2566 วิทยาลัยเทคนิคกันทรลักษ์
                เทคนิคกันทร์
              </div>
              <p className="text-xs">
                นำโดย นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                มอบหมายให้ นายสมศักดิ์ จันทานิตย์ รองผู้อำนวยการ
                ฝ่ายพัฒนากิจการนักเรียนนักศึกษา
                นำครูและนักเรียนนักศึกษาออกให้บริการซ่อมเครื่องมือ
                เครื่องจักรทางการเกษตร ยานพาหนะ เครื่องใช้ไฟฟ้า
                เครื่องใช้ในครัวเรือน ตามโครงการอาชีวะอาสาช่วยประชาชน fix it
                Center ณ ศาลาประชาคมหมู่บ้าน ต.ภูเงิน อ.กันทรลักษ์ จ.ศรีสะเกษ
                วันที่ 25 ธันวาคม 2566
                <br />ณ วันที่ 25 ธันวาคม 2566
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data16.map((Data16) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[auto] py-[300px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data16.img16})`,
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
