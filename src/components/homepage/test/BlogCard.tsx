import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import a1 from "../../assets/01/04.jpg";
import b1 from "../../assets/02/1.jpg";
import c3 from "../../assets/03/3.jpg";
import admin from "../../assets/admin.jpg";

export function BlogCard() {
  return (
    <>
      <div className="container-1 ">
        <div className="qoute-1 justify-center">
          {/* ********************************** เรื่องที่ 1********************************** */}
          <Card className="max-w-[16rem] overflow-hidden ">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={a1} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                วิทยาลัยเทคนิคกันทรลักษ์
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-sm">
                เข้าร่วมประชุมการแข่งขันทักษะวิชาชีพ.
              </Typography>
            </CardBody>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>

            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                <Tooltip content="admin">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src={admin}
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
              </div>
              <Typography className="font-normal">7 พฤศจิกายน 2566</Typography>
            </CardFooter>
          </Card>
          {/* ********************************** จบ เรื่องที่ 1********************************** */}
        </div>
        <div className="qoute-1">
          {/* ********************************** เรื่องที่ 2********************************** */}
          <Card className="max-w-[16rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={b1} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                ตลาดมินิ วิทยาลัยเทคนิคกันทรลักษ์
              </Typography>
              <Typography variant="lead" color="gray" className="mt-3 text-sm">
                สาขาการตลาด ขอเชิญชวน นักเรียน-นักศึกษา บุคลากร ไปเที่ยวชม ชิม
                อุตหนุน ที่ตลาดมินิ
              </Typography>
            </CardBody>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>

            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                <Tooltip content="admin">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src={admin}
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
              </div>
              <Typography className="font-normal">9 พฤศจิกายน 2566</Typography>
            </CardFooter>
          </Card>
          {/* ********************************** จบ เรื่องที่ 2********************************** */}
        </div>
        <div className="qoute-1">
          {/* ********************************** เรื่องที่ 3********************************** */}
          <Card className="max-w-[16rem] overflow-hidden">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none"
            >
              <img src={c3} alt="ui/ux review check" />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray">
                วิทยาลัยเทคนิคกันทรลักษ์
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 text-sm pb-4"
              >
                ได้รับการประเมินองค์การมาตรฐานดีเด่น.
              </Typography>
            </CardBody>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>

            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center -space-x-3">
                <Tooltip content="admin">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src={admin}
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
              </div>
              <Typography className="font-normal">7 พฤศจิกายน 2566</Typography>
            </CardFooter>
          </Card>
          {/* ********************************** จบ เรื่องที่ 3********************************** */}
        </div>
        <div className="qoute-1"> </div>
      </div>
    </>
  );
}
