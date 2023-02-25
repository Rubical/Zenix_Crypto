import { useState, useEffect, useMemo } from "react";
import NewsList from "../NewsList/NewsList";
import NewsFilter from "../NewsFilter/NewsFilter";
import Loader from "../UI/Loader/Loader";
import BasicPagination from "../UI/pagination/Pagination";
import Error from "../../pages/Error/ErrorPage";
import { getPageCount } from "../../utils/pages";
import cl from "./NewsBlock.module.css";

const NewsBlock = () => {
  const [news, setNews] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isNewsLoading, setIsNewsLoading] = useState(false);

  const getNews = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=crypto&page=${page}&api-key=j4ZiODq9JJvT86CJYwEdidgi0HDPUMRg`
    );
    const data = await response.json();
    const newsReady = data.response.docs.slice(0, 9);
    setNews(newsReady);
    const totalCount = 1000;
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
        news.snippet.toLowerCase().includes(filter.query)
      );
    }
    return news;
  }, [filter.query, sortedNews]);

  if (sortedAndSearchedNews) {
    return (
      <>
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
      </>
    );
  }
};

export default NewsBlock;
