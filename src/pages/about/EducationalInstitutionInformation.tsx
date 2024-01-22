import { Layout } from "@/Layout";
import ab1 from "@assets/logo.webp";

export const Educationa = () => {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">
          ข้อมูลสถาบันการศึกษา
        </div>
        <div className="text-md text-glo-100 pl-2 uppercase font-bold text-center">
          EducationalInstitutionInformation
        </div>
      </div>
      <div className="page1-about">
        {/* //***********************************************************************************************Header */}
        <div className="flex justify-center">
          <div className="container">
            <div className="qoute">
              <p>
                <figure className="flex relative w-full justify-center">
                  <img
                    className="h-80 w-80 rounded-xl object-cover object-center "
                    src={ab1}
                    alt="nature image"
                  />
                </figure>
              </p>
            </div>
            <div className="qoute pb-10 px-2 rounded-xl">
              <div className="text-auto">
                วันที่ 30 มีนาคม พ.ศ.2537 วันก่อตั้งวิทยาลัยเทคนิคกันทรลักษ์
                <br />
                <div className="text-auto">
                  วิทยาลัยเทคนิคกันทรลักษ์ 82 หมู่ 1 ต.จานใหญ่ อ.กันทรลักษ์
                  จ.ศรีสะเกษ โทร 045811053 งานศูนย์ข้อมูลและสารสนเทศ.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //***********************************************************************************************Header */}
      </div>
    </>
  );
};

export default function EducationalInstitutionInformation() {
  return (
    <>
      <Layout>
        <Educationa />
      </Layout>
    </>
  );
}
