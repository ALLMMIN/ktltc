import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data59 } from "@components/database/Database";

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
                ระชุมเชิงปฏิบัติการชี้แจงหลักเกณฑ์
              </div>
              <p className="text-xs">
                และวิธีการประเมินมาตรฐานวิชาชีพตามหลักสูตรประกาศนียบัตรวิชาชีพและหลักสูตรประกาศนียบัตรวิชาชีพชั้นสูง
                พ.ศ 2566
                สำนักงานคณะกรรมการการอาชีวศึกษากรุงเทพมหานครและผ่านสื่ออิเล็กทรอนิกส์
                ประชุมโดยผ่าน (Zoom Meeting) ระหว่างวันที่ 15-16 มกราคม 2567 ณ
                ห้องประชุมตึกวิทยบริการ วิทยาลัยเทคนิคกันทรลักษ์
                รายชื่อผู้เข้าร่วมประชุม <br />
                1.นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์{" "}
                <br />
                2.นางสาวภวิกา โพธิ์ขาว รองผู้อำนวยการ ฝ่ายวิชาการ
                <br /> 3.ครูคำโฮม คูณสว่าง
                <br /> 4.ครูสิริปัญญ์ เสริมสิริพิพัฒน์
                <br /> 5.ครูมานะศักดิ์ อารมณ์สวะ
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data59.map((Data59) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[200px] py-[200px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data59.img59})`,
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
