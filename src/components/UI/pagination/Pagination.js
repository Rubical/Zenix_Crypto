const Pagination = () => {
  return (
    <div className={cl.pageBtnContainer}>
      {pagesArray.map((p) => (
        <PageButton changePage={changePage} key={p} page={p} />
      ))}
    </div>
  );
};

export default Pagination;
