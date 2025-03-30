import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import { FiSmartphone } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { PiChartPieSliceFill } from "react-icons/pi";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import SettingsPopover from "../settingsPopover";

const Nav2 = () => {
  return (
    <div className="flex gap-2 text-sm font-medium content-center items-center">
      <div className="inline-flex">
        <Button variant={"ghost"} size={"sm"} className=" bg-transparent !px-2">
          <PiChartPieSliceFill fill="#616a7f" className="rotate-90" />
          Portfolio
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          className="hover:bg-transparent bg-transparent !px-2"
        >
          <GoStarFill fill="#616a7f" />
          Watchlist
        </Button>
      </div>
      <Button
        size={"sm"}
        className="bg-grey dark:text-[#616a7f] hover:bg-grey/80 dark:hover:bg-gray-700"
      >
        <CiSearch fill="#616a7f" opacity={50} className="ms-1" />
        {"  "}
        <p className="font-medium text-gray-400 dark:text-gray-200/50 ">
          Search
        </p>
        <div className="w-36 h-6 rounded-md"></div>
        <div className="w-5 bg-gray-400 aspect-square content-center text-white rounded-sm me-0.5">
          /
        </div>
      </Button>
      <Button variant={"ghost"} size={"sm"}>
        <FiSmartphone stroke="#616a7f" fontWeight={66} />
      </Button>
      <Button
        variant={"secondary"}
        className="bg-brand hover:bg-brand/90 text-white hover:text-white w-18 h-8"
      >
        Log In
      </Button>
      <Popover>
        <PopoverTrigger>
          <button
            // variant={"outline"}
            // size={"sm"}
            type="button"
            name="menu"
            className="bg-background flex items-center gap-2 p-1 hover:bg-background/90 border rounded-xl text-white hover:text-white"
          >
            {""}
            <FiMenu
              stroke="#616a7f"
              className="ms-0.5 scale-150"
              fontWeight={66}
            />
            <Image
              height={22}
              width={22}
              alt="avatar"
              src={"/cmc-avatar.png"}
            ></Image>
          </button>
        </PopoverTrigger>
        <PopoverContent className="mt-3.5 me-4 max-h-fit w-80">
          <SettingsPopover />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Nav2;
