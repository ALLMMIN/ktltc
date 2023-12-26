import SwipperBiddingNews from "./SwipperBiddingNews";

export default function BiddingNews() {
  return (
    <>
      <div className="py-6 flex justify-center">
        <div className="text-2xl font-bold ">ข่าวประกวดราคา</div>
        <div className="text-2xl text-glo-100 pl-2 uppercase font-bold  ">
          Bidding News
        </div>
      </div>

      <SwipperBiddingNews />
    </>
  );
}
