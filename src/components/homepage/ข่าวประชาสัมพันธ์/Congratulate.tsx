import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data18 } from "@components/database/Database";

export function Congratulate() {
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
                  ขอเเสดงความยินดี เเละชื่นชม
                </div>
                <p className="text-xs">
                  1.นางสาวสุชาดา นุจตุรัส บริหารธุรกิจ เทคโนโลยีธุรกิจดิจิทัล
                  2.นางสาวสุรีพร ทองทิพย์ บริหารธุรกิจ การบัญชี
                  ได้เข้าร่วมการประกวดนางนพมาศ ในนามตัวเเทน
                  วิทยาลัยเทคนิคกันทรลักษ์ วันลอยกระทง วันที่ ๒๗ พฤศกิกายน ๒๕๖๖
                  ณ บริเวณสวนเฉลิมพระเกียรติฯ (หนองกวางดีด)
                  <br />
                  วันที่ ๒๗ พฤศกิกายน ๒๕๖๖
                </p>

                <div className=" justify-center flex-col ">
                  <div>
                    {Data18.map((Data18) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl "
                          style={{
                            backgroundImage: `url(${Data18.img18})`,
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
