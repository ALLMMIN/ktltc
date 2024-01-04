import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data42 } from "@components/database/Database";

export function ChristmasDay2() {
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
                ( Set 2) เทศกาลเเห่งความสุขกลับมาอีกครั้ง
              </div>
              <p className="text-xs">
                เมื่อวันที่ 27 ธันวาคม 2566 วิทยาลัยเทคนิคกันทรลักษ์
                ได้จัดกิจกรรมเทศกาล (Thai and West Traditional) รวม
                เทศกาลฮาโลวีน ผีตาโขน สารทเดือนสิบเเละประเพณีรำผีฟ้า
                เเละโครงการวันคลิสต์มาส (Christmas Day)
                เป็นกิจกรรมการประกวดชุดซานต้า - เเซนตี้ Christmas ชุดผีฮาฮาโลวีน
                เเละประกวดร้องเพลงสากล พร้อมกิจกรรมการเเสดงอีกมากมาย ได้เเก่
                <br />- การเเสดงต้นกำเนิดของวันวันคลิสต์มาส กำเนิดพระเจ้า
                <br /> - การเเสดงต้นกำเนิดวันฮาโลวีน <br />- การเเสดงผีตาโขน
                <br />- การเเสดงรำผีฟ้า ความเชื้อของเผ่าเขมร <br />-
                การเเสดงแซนโฎนตา <br /> ของเหล่านักเรียน - นักศึกษา เเต่ละเเผนก
                กิจกรรมเต็มไปด้วยความสุขสนาน มีความสุข พบรอยยิ้มเเละเสียงหัวเราะ
                ณ โดมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data42.map((Data42) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover "
                        style={{
                          backgroundImage: `url(${Data42.img42})`,
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
