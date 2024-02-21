import { Link } from "react-router-dom";
import SwipperBiddingNews from "./SwipperBiddingNews";

export default function BiddingNews() {
  return (
    <>
      <div className="py-6">
        <div className="text-2xl font-bold text-center">ข่าวประกวดราคา</div>
        <div className="text-2xl text-glo-100 pl-2 uppercase font-bold text-center">
          Bidding News
        </div>
        <Link to={"/BiddingNewsPage"} className="items-center">
          <div className="text-end pr-8 text-red-500">เนื้อหาทั้งหมด</div>
        </Link>
      </div>

      <SwipperBiddingNews />
    </>
  );
}
