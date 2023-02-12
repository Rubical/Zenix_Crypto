import { useState } from "react";
import NewsCard from "./../../components/NewsCard/NewsCard";
import cl from "./News.module.css";

const News = () => {
  const [news, setNews] = useState(null);

  const getNews = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=software&from=2023-02-10&sortBy=publishedAt&apiKey=ba4d6c5338394be997a79771d2522499&language=en&pageSize=50&searchin=description"
    );
    try {
      if (response.ok) {
        const data = await response.json();
        setNews(data.articles);
        console.log(news);
      }
    } catch (e) {
      console.log(e);
    }
  };

  getNews();
  if (news) {
    return (
      <div className={cl.container}>
        {news.map((item) => {
          return <NewsCard news={item} />;
        })}
      </div>
    );
  }
};

export default News;
