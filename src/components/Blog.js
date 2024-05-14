import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Blog() {
  return (
    <AAA id="blog">
      <div className="text1">
        <p className="text up">LATEST</p>
        <h2 className="header">FROM THE BLOG</h2>
      </div>
      <div className="container">
        <div className="item">
          <StaticImage
            src="../images/gallery/8.jpg"
            alt="picture"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="item-img"
          />
          <div className="text">
            <p>
              <b className="bold-text"> 3 Tips for piking. </b> and another nice
              staff which is yousefull for people
            </p>
            <p className="date">January 23 2023</p>
          </div>
        </div>
        <div className="item">
          <StaticImage
            src="../images/gallery/7.jpg"
            alt="picture"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="item-img"
          />
          <div className="text">
            <p>
              <b className="bold-text"> 3 Tips for piking. </b> Live in Spain is
              awesome
            </p>
            <p className="date">January 23 2023</p>
          </div>
        </div>
      </div>
    </AAA>
  );
}

const AAA = styled.figure`
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 2rem;
    margin: 0 auto;
  }

  .item {
    display: grid;
    grid-template-rows: 15rem 10rem;
    border-radius: 1rem;
    border: 1px solid #dee2e6;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .item-img {
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 1;
    border-radius: 1rem 1rem 0rem 0rem;
  }

  .text1 {
    text-align: center;
  }

  .header {
    font-weight: bold;
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 4rem;
  }

  .up {
    text-transform: uppercase;
  }

  .text {
    margin: 1rem;
  }

  .bold-text {
    font-weight: 700;
    color: var(--primary);
  }

  .date {
    margin-top: 1rem;
  }
`;
