import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ currency }: { currency: string }) {
  const [currencyData, setCurrencyData] = useState<ChartData<"line">>();

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${currency}/market_chart?vs_currency=usd&days=6&interval=daily`
      )
      .then((r) => {
        const coinData = r.data.prices;
        setCurrencyData({
          labels: coinData.map((coinIndex: any) => coinIndex[0]),
          datasets: [
            {
              label: "",
              data: coinData.map((coinStat: any) => coinStat[1]),
              borderColor:
                coinData[0][1] <= coinData[6][1] ? ["#0FAE96"] : ["#AE0000"],
              borderWidth: [6],
              pointStyle: false,
              borderCapStyle: "round",
            },
          ],
        });
      });
  }, []);

  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: false,
      },
      filler: {
        propagate: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    aspectRatio: 2 | 2,
  };

  return (
    <div className="w-[200px]">
      {currencyData && <Line data={currencyData} options={options} />}
    </div>
  );
}
