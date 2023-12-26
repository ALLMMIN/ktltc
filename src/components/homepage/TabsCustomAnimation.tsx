import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function TabsCustomAnimation() {
  const data = [
    {
      label: "ปรัชญา ",
      value: "ปรัชญา ",
      desc: `ฝีมือดี มีวินัย ไฝ่คุณธรรม นำสังคม`,
    },
    {
      label: "วิสัยทัศน์",
      value: "วิสัยทัศน์",
      desc: `ผลิตและพัฒนากำลังคนอาชีวะศึกษาสมรรถณะสูงเพื่อพัฒนาประเทศ`,
    },

    {
      label: "อัตลักษณ์",
      value: "อัตลักษณ์",
      desc: `
      ฝีมือดี มีคุณธรรม`,
    },

    {
      label: "เอกลักษณ์ ",
      value: "เอกลักษณ์ ",
      desc: `ผู้นำบริการวิชาชีพสู่ชุมชน`,
    },
  ];

  return (
    <Tabs id="custom-animation" value="html" className="text-center">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
