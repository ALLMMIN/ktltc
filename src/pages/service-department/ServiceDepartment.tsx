import { Layout } from "@/Layout";
import { PlansAndCooperation } from "./PlansAndCooperation";

export default function ServiceDepartment() {
  return (
    <>
      <div>
        <Layout>
          <div className="flex py-6 justify-center ">
            <div className="text-2xl font-bold">ฝ่ายบริหาร</div>
            <div className="text-2xl text-glo-100 pl-2 uppercase font-bold">
              ServiceDepartment
            </div>
          </div>
          <PlansAndCooperation />
        </Layout>
      </div>
    </>
  );
}
