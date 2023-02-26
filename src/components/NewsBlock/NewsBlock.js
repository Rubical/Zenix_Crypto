import { useState, useEffect, useMemo } from "react";
import NewsList from "../NewsList/NewsList";
import NewsFilter from "../NewsFilter/NewsFilter";
import Loader from "../UI/Loader/Loader";
import BasicPagination from "../UI/pagination/Pagination";
import { getPageCount } from "../../utils/pages";
import cl from "./NewsBlock.module.css";
import { useSelector, useDispatch } from "react-redux";
import { loadingStart, loadingStop } from "./../../redux/loadingSlice";
import { setNews } from "../../redux/newsSlice";
import { setSortType, setSearchValue } from "../../redux/filterSlice";
import { setTotalPages } from "../../redux/paginationSlice";

const NewsBlock = () => {
  const news = useSelector((state) => state.news);
  const filter = useSelector((state) => state.filter);
  const pageCount = useSelector((state) => state.pageCount);
  const isLoading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const getNews = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=crypto&page=${pageCount}&api-key=j4ZiODq9JJvT86CJYwEdidgi0HDPUMRg`
    );
    const data = await response.json();
    const newsReady = data.response.docs.slice(0, 9);
    dispatch(setNews(newsReady));
    const totalCount = 1000;
    dispatch(setTotalPages(getPageCount(totalCount, 10)));
    dispatch(loadingStop());
  };

  useEffect(() => {
    dispatch(loadingStart());
    getNews();
    window.scroll(0, 0);
  }, [pageCount]);

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
        <NewsFilter />
        <div className={cl.container}>
          {isLoading ? <Loader /> : <NewsList news={sortedAndSearchedNews} />}
        </div>
        <div className={cl.pageBtnContainer}>
          <BasicPagination />
        </div>
      </>
    );
  }
};

export default NewsBlock;
