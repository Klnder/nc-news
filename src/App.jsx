import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import "./reset.css";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

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
          <Route path="/error/:error_message" element={<ErrorPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
