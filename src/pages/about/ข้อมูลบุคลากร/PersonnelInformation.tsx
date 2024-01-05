import { SetStateAction, useState } from "react";
import { AppSearch } from "./conson/AppSearch";
import { ImgItem } from "./conson/ImgItem";
import { ImgPost } from "./conson/ImgPost";
import imgs from "./data/imgs";
import { Layout } from "@/Layout";

export const Personnel = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onImgOpenClick(img: SetStateAction<null>) {
    setSelectedImg(img);
  }

  function onImgCloseClick() {
    setSelectedImg(null);
  }

  const imgItems = imgs
    .filter((img) => {
      return img.title.includes(searchText);
    })
    .map((img, index) => {
      return <ImgItem key={index} img={img} onImgClick={onImgOpenClick} />;
    });

  let imgPost = null;
  if (selectedImg) {
    imgPost = <ImgPost img={selectedImg} onBgClick={onImgCloseClick} />;
  }

  return (
    <div className="app">
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValueChange={setSearchText} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-4">
            {imgItems}
          </div>
        </div>
      </section>
      {imgPost}
    </div>
  );
};

export default function PersonnelInformation() {
  return (
    <>
      <Layout>
        <div className="py-6 ">
          <div className="text-2xl font-bold text-center">ข้อมูลบุคลากร</div>
          <div className="text-sm  text-glo-100 pl-2 uppercase font-bold text-center">
            Personnel information
          </div>
        </div>
        <Personnel />
      </Layout>
    </>
  );
}
