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
import EditPage from "./pages/EditPage.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
        <div>
          <NavBar />
        </div>
        <div className="page-content">
          <SideBar /> 
          <Routes>  
            <Route path="/" element={<DashboardPage className="page"/>} />
            <Route path="/about" element={<AboutPage className="page"/>} />
            <Route path="/itemdetails" element={<ItemDetailsPage className="page"/>} />
            <Route path="/notfound" element={<NotFoundPage className="page"/>} />
            <Route path="edit/:id" element={<EditPage/>} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
