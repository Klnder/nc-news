import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyArticle from "./pages/MyArticle";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import NoPage from "./pages/NoPage";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index path="/home" element={<Home />} />
          <Route path="/home/:article_id" element={<Article />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myarticles" element={<MyArticle />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
