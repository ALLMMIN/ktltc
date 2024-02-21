import { Link } from "react-router-dom";
import SwipperTechnicalCollegeOrders from "./SwipperTechnicalCollegeOrders";

export default function TechnicalCollegeOrders() {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">
          คำสั่งวิทยาลัยเทคนิคกันทรลักษ์
        </div>
        <div className="text-2xl text-glo-100 pl-2 uppercase font-bold text-center">
          Technical College Orders
        </div>
        <Link to={"/TechnicalCollegeOrdersPage"} className="items-center">
          <div className="text-end pr-8 text-red-500">เนื้อหาทั้งหมด</div>
        </Link>
      </div>
      <SwipperTechnicalCollegeOrders />
    </>
  );
}
