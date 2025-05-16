"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "./graph.style.css";

// Dynamically import ApexCharts
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const getTimeRange = (daysAgo) => {
  const now = new Date();
  const start = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return [start.getTime(), now.getTime()];
};

export default function Grap({ address }) {
  const [selectedRange, setSelectedRange] = useState("1D");
  const [seriesData, setSeriesData] = useState([]);

  const fetchChartData = async (days) => {
    const [start, end] = getTimeRange(days);
    try {
      const res = await fetch(
        `https://testnet.ribbitwallet.com/indices/history/${address}?start_time=${start}&end_time=${end}`
      );
      const json = await res.json();
      const formatted = Array.isArray(json)
        ? json.map((point) => ({
            x: new Date(point.timestamp),
            y: [point.open, point.high, point.low, point.close],
          }))
        : [];
      setSeriesData(formatted);
    } catch (err) {
      console.error("Error fetching chart data:", err);
      setSeriesData([]);
    }
  };

  useEffect(() => {
    const days = selectedRange === "1D" ? 1 : selectedRange === "7D" ? 7 : 30;
    fetchChartData(days);
  }, [selectedRange, address]);

  const options = {
    chart: {
      type: "candlestick",
      height: 216,
      toolbar: { show: false },
    },
    title: {
      text: `${selectedRange}`,
      align: "left",
    },
    xaxis: { type: "datetime" },
    yaxis: { tooltip: { enabled: true } },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00C851",
          downward: "#ff4444",
        },
      },
    },
    responsive: [
      {
        breakpoint: 767,
        options: {
          chart: { height: 250 },
          title: { style: { fontSize: "16px" } },
        },
      },
    ],
  };

  const series = [
    {
      name: "Price",
      data: seriesData,
    },
  ];

  const ranges = ["1D", "7D", "1M"];

  return (
    <div className="day_list">
      <div className="mb-4 flex flex-wrap gap-2">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={`px-4 py-2 rounded-md text-white ${
              selectedRange === range
                ? "bg-blue-600"
                : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={216}
        width="100%"
      />
    </div>
  );
}
