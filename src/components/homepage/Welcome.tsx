import { Typography } from "@material-tailwind/react";
import l4 from "@assets/04.webp";
import { TabsCustomAnimation } from "./TabsCustomAnimation";
export default function Welcome() {
  return (
    <>
      {/* //***********************************************************************************************Header */}
      <div className="flex justify-center">
        <div className="container">
          <div className="qoute">
            <p>
              <figure className="relative h-96 w-full">
                <img
                  className="h-full w-full rounded-xl object-cover object-center"
                  src={l4}
                  alt="nature image"
                />
                <figcaption className="absolute bottom-2 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      นางสาวทักษิณา ชมจันทร์
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                      ผู้อำนวยการวิทยาลัยเทคนิคกันทรลักษ์
                    </Typography>
                  </div>
                </figcaption>
              </figure>
            </p>
          </div>
          <div className="qoute  pt-10 pb-10  px-2 bg-white rounded-xl">
            <div className="   ">
              <TabsCustomAnimation />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
