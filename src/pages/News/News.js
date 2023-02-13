import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "./../../components/NewsCard/NewsCard";
import cl from "./News.module.css";

const News = () => {
  const [news, setNews] = useState("");

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=software&apiKey=ba4d6c5338394be997a79771d2522499"
      );

      if (response.ok) {
        const data = await response.json();
        setNews(data.articles);
      }
    };

    getNews();
  }, []);

  if (news) {
    return (
      <div className={cl.container}>
        {news.map((item, index) => {
          return <NewsCard key={index} news={item} />;
        })}
      </div>
    );
  }
};

export default News;
