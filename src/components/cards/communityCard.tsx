import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";

import { LuDot } from "react-icons/lu";
import { LuMessageSquareMore, LuSmilePlus } from "react-icons/lu";
import { AiOutlineRetweet } from "react-icons/ai";

const CommunityCard = () => {
  return (
    <div className="space-y-2">
      <div className="inline-flex gap-2 text-sm *:items-center">
        <Image
          src={
            "https://s3.coinmarketcap.com/static/img/portraits/6302f191e4fba87c6424d7b2.png"
          }
          width={30}
          height={30}
          alt="community"
          className="rounded-full"
        />
        <div className="flex gap-1">
          <p className="font-semibold">
            Satoshi Club <span></span>
          </p>
          <div className="inline-flex gap-0 items-center">
            <VscVerifiedFilled fill={"#3d61f4"} size={20} />
            <LuDot />
            <p className="text-[#757d87]">9 hours</p>
          </div>
        </div>
      </div>
      <div className="">
        <p className=" line-clamp-2">
          {`Elon Musk clarified at the "America PAC" town hall that the U.S. government has no plans to use Dogecoin.`}
        </p>
      </div>
      <div className="inline-flex text-xs items-center gap-0.5 text-[#757d87]">
        <LuMessageSquareMore />
        <p className="">6</p>
        <LuDot />
        <AiOutlineRetweet />
        <p className="">0</p>
        <LuDot />
        <LuSmilePlus />
        <p className="">28</p>
      </div>
    </div>
  );
};

export default CommunityCard;
