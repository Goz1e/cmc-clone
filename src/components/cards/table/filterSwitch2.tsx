import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HiOutlineFire, HiOutlineEye } from "react-icons/hi";
import { FaArrowTrendUp } from "react-icons/fa6";

interface switchProps {
  filter: "Top" | "Trending" | "New" | "Gainers" | "Most Visited";
  setFilter: React.Dispatch<
    React.SetStateAction<
      "Top" | "Trending" | "New" | "Gainers" | "Most Visited"
    >
  >;
  name: "Top" | "Trending" | "New" | "Gainers" | "Most Visited";
}

const FilterSwitch2 = ({ filter, setFilter, name }: switchProps) => {
  const activeRef = useRef<HTMLDivElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);
  const button3Ref = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState(2);

  useEffect(() => {
    const updateActiveIndicator = () => {
      if (!activeRef.current) return;

      let activeButton: HTMLButtonElement | null = null;

      switch (activeTab) {
        case 1:
          activeButton = button1Ref.current;
          break;
        case 2:
          activeButton = button2Ref.current;
          break;
        case 3:
          activeButton = button3Ref.current;
          break;
      }

      if (activeButton) {
        activeRef.current.style.width = `${activeButton.offsetWidth}px`;
        // activeRef.current.style.height = `${activeButton.offsetHeight - 3}px`;
        activeRef.current.style.transform = `translateX(${activeButton.offsetLeft}px)`;
      }
    };

    updateActiveIndicator();
    window.addEventListener("resize", updateActiveIndicator);

    return () => window.removeEventListener("resize", updateActiveIndicator);
  }, [activeTab, name, filter]);

  return (
    <div
      className={cn(
        "flex rounded-md",
        filter === name && "bg-[#f0f5ff] dark:bg-brand/20"
      )}
    >
      <Button
        className={cn(
          "h-8 bg-transparent text-graytext shadow-none text-bold hover:bg-transparent",
          filter === name && "text-brand"
        )}
        onClick={() => {
          setFilter(name);
        }}
      >
        {name === "Most Visited" && (
          <HiOutlineEye className="text-[#49bccb] capitalize" />
        )}
        {name === "Trending" && (
          <HiOutlineFire className="text-[#e48c7f] capitalize" />
        )}
        {name === "Gainers" && (
          <FaArrowTrendUp className="text-[#31cc8c] capitalize" />
        )}
        {name}
      </Button>

      {filter === name && (
        <div className="relative flex h-8 items-center justify-between gap-1 text-brand rounded-lg p-0.5 ">
          <div
            ref={activeRef}
            className="absolute left-0 h-6 rounded-md bg-white dark:bg-brand/20 border border-brand transition-all duration-300"
          />

          <button
            ref={button1Ref}
            className={`relative z-20 h-full rounded-md px-3 text-sm flex items-center gap-2 ${
              activeTab === 1 && "font-semibold "
            }`}
            onClick={() => setActiveTab(1)}
          >
            <p className="">1h</p>
          </button>

          <button
            ref={button2Ref}
            className={`relative z-20 h-full rounded-md px-3 text-sm flex items-center gap-2 ${
              activeTab === 2 && "font-semibold"
            }`}
            onClick={() => setActiveTab(2)}
          >
            <p className="">6hr</p>
          </button>

          <button
            ref={button3Ref}
            className={`relative z-20 h-full rounded-md px-3 text-sm flex items-center gap-2 ${
              activeTab === 3 && "font-semibold"
            }`}
            onClick={() => setActiveTab(3)}
          >
            <p className="">24h</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSwitch2;
