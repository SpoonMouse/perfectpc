import {Link, Outlet} from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Your one-stop solution for custom PC builds</h1>
      <Link>
      <button className="home-button">Start Building</button>
      </Link>
    </div>
  );
};

export default Home;