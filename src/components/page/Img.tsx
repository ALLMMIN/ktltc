import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import l1 from "@assets/01.png";
import l2 from "@assets/02.png";
import l3 from "@assets/03.png";

export default function Img() {
  return (
    <div>
      <Carousel
        interval={2000}
        showThumbs={false}
        emulateTouch={true}
        autoPlay={true}
        infiniteLoop={true}
        autoFocus={false}
        showStatus={false}
      >
        <div>
          <img src={l1} className="h-1/2" />
        </div>
        <div>
          <img src={l2} />
        </div>
        <div>
          <img src={l3} />
        </div>
      </Carousel>
    </div>
  );
}
// interval={1000}
// autoPlay={true}
// infiniteLoop={true}
// animationHandler={"fade"}
// showThumbs={false}
// emulateTouch={"boolean"}
