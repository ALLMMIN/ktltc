import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Typography } from "@material-tailwind/react";
import { Data24 } from "@components/database/Database";

export function EnterFurtherEducation() {
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
                ขอเเสดงความยินดีเป็นอย่างยิ่งกับนักเรียนนักศึกษา <br />
                วิทยาลัยเทคนิคกันทรลักษ์ ทุกๆคน
              </div>
              <p className="text-xs">
                ก้าวเล็กๆ น้อยๆ ในเเต่ละวัน จะรวมกันเป็นผลลัพธ์ที่ยิ่งใหญ่
                วิทยาลัยเทคนิคกันทร์ ขอส่งต่อผลผลิตที่ยิ่งใหญ่
                "ขอเเสดงความยินดีเป็นอย่างยิ่งกับ"
                <br /> 🟠🔵นายมงคล ชูสวัสดิ์ เเผนกอิเล็กทรอนิกส์ <br />
                🟠🔵นายปรัชญา ไชยภักดี เเผนกอิเล็กทรอนิกส์
                ได้เข้าศึกษาต่อในระดับอุดมศึกษา
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                คณะครุศาสตร์อุตสาหกรรม สาขาวิชาวิศวกรรมไฟฟ้าเเละการศึกษา
                เเขนงวิชาวิศวกรรมอิเล็กทรอนิกส์ เเละโทรคมนาคม <br />
                🟠🔵นายดุจตะวัน พลเสนา เเผนกอิเล็กทรอนิกส์
                ได้เข้าศึกษาต่อในระดับอุดมศึกษา
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
                คณะครุศาสตร์อุตสาหกรรม สาขาเทคโนโลยีคอมพิวเตอร์
                "ขอเเสดงความยินดีเป็นอย่างยิ่งกับ" <br />
                🟠🔵นางสาวอนัญญา บุญเรืองศรี เเผนกช่างก่อสร้าง
                ได้เข้าศึกษาต่อในระดับอุดมศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
                วิทยาเขตขอนเเก่น คณะครุศาสตร์อุตสาหกรรมโยธา <br />
                🟠🔵นางสาวอมีณา ทองสัมฤทธิ์ เเผนกคอมพิวเตอร์ธุรกิจ
                ได้เข้าศึกษาต่อในระดับอุดมศึกษา มหาวิทยาลัยราชภัฏสวนสุนันทา
                คณะวิทยาลัยการจัดการโลจิสติกส์ เเละซัพพลายเซน
                สาขาการจัดการโลจิสติกส์ <br />
                🟠🔵นายวายุการณ์ ศิรินัย เเผนกคอมพิวเตอร์ธุรกิจ
                ได้เข้าศึกษาต่อในระดับอุดมศึกษา มหาวิทยาลัยศรีปทุม
                คณะนิเทศศาสตร์ สาขาสื่อสารการเเสดง
              </p>
              <div className="justify-center flex-col ">
                <div>
                  {Data24.map((Data24) => (
                    <div className="mb-4 group relative shadow-lg rounded-xl px-[144px] py-[144px]  ">
                      <div
                        className="absolute inset-0 bg-cover bg-center rounded-xl "
                        style={{
                          backgroundImage: `url(${Data24.img24})`,
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
