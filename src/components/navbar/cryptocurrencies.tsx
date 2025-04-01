import { cryptoCurrenciesMenu } from "@/lib/data";
import NavList from "./navList";

const Cryptocurrencies = () => {
  return (
    <div className="bg-card flex shadow-xl min-w-52 gap-8 p-8 px-12">
      <div className=" space-y-8">
        <NavList
          list={cryptoCurrenciesMenu.cryptocurrencies}
          title="Cryptocurrencies"
        />
      </div>
      <div className="border-x border-gray-100 dark:border-gray-400/10 px-6">
        <NavList
          list={cryptoCurrenciesMenu.Leaderboards}
          title="Leaderboards"
        />
      </div>

      <div className="">
        <NavList
          list={cryptoCurrenciesMenu.MarketOverview}
          title="Market Overview"
        />
      </div>
      <div className="border-s border-gray-100 dark:border-gray-400/10 px-6">
        <NavList list={cryptoCurrenciesMenu.nft} title="NFT" />
      </div>
    </div>
  );
};

export default Cryptocurrencies;
