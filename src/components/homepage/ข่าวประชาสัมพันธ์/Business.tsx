import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data60 } from "@components/database/Database";

export function Business() {
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
                ขอประชาสัมพันธ์ ตามศูนย์บ่มเพาะผู้ประกอบการอาชีวศึกษา
                วิทยาลัยเทคนิคกันทรลักษ์
                ได้ดำเนินการส่งเสริมการประกอบอาชีพอิสระในกลุ่มผู้เรียนอาชีวศึกษาให้เเก่นักเรียน
                นักศึกษา ประจำปีการศึกษา 2566
                เพื่อเป็นการเผยเเพร่ประชาสัมพันธ์การดำเนินงานธุรกิจของนักเรียน
                นักศึกษา
                ให้ผู้ที่สนใจสามารถใช้ธุรกิจศูนย์บ่มเพาะผู้ประกอบการอาชีวศึกษา
                เป็นเเหล่งเรียนรู้ศึกษาดูงาน
                ทั้งในหน่วยงานภายในเเละภายนอกสถานศึกษา
                ซึ่งวิทยาลัยเทคนิคกันทรลักษ์จะขอเผยเเพร่ประชาสัมพันธ์ จำนวน 4
                ธุรกิจ ดั้งนี้ <br />
                1.ธุรกิจ Lava Coffee & Be Happy <br />
                เพจ : ธุรกิจ Lava Coffee & Be Happy ธุรกิจเดิม
                เเผนกวิชาการโรงเเรม
                <br />
                2. ธุรกิจสวนผักอิ่มสุข ธุรกิจใหม่ เเผนกวิชาการตลาด <br />
                3. ธุรกิจไอศครีมทุเรียนภูเขาไฟ ธุรกิจใหม่ เเผนกวิชาการตลาด{" "}
                <br />
                4. ธุรกิจสบู่โมจิ ธุรกิจใหม่ เเผนกวิชาการบัญชี <br />
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data60.map((Data60) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[200px] py-[200px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data60.img60 })`,
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
