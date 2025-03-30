// import { toggleDark } from "@/lib/color-scheme-toggler";
import { Button } from "./ui/button";
import Image from "next/image";
import TabSwitcher from "./tabSwitcher";

const SettingsPopover = () => {
  return (
    <div className="w-full min-w-20 text-sm space-y-5 rounded-xl place-items-center">
      <div className=" inline-flex w-full gap-2 border-gray-200 border-b-[1px]  dark:border-gray-200/20 pb-3">
        <Button variant={"secondary"} size={"sm"}>
          Login
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Sign Up
        </Button>
        <Image
          src={
            "https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg"
          }
          height={24}
          width={24}
          alt="diamond"
          className="float-end justify-self-en my-auto ms-auto"
        />
      </div>

      <div className="w-full inline-flex justify-between">
        <p className="">Language</p>
        <p className="text-graytext">English {">"}</p>
      </div>
      <div className="w-full inline-flex justify-between">
        <p className="">Currency</p>
        <div className="flex gap-1 items-center text-graytext">
          <div className="bg-[#00c983] rounded-full h-4 content-center text-center aspect-square text-[10px]">
            $
          </div>
          <p className="">USD {">"}</p>
        </div>
      </div>
      <div className="w-full inline-flex justify-between items-center">
        <p className="">Theme</p>
        <TabSwitcher />
      </div>
      <div className=" inline-flex w-full gap-2 font-semibold border-gray-200 border-t-[1px]  dark:border-gray-200/20 pt-4">
        <Button variant={"ghost"} className="basis-1/2 h-8">
          Get Listed
        </Button>
        <Button variant={"ghost"} className="basis-1/2 h-8">
          API
        </Button>
      </div>
      {/* <button
        onClick={() => {
          toggleDark();
        }}
        type="button"
      >
        {" "}
        toggle dark
      </button> */}
    </div>
  );
};

export default SettingsPopover;
