import { Link, Route } from "react-router-dom";
import "../css/nav.css";
Route
function Nav() {
  return (
    <>
      <nav>
        <div className="nav-logo">
            <Link to='/' className="text-decoration"><h2>Meeting Management App</h2></Link>
        </div>
        <div className="nav-links">
            <Link to='/upcoming-meeting' className="links">Upcoming Meeting</Link>
            <Link to='/past-meeting' className="links">Past Meeting</Link>
            <Link to='/add-meeting' className="links">Add Meeting</Link>
        </div>
      
      </nav>
    </>
  );
}
export default Nav;
