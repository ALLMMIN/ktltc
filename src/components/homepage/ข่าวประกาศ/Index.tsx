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
        </div>

        <SwipperNewsAnnouncement />
      </div>
    </>
  );
}
