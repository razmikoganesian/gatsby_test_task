import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function Footer() {
  return (
    <AAA id="connect">
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
            <button onClick={() => scrollTo("#about")} className="item">
              About
            </button>
            <button onClick={() => scrollTo("#portfolio")} className="item">
              Portfolio
            </button>
            <button onClick={() => scrollTo("#testimonials")} className="item">
              Testimonials
            </button>
            <button onClick={() => scrollTo("#blog")} className="item">
              Blog
            </button>
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
    font-weight: 700;
    color: #0a2844;
    font-size: 1.2rem;
    border: none;
    background: none;
    cursor: pointer;
  }

  .legal {
    font-size: 1.2rem;
    text-align: center;
    color: #495057;
    padding: 2.5rem;
  }
`;
