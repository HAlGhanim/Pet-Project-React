import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className=" flex justify-around bg-slate-600 h-14 pt-3 text-white">
      <Link to="/">
        <div>
          <img
            className="h-8 w-8 rounded-md"
            src="https://i.guim.co.uk/img/media/03734ee186eba543fb3d0e35db2a90a14a5d79e3/0_173_5200_3120/master/5200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9c30ed97ea8731f3e2a155467201afe3"
            alt="logo"
          />
        </div>
      </Link>
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <NavLink to="/pets">
        <div>Pets</div>
      </NavLink>
      <NavLink to="/about">
        <div>About Us</div>
      </NavLink>
    </div>
  );
};

export default Nav;
