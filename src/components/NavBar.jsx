import './NavBar.css';
import logoCito from '../assets/loco-logo.png';

function NavBar() {
    return(
        <div className="navbar">
            <img src={logoCito} alt="serebro" className="logoCito"/>
            <h2>Awesome App Name and Stylish Logo omg</h2>
        </div>
    )
}

export default NavBar;