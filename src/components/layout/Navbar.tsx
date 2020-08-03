import React, { useContext } from "react";
import { RickContext } from "../../context/rickState";
import rick_logo from "./rick.png";
import { Link } from "@reach/router";

const Navbar = () => {
  const { state } = useContext(RickContext);

  const { favourites } = state;
  return (
    <header>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faves">Favourites</Link>
          </li>
        </ul>
      </nav>
      <img className="logo" src={rick_logo} alt="" />
      <a className="cta">
        <button className="btn-fav">Favourites {favourites.length}</button>
      </a>
    </header>
  );
};

export default Navbar;
