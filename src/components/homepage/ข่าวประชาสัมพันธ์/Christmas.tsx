import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data38 } from "@components/database/Database";

export function Christmas() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center"></div>
              <p className="text-md">
                Sending the warmest Christmas wishes to you and your family. May
                God shower his choicest blessings on you and your family this
                Christmas🎄🎉🎁
                <br />
                วิทยาลัยเทคนิคกันทรลักษ์ ขอส่งหมอบความสุขให้กับทุกคนในวัน
                Christmas นี้ คณะผู้บริหาร ครู บุคลากร ขออวยพรให้ นักเรียน -
                นักศึกษา ชาว น้ำเงิน - เเสด ทั้งพุทธมติชน เเละ คริสต์ศาสนิกชน
                ขอให้พระเจ้าได้ปกปักคลุมครอง เเละมีความสุขกับการเฉลิมฉลอง อาเมน
                Joy to the World
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data38.map((Data38) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data38.img38})`,
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
