// /* eslint-disable react-refresh/only-export-components */
// import { Layout } from "@/Layout";
// import Announcer from "./Announcer";
// import SearchBar from "./SearchBar";
// import { useState } from "react";

// // eslint-disable-next-line react-refresh/only-export-components
// export const posts = [
//   {
//     id: "1",
//     name: "สำนักงานตำรวจแห่งชาติ",
//     phone: "เบอร์โทรสารกลาง : 02-2521174",
//   },
//   {
//     id: "2",
//     name: "สถานีตำรวจภูธรเมืองศรีสะเกษ 90 ซอย เทพา 10 ตำบล เมืองเหนือ อำเภอเมืองศรีสะเกษ ศรีสะเกษ 33000",
//     phone: "เบอร์โทร : 045612732",
//   },
//   {
//     id: "3",
//     name: "สถานีตำรวจภูธรกันทรลักษ์ 620 หมู่ 5 ถ. อนันตภักดี ตำบล น้ำอ้อม อำเภอกันทรลักษ์ ศรีสะเกษ 33110",
//     phone: "เบอร์โทร : 045661423",
//   },
//   {
//     id: "4",
//     name: "สถานีตำรวจภูธรบึงมะลู 48 ม.19 ตำบล บึงมะลู อำเภอกันทรลักษ์ ศรีสะเกษ 33110",
//     phone: "เบอร์โทร : 045924651",
//   },
//   {
//     id: "5",
//     name: "สถานีตำรวจภูธรบ้านโดนเอาว์ ตำบล รุง อำเภอกันทรลักษ์ ศรีสะเกษ 33110",
//     phone: "เบอร์โทร : 0935728814",
//   },
// ];

// export const filterPosts = (posts, query) => {
//   if (!query) {
//     return posts;
//   }

//   return posts.filter((post: { name: string }) => {
//     const postName = post.name.toLowerCase();
//     return postName.includes(query);
//   });
// };

// export default function Test() {
//   const { search } = window.location;
//   const query = new URLSearchParams(search).get("s");
//   const [searchQuery, setSearchQuery] = useState(query || "");
//   const filteredPosts = filterPosts(posts, searchQuery);
//   return (
//     <>
//       <Layout>
//         <div>Test</div>
//         <div>
//           <div className="App">
//             <Announcer message={`${filteredPosts.length} posts`} />
//             <SearchBar
//               searchQuery={searchQuery}
//               setSearchQuery={setSearchQuery}
//             />

//             {filteredPosts.map((post) => (
//               <div key={post.id}>
//                 {post.name}
//                 {post.phone}
//               </div>
//             ))}
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { Layout } from "@/Layout";
import Announcer from "./Announcer";
import SearchBar from "./SearchBar";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const posts = [
  {
    id: "1",
    name: "สำนักงานตำรวจแห่งชาติ",
    phone: "เบอร์โทรสารกลาง : 02-2521174",
  },
  {
    id: "2",
    name: "สถานีตำรวจภูธรเมืองศรีสะเกษ 90 ซอย เทพา 10 ตำบล เมืองเหนือ อำเภอเมืองศรีสะเกษ ศรีสะเกษ 33000",
    phone: "เบอร์โทร : 045612732",
  },
  {
    id: "3",
    name: "สถานีตำรวจภูธรกันทรลักษ์ 620 หมู่ 5 ถ. อนันตภักดี ตำบล น้ำอ้อม อำเภอกันทรลักษ์ ศรีสะเกษ 33110",
    phone: "เบอร์โทร : 045661423",
  },
  {
    id: "4",
    name: "สถานีตำรวจภูธรบึงมะลู 48 ม.19 ตำบล บึงมะลู อำเภอกันทรลักษ์ ศรีสะเกษ 33110",
    phone: "เบอร์โทร : 045924651",
  },
  {
    id: "5",
    name: "สถานีตำรวจภูธรบ้านโดนเอาว์ ตำบล รุง อำเภอกันทรลักษ์ ศรีสะเกษ 33110",
    phone: "เบอร์โทร : 0935728814",
  },
];

export const filterPosts = (posts: any[], query: string) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post: { name: string }) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

export default function Test() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);
  return (
    <>
      <Layout>
        <div>Test</div>
        <div>
          <div className="App">
            <Announcer message={`${filteredPosts.length} posts`} />
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            {filteredPosts.map(
              (post: {
                id: Key | null | undefined;
                name:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
                phone:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined;
              }) => (
                <div key={post.id}>
                  {post.name}
                  {post.phone}
                </div>
              )
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
