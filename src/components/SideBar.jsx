import './SideBar.css';
import { Link } from 'react-router-dom';

function SideBar() {
    return(
        <div className="sidebar">
            <ul>
                <Link to = {"/"}><li>Home</li></Link>
                <Link to = {"/about"}><li>About</li></Link>
                <Link to = {"/itemdetails"}><li>Item Details</li></Link>
            </ul>
        </div>
    )
}

export default SideBar;