import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data4 } from "@components/database/Database";

export function OneTeam() {
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
                <p className="text-xs pb-8">
                  เมื่อวันที่ ๑๕ พฤศจิกายน ๒๕๖๖ คณะผู้บริหาร นางสาวทักษิณา
                  ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ นายอาทร ศรีมะณี
                  รองผู้อำนวยการ ฝ่ายบริหารทรัพยากร นายสมศักดิ์ จันทานิตย์
                  รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียนนักศึกษา นางสาววิภาวรรณ
                  สีเเดด รองผู้อำนวยการ ฝ่ายเเผนงานเเละความร่วมมือ นางสาวภวิกา
                  โพธิ์ขาว รองผู้อำนวยการ ฝ่ายวิชาการ ทีมบุคลากร KTL-TC ONE TEAM
                  เเละนักเรียน นักศึกษา #วิทยาลัยเทคนิคกันทรลักษ์
                  👉เข้าร่วมงานประชุมวิชาการองค์การนักวิชาชีพในอนาคตเเห่งประเทศไทย
                  ระดับจังหวัดศรีสะเกษ ครั้งที่ ๓๓ ประจำปีการศึกษา ๒๕๖๖
                  ระหว่างวันที่ ๑๕ - ๑๖ พฤศจิกายน ๒๕๖๖ ณ วิทยาลัยเทคนิคศรีสะเกษ{" "}
                  <br />
                  เมื่อวันที่ 9 พฤศจิกายน 2566
                </p>
                <div className="justify-center flex-col ">
                  <div>
                    {Data4.map((Data4) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl "
                          style={{
                            backgroundImage: `url(${Data4.img4})`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </Typography>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              ย้อนกลับ
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
