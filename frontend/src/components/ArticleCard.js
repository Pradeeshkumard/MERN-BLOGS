import { Link } from "react-router-dom";
const ArticleCard = ({ article }) => (
  <div className="article-card">
    <h3>{article.title}</h3>
    <p>{article.tags?.join(", ")}</p>
    <Link to={`/articles/${article.slug}`}>Read More</Link>
  </div>
);
export default ArticleCard;
