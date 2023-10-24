import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MyArticles from "./pages/MyArticles";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import NoPage from "./pages/NoPage";
import "./reset.css";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/home/:article_id" element={<Article />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myarticles" element={<MyArticles />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
