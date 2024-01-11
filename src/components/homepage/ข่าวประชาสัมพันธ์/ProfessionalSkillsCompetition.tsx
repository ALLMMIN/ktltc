import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data5 } from "@components/database/Database";

export function ProfessionalSkillsCompetition() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  คณะผู้บริหาร วิทยาลัยเทคนิคกันทรลักษ์
                </div>
                <p className="text-xs">
                  วิทยาลัยเทคนิคกันทรลักษ์ นำโดย นางสาวทักษิณา ชมจันทร์
                  ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ นายอาทร ศรีมะณี
                  รองผู้อำนวยการ ฝ่ายบริหารทรัพยากร นายสมศักดิ์ จันทานิตย์
                  รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียนนักศึกษา นางสาววิภาวรรณ
                  สีเเดด รองผู้อำนวยการ ฝ่ายเเผนงานเเละความร่วมมือ นางสาวภวิกา
                  โพธิ์ขาว รองผู้อำนวยการ ฝ่ายวิชาการ
                  📍กล่าวเปิดการเเข่งขันทักษะวิชาชีพ สาขาวิชาช่างก่อสร้าง
                  สาขาวิชาโยธา ระดับ ปวช. เเละเยี่ยมชมนักเรียน นักศึกษา
                  ในการเเข่งขัน โดยมีการเเข่งขันประเภท - ทักษะงานปูน -
                  ทักษะงานไม้เเละงานสี - ทักษะงานสำรวจ -
                  ทักษะการสำรวจเพื่อการก่อสร้าง - ทักษะงานคอนกรีต -
                  ทักษะประมาณราคาเเละงานก่อสร้าง ระดับ ปวช. เเละ ปวส. ณ
                  วิทยาลัยเทคนิคศรีสะเกษ วันที่ ๑๕ พฤศจิกายน ๒๕๖๖
                  <br />
                  เมื่อวันที่ 15 พฤศจิกายน 2566
                </p>
                <div className=" justify-center flex-col ">
                  <div>
                    {Data5.map((Data5) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl  "
                          style={{
                            backgroundImage: `url(${Data5.img5})`,
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
