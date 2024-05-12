import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <AAA>
      <div className="container">
        <div className="text">
          <p>Contact me</p>
          <h2>Got a project? Let's talk!</h2>
        </div>
        <div className="main">
          <StaticImage
            src="../images/mail.svg"
            alt="mail"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="item-img"
          />
          <p>Email are here</p>
        </div>
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
          </div>
        </div>
      </div>
      <div class="legal">Legal © Razmik Oganesian. All right reserved</div>
    </AAA>
  );
}

const AAA = styled.figure`
  .container {
    width: 1140px;
    margin: 2rem auto;
    background-color: #d0ebff;
    border-radius: 1rem;
  }

  .text {
    text-align: center;
    padding: 3rem 3rem;
  }

  .main {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
    gap: 1rem;
  }

  .item {
    font-weight: bold;
  }

  .legal {
    font-size: 1.2rem;
    text-align: center;
    color: #777;
    padding: 2.5rem;
  }
`;
