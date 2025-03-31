import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import TabSwitch from "./switch";
import { useState } from "react";
import { hotCryptos, recentCrypto, mostVisitedCypto } from "@/lib/data";
import { cn } from "@/lib/utils";

const Container = () => {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);

  return (
    <div className="size-full space-y-4 text-sm">
      <div className="w-full inline-flex justify-between items-center">
        <div className="inline-flex gap-1 items-center">
          <p className="font-medium">Long Title</p>
          <MdOutlineKeyboardArrowDown className=" -rotate-90" />
        </div>
        <TabSwitch activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="space-y-3">
        {activeTab === 1 &&
          hotCryptos.map((item, index) => (
            <div className="grid grid-cols-4 w-full items-center" key={index}>
              <div className="inline-flex col-span-2 gap-2 basis-1/2 items-center">
                <p>{item.id}</p>
                <Image
                  src={item.logo}
                  height={20}
                  width={30}
                  alt="ghast"
                  className="rounded-full"
                />
                <p>{item.name}</p>
              </div>

              <div className="w-full mx-auto">
                <div className="inline-flex gap-1 basis-1/3 float-right">
                  <p
                    className={cn(
                      "text-right",
                      item.positon ? "text-[#BA4237]" : "text-[#3DBA37]"
                    )}
                  >
                    {item.price}
                  </p>
                </div>
              </div>

              <div className="basis-1/3 justify-self-end justify-items-end">
                <Image
                  src={`/chart/${item.positon ? "long" : "red"}${item.id}.png`}
                  height={20}
                  width={50}
                  alt={item.name}
                />

                <div className="inline-flex">
                  <IoMdArrowDropdown
                    fill={!item.positon ? "#BA4237" : "#3DBA37"}
                    className={cn("my-auto", item.positon && "rotate-180")}
                  />
                  <p className="text-xs"> {item.change}%</p>
                </div>
              </div>
            </div>
          ))}
        {activeTab === 2 &&
          recentCrypto.map((item, index) => (
            <div className="grid grid-cols-4 w-full items-center" key={index}>
              <div className="inline-flex col-span-2 gap-2 basis-1/2 items-center">
                <p>{item.id}</p>
                <Image
                  src={item.logo}
                  height={20}
                  width={30}
                  alt="ghast"
                  className="rounded-full"
                />
                <p>{item.name}</p>
              </div>

              <div className="w-full mx-auto">
                <div className="inline-flex gap-1 basis-1/3 float-right">
                  <p
                    className={cn(
                      "text-right",
                      item.positon ? "text-[#BA4237]" : "text-[#3DBA37]"
                    )}
                  >
                    {item.price}
                  </p>
                </div>
              </div>

              <div className="basis-1/3 justify-self-end justify-items-end">
                <Image
                  src={`/chart/${item.positon ? "long" : "red"}${item.id}.png`}
                  height={20}
                  width={50}
                  alt={item.name}
                />

                <div className="inline-flex">
                  <IoMdArrowDropdown
                    fill={!item.positon ? "#BA4237" : "#3DBA37"}
                    className={cn("my-auto", item.positon && "rotate-180")}
                  />
                  <p className="text-xs"> {item.change}%</p>
                </div>
              </div>
            </div>
          ))}
        {activeTab === 3 &&
          mostVisitedCypto.map((item, index) => (
            <div className="grid grid-cols-4 w-full items-center" key={index}>
              <div className="inline-flex col-span-2 gap-2 basis-1/2 items-center">
                <p>{item.id}</p>
                <Image
                  src={item.logo}
                  height={20}
                  width={30}
                  alt="ghast"
                  className="rounded-full"
                />
                <p>{item.name}</p>
              </div>

              <div className="w-full mx-auto">
                <div className="inline-flex gap-1 basis-1/3 float-right">
                  <p
                    className={cn(
                      "text-right",
                      item.positon ? "text-[#BA4237]" : "text-[#3DBA37]"
                    )}
                  >
                    {item.price}
                  </p>
                </div>
              </div>

              <div className="basis-1/3 justify-self-end justify-items-end">
                <Image
                  src={`/chart/${item.positon ? "long" : "red"}${item.id}.png`}
                  height={20}
                  width={50}
                  alt={item.name}
                />

                <div className="inline-flex">
                  <IoMdArrowDropdown
                    fill={!item.positon ? "#BA4237" : "#3DBA37"}
                    className={cn("my-auto", item.positon && "rotate-180")}
                  />
                  <p className="text-xs"> {item.change}%</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Container;
