import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
    return(
        <div className="sidebar">
            <ul>
                <Link to = {"/"}><li>Home</li></Link>
                <Link to = {"/about"}><li>About</li></Link>

            </ul>
        </div>
    )
}

export default SideBar;