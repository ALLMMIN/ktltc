import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data9 } from "@components/database/ImgNew";

export function MeetingToExplain() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                เข้าร่วมประชุมชี้แจงการขับเคลื่อนการจัดการอาชีวศึกษาระบบทวิภาคี
              </div>
              <p className="text-xs">
                วันอังคาร ที่ 12 ธันวาคม 2566 <br />
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                เข้าร่วมประชุมชี้แจงการขับเคลื่อนการจัดการอาชีวศึกษาระบบทวิภาคี
                ประจำปีงบประมาณ พี่.ศ.2567 ภาคตะวันออกเฉียงเหนือ ณ
                วิทยาลัยเทคนิคร้อยเอ็ด จังหวัดร้อยเอ็ด <br /> โดย นายวิทวัต
                ปัจจมะวัต
                รองเลขาธิการคณะกรรมการการอาชีวศึกษาประธานเปิดการประชุมและมอบนโยบายการขับเคลื่อนฯ
                พร้อมด้วย ว่าที่พันตรีวัชรพล ลักษณลม้าย
                ผู้อำนวยการวิทยาลัยเทคนิคฉะเชิงเทรา
                ปฏิบัติหน้าที่ผู้อำนวยการศูนย์อาชีวศึกษาทวิภาคี
                รายงานผลการดำเนินงานไตรมาสที่ 1
                ชี้แจงการดำเนินงานขับเคลื่อนการจัดการอาชีวศึกษาระบบทวิภาคี
                ระดับภูมิภาค แบ่งกลุ่มWork Shop
                นำเสนอแผนการขับเคลื่อนแต่ละกลุ่มจังหวัด
                และแผนการรับนักศึกษาทวิภาคของแต่ละสถานศึกษา ซึ่งแบ่งเป็น3กลุ่ม
                คือ กลุ่มจังหวัดปกติ กลุ่มจังหวัดเข้มข้น
                และกลุ่มวิทยาลัยเกษตรและวิทยาลัยสารพัดช่าง
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data9.map((Data9) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data9.img9})`,
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
