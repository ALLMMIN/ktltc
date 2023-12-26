import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data11 } from "@components/database/Database";
import { Link } from "react-router-dom";

export function OpenTheScoutTroop() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="">
        <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
        <Dialog open={open} handler={handleOpen}>
          <DialogBody className="h-[36rem] overflow-scroll mt-2">
            <Typography className="font-normal">
              <>
                <div className="text-xl text-center">
                  นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                  กล่าวเปิดกองลูกเสือ
                </div>
                <p className="text-xs">
                  เราเข้าค่าย ลูกเสือ ถึงไกลบ้าน ประสบการณ์ สนุก สุขใจเหลือ
                  อยู่กับเพื่อน ฝึกฝน ต่างจุนเจือ คอยอื้อเฟื้อ ทุกข์สุข ดูแลกัน
                  บรรยากาศการเปิดกองลูกเสือประจำวันที่ 18 พฤศจิกายน 2566
                  #เทคนิคกันทร์ โดย นางสาวทักษิณา ชมจันทร์
                  ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ กล่าวเปิดกองลูกเสือ
                  เเละให้โอวาทเเก่ลูกเสือทุกนาย
                  <br />
                  เมื่อวันที่ 18 พฤศจิกายน 2566
                </p>
                <Link
                  className="text-lg"
                  to="https://drive.google.com/drive/folders/1P2p88Nc3wuFCpev_ALRM3DRZq1t7iJDz"
                >
                  รูปภาพเพิ่มเติม
                </Link>
                <div className=" justify-center flex-col ">
                  <div>
                    {Data11.map((Data11) => (
                      <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center rounded-xl"
                          style={{
                            backgroundImage: `url(${Data11.img11})`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </Typography>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="blue-gray" onClick={handleOpen}>
              ย้อนกลับ
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
}
