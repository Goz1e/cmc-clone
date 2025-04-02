import FilterSwitch from "./filterSwitch";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RiBarChartLine } from "react-icons/ri";
import { RiLeafLine } from "react-icons/ri";
import FilterSwitch2 from "./filterSwitch2";
import { BiFilterAlt } from "react-icons/bi";
import { LuColumns3 } from "react-icons/lu";

const Filters = () => {
  const [activeTab, setActiveTab] = useState<
    "Top" | "Trending" | "New" | "Gainers" | "Most Visited"
  >("Top");

  return (
    <div className="w-full inline-flex justify-between py-1.5">
      <div className=" inline-flex gap-2">
        <FilterSwitch />
        <Button
          className={cn(
            "h-8 bg-transparent text-graytext shadow-none text-bold hover:bg-transparent",
            activeTab === "Top" && "text-brand bg-brand/20"
          )}
          onClick={() => {
            setActiveTab("Top");
          }}
        >
          <RiBarChartLine className="text-brand" />
          Top
        </Button>
        <FilterSwitch2
          filter={activeTab}
          setFilter={setActiveTab}
          name={"Trending"}
        />
        <Button
          className={cn(
            "h-8 bg-transparent text-graytext shadow-none text-bold hover:bg-transparent",
            activeTab === "New" && "text-brand bg-brand/20"
          )}
          onClick={() => {
            setActiveTab("New");
          }}
        >
          <RiLeafLine className="text-[#7754c8]" />
          New
        </Button>
        <FilterSwitch2
          filter={activeTab}
          setFilter={setActiveTab}
          name={"Gainers"}
        />
        <FilterSwitch2
          filter={activeTab}
          setFilter={setActiveTab}
          name={"Most Visited"}
        />
      </div>
      <div className="">
        <div className="inline-flex gap-2 place-items-center *:text-black *:dark:text-white *:font-semibold text-[11px]">
          <Button variant={"ghost"} className="h-8 ">
            <BiFilterAlt color="#9296a8" />
            Filter
          </Button>
          <Button variant={"ghost"} className="h-8 ">
            <LuColumns3 color="#9296a8" /> Columns
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
