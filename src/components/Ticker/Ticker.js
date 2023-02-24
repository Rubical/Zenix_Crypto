import { useState, useEffect } from "react";
import Marquee from "react-double-marquee";
import CryptoCard from "../CryptoCard/CryptoCard";

const Ticker = () => {
  const [cryptoInfo, setCryptoInfo] = useState("");

  const getCryptoInfo = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
      `
    );
    const data = await response.json();
    setCryptoInfo(data);
  };

  useEffect(() => {
    getCryptoInfo();
  }, []);

  return (
    <div
      style={{
        maxWidth: "1155px",
        whiteSpace: "nowrap",
        margin: "0 auto 50px auto",
      }}
    >
      <Marquee
        direction={"left"}
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {cryptoInfo
          ? cryptoInfo.map((el) => <CryptoCard cryptoInfo={el} key={el.id} />)
          : null}
      </Marquee>
    </div>
  );
};

export default Ticker;
