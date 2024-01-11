import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data10 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function ColorThreeBar() {
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
                  ค่ำคืนเเห่งความศักดิ์สิทธ์ครั้งนี้ กับกิจกรรม "ประดับแถบ 3 สี"
                  ให้กับลูกเสือชั้นปีที่ 1
                </div>
                <p className="text-xs">
                  ข้าลูกเสือ เชื้อไทย ใจเคารพ ขอน้อมนบ บาทบงสุ์ พระทรงศรี พระบาท
                  มงกุฎเกล้า จอมเมาลี ทรงปราณี ก่อเกื้อ ลูกเสือมา ทรงอุตส่าห์
                  อบรม บ่มนิสัย ให้มีใจ รักชาติ ศาสนา ทรงสั่งสอน สรรพกิจ วิทยา
                  เป็นอาภา ผ่องพุทธ วุฒิไกร ดังดวงจันทร์ ทราทิตย์ ประสิทธิ์แสง
                  กระจ่างแจ้ง แจ่มภพ สบสมัย พระคุณนี้ จะสถิตย์ สนิทใน ดวงหทัย
                  ทวยราษฎร์ ไม่คลาดเอย ค่ำคืนเเห่งความศักดิ์สิทธ์ครั้งนี้
                  กับกิจกรรม "ประดับแถบ 3 สี" ให้กับลูกเสือชั้นปีที่ 1
                  #เทคนิคกันทร์ ผู้กำกับทุกนายเติมไปด้วยความยินดี ความรัก
                  ความไว้ใจ รอยยิ้ม เเละคำสัญญา
                  ให้กับลูกเสือทุกนายที่จะได้ประดับเเถบในครั้งนี้
                  ที่จะปฏิบัติหน้าที่ของลูกเสือเป็นอย่างดี “ด้วยเกียรติของข้า
                  ข้าสัญญาว่า ข้อ 1 ข้าจะจงรักภักดีต่อชาติ ศาสนา พระมหากษัตริย์
                  ข้อ 2 ข้าจะช่วยเหลือผู้อื่นทุกเมื่อ ข้อ 3
                  ข้าจะปฏิบัติตามกฎของลูกเสือ” คณะผู้บริหาร ครู บุคลากร
                  วิทยาลัยเทคนิคกันทรลักษ์
                  ขอให้สิ่งศักดิ์สิทธ์จงปกปักคุ้มครองลูกเสือทุกนายให้ผ่านพ้นไปด้วยดี
                  วิทยาลัยเทคนิคกันทรลักษ์
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
                    {Data10.map((Data10) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl "
                          style={{
                            backgroundImage: `url(${Data10.img10})`,
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
