import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data47 } from "@components/database/Database";

export function BasicSkillsCompetition() {
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
                วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
              </div>
              <p className="text-xs">
                ขอเเสดงความยินดีกับ การเเข่งขันทักษะพื้นฐาน
                การประกวดวงดนตรีโฟล์คซอง รองชนะเลิศอันดับ 1 เเละ
                การเเข่งขันทักษะวิชาชีพ ทักษะงานเครื่องยนต์เล็กดีเซล
                เเละเครื่องยนต์เล็กเเก๊สโซลีน รองชนะเลิศอันดับ 2
                ได้ไปเเข่งขันต่อในระดับชาติ วันที่5-9 กุมภาพันธ์ 2567 ณ จังหวัด
                สุพรรณบุรี
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data47.map((Data47) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data47.img47})`,
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
