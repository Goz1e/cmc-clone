import { useEffect } from "react";
import { useRef } from "react";
import { HiOutlineEye, HiOutlineClock, HiOutlineFire } from "react-icons/hi";

interface switchProp {
  activeTab: 1 | 2 | 3;
  setActiveTab: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const TabSwitch = ({ activeTab, setActiveTab }: switchProp) => {
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
          activeTab === 1 && "font-semibold"
        }`}
        onClick={() => setActiveTab(1)}
      >
        <p className="sr-only">one</p>
        <HiOutlineFire size={16} color="#6e747e" />
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
        <HiOutlineClock size={16} color="#6e747e" />
      </button>

      <button
        ref={button3Ref}
        className={`relative z-20 h-full rounded-md px-2 flex items-center  ${
          activeTab === 3 && "font-semibold"
        }`}
        onClick={() => setActiveTab(3)}
      >
        <p className="sr-only">three</p>
        <HiOutlineEye size={16} color="#6e747e" />
      </button>
    </div>
  );
};

export default TabSwitch;
