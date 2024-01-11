import { CustomSpeedDial } from "@components/CustomSpeedDial";

export default function Footer() {
  return (
    <>
      <CustomSpeedDial />
      {/* <div className="  ">
        <div className="bg-gray-900 pt-8 pb-8">
          <div className=" grid grid-rows- grid-flow-col gap-2">
            <div className="text-bluegray-100">Copyright © 2023</div>
            <div className="text-sky-500">
              KTLTC / งานศูนย์ข้อมูลและสารสนเทศ
            </div>
            <div className=" text-bluegray-500 ">All Rights Reserved.</div>
          </div>
          <div className=" text-bluegray-500 underline underline-offset-2">
            <a
              href="https://www.facebook.com/MiniminnyZung"
              title="Go to Facebook Profile dev"
            >
              Designed By All M Min
            </a>
          </div>
        </div>
      </div>
      <div className="text-center">jasdl;fkja;dlskfj</div> */}

      <div className=" ">
        <div className="grid justify-items-stretch bg-gray-900 pt-8 text-xs justify-center">
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="justify-self-center flex">
            <div className="justify-self-center text-bluegray-100 pr-2">
              Copyright © 2023
            </div>
            <div className="justify-self-center text-sky-500">
              KTLTC / งานศูนย์ข้อมูลและสารสนเทศ
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="grid justify-items-stretch bg-gray-900 pb-8 text-xs justify-center">
            <div className="justify-self-center flex">
              <div className="justify-self-center text-bluegray-100 pr-2">
                All Rights Reserved.
              </div>
              <div className="justify-self-center text-sky-500">
                <div className=" text-bluegray-500 underline underline-offset-2">
                  <a
                    href="https://www.facebook.com/MiniminnyZung"
                    title="Go to Facebook Profile dev"
                  >
                    Designed By All M Min
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
      </div>
    </>
  );
}
