import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import za1 from "@assets/ผู้บริหาร/11.png";
import za2 from "@assets/ผู้บริหาร/22.png";
import za3 from "@assets/ผู้บริหาร/33.png";
import za4 from "@assets/ผู้บริหาร/44.png";
import za5 from "@assets/ผู้บริหาร/55.png";
import { Layout } from "@/Layout";

export const Executive = () => {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">ทำเนียบผู้บริหาร</div>
        <div className="text-md text-glo-100 pl-2 uppercase font-bold text-center">
          ExecutiveDirectory
        </div>
      </div>

      {/* เพิ่มเนื้อหา */}
      <div className="flex justify-center">
        {/* ********************************** เรื่องที่ 1********************************** */}
        <Card className="max-w-[24rem] overflow-hidden text-center">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img src={za1} alt="ui/ux review check" />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              นางสาวทักษิณา ชมจันทร์
            </Typography>
            <Typography variant="lead" color="gray" className="mt-3 text-md">
              ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์ <br /> ปีบริหาร พ.ศ.2566 -
              ปัจจุบัน
            </Typography>
          </CardBody>
        </Card>
      </div>

      <div className="container">
        <div className="qoute flex justify-center">
          {/* ********************************** เรื่องที่ 1********************************** */}
          <Card className="max-w-[24rem] overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={za2} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                นางสาววิภาวรรณ สีเเดด
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-md">
                รองผู้อำนวยการ <br />
                วิทยาลัยเทคนิคกันทรลักษ์
                <br />
                ฝ่ายเเผนงานเเละความร่วมมือ
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="qoute flex justify-center">
          {/* ********************************** เรื่องที่ 1********************************** */}
          <Card className="max-w-[24rem] overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={za3} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                นายสมศักดิ์ จันทานิตย์
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-md">
                รองผู้อำนวยการ <br /> วิทยาลัยเทคนิคกันทรลักษ์
                <br />
                ฝ่ายพัฒนากิจการนักเรียนนักศึกษา
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="qoute flex justify-center">
          {/* ********************************** เรื่องที่ 1********************************** */}
          <Card className="max-w-[24rem] overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={za4} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                นายอาทร ศรีมะณี
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-md">
                รองผู้อำนวยการ <br /> วิทยาลัยเทคนิคกันทรลักษ์
                <br /> ฝ่ายบริหารทรัพยากร
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="qoute flex justify-center">
          {/* ********************************** เรื่องที่ 1********************************** */}
          <Card className="max-w-[24rem] overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={za5} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                นางสาวภวิกา โพธิ์ขาว
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-md">
                รองผู้อำนวยการ <br /> วิทยาลัยเทคนิคกันทรลักษ์
                <br /> ฝ่ายวิชาการ
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default function ExecutiveDirectory() {
  return (
    <>
      <Layout>
        <Executive />
      </Layout>
    </>
  );
}
