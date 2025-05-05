"use client";
import { useEffect, useState } from "react";
import React from "react";
import Chart from "react-apexcharts";

export default function CandlestickChart() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const candleData = [
    { x: new Date("2025-04-28"), y: [100, 120, 90, 110] }, // green
    { x: new Date("2025-04-29"), y: [110, 130, 105, 125] }, // green
    { x: new Date("2025-04-30"), y: [125, 140, 120, 115] }, // red
    { x: new Date("2025-05-01"), y: [115, 145, 110, 140] }, // green
  ];

  const series = [
    {
      name: "Candlestick",
      type: "candlestick",
      data: candleData,
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: "#00C851", // green
          downward: "#ff4444", // red
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    tooltip: {
      shared: true,
    },
  };

  return (
    <Chart options={options} series={series} type="candlestick" height={350} />
  );
}
