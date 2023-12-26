import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data7 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function MeetTheLongJourney() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2">
          <Typography className="font-normal">
            <>
              <div className="text-xl text-center">
                พบกับการเดินทางไกลของ🐯🐯กลุ่มลูกเสือ
              </div>
              <p className="text-xs">
                เช้าวันที่ 17 พฤศจิกายน 2566 #เทคนิคกันทร์
                พบกับการเดินทางไกลของ🐯🐯กลุ่มลูกเสือ
                ที่ต้องผจญภัยเก็บดวงดาวตามจุดต่าง ๆให้ครบ 🐯🐯ลูกเสือ
                เเละผู้กำกับทุกนาย สนุกสนานเต็มเปรียมไปด้วยความสุข
                ความสามัคคีของหมู่คณะ พร้อมเจออุปสรรคทุกอย่างที่เกิดขึ้น
                พัฒนาเรียนรู้การใช้ชีวิต เเก้ปัญหา 🐯🐯คณะผู้บริการ ครู
                เจ้าหน้าที่ บุคลากร วิทยาลัยเทคนิคกันทรลักษ์
                ขออวยพรให้ลูกเสือทุกนายปลอดภัย ผ่านพ้นอุปสรรคที่อยู่ตรงหน้า
                เเละขอให้กิจกรรมครั้งนี้ผ่านไปได้ด้วยดี เจอกันตอนเย็นกับ
                กิจกรรมเปิดกองลูกเสือ 🐯
                <br />
                เมื่อวันที่ 17 พฤศจิกายน 2566
              </p>
              <Link
                className="text-lg"
                to="https://drive.google.com/drive/folders/1P2p88Nc3wuFCpev_ALRM3DRZq1t7iJDz"
              >
                รูปภาพเพิ่มเติม
              </Link>
              <div className=" justify-center flex-col ">
                <div>
                  {Data7.map((Data7) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl  "
                        style={{
                          backgroundImage: `url(${Data7.img7})`,
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
