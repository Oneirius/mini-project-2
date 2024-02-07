import "./App.css";
import "./pages/HomePage.jsx";

import NavBar from "./components/NavBar.jsx";
import SideBar from "./components/SideBar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ItemDetailsPage from "./pages/ItemDetailsPage.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
        <div>
          <NavBar />
          <SideBar />
          <Footer />
        </div>
      <Routes>
        {/*<Route path="/" element={<HomePage />} />*/}
        <Route path="/" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/itemdetails" element={<ItemDetailsPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
