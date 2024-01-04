import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data41 } from "@components/database/Database";

export function ChristmasDay1() {
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
                ( Set 1) เทศกาลเเห่งความสุขกลับมาอีกครั้ง
              </div>
              <p className="text-xs">
                เมื่อวันที่ 27 ธันวาคม 2566
                วิทยาลัยเทคนิคกันทรลักษ์ได้จัดกิจกรรมเทศกาล (Thai and West
                Traditional) รวม เทศกาลฮาโลวีน ผีตาโขน
                สารทเดือนสิบเเละประเพณีรำผีฟ้า เเละโครงการวันคลิสต์มาส
                (Christmas Day) ได้รับเกียรติจาก นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ ได้กล่าวเปิดงานกิจกรรม (Thai
                and West Traditional) เเห่งความสุข พร้อมคณะรองผู้อำนวยการ
                ทั้งนี้ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                ได้เป็นเกียรติมอบใบประกาศพร้อมเงินรางวัล
                ให้กับผู้ที่ชนะการเเข่งขันการประกวด การ์ดอวยพร Christmas Day
                ภาพวาดผีตาโขน เเละภาพถ่ายสุดหลอน ณ โดมอเนกประสงค์
                วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data41.map((Data41) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data41.img41})`,
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
