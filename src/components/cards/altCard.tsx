import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AltCard = () => {
  return (
    <div className="text-sm flex flex-col size-full gap-2">
      <div className="inline-flex gap-1 items-center basis-1/3 grid-rows-1">
        <p className="font-medium">Altcoin Season</p>
        <MdOutlineKeyboardArrowDown className=" -rotate-90" />
      </div>

      <div className="basis-1/3 grid-rows-1">
        <p className="text-lg font-bold">
          17 <span className="font-light opacity-60">/100</span>
        </p>
        <div>
          <div className="inline-flex justify-between text-xs w-full opacity-60">
            <p>Bitcoin</p>
            <p>Altcoin</p>
          </div>
          <div className="inline-flex relative w-full">
            <div className="absolute h-5 w-5 rounded-full transform bg-black border-4 border-white -bottom-[7px] left-[12%]"></div>
            <div className="basis-1/4 h-1.5 bg-[#f48819] rounded-s-sm"></div>
            <div className="basis-1/4 h-1.5 bg-[#fadcbe] "></div>
            <div className="basis-1/4 h-1.5 bg-[#c4cbff] "></div>
            <div className="basis-1/4 h-1.5 bg-brand rounded-e-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltCard;
