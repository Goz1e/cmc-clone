import { Button } from "@/components/ui/button";
const _categories = [
  "All Crypto",
  "NFTs",
  "Categories",
  "Token unlocks",
  "♻️ Rehypo",
  "🔥 Binance Alpha",
  "🔥 Memes",
  "🔥 SOL",
  "🔥 DOT",
  "🔥 BNB",
  "🔥 USA",
  "🔥 AI",
  "🔥 RWA",
  "🔥 Gaming",
  "🔥 DePIN",
  "🔥 DeFAI",
  "🔥 AI Agents",
];

const Categories = () => {
  return (
    <div className=" max-w-full overflow-x-scroll">
      <div className="inline-flex items-center gap-4 text-[#676c87] font-medium border-b border-gray-200 dark:border-[#212531] overflow-x-scroll">
        {_categories.map((item, index) => (
          <Button
            variant={"ghost"}
            className="bg-transparent hover:bg-transparent dark:hover:bg-transparent text-sm rounded-none first:text-black first:dark:text-white first:border-b-2 first:border-blue-600"
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
