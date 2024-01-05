/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardHeader } from "@material-tailwind/react";

export function ImgItem(props: { img: any; onImgClick: any }) {
  const { img, onImgClick } = props;
  return (
    <div className="flex flex-row">
      {/* ********************************** เรื่องที่ 1 ********************************** */}
      <div className=" ">
        <Card className=" overflow-hidden text-center ">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none "
          >
            <div className=" ">
              <img
                className="flex"
                src={img.thumbnailUrl}
                onClick={() => onImgClick(img)}
                alt={img.title.department}
              />
              <div className="text-md py-2">
                {img.title} <br />
                {img.department}
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
      {/* ********************************** เรื่องที่ 1 ********************************** */}
    </div>
  );
}
