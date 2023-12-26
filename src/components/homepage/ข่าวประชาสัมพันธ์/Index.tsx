import SwipperPressRelease from "./SwipperPressRelease";

export default function PressRelease() {
  return (
    <>
      <div className="flex py-6 justify-center ">
        <div className="text-2xl font-bold">ข่าวประชาสัมพันธ์</div>
        <div className="text-2xl text-glo-100 pl-2 uppercase font-bold">
          PressRelease
        </div>
      </div>

      <SwipperPressRelease />
    </>
  );
}
