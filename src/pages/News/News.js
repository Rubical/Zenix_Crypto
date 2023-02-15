import { useEffect } from "react";
import { useState } from "react";
import BasicSelect from "../../components/UI/select/Select";
import TextInput from "../../components/UI/input/TextInput";
import NewsCard from "./../../components/NewsCard/NewsCard";
import cl from "./News.module.css";
import { useMemo } from "react";

const News = () => {
  const [news, setNews] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedNews = useMemo(() => {
    if (selectedSort) {
      return [...news].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return news;
  }, [selectedSort, news]);

  const sortedAndSearchedNews = useMemo(() => {
    if (sortedNews) {
      return sortedNews.filter((news) =>
        news.title.toLowerCase().includes(searchQuery)
      );
    }
    return news;
  }, [searchQuery, sortedNews]);

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

  const sortNews = (sort) => {
    setSelectedSort(sort);
  };

  if (news) {
    return (
      <div className={cl.containerCommon}>
        <div className={cl.sortContainer}>
          <TextInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <BasicSelect
            value={selectedSort}
            onChange={sortNews}
            defaultValue="Sort"
            options={[
              { value: "title", name: "By title" },
              { value: "description", name: "By description" },
            ]}
          />
        </div>
        <div className={cl.container}>
          {sortedAndSearchedNews.map((item, index) => {
            return <NewsCard key={index} news={item} />;
          })}
        </div>
      </div>
    );
  }
};

export default News;
