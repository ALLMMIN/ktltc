import { Layout } from "@/Layout";

export const StrategicPlan = () => {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">แผนยุทธศาสตร์</div>
        <div className="text-md text-glo-100 pl-2 uppercase font-bold text-center">
          Strategic Plan
        </div>
      </div>

      <h1 className="text-center">เล่มแผนพัฒนา-65-69-ปรับ-27-เม.ย.6566</h1>

      <iframe
        src="https://drive.google.com/file/d/1bPKBdjQBe7HsbjD-6YA928x8A-qpmkxZ/preview"
        className="w-[100%] h-[500px] p-4 rounded-[30px]"
        allow="autoplay"
      ></iframe>
      <p>
        <a
          className="p-24 text-xl text-sky-500 "
          href="https://drive.google.com/file/d/1bPKBdjQBe7HsbjD-6YA928x8A-qpmkxZ/view"
        >
          Download
        </a>
      </p>
    </>
  );
};

export default function StrategicPlantitle() {
  return (
    <>
      <Layout>
        <StrategicPlan />
      </Layout>
    </>
  );
}
