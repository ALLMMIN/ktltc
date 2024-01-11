import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import Manu from "../Manu";

export default function Header() {
  return (
    <>
      <div className="className-Header">
        <header className="grid justify-items-stretch pl-4 p-4 px-2">
          <div className="justify-items-start flex gap-2">
            <img src={logo} className="h-14 w-14" />
            <Link to={"/"} className="items-center">
              <div className="text-3xl">KTLTC</div>
              <div className="text-sx">วิทยาลัยเทคนิคกันทรลักษ์</div>
            </Link>
            <div className="flex-1" />
            <div className="flex justify-self-end gap-4 pt-4 pr-4  ">
              {/* <Manu /> */}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
