import Image from "next/image";
import { VscVerifiedFilled } from "react-icons/vsc";
import { LuDot } from "react-icons/lu";

const NewsCard = () => {
  return (
    <div className=" h-full flex flex-col gap-3">
      <div className="inline-flex gap-2 text-sm *:items-center">
        <Image
          src={
            "https://s3.coinmarketcap.com/static-gravity/image/482c0ff022eb46439ff21ff987b1ac7f.png"
          }
          width={30}
          height={30}
          alt="community"
          className="rounded-full"
        />
        <div className="flex gap-1">
          <p className="font-semibold">
            CoinoMedia <span></span>
          </p>
          <div className="inline-flex gap-0 items-center">
            <VscVerifiedFilled fill={"#3d61f4"} size={20} />
            <LuDot />
            <p className="text-[#757d87]">7 hours</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-grow ">
        <div className=" basis-1/4 rounded-md">
          <div className=" h-full">
            <Image
              src={
                "https://academy-public.coinmarketcap.com/srd-optimized-uploads/2ead46d264f54422945b16f49f346b1e.jpeg"
              }
              height={200}
              width={200}
              alt="news"
              className=" h-full  object-cover rounded-md "
            />
          </div>
        </div>
        <div className="basis-auto">
          <p className=" line-clamp-2">
            {`Eric and Don Jr. Trump Invest in Bitcoin Mining Company`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
