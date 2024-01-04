/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardHeader } from "@material-tailwind/react";

export function ImgItem(props: { img: any; onImgClick: any }) {
  const { img, onImgClick } = props;
  return (
    <div className="container-3 ">
      {/* ********************************** เรื่องที่ 1 ********************************** */}
      <div className="qoute">
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
              <h4>{img.title}</h4>
              <h4>{img.department}</h4>
            </div>
          </CardHeader>
        </Card>
      </div>
      {/* ********************************** เรื่องที่ 1 ********************************** */}
    </div>
  );
}
