import { useEffect, useState } from "react";
import { useRef } from "react";
import { TbStars } from "react-icons/tb";

import { RxDashboard } from "react-icons/rx";

const FilterSwitch = () => {
  const activeRef = useRef<HTMLDivElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState(1);

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
      }

      if (activeButton) {
        activeRef.current.style.width = `${activeButton.offsetWidth}px`;
        activeRef.current.style.height = `${activeButton.offsetHeight}px`;
        activeRef.current.style.transform = `translateX(${activeButton.offsetLeft}px)`;
      }
    };

    updateActiveIndicator();
    window.addEventListener("resize", updateActiveIndicator);

    return () => window.removeEventListener("resize", updateActiveIndicator);
  }, [activeTab]);

  return (
    <div className="relative flex h-8 items-center justify-between gap-1 rounded-lg bg-grey p-0.5 ">
      <div
        ref={activeRef}
        className="absolute left-0 h-6 rounded-md text-graytext bg-card transition-all duration-300"
      />

      <button
        ref={button1Ref}
        className={`relative z-20 h-full rounded-md px-3 text-sm flex items-center gap-2 ${
          activeTab === 1 && "font-semibold "
        }`}
        onClick={() => setActiveTab(1)}
      >
        <RxDashboard />
        <p className="">Coins</p>
      </button>

      <button
        ref={button2Ref}
        className={`relative z-20 h-full rounded-md px-3 text-sm flex items-center gap-2 ${
          activeTab === 2 && "font-semibold"
        }`}
        onClick={() => setActiveTab(2)}
      >
        {" "}
        <TbStars />
        <p className="">DexScan</p>
      </button>
    </div>
  );
};

export default FilterSwitch;
