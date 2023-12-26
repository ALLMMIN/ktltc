import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data23 } from "@components/database/Database";

export function DeathAnniversary() {
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
                <div className="text-xl text-center">๑ ธันวาคม ๒๕๖๖</div>
                <p className="text-xs">
                  "ยามเยาว์เห็นโลกล้วน แสนสนุก เป็นหนุ่มสาวก็หลงสุข ค่ำเช้า
                  กลางคนเริ่มเห็นทุกข์ สุขคู่กันนอ ตกแก่จึงรู้เค้า
                  ว่าล้วนอนิจจัง" ทรงนิพนธ์โคลงสี่สุภาพไว้บทหนึ่ง เมื่อ พ.ศ.๒๔๗๖
                  ๑ ธันวาคม ๒๕๖๖ เป็นวันคล้ายวันสิ้นพระชนม์
                  ของพลเอกสมเด็จพระเจ้าบรมวงค์เธอ กรมพระยาดำรงราชานุภาพ
                  ภาพบรรยากาศของวิทยาลัยเทคนิคกันทรลักษ์ #เทคนิคกันทร์
                  ได้เข้าร่วมพิธีถวายสักการะพระอนุสาวรีย์
                  พลเอกสมเด็จพระเจ้าบรมวงค์เธอ กรมพระยาดำรงราชานุภาพ
                  เพื่อเป็นการรำลึกถึงพระกรุณาธิคุณของพระองค์ท่าน
                  ที่ได้ทรงทำคุณประโยชน์อย่างใหญ่หลวงเเก่ประเทศชาติ
                  วิทยาลัยเทคนิคกันทรลักษ์
                  <br />๑ ธันวาคม ๒๕๖๖
                </p>

                <div className="justify-center flex-col">
                  <div>
                    {Data23.map((Data23) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center  rounded-xl "
                          style={{
                            backgroundImage: `url(${Data23.img23})`,
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
