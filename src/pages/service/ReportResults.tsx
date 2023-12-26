import { Layout } from "@/Layout";
import Group1 from "@assets/Group_12549.jpg";

export const ReportResults = () => {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">
          ระบบรายงานผลการดำเนินโครงงาน
        </div>
        <div className="text-md text-glo-100 pl-2 uppercase font-bold text-center">
          Government Action Plan
        </div>
      </div>

      <div className="px-4 py-4 text-center">
        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <img
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={Group1}
            alt="Woman's Face"
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg text-black font-semibold">
                คลิ๊กเพื่อเข้าสู่
              </p>
            </div>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <a
                href="https://forms.gle/YonALHut99bEefUt9"
                title="go to Google forms"
              >
                Google Forms
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default function ReportResultstitle() {
  return (
    <>
      <Layout>
        <ReportResults />
      </Layout>
    </>
  );
}
