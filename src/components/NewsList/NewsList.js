import NewsCard from "../NewsCard/NewsCard";

const NewsList = ({ news }) => {
  return news ? (
    news.map((item, index) => {
      return <NewsCard key={index} news={item} />;
    })
  ) : (
    <h1
      style={{
        textAlign: "center",
        marginTop: 100,
        fontSize: 50,
        color: "black",
      }}
    >
      News not found!
    </h1>
  );
};

export default NewsList;
