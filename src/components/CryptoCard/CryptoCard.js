import cl from "./CryptoCard.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const CryptoCard = ({ cryptoInfo }) => {
  const { current_price, image, price_change_percentage_24h } = cryptoInfo;
  return (
    <span className={cl.container}>
      <img className={cl.cryptoImg} src={image}></img>
      <span className={cl.currentPrice}>{current_price}$</span>
      <span
        className={`${cl.priceChange} ${
          price_change_percentage_24h > 0 ? cl.green : cl.red
        }`}
      >
        {price_change_percentage_24h.toFixed(2)}%
        {price_change_percentage_24h > 0 ? (
          <ArrowUpwardIcon sx={{ marginBottom: "3px", width: "15px" }} />
        ) : (
          <ArrowDownwardIcon sx={{ marginBottom: "3px", width: "15px" }} />
        )}
      </span>
    </span>
  );
};

export default CryptoCard;
