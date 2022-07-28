import { Link, NavLink } from "react-router-dom";

import Cart from "./Cart";
import "./css/Nav.css";

const Nav = () => {
  return (
    <div className="nav_wrapper">
      <div className="nav">
        <div className="nav_menu">
          <ul>
            <Link to="/">
              <li className="nav_item">HOME</li>
            </Link>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive ? "nav_item--active" : "nav_item"
              }
            >
              <li>PRODUCTOS</li>
            </NavLink>
          </ul>
        </div>
        <Link to="/cart">
          <Cart className="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
