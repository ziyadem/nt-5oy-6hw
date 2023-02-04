import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const { cart } = useSelector((lyuboy) => lyuboy); // lyuboy => store

  function handleLogout() {
    localStorage.removeItem("token");
    toast("Logged Out", { type: "info" });
    navigate("/login");
  }

  return (
    <header className="text-bg-primary py-3 shadow sticky-top">
      <nav className="container d-flex align-items-center justify-content-between">
        <Link className="text-warning text-decoration-none fs-2" to="/">
          Najot Market
        </Link>

        <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              About
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="btn btn-primary fs-4" to="/cart">
              <i className="fa-solid fa-shopping-cart"></i>
              <span className="badge text-bg-danger ms-2">
                {cart.items.length}
              </span>
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="btn btn-primary fs-4">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
