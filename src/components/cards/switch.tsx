import { useEffect } from "react";
import { useRef } from "react";
import { HiOutlineEye, HiOutlineClock, HiOutlineFire } from "react-icons/hi";
import { PiPlant } from "react-icons/pi";
import { TbStars } from "react-icons/tb";
import { AiOutlineTrophy } from "react-icons/ai";
import { cn } from "@/lib/utils";

interface switchProp {
  activeTab: 1 | 2 | 3;
  setActiveTab: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  forContainer2: boolean;
}

const TabSwitch = ({ activeTab, setActiveTab, forContainer2 }: switchProp) => {
  const activeRef = useRef<HTMLDivElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);
  const button3Ref = useRef<HTMLButtonElement>(null);

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
        className={`relative z-20 h-full rounded-md px-2 flex items-center ${
          activeTab === 1 && "font-semibold text-white"
        }`}
        onClick={() => setActiveTab(1)}
      >
        <p className="sr-only">one</p>
        {forContainer2 ? (
          <TbStars size={16} color="#6e747e" />
        ) : (
          <HiOutlineFire
            size={16}
            color="#6e747e"
            className={cn(activeTab === 1 && "dark:text-white")}
          />
        )}
      </button>

      <button
        ref={button2Ref}
        className={`relative z-20 h-full rounded-md px-2 flex items-center ${
          activeTab === 2 && "font-semibold"
        }`}
        onClick={() => setActiveTab(2)}
      >
        {" "}
        <p className="sr-only">two</p>
        {forContainer2 ? (
          <PiPlant size={16} color="#6e747e" />
        ) : (
          <HiOutlineClock
            size={16}
            color="#6e747e"
            className={cn(activeTab == 2 && "dark:text-white")}
          />
        )}
      </button>

      <button
        ref={button3Ref}
        className={`relative z-20 h-full rounded-md px-2 flex items-center  ${
          activeTab === 3 && "font-semibold"
        }`}
        onClick={() => setActiveTab(3)}
      >
        <p className="sr-only">three</p>
        {forContainer2 ? (
          <AiOutlineTrophy size={16} color="#6e747e" />
        ) : (
          <HiOutlineEye
            size={16}
            color="#6e747e"
            className={cn(activeTab == 3 && "dark:text-white")}
          />
        )}
      </button>
    </div>
  );
};

export default TabSwitch;
