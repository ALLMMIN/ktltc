import SwipperNewsletterPublicRelations from "./SwipperNewsletterPublicRelations";

import { Link } from "react-router-dom";

export default function IndexNewsletterPublicRelations() {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">
          จดหมายข่าวประชาสัมพันธ์
        </div>
        <div className="text-2xl text-glo-100 pl-2 uppercase font-bold text-center">
          Newsletter Public Relations
        </div>
        <Link
          to={"/IndexNewsletterPublicRelationsPage"}
          className="items-center"
        >
          <div className="text-end pr-8 text-red-500">เนื้อหาทั้งหมด</div>
        </Link>
      </div>

      <SwipperNewsletterPublicRelations />
    </>
  );
}
