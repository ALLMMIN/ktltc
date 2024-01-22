import { Layout } from "@/Layout";
import { Card, CardHeader } from "@material-tailwind/react";

import pac1 from "@assets/ข้อมูลบุคลากร/ฝ่ายแผนงานและความร่วมมือ/ad2.webp";
import pac2 from "@assets/ข้อมูลบุคลากร/ฝ่ายแผนงานและความร่วมมือ/12.webp";
import pac3 from "@assets/ข้อมูลบุคลากร/ฝ่ายแผนงานและความร่วมมือ/18.webp";
import pac4 from "@assets/ข้อมูลบุคลากร/ฝ่ายแผนงานและความร่วมมือ/25.webp";

export const PlansAndCooperation = () => {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">
          ฝ่ายแผนงานและความร่วมมือ
        </div>
        <div className="text-md text-glo-100 pl-2 uppercase font-bold text-center">
          PlansAndCooperation
        </div>
      </div>

      <div className="container-3 ">
        {/* ********************************** เรื่องที่ 1 ********************************** */}
        <div className="qoute">
          <Card className=" overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={pac1} alt="ui/ux review check" />
            </CardHeader>
          </Card>
        </div>
        {/* ********************************** เรื่องที่ 1 ********************************** */}
        {/* ********************************** เรื่องที่ 2 ********************************** */}
        <div className="qoute">
          <Card className=" overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={pac2} alt="ui/ux review check" />
            </CardHeader>
          </Card>
        </div>
        {/* ********************************** เรื่องที่ 2 ********************************** */}
        {/* ********************************** เรื่องที่ 3 ********************************** */}
        <div className="qoute">
          <Card className=" overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={pac3} alt="ui/ux review check" />
            </CardHeader>
          </Card>
        </div>
        {/* ********************************** เรื่องที่ 3 ********************************** */}
        {/* ********************************** เรื่องที่ 4 ********************************** */}
        <div className="qoute">
          <Card className=" overflow-hidden text-center">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={pac4} alt="ui/ux review check" />
            </CardHeader>
          </Card>
        </div>
        {/* ********************************** เรื่องที่ 4 ********************************** */}
      </div>
    </>
  );
};

export default function PlansAndCooperationTitle() {
  return (
    <>
      <Layout>
        <PlansAndCooperation />
      </Layout>
    </>
  );
}
