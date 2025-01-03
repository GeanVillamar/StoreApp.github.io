import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faShop } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </NavLink>
        <NavLink to="/categories">
          <FontAwesomeIcon icon={faShop} />
          Categories
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
