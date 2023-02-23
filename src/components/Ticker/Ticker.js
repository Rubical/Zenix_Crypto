import Marquee from "react-double-marquee";
import CryptoCard from "../CryptoCard/CryptoCard";

const Ticker = ({ cryptoInfo }) => {
  console.log(cryptoInfo);
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
          ? cryptoInfo.map((el) => <CryptoCard cryptoInfo={el} id={el.id} />)
          : null}
      </Marquee>
    </div>
  );
};

export default Ticker;
