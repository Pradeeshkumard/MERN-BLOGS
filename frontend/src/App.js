import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";
import NewArticleForm from "./components/NewArticleForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutMe />
                <ArticleList />
              </>
            }
          />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/new" element={<NewArticleForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
