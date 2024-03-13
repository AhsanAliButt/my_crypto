"use client";
import React, { useEffect, useRef, memo } from "react";
import "./styles.css";
const TradingView = ({ token = "BITSTAMP:ETHUSD" }) => {
  const container = useRef();

  useEffect(() => {
    if (container.current.childNodes.length === 0) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      // setCSSCustomProperty("--tv-color-pane-background: #000000;");
      script.innerHTML = `
          {
            "width": "555",
            "height": "381",
            "symbol": "${token}",
            "interval": "D",
            "timezone": "Etc/UTC",
            "backgroundColor": "rgba(0, 0, 0, 1)",
            "theme": "dark",
            "barColor": "rgba(0, 0, 0, 1)",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "save_image": false,
            "calendar": false,
            "support_host": "https://www.tradingview.com"
          }`;
      container.current.appendChild(script);
    }
  }, [token]);

  return <div className="tradingview-widget-container" ref={container}></div>;
};

export default memo(TradingView);
