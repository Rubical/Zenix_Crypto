import { useEffect } from "react";
import { useState } from "react";
import BasicSelect from "../../components/UI/select/Select";
import TextInput from "../../components/UI/input/TextInput";
import NewsCard from "./../../components/NewsCard/NewsCard";
import cl from "./News.module.css";

const News = () => {
  const [news, setNews] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=software&apiKey=ba4d6c5338394be997a79771d2522499"
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setNews(data.articles);
      }
      console.log(news);
    };

    getNews();
  }, []);

  if (news) {
    return (
      <div className={cl.containerCommon}>
        <div className={cl.sortContainer}>
          <TextInput />
          <BasicSelect
            defaultValue="Sort"
            options={[
              { value: "title", name: "By title" },
              { value: "body", name: "By description" },
            ]}
          />
        </div>
        <div className={cl.container}>
          {news.map((item, index) => {
            return <NewsCard key={index} news={item} />;
          })}
        </div>
      </div>
    );
  }
};

export default News;
