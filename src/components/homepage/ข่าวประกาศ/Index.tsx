import { Link } from "react-router-dom";
import SwipperNewsAnnouncement from "./SwipperNewsAnnouncement";

export default function NewsAnnouncement() {
  return (
    <>
      <div>
        <div className="py-6 ">
          <div className="text-2xl font-bold text-center">ข่าวประกาศ</div>
          <div className="text-2xl text-glo-100 pl-2 uppercase font-bold text-center">
            News Announcement
          </div>
          <Link to={"/NewsAnnouncementPage"} className="items-center">
            <div className="text-end pr-8 text-red-500">เนื้อหาทั้งหมด</div>
          </Link>
        </div>

        <SwipperNewsAnnouncement />
      </div>
    </>
  );
}
