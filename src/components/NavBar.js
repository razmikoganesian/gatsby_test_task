import { Link } from "gatsby";
import React from "react";
import logo from "../images/hand.svg";
import styled from "styled-components";

export default function NavBar() {
  return (
    <Navigation>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="just a waving hand"></img>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              About
            </Link>
            <Link to="/" className="nav-link">
              Portfolio
            </Link>
            <Link to="/" className="nav-link">
              Testimonials
            </Link>
            <Link to="/" className="nav-link">
              Blog
            </Link>
            <Link class="btn btn--connect nav-link">Connect</Link>
          </div>
        </div>
      </nav>
    </Navigation>
  );
}

const Navigation = styled.section`
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-center {
    width: 90rem;
    max-width: 1440px;
    display: flex;
    align-items: center;
  }

  .nav-header {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header img {
    width: 50px;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 3rem;
    justify-content: flex-end;
  }

  .nav-link {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: #071e33;
    letter-spacing: 2px;
    padding: 1rem 0;
    text-decoration: none;
  }

  .btn {
    text-decoration: none;
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    display: inline-block;
    transition: all 0.2s;
    position: relative;
    border: none;
    cursor: pointer;
  }

  .btn--connect {
    color: #fff;
    background-color: #071e33;
  }
`;
