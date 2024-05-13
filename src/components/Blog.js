import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Blog() {
  return (
    <AAA>
      <div className="text1">
        <p>LATEST</p>
        <h2>FROM THE BLOG</h2>
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
            <p>3 Tips for piking</p>
            <p>January 23 2023</p>
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
            <p>3 Tips for piking</p>
            <p>January 23 2023</p>
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 2rem;
  }

  .item {
    display: grid;
    grid-template-rows: 15rem 10rem;
    /* grid-row-gap: 1.5rem; */
    border-radius: 1rem;
  }

  .item-img {
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 1;
  }

  .text {
    padding: 2rem;
  }

  .text1 {
    text-align: center;
  }
`;
