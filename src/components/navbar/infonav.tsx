import { FaGasPump } from "react-icons/fa";

const InfoNav = () => {
  return (
    <div className="inline-flex gap-3 place-items-center text-[11px]">
      <p>
        {" "}
        Cryptos: <span className="text-blue-500">13.24M</span>
      </p>
      <p>
        {" "}
        Exchanges: <span className="text-blue-500">817</span>
      </p>
      <p>
        {" "}
        Market Cap:
        <span className="text-blue-500">
          $12.7T <span className="text-red-500"> &#x25BC; 2.18%</span>
        </span>
      </p>
      <p>
        {" "}
        24h Vol:
        <span className="text-blue-500">
          $74.67B <span className="text-red-500"> &#x25BC; 15.40%</span>
        </span>
      </p>
      <p>
        {" "}
        Dominance: <span className="text-blue-500">BTC: 61.3% ETH:8.4%</span>
      </p>
      <div className="inline-flex place-items-center gap-1">
        {" "}
        <span>
          <FaGasPump />
        </span>
        ETH Gas: <span className="text-blue-500">0.3 Gwei</span>
      </div>
      <p>
        {" "}
        Fear & Greed <span className="text-blue-500">27/100</span>
      </p>
    </div>
  );
};

export default InfoNav;
