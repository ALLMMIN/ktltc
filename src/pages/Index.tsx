import { Layout } from "../Layout";
import PhotosPage from "../components/PhotosPage";
// import PressRelease from "../components/homepage/pressrelease/PressRelease";
import PressRelease from "../components/homepage/ข่าวประชาสัมพันธ์/Index";

import Welcome from "../components/homepage/Welcome";
import IndexNewsletterPublicRelations from "../components/homepage/จดหมายข่าวประชาสัมพันธ์/Index";
import NewsAnnouncement from "../components/homepage/ข่าวประกาศ/Index";
import BiddingNews from "@/components/homepage/ข่าวประกวดราคา/Index";
import TechnicalCollegeOrders from "@/components/homepage/คำสั่งวิทยาลัยเทคนิค/Index";

const Index = () => {
  return (
    <>
      <body>
        <Layout>
          <div className="text-center bg-red-500 text-white">
            ยุติการอัพเดทข้อมูล 15/01/2567
          </div>
          <PhotosPage />
          <Welcome />
          <PressRelease /> 
          <IndexNewsletterPublicRelations />
          <NewsAnnouncement />
          <BiddingNews />
          <TechnicalCollegeOrders />
        </Layout>
      </body>
    </>
  );
};

export default Index;
