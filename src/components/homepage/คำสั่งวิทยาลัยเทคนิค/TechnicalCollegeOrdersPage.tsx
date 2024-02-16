import { Layout } from "@/Layout";
import SwipperTechnicalCollegeOrders from "./SwipperTechnicalCollegeOrders";

export default function TechnicalCollegeOrdersPage() {
  return (
    <>
      <div>
        <Layout>
          <div className="py-6 ">
            <div className="text-2xl font-bold text-center">
              คำสั่งวิทยาลัยเทคนิคกันทรลักษ์
            </div>
            <div className="text-2xl text-glo-100 pl-2 uppercase font-bold text-center">
              Technical College Orders
            </div>
          </div>
          <SwipperTechnicalCollegeOrders />
        </Layout>
      </div>
    </>
  );
}
