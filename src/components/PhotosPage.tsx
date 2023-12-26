import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import l1 from "@assets/01.png";
import l2 from "@assets/02.png";
import l3 from "@assets/03.png";
import l4 from "@assets/05.png";
import l5 from "@assets/06.png";

export default function PhotosPage() {
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
        <div>
          <img src={l4} />
        </div>
        <div>
          <img src={l5} />
        </div>
      </Carousel>
    </div>
  );
}
