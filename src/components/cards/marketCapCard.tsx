import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

interface cardProp {
  title: string;
  volume: string;
  change: string;
  img: string;
}

const MarketCapCard = ({ title, volume, change, img }: cardProp) => {
  return (
    <div className="text-sm flex flex-col size-full gap-2">
      <div className="inline-flex gap-1 items-center basis-1/3 grid-rows-1">
        <p className="font-medium">{title}p</p>
        <MdOutlineKeyboardArrowDown className=" -rotate-90" />
      </div>

      <div className="basis-1/3 grid-rows-1">
        <p className="text-lg font-bold">{volume}</p>
        <div className="inline-flex">
          <IoMdArrowDropdown fill={"#3DBA37"} className={"rotate-180"} />
          <p className="text-xs text-[#3DBA37] font-semibold"> {change}</p>
        </div>
      </div>

      <div className="">
        <Image
          src={img}
          width={200}
          height={90}
          alt={"market cap"}
          className="h-9"
        ></Image>
      </div>
    </div>
  );
};

export default MarketCapCard;
