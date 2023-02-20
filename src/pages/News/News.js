import { useState, useEffect, useMemo } from "react";

import NewsList from "../../components/NewsList/NewsList";
import NewsFilter from "../../components/BtnGitHubSignIn/NewsFilter/NewsFilter";
import Loader from "./../../components/UI/Loader/Loader";
import { getPageCount } from "../../utils/pages";
import cl from "./News.module.css";
import BasicPagination from "../../components/UI/pagination/Pagination";

const News = () => {
  const [news, setNews] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [isNewsLoading, setIsNewsLoading] = useState(false);

  const getNews = async () => {
    const response = await fetch(
      `https://api.newscatcherapi.com/v2/search?q=software&lang=en&page_size=${limit}&page=${page}`,
      {
        headers: {
          "x-api-key": "vzKA9gv7wUhmasm-9WKjtWbT2nWwYNgCvKNzQPnDSlo",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    setNews(data.articles);
    const totalCount = 96;
    setTotalPages(getPageCount(totalCount, limit));
    setIsNewsLoading(false);
  };

  useEffect(() => {
    setIsNewsLoading(true);
    getNews();
    window.scroll(0, 0);
  }, [page]);

  const sortedNews = useMemo(() => {
    if (filter.sort) {
      return [...news].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return news;
  }, [filter.sort, news]);

  const sortedAndSearchedNews = useMemo(() => {
    if (sortedNews) {
      return sortedNews.filter((news) =>
        news.title.toLowerCase().includes(filter.query)
      );
    }
    return news;
  }, [filter.query, sortedNews]);

  if (news) {
    return (
      <div className={cl.containerCommon}>
        <NewsFilter filter={filter} setFilter={setFilter} />
        <div className={cl.container}>
          {isNewsLoading ? (
            <Loader />
          ) : (
            <NewsList news={sortedAndSearchedNews} />
          )}
        </div>

        <div className={cl.pageBtnContainer}>
          <BasicPagination setPage={setPage} totalPages={totalPages} />
        </div>
      </div>
    );
  }
};

export default News;
