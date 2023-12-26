import { Layout } from "@/Layout";
import { ReportResults } from "./ReportResults";

export default function IndexService() {
  return (
    <>
      <Layout>
        <div className="flex py-6 justify-center ">
          <div className="text-2xl font-bold">บริการ</div>
          <div className="text-2xl text-glo-100 pl-2 uppercase font-bold">
            service
          </div>
        </div>
        <ReportResults />
      </Layout>
    </>
  );
}
