import { Layout } from "@/Layout";

export const GovernmentActionPlan = () => {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">แผนปฏิบัติราชกาาร</div>
        <div className="text-md text-glo-100 pl-2 uppercase font-bold text-center">
          Government Action Plan
        </div>
      </div>

      <h1 className="text-center">
        เล่มแผนปฏิบัติการ-วท.กันทรลักษ์-2567-ฉบับสมบูรณ์
      </h1>
      <iframe
        src="https://drive.google.com/file/d/1b_b5R5l51ptaKtPjJTK7AvFUrAOZ3Vj8/preview"
        className="w-[100%] h-[500px] p-4 rounded-[30px] "
        allow="autoplay"
      ></iframe>

      <p>
        <a
          className="p-24 text-xl text-sky-500 "
          href="http://ktltc.ac.th/wp-content/uploads/2023/12/%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3-%E0%B8%A7%E0%B8%97.%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B9%8C-2567-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%9A.pdf"
        >
          Download
        </a>
      </p>

      <h1 className="text-center pt-12">
        แผนปฏิบัติราชการ-ประจำปีงบประมาณ-2566-ฉบับสมบูรณ์
      </h1>
      <iframe
        src="https://drive.google.com/file/d/1DzfSz9ImevqaYhoGbX6udTa4Ms-LtkhG/preview"
        className="w-[100%] h-[500px] p-4 rounded-[30px]"
        allow="autoplay"
      ></iframe>

      <p>
        <a
          className="p-24 text-xl text-sky-500 "
          href="http://ktltc.ac.th/wp-content/uploads/2023/12/%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%81%E0%B8%B2%E0%B8%A3-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B3%E0%B8%9B%E0%B8%B5%E0%B8%87%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%B2%E0%B8%93-2566-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1.pdf"
        >
          Download
        </a>
      </p>
    </>
  );
};

export default function GovernmentActionPlantitle() {
  return (
    <>
      <Layout>
        <GovernmentActionPlan />
      </Layout>
    </>
  );
}
