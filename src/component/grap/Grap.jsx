"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "./grap.style.css";

// Dynamically import ApexChart to avoid SSR window error
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CandlestickChart() {
  const [width, setWidth] = useState(0);
  const [selectedRange, setSelectedRange] = useState("1D");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sample data for different ranges (replace with real data as needed)
  const allData = {
    "1D": [
      { x: new Date("2025-05-02"), y: [135, 140, 130, 138] },
      { x: new Date("2025-04-26"), y: [100, 120, 95, 115] },
      { x: new Date("2025-04-27"), y: [115, 125, 110, 120] },
      { x: new Date("2025-04-28"), y: [120, 130, 118, 128] },
    ],
    "7D": [
      { x: new Date("2025-04-26"), y: [100, 120, 95, 115] },
      { x: new Date("2025-04-27"), y: [115, 125, 110, 120] },
      { x: new Date("2025-04-28"), y: [120, 130, 118, 128] },
      { x: new Date("2025-04-29"), y: [128, 135, 125, 130] },
      { x: new Date("2025-04-30"), y: [130, 140, 128, 138] },
      { x: new Date("2025-05-01"), y: [138, 142, 132, 135] },
      { x: new Date("2025-05-02"), y: [135, 140, 130, 138] },
    ],
    "1M": Array.from({ length: 30 }, (_, i) => {
      const date = new Date("2025-04-01");
      date.setDate(date.getDate() + i);
      const base = 100 + i;
      return {
        x: date,
        y: [base, base + 10, base - 5, base + 2],
      };
    }),
  };

  const options = {
    chart: {
      type: "candlestick",
      height: 216,
      toolbar: { show: true },
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
      data: allData[selectedRange],
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
