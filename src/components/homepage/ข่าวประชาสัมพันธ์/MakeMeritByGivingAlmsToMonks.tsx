import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data16 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function MakeMeritByGivingAlmsToMonks() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className=" ">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  กิจกรรมทำบุญตักบาตร วันครบรอบ ๑๑ ปี
                </div>
                <p className="text-xs">
                  ภาพบรรยากาศช่วงเช้า กิจกรรมทำบุญตักบาตร วันครบรอบ ๑๑ ปี
                  การเปลี่ยนชื่อสถาบัน วิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                  🟠🔵 ในวันที่ ๒๑ พฤศจิกายน ๒๕๖๖ ณ
                  โดมอเนกประสงค์วิทยาลัยเทคนิคกันทรลักษ์
                  🙏ขออานิสงส์แห่งบุญนี้ส่งผลให้ คณะผู้บริหาร คณะครู
                  บุคลากรทุกฝ่าย นักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                  เเละผู้มีจิตศรัทธาทั้งหลายที่ร่วมบุญในวันนี้
                  จงดลบันดาลบุญให้ท่านและครอบครัวจงมีแต่ความสุข
                  ความเจริญรุ่งเรือง ก้าวหน้าในชีวิต มีโชคลาภ มีสุขภาพดี
                  ขอให้บุญกุศลจากการทำบุญในครั้งนี้จงประสบผลแก่ผู้ที่ร่วมทำบุญทุกท่าน
                  จงพบแต่ความสุขความเจริญ คิดจะทำการสิ่งใด
                  ขอให้สมหวังและสำเร็จทุกคนทุกท่านเทอญ วิทยาลัยเทคนิคกันทรลักษ์
                  <br />
                  เมื่อวันที่ 21 พฤศจิกายน 2566
                </p>
                <Link
                  className="text-lg"
                  to="https://drive.google.com/drive/folders/1PcgozxbKKuRJzwNqcz35DWoHDeBqWgJX"
                >
                  รูปภาพเพิ่มเติม
                </Link>
                <div className=" justify-center flex-col ">
                  <div>
                    {Data16.map((Data16) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl  "
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
      </div>
    </>
  );
}
