import axios from "axios";
import useSWR, { Fetcher } from "swr";
import type { detailedCoin } from "types/Types";
import { RxArrowTopRight } from "react-icons/rx";
import LineChart from "./LineChart";
import { useContext } from "react";
import { CoinsContext } from "@/pages";
export default function TrendingCoins() {
  const allData = useContext(CoinsContext);
  const data = allData?.slice(0, 4);

  return (
    <div className="mb-24">
      <h2 className="text-[#ECF1F0] text-start ml-6 font-bold mb-8 text-2xl">
        Market Trend
      </h2>
      <div className="flex justify-center items-center  h-full gap-4 text-[#ECF1F0]">
        {data &&
          data.map((coin: any, index: number) => {
            return (
              <div
                key={index}
                className="rounded-3xl  border-[#FFFFFF0D] divide-y divide-[#FFFFFF0D] border-2"
              >
                <div className="flex  px-2 py-4 justify-around items-center ">
                  <div className="flex justify-start gap-4 w-[70%] items-center">
                    <img className="w-12 h-12" src={coin.image} />
                    <h2 className="text-[18px] font-bold uppercase">
                      {coin.symbol}
                    </h2>
                    <h2 className="text-[#1D1429] bg-[#B6B6B6] px-2 py-[2px] font-bold uppercase rounded-lg">
                      {coin.name}
                    </h2>
                  </div>
                  <div className="text-[#B6B6B6] bg-[#2C223B] rounded-full p-2">
                    <RxArrowTopRight size={20} />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className=" h-full px-2 py-4">
                    <h2 className="text-2xl font-bold mb-2">
                      ${coin.current_price}
                    </h2>
                    <p>{coin.price_change_percentage_24h}%</p>
                  </div>
                  <div>
                    <LineChart currency={coin.id} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
