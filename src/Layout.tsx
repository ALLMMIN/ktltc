import Footer from "@components/page/Footer";

import TopHeader from "@components/page/TopHeader";
import { NavbarWithMegaMenu } from "./Navbar";
import { SuspenseProps } from "react";

export function Layout(props: SuspenseProps) {
  return (
    <>
      <div className="layout">
        <TopHeader />
        <NavbarWithMegaMenu />
        <div className="bg-gray-200">
          <div className="  max-w-full ">{props.children}</div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div className="container-top">
        <a href="#" className="top"></a>
      </div>
    </>
  );
}
