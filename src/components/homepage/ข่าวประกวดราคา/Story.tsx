import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data1 } from "@components/database/ข่าวประกวดราคา/DataSwipperBiddingNews";
import { Data2 } from "@components/database/ข่าวประกวดราคา/DataSwipperBiddingNews";
import { Link } from "react-router-dom";

export function OrderToAppointACommittee() {
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
                คำสั่งแต่งตั้งคณะกรรมการ
              </div>
              <p className="text-xs">
                การพิจารณาการกลับจากการฝึกประสบการณ์วิชาชีพและฝึกอาชีพก่อนกำหนด
                ประจำปีการศึกษา 2/2566 (ระบบทวิภาคี)
              </p>
              <div>
                <Link
                  className="text-lg text-red-500"
                  to="http://ktltc.ac.th/wp-content/uploads/2023/10/%E0%B8%84%E0%B8%B3%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%99%E0%B8%B4%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-1.pdf"
                >
                  ดาวโหลดลิงค์ PDF
                </Link>
              </div>
              <div>
                <Link
                  className="text-lg text-red-500"
                  to="http://ktltc.ac.th/wp-content/uploads/2023/10/%E0%B8%84%E0%B8%B3%E0%B8%AA%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%A3%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%9B%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81-1.pdf"
                >
                  ดาวโหลดลิงค์ PDF
                </Link>
              </div>
              <div className="justify-center flex-col ">
                <div>
                  {Data1.map((Data1) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-40">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data1.img1})`,
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

export function DeviceFeatures() {
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
                รายละเอียดคุณลักษณะเฉพาะอุปกรณ์การเรียน
              </div>
              <p className="text-xs">
                รายละเอียดคุณลักษณะเฉพาะอุปกรณ์การเรียนของนักเรียนสายอาชีอาชีวะศึกษา
                ประจำปงบประมาณ 2566
              </p>
              <Link
                className="text-lg text-red-500"
                to="http://ktltc.ac.th/wp-content/uploads/2023/10/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%AD%E0%B8%B5%E0%B8%A2%E0%B8%94%E0%B8%84%E0%B8%B8%E0%B8%93%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B8%B0%E0%B9%80%E0%B8%89%E0%B8%9E%E0%B8%B2%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.pdf"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data2.map((Data2) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-40">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data2.img2})`,
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

export function ElectronicBidding() {
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
                รายละเอียดคุณลักษณะเฉพาะอุปกรณ์การเรียน
              </div>
              <p className="text-xs">
                รายละเอียดคุณลักษณะเฉพาะอุปกรณ์การเรียนของนักเรียนสายอาชีอาชีวะศึกษา
                ประจำปงบประมาณ 2566
              </p>
              <Link
                className="text-lg text-red-500"
                to="http://ktltc.ac.th/wp-content/uploads/2023/10/%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%A7%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%A7%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2.pdf"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data2.map((Data2) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-40">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data2.img2})`,
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
