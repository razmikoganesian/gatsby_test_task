import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <AAA>
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
            <div className="item">About</div>
            <div className="item">Portfolio</div>
            <div className="item">Testimonials</div>
            <div className="item">Blog</div>
            <div className="item connect-item">Connect</div>
          </div>
        </div>
      </div>
    </AAA>
  );
}

const AAA = styled.figure`
  .container {
    width: 1140px;
    margin: 2rem auto;
  }

  .item-img {
    width: 25px;
    height: 25px;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    padding: 2rem;
  }

  .nav-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .item {
    font-weight: 700;
    color: #0a2844;
    font-size: 1.2rem;
  }

  .connect-item {
    padding: 0.5rem 2rem;
    border-radius: 0.5rem;
    color: #fff;

    background-color: #0a2844;
  }
`;
