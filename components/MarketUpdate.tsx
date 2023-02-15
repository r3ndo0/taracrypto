import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { CoinsContext } from "@/pages";
import LineChart from "./LineChart";
const liClassNames =
  "border-2 border-[#FFFFFF0D] bg-[#FFFFFF0D] text-[#B6B6B6]  py-1 px-3 rounded-[6px]";

export default function () {
  const data = useContext(CoinsContext);

  return (
    <div className="mb-24 px-8">
      <h1 className="text-[#ECF1F0] font-bold text-4xl mb-6 font-raleway">
        Market Update
      </h1>
      <h2 className="text-[#B6B6B6] font-roboto text-[18px]">
        Cryptocurrency Categories
      </h2>
      <div className="flex justify-between mt-6 items-center">
        <ul className="flex gap-2 justify-center items-center font-roboto">
          <li className="border-2 bg-[#EAEAEA] text-[#211631] font-bold py-1 px-3 rounded-[6px]">
            Popular
          </li>
          <li className={liClassNames}>Metaverse</li>
          <li className={liClassNames}>Entertainment</li>
          <li className={liClassNames}>Energy</li>
          <li className={liClassNames}>Gaming</li>
          <li className={liClassNames}>Music</li>
          <li className={liClassNames}>See All 12+</li>
        </ul>
        <div className="text-[#B6B6B6]">
          <FiSearch className="absolute mt-2 ml-2" />
          <input
            className="bg-[#FFFFFF1A] rounded-[6px] py-1 px-3 pl-8"
            placeholder="Search Coin"
          />
        </div>
      </div>
      <div className="w-full rounded-[4px] border-[#FFFFFF0D] divide-y divide-[#FFFFFF0D]  border-2 mt-8">
        <div className="text-[#B6B6B6] gap-24 py-2 px-4 flex justify-around items-center text-start">
          <h2 className=" grow-0">NO</h2>
          <h2 className="grow">NAME</h2>
          <h2 className="">PRICE</h2>
          <h2 className="">CHANGE</h2>
          <h2 className="w-[200px] text-center">MARKET STATS</h2>
          <h2 className="pr-6">TRADE</h2>
        </div>
        {data?.map((coin, index) => {
          return (
            <div
              key={index}
              className="font-roboto gap-24 py-2 px-4 text-[#B6B6B6] flex justify-between items-center"
            >
              <h2 className="">{index + 1}</h2>
              <div className="flex grow gap-4 justify-start items-center">
                {data && <img className="w-11 h-11" src={coin.image} />}
                <h2 className="px-2"> {data && coin.name}</h2>
                <h2 className="px-4 border-l border-l-[#B6B6B6] uppercase">
                  {" "}
                  {data && coin.symbol}
                </h2>
              </div>
              <h2>{data && coin.current_price}</h2>
              <h2>{data && coin.price_change_percentage_24h}</h2>
              <div> {data && <LineChart currency={coin.id} />}</div>
              <button className="bg-[#0FAE96] text-white rounded-[10px] py-2 px-4">
                Trade
              </button>
            </div>
          );
        })}
      </div>
      <p className="text-[#0FAE96] underline mt-6">See All Coins</p>
    </div>
  );
}
