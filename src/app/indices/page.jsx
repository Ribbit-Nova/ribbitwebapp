"use client";
import { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
import Header from "../../component/header/header";
import Footer from "../../component/footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import "./download.style.css";
import Link from "next/link";
import Image from "next/image";
import desktop from "../../asets/img/desktop.png";
import phone from "../../asets/img/phone.png";
import an from "../../asets/img/an.png";
import a from "../../asets/img/a.png";

const Fatures = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Stock Price",
        data: [],
        borderColor: "green",
        tension: 0.2,
      },
    ],
  });

  const chartRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      const price = 100 + Math.random() * 2 - 1;

      setChartData((prevData) => {
        const newLabels = [...prevData.labels, time].slice(-30);
        const newData = [...prevData.datasets[0].data, price].slice(-30);

        return {
          labels: newLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newData,
            },
          ],
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Line data={chartData} options={{ animation: false }} />;
};

export default Fatures;
