"use client";

import { useEffect, useState } from "react";
import "./loder.style.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2 sec loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <img src="/loader.gif" alt="Loading..." className="loader" />
      </div>
    );
  }

  return;
}

export default MyApp;
