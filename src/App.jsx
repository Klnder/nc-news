import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
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
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route index path="/home" element={<Home />} />
          <Route index path="/home/:topic" element={<Home />} />
          <Route path="/home/:topic/:article_id" element={<Article />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
