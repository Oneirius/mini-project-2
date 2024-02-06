import NavBar from "../components/NavBar";
import TaskList from "../components/TaskList";
import SideBar from "../components/SideBar";
import DataDisplay from "../components/DataDisplay";
import Footer from "../components/Footer";


import './HomePage.css';

function HomePage() {
    return(
        <div>
            <h1>This is the homepage</h1>
            <div className="container">
                <NavBar/>
                <SideBar/>
                <TaskList/>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage;