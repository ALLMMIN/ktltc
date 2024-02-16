import { Link } from "react-router-dom";
// import SwipperPressRelease from "./SwipperPressRelease";

export default function PressRelease() {
  return (
    <>
      <div className="py-6 ">
        <div className="text-2xl font-bold text-center">ข่าวประชาสัมพันธ์</div>
        <div className="text-2xl text-glo-100 pl-2 uppercase font-bold text-center">
          PressRelease
        </div>
      </div>

      {/* <SwipperPressRelease /> */}

      <Link to={"/SwipperPressReleasePage"} className="items-center">
        <div className="text-center pb-16 text-red-500">เนื้อหาทั้งหมด</div>
      </Link>
    </>
  );
}
