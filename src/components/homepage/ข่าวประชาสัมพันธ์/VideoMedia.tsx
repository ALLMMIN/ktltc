import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import b2 from "@assets/ข่าวประชาสัมพันธ์/39/2.mp4";
import b3 from "@assets/ข่าวประชาสัมพันธ์/39/3.mp4";
import b4 from "@assets/ข่าวประชาสัมพันธ์/39/4.mp4";
import b5 from "@assets/ข่าวประชาสัมพันธ์/39/5.mp4";
import b6 from "@assets/ข่าวประชาสัมพันธ์/39/6.mp4";
import b7 from "@assets/ข่าวประชาสัมพันธ์/41/1.mp4";
import b8 from "@assets/ข่าวประชาสัมพันธ์/41/2.mp4";
import b9 from "@assets/ข่าวประชาสัมพันธ์/41/3.mp4";

export function VideoMedia8() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                เชิญชวนน้องๆมาเรียนการตลาดเยอะๆนะคะ
              </div>
              <p className="text-xs">
                อย่าพึ่งด่วนตัดสินใจเลยคะ เเวะมาฟังพี่ก่อนนะ ❤️ #แผนกวิชาการตลาด
                <br />
                #เเนะนำทางเลือกทางการศึกษา #อาชีวะสร้างชาติ￼
                #สร้างรายได้ในระหว่างเรียน
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b9}></iframe>
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

export function VideoMedia7() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                เข้ามาเป็นครอบครัวเดียวกันกับแผนกการตลาด
              </div>
              <p className="text-xs">
                วิทยาลัยเทคนิคกันทร์ลักษ์ กันนะคะ✍️🏫📚 Nonglak Sricha จัดทำโดย
                นางสาวเนตรนภา เถาว์คำ เลขที่19 <br />
                นางสาวปิ่นมณี จันทร์พรม เลขที่23 แผนกวิชาการตลาด
                #แผนกวิชาการตลาด #วิทยาลัยเทคนิคกันทรลักษ์
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b8}></iframe>
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

export function VideoMedia() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                ผลงานการประกวดทำสื่อวิดีทัศน์
              </div>
              <p className="text-xs">
                ในการนำเสนอประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์ ปีการศึกษา 2567
                ในหัวข้อ "ชวนน้องมาเรียนเทคนิคกันทร์" ของนักเรียน นักศึกษา
                วิทยาลัยเทคนิคกันทรลักษ์ รางวัลรองอันดับ 4 <br />
                👉นางสาวพิชญาภัค บุญเรือง 👉นางสาวบุษกร ถึงปัดชา <br />
                ครูผู้ควบคุม นายสิริปัญญ์ เสริมสิริพิพัฒน์
                <br />
                วิทยาลัยเทคนิคกันทรลักษ์ ขอเเสดงความชื่นชมให้กับผู้จัดทำผลงาน
                เเละผลงาน ฝากเเชร์กันเยอะๆนะค้าบบบบ
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b2}></iframe>
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

export function VideoMedia1() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                ผลงานการประกวดทำสื่อวิดีทัศน์
              </div>
              <p className="text-xs">
                ผลงานการประกวดทำสื่อวิดีทัศน์ในการนำเสนอประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์
                ปีการศึกษา 2567 ในหัวข้อ "ชวนน้องมาเรียนเทคนิคกันทร์"
                ของนักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์ รางวัลรองอันดับ 3{" "}
                <br />
                👉นางสาวพรรณพัชร เทียนเพ็ชร ครูผู้ควบคุม นางสาวปวีณา บุญเสนอ
                วิทยาลัยเทคนิคกันทรลักษ์ ขอเเสดงความชื่นชมให้กับผู้จัดทำผลงาน
                เเละผลงาน ฝากไลค์ กดเเชร์กันเยอะๆนะค้าบบบบ
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b3}></iframe>
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
export function VideoMedia2() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                ผลงานการประกวดทำสื่อวิดีทัศน์
              </div>
              <p className="text-xs">
                ผลงานการประกวดทำสื่อวิดีทัศน์ในการนำเสนอประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์
                ปีการศึกษา 2567 ในหัวข้อ "ชวนน้องมาเรียนเทคนิคกันทร์"
                <br />
                ของนักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                รางวัลรองชนะเลิศอันดับ 2 <br />
                👉นายวุฒิไกร ผิวขาว
                <br />
                👉นายทวิ ปัญชาติ
                <br />
                👉นางสาวพิมพ์วิไล สมาน
                <br />
                👉นางสาวขนิษฐา ไชยโคตร
                <br />
                👉นางสาวขนิษฐา มาระเนตร
                <br />
                👉นางสาวรัตธิยา โททอง
                <br />
                ครูผู้ควบคุม นายชินาธิป พรมชา
                <br />
                วิทยาลัยเทคนิคกันทรลักษ์ ขอเเสดงความชื่นชมให้กับผู้จัดทำผลงาน
                เเละผลงาน ฝากไลค์ กดเเชร์กันเยอะๆนะค้าบบบบ
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b4}></iframe>
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
export function VideoMedia3() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                ผลงานการประกวดทำสื่อวิดีทัศน์
              </div>
              <p className="text-xs">
                ผลงานการประกวดทำสื่อวิดีทัศน์ในการนำเสนอประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์
                ปีการศึกษา 2567 ในหัวข้อ "ชวนน้องมาเรียนเทคนิคกันทร์" <br />
                ของนักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์
                รางวัลรองชนะเลิศอันดับ 1 <br />
                👉นายถิรวิทย์ นาคยอง
                <br />
                👉นางสาวรุจิสา เสริฐวาสนา
                <br />
                👉นางสาวทับทิม นนทะเสน
                <br />
                ครูผู้ควบคุม นาวสาวจิราวรรณ ชอบดี
                <br />
                วิทยาลัยเทคนิคกันทรลักษ์ ขอเเสดงความชื่นชมให้กับผู้จัดทำผลงาน
                เเละผลงาน ฝากไลค์ กดเเชร์กันเยอะๆนะค้าบบบบ
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b5}></iframe>
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
export function VideoMedia4() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                ผลงานการประกวดทำสื่อวิดีทัศน์
              </div>
              <p className="text-xs">
                ผลงานการประกวดทำสื่อวิดีทัศน์ในการนำเสนอประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์
                ปีการศึกษา 2567 ในหัวข้อ "ชวนน้องมาเรียนเทคนิคกันทร์" <br />
                ของนักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์ รางวัลชนะเลิศ
                👉นายเพชรราช นิสระ ครูผู้ควบคุม นาวสาวปวีณา บุญเสนอ
                <br />
                วิทยาลัยเทคนิคกันทรลักษ์ ขอเเสดงความชื่นชมให้กับผู้จัดทำผลงาน
                เเละผลงาน ฝากไลค์ กดเเชร์กันเยอะๆนะค้าบบบบ
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b6}></iframe>
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

import { Data52 } from "@components/database/Database";

export function VideoMedia5() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                วิทยาลัยเทคนิคกันทรลักษ์
              </div>
              <p className="text-xs">
                ขอเเสดงความยินดีกับรางวัล
                กิจกรรมประกวดทำสื่อวิดีทัศน์ในการนำเสนอประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์
                ปีการศึกษา 2567 "ชวนน้องมาเรียนเทคนิคกันทร์" ได้รับเกียรติจาก
                นางสาวทักษิณา ชมจันทร์ ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                ได้มอบเกียรติบัตร เเละให้โอวาทเเก่ผู้ที่ได้รับรางวัล เเละ
                นักเรียน นักศึกษา วิทยาลัยเทคนิคกันทรลักษ์ วันที่ 9 มกราคม 2567
                ณ โดมอเนกประสงค์ วิทยาลัยเทคนิคกันทรลักษ์ <br />
                รางวัลชนะเลิศ
                <br />
                👉นายเพชรราช นิสระ
                <br />
                ครูผู้ควบคุม นาวสาวปวีณา บุญเสนอ
                <br />
                รางวัลรองชนะเลิศอันดับ 1<br />
                👉นายถิรวิทย์ นาคยอง
                <br />
                👉นางสาวรุจิสา เสริฐวาสนา
                <br />
                👉นางสาวทับทิม นนทะเสน
                <br />
                ครูผู้ควบคุม นาวสาวจิราวรรณ ชอบดี
                <br />
                รางวัลรองชนะเลิศอันดับ 2<br />
                👉นายวุฒิไกร ผิวขาว
                <br />
                👉นายทวิ ปัญชาติ
                <br />
                👉นางสาวพิมพ์วิไล สมาน
                <br />
                👉นางสาวขนิษฐา ไชยโคตร
                <br />
                👉นางสาวขนิษฐา มาระเนตร
                <br />
                👉นางสาวรัตธิยา โททอง
                <br />
                ครูผู้ควบคุม นายชินาธิป พรมชา
                <br />
                รางวัลรองอันดับ 3<br />
                👉นางสาวพรรณพัชร เทียนเพ็ชร <br />
                ครูผู้ควบคุม นางสาวปวีณา บุญเสนอ
                <br />
                รางวัลรองอันดับ 4<br />
                👉นางสาวพิชญาภัค บุญเรือง <br />
                👉นางสาวบุษกร ถึงปัดชา
                <br />
                ครูผู้ควบคุม นายสิริปัญญ์ เสริมสิริพิพัฒน์
                <br />
                วิทยาลัยเทคนิคกันทรลักษ์ ขอเเสดงความชื่นชมให้กับผู้จัดทำผลงาน
                เเละผลงาน ฝากกดไลค์ กดเเชร์ VDO
                ในเพจงานประชาสัมพันธ์วิทยาลัยเทคนิคกันทรลักษ์ กันเยอะๆนะค้าบบบบ
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data52.map((Data52) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl hover:scale-110 transition duration-500 cursor-pointer object-cover"
                        style={{
                          backgroundImage: `url(${Data52.img52})`,
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

export function VideoMedia6() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button onClick={handleOpen}>ดูข้อมูลเพิ่มเติม</button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody className="h-[36rem] overflow-scroll mt-2  ">
          <Typography className=" ">
            <>
              <div className="text-xl text-center">
                การตลาดเรียนง่าย รายได้ดี มีงานรองรับ✅👩🏻‍🎓👨🏻‍🎓
              </div>
              <p className="text-xs">
                มาเป็นครอบครัวการตลาดด้วยกันเยอะๆน้าค๊า🥰🩷
                #วิทยาลัยเทคนิคกันทรลักษ์ #แผนกวิชาการตลาด Nonglak Sricha
                ฝากกดไลค์กดแชร์ด้วยนะคะ😍😍😍
              </p>
              <br />
              <div className="justify-center flex-col ">
                <div>
                  <iframe className="w-full aspect-video ..." src={b7}></iframe>
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
