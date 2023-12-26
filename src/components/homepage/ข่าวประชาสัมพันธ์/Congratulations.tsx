import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data39 } from "@components/database/Database";

export function Congratulations() {
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
                ขอเเสดงความยินดีกับผู้ที่รับได้รางวัลการประกวด/ประเมินสิ่งประดิษฐ์ของคนรุ่นใหม่
                ระดับอาชีวศึกษาจังหวัดศรีสะเกษ ประจำปีการศึกษา 2566
                โดยวิทยาลัยเทคนิคกันทรลักษ์ ได้รับรางวัล <br />
                🥇รางวัลชนะเลิศ จำนวน 3 รายการ <br />
                🥈รางวัลรองชนะเลิศอันดับ 1 จำนวน <br />
                ได้รับเกียรติจาก นางสาวทักษิณา ชมจันทร์
                ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ ได้มอบเกียรติบัตร
                เเละให้โอวาทเเก่ผู้ที่ได้รับรางวัล เเละ นักเรียน นักศึกษา
                วิทยาลัยเทคนิคกันทรลักษ์ <br />
                วันที่ 25 ธันวาคม 2566 ณ โดมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data39.map((Data39) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data39.img39})`,
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
