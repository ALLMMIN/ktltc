import { Executive } from "./ExecutiveDirectory";
import { Educationa } from "./EducationalInstitutionInformation";
import { GovernmentActionPlan } from "./GovernmentActionPlan";
import { StrategicPlan } from "./StrategicPlan";
import { Layout } from "@/Layout";
import { Personnel } from "./ข้อมูลบุคลากร/PersonnelInformation";

export default function About() {
  return (
    <>
      <Layout>
        <div className="flex py-6 justify-center ">
          <div className="text-2xl font-bold">เกี่ยวกับวิทยาลัย</div>
          <div className="text-2xl text-glo-100 pl-2 uppercase font-bold">
            About
          </div>
        </div>
        <Executive />
        <Educationa />
        <GovernmentActionPlan />
        <StrategicPlan />
        <Personnel />
      </Layout>
    </>
  );
}
