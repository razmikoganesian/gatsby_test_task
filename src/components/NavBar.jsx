import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";

export function NavBar() {
  return (
    <CustomStyle>
      <div className="container">
        <div className="navbar">
          <StaticImage
            src="../images/hand.svg"
            alt="mail"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="item-img"
          />

          <div className="nav-links">
            <button
              onClick={() => scrollTo("#about")}
              className="link nav__link"
            >
              <p>About</p>
            </button>
            <button
              onClick={() => scrollTo("#portfolio")}
              className="link nav__link"
            >
              <p>Portfolio</p>
            </button>
            <button
              onClick={() => scrollTo("#testimonials")}
              className="link nav__link"
            >
              <span>Testimonials</span>
            </button>
            <button
              onClick={() => scrollTo("#blog")}
              className="link nav__link"
            >
              <span>Blog</span>
            </button>
            <button
              onClick={() => scrollTo("#connect")}
              className="link connect-link"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </CustomStyle>
  );
}

const CustomStyle = styled.figure`
  .container {
    margin: 0 auto;
  }

  .item-img {
    width: 2rem;
    height: 2rem;
  }
  @media (max-width: 56.25em) {
    .item-img {
      display: none;
    }
  }

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }
  @media (max-width: 37.5em) {
    .navbar {
      justify-content: center;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  @media (max-width: 37.5em) {
    .nav-links {
      flex-direction: column;
    }
  }

  .link {
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    display: inline-block;
    font-weight: 700;
    cursor: pointer;
    border: none;
    background: none;
  }

  .connect-link {
    color: var(--white);
    background-color: var(--primary);
  }

  .nav__link {
    color: var(--primary);
    background: none;
  }

  .link:hover,
  .link:active:not(:last-child) {
    background-size: 230%;
    color: var(--white);
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 0%,
      var(--primary) 0%
    );
    transition: all 0.8s;
  }
`;
