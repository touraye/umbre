import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export type Feature = {
  title: string;
  description: string;
};
export interface TabData {
  value: string;
  triggerText: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  features: Feature[];
}

interface CustomTabsProps {
  tabsData: TabData[];
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabsData }) => {
  return (
    <Tabs defaultValue={tabsData[0].value} className="w-full">
      <TabsList className="w-full flex flex-wrap items-center justify-center gap-4 px-3 md:px-6 mb-45 md:mb-24">
        {tabsData.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="text-base border-gray-700 data-[state=active]:bg-[#01403D] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-brand-teal cursor-pointer hover:bg-gray-300 hover:text-black transition-colors duration-200 text-[14px] p-large h-12 flex items-center justify-center"
          >
            {tab.triggerText}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsData.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="pt-12"
        >
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-12">
                {tab.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {tab.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold p-medium p-large text-gray-900">{feature.title}</h5>
                      <span className="p-medium p-large text-gray-600">{feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <Image
                src={tab.imageSrc}
                alt={tab.imageAlt}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
export default CustomTabs;
// Usage example    
// const tabsData: TabData[] = [
//   {
//     value: "tab1",
//     triggerText: "Tab 1",
//     imageSrc: "/images/tab1.jpg",
//     imageAlt: "Tab 1 Image",
//     title: "Tab 1 Title",
//     features: ["Feature 1", "Feature 2", "Feature 3"],
//   },
//   {
//     value: "tab2",
//     triggerText: "Tab 2",
//     imageSrc: "/images/tab2.jpg",
//     imageAlt: "Tab 2 Image",
//     title: "Tab 2 Title",
//     features: ["Feature 1", "Feature 2", "Feature 3"],
//   },
//   {
//     value: "tab3",
//     triggerText: "Tab 3",
//     imageSrc: "/images/tab3.jpg",
//     imageAlt: "Tab 3 Image",
//     title: "Tab 3 Title",
//     features: ["Feature 1", "Feature 2", "Feature 3"],
//   },
// ];