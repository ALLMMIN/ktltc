import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data1 } from "@components/database/ข่าวประกาศ/DataNewsAnnouncement";
import { Data2 } from "@components/database/ข่าวประกาศ/DataNewsAnnouncement";
import { Data3 } from "@components/database/ข่าวประกาศ/DataNewsAnnouncement";
import { Data4 } from "@components/database/ข่าวประกาศ/DataNewsAnnouncement";
import { Data5 } from "@components/database/ข่าวประกาศ/DataNewsAnnouncement";

import { Link } from "react-router-dom";

export function ListOfThoseWhoPassedTheSelection() {
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
                รายชื่อผู้ผ่านการเลือกสรรและสรรหาเพื่อจัดจ้างเป็นพนักงานราชการทั่วไป
              </div>
              <iframe
                src="https://drive.google.com/file/d/1nWS2gKOC7-6AyYQjqLLpslMiSQUZMAAT/preview"
                className="w-[100%] h-[500px] p-4 rounded-[30px] "
                allow="autoplay"
              ></iframe>
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
export function ListOfThoseWhoPassedTheAssessment() {
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
                รายชื่อผู้ที่ผ่านการประเมินสมรรถนะครั้งที่ ๑ (สอบข้อเขียน)
                <br />
                และมีสิทธิเข้ารับการประเมินสมรรถนะครั้งที่ ๒ (สัมภาษณ์)
              </div>
              <Link
                className="text-lg text-red-500"
                to="https://drive.google.com/file/d/1H4V8yCuBga_5f-2sWqp4TtmUbxtyTIrB/view"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
              <iframe
                src="https://drive.google.com/file/d/1H4V8yCuBga_5f-2sWqp4TtmUbxtyTIrB/preview"
                className="w-[100%] h-[500px] p-4 rounded-[30px] "
                allow="autoplay"
              ></iframe>
              {/* <div className="justify-center flex-col ">
                <div>
                  {Data6.map((Data6) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-24 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data6.img6})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div> */}
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

export function ProductivityReport() {
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
                รายงานผลิตผลของสถานศึกษา ( สผ.5 ) ประจำปีงบประมาณ 2566
              </div>

              <Link
                className="text-lg text-red-500"
                to="http://ktltc.ac.th/wp-content/uploads/2023/12/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%AA%E0%B8%9C.5-1.pdf"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
              <br />
              <Link
                className="text-lg text-red-500"
                to="http://ktltc.ac.th/wp-content/uploads/2023/12/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%99-%E0%B8%AA%E0%B8%9C.-2-%E0%B9%81%E0%B8%9C%E0%B9%88%E0%B8%99-2.pdf"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data5.map((Data5) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-24 py-96">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data5.img5})`,
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

export function OneRecruitingPeople() {
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
                ประกาศวิทยาลัยเทคนิคกันทรลักษ์
                เรื่องรับสมัครบุคคลเพื่อสรรหาและเลือกสรรเป็นพนักงานราชการทั่วไป
              </div>
              <p className="text-xs">
                ตำแหน่ง พนักงานบริหารงานทั่วไป (ครู) จำนวน ๑ อัตรา
              </p>
              <Link
                className="text-lg text-red-500"
                to="https://drive.google.com/file/d/1aNODEoITVcEZMb5rlWbgMNmJh2qWpFok/view"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
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

export function ApplyForStudy() {
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
                ประกาศวิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                การรับสมัครบุคคลเข้าศึกษาต่อระดับประกาศนียบัตรวิชาชีพ (ปวช.)
                และระดับประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) ประจำปีการศึกษา 2567
              </p>
              <Link
                className="text-lg text-red-500"
                to="http://ktltc.ac.th/wp-content/uploads/2023/11/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8-2567-1.pdf"
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

export function RecruitingPeople() {
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
                ประกาศวิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                เรื่อง รับสมัครบุคคลเพื่อสรรหาและเลือกสรรเป็นพนักงานราชการทั่วไป
              </p>
              <Link
                className="text-lg text-red-500"
                to="http://ktltc.ac.th/wp-content/uploads/2023/11/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%81%E0%B8%B2.pdf"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data3.map((Data3) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-40">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data3.img3})`,
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

export function RecruitingConstructionTeachers() {
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
                ประกาศวิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                เรื่อง ประกาศรับสมัครครูพิเศษสอน (แผนกวิชาช่างก่อสร้าง)
              </p>
              <Link
                className="text-lg text-red-500"
                to="http://ktltc.ac.th/wp-content/uploads/2023/10/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%AA%E0%B8%AD%E0%B8%99-%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B9%88%E0%B8%AD%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87.pdf"
              >
                ดาวโหลดลิงค์ PDF
              </Link>
              <div className="justify-center flex-col ">
                <div>
                  {Data4.map((Data4) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-40 py-40">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data4.img4})`,
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
