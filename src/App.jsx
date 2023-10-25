import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyArticles from "./pages/MyArticles";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import NoPage from "./pages/NoPage";
import "./reset.css";
import "./App.css";
import NavTopic from "./components/NavTopic";

function App() {
  return (
    <>
      <Header />
      <main>
        <NavTopic />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route index path="/home" element={<Home />} />
          <Route index path="/home/:topic" element={<Home />} />
          <Route path="/home/:topic/:article_id" element={<Article />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myarticles" element={<MyArticles />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
