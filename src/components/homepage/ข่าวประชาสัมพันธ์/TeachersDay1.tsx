import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data62 } from "@components/database/Database";

export function TeachersDay1() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">๑๖ มกรา มาบรรจบ</div>
              <p className="text-xs">
                ขอน้อมนบ ระลึกคุณ ครูผู้สอน ที่ได้มอบ ความรู้ ความอาทร
                พร่ำพรั่งสอน อบรม บ่มศิษยาครูคือผู้ นำทาง แนะถูกผิด คอยชี้ทิศ
                ให้เดิน ตามปรารถนา ศิษย์ได้ดี อบอุ่นใจ ชื่นอุรา ขอวันทา
                ก้มกราบมา บูชาครู กลับมาอีกครั้ง‼️ภาพบรรยากาศคณะผู้บริหาร ครู
                บุคลากรวิทยาลัยเทคนิคกันทรลักษ์ เข้าร่วมกิจกรรมวันครู นำโดย
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                เพื่อน้อมรำลึก ต่อบูรพาจารย์
                ส่งเสริมเเละยกย่องเชิดชูเกียรติครูเเละผู้ประกอบวิชาชีพ
                ทำบุญตักบาตรอาหารเเห้งเเก่พระสงฆ์ กราบขอพรเเก่ครูผู้อาวุโส
                เเละกิจกรรม "พี่น้อง พ้องเพื่อน.....ชาวอาชีวะ"
                กีฬาอาชีวะสัมพันธ์ อาชีวศึกษาจังหวัดศรีสะเกษ ประจำปีการศึกษา
                ๒๕๖๗ ๑๖ มกราคม ๒๕๖๗ ณ วิทยาลัยเทคนิคศรีสะเกษ
                <br />
                วันอังคารที่ ๑๖ มกราคม ๒๕๖๗ <br />
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data62.map((Data62) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[200px] py-[200px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data62.img62})`,
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
