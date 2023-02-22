import { useState, useEffect, useMemo } from "react";

import NewsList from "../NewsList/NewsList";
import NewsFilter from "../BtnGitHubSignIn/NewsFilter/NewsFilter";
import Loader from "../UI/Loader/Loader";
import { getPageCount } from "../../utils/pages";
import cl from "./News.module.css";
import BasicPagination from "../UI/pagination/Pagination";
import Error from "../../pages/Error/ErrorPage";

const News = () => {
  const [news, setNews] = useState("");
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [isNewsLoading, setIsNewsLoading] = useState(false);

  const getNews = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=software&page=${page}&api-key=j4ZiODq9JJvT86CJYwEdidgi0HDPUMRg`
    );
    const data = await response.json();
    const newsReady = data.response.docs.slice(0, 9);
    console.log(newsReady);
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
        news.headline.main.toLowerCase().includes(filter.query)
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
  } else {
    return <Error />;
  }
};

export default News;
