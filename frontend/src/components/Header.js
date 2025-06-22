import { Link } from "react-router-dom";
const Header = () => (
  <header>
    <h1>MERN Blog</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/new">Post Article</Link>
    </nav>
  </header>
);
export default Header;
