import cl from "./Main.module.css";
import Ticker from "../../components/Ticker/Ticker";
import NewsBlock from "../../components/NewsBlock/NewsBlock";

const News = () => {
  return (
    <div className={cl.containerCommon}>
      <Ticker />
      <NewsBlock />
    </div>
  );
};

export default News;
