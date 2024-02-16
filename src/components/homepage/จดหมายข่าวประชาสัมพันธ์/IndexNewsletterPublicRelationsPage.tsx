import { Layout } from "@/Layout";
import SwipperNewsletterPublicRelations from "./SwipperNewsletterPublicRelations";

export default function IndexNewsletterPublicRelationsPage() {
  return (
    <div>
      <Layout>
        <div className="py-6 ">
          <div className="text-2xl font-bold text-center">
            จดหมายข่าวประชาสัมพันธ์
          </div>
          <div className="text-2xl text-glo-100 pl-2 uppercase font-bold text-center">
            Newsletter Public Relations
          </div>
        </div>
        <SwipperNewsletterPublicRelations />
      </Layout>
    </div>
  );
}
