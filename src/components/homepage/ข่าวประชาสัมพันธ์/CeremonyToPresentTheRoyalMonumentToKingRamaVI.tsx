import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data12 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function CeremonyToPresentTheRoyalMonumentToKingRamaVI() {
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
                  พิธีถวายราชสดุดีพระบรมราชานุสรณ์ รัชการที่ 6
                </div>
                <p className="text-xs">
                  ข้าลูกเสือ เชื้อไทย ใจเคารพ ขอน้อมนบ บาทบงสุ์ พระทรงศรี พระบาท
                  มงกุฎเกล้า จอมเมาลี ทรงปราณี ก่อเกื้อ ลูกเสือมา ทรงอุตส่าห์
                  อบรม บ่มนิสัย ให้มีใจ รักชาติ ศาสนา ทรงสั่งสอน สรรพกิจ วิทยา
                  เป็นอาภา ผ่องพุทธ วุฒิไกร ดังดวงจันทร์ ทราทิตย์ ประสิทธิ์แสง
                  กระจ่างแจ้ง แจ่มภพ สบสมัย พระคุณนี้ จะสถิตย์ สนิทใน ดวงหทัย
                  ทวยราษฎร์ ไม่คลาดเอย 👉กิจกรรมศักดิ์สิทธ์
                  "พิธีถวายราชสดุดีพระบรมราชานุสรณ์ รัชการที่ 6" นำโดย
                  นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                  นายอาทร ศรีมะณี รองผู้อำนวยการ ฝ่ายบริหารทรัพยากร นายสมศักดิ์
                  จันทานิตย์ รองผู้อำนวยการ ฝ่ายพัฒนากิจการนักเรียนนักศึกษา
                  นางสาววิภาวรรณ สีเเดด รองผู้อำนวยการ
                  ฝ่ายเเผนงานเเละความร่วมมือ นางสาวภวิกา โพธิ์ขาว รองผู้อำนวยการ
                  ฝ่ายวิชาการ เเละ ผู้กำกับ ครู บุคลากร ลูกเสือทุกนาย
                  วิทยาลัยเทคนิคกันทรลักษ์
                  เพื่อน้อมรำลึกในพระมหากรุณาธิคุณที่ทรงเป็นผู้พระราชทานกำเนิดลูกเสือไทย
                  <br />
                  เมื่อวันที่ 18 พฤศจิกายน 2566
                </p>
                <Link
                  className="text-lg"
                  to="https://drive.google.com/drive/folders/1P2p88Nc3wuFCpev_ALRM3DRZq1t7iJDz"
                >
                  รูปภาพเพิ่มเติม
                </Link>
                <div className="justify-center flex-col  ">
                  <div>
                    {Data12.map((Data12) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl "
                          style={{
                            backgroundImage: `url(${Data12.img12})`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </Typography>
          </DialogBody>
          <DialogFooter className=" ">
            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              ย้อนกลับ
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
