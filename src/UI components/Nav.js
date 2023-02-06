import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <a href="#" className="nav-a">
              cookIT
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <Link className="nav-a" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-a" to="/allrecipes">
                Recipes
              </Link>
            </li>
            <li>
              <Link className="nav-a" to="/addrecipe">
                Add new recipe
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
