import {Link, Outlet} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to='/' style={{ textDecoration: 'none' }}>
        <span className="navbar-logo">PerfectPC</span>
        </Link>
      </div>
      <div className="navbar-right">
        <a href="#build" className="navbar-link">Build</a>
        <Link to='/about'>
        <a href="#about" className="navbar-link">About</a>
        </Link>
        <Link to='/help'>
        <a href="#help" className="navbar-link">Help</a>
        </Link>
      </div>
      <Outlet/>
    </nav>
  );
};

export default Navbar;