import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

import './HomePage.css';

function HomePage() {
    return(
        <div>
            <h1>This is the homepage</h1>
            <div className="container">
            <NavBar/>
            <SideBar/>
            <Footer/>
            </div>
        </div>
    )
}

export default HomePage;