import React, { use, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { ThemeContext } from "../../Context/ThemeContext/ThemeContex";
import logo from "../../assets/Logo (4).png"

const DashBoardNavbar = () => {
  const { user, SignoutUser } = use(AuthContext);
  const { dark, setdark } = use(ThemeContext);

  // console.log(user?.photoURL);

  const link_1 = (
    <>
      <li>
        {" "}
        <NavLink to="/home">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/all-loan">All-Loans</NavLink>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about-us">About Us</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/contact-us">Contact</Link>{" "}
      </li>
    </>
  );

  const link_2 = (
    <>
      <li>
        {" "}
        <NavLink to="/home">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/all-loan">All-Loans</NavLink>{" "}
      </li>
      <li>
        {" "}
        <Link to="/dashboard">Dashboard</Link>{" "}
      </li>
    </>
  );
  const handleLogout = () => {
    SignoutUser()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [dark]);

  return (
    <div className="navbar bg-base-100 shadow-sm w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? link_2 : link_1}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="w-25 h-29"/>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{user ? link_2 : link_1}</ul>
      </div>

      <div className="navbar-end flex">
        <button onClick={() => setdark(!dark)}>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:var(--color-sky-500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:var(--color-blue-900)]"
          />
        </button>
        {user ? (
          <>
            <div>
              <div>
                <div className="avatar">
                  <div className="w-8 rounded-full mx-2 md: w-12">
                    <img src={user?.photoURL} />
                  </div>
                </div>{" "}
                <NavLink to="/login">
                  <button onClick={handleLogout} className="btn btn-primary">
                    Logout
                  </button>
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          <Link to="/">
            <button className="btn btn-primary">Register</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DashBoardNavbar;
