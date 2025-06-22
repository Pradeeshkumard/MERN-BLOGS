import { useEffect, useState } from "react";
import { api } from "../api/api";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get("/articles").then((res) => setArticles(res.data));
  }, []);

  return (
    <section>
      <h2>Articles</h2>
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </section>
  );
};
export default ArticleList;
