import { Link } from "react-router-dom";
import "../stylesheets/Header.css";
import Loading from "./Loading";

const Header = () => {
  return(
    <header className="header">
      <nav className="headerContainer">
        <Link to="/">
          <h1>Podcaster</h1>
        </Link>
        <Loading />
      </nav>
    </header>
  );
}

export default Header;