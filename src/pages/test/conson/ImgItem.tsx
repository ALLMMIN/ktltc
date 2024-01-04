/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ImgItem.css";

export function ImgItem(props: { img: any; onImgClick: any }) {
  const { img, onImgClick } = props;
  return (
    <div className="img-item">
      <img
        src={img.thumbnailUrl}
        onClick={() => onImgClick(img)}
        alt={img.title}
      />
      <h4>{img.title}</h4>
    </div>
  );
}
