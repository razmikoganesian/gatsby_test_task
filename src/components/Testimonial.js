import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export default function Testimonial() {
  return (
    <AAA>
      <div className="container">
        <div className="text">
          <p>Reviews</p>
          <h1>Customer testimonials</h1>
        </div>
        <div className="items">
          <div className="item">
            <StaticImage
              src="../images/gallery/1.jpg"
              alt="Spain"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img"
            />
            <p>Text</p>
            <p>Text</p>
            <p>Text</p>
          </div>
          <div className="item">
            <StaticImage
              src="../images/gallery/1.jpg"
              alt="Spain"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img"
            />
            <p>Text</p>
            <p>Text</p>
            <p>Text</p>
          </div>
          <div className="item">
            <StaticImage
              src="../images/gallery/1.jpg"
              alt="Spain"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img"
            />
            <p>Text</p>
            <p>Text</p>
            <p>Text</p>
          </div>
        </div>
        <div className="rating">
          <p>Five stars</p>
          <div className="overview__stars">
            <StaticImage
              src="../images/star.svg"
              alt="star"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-star"
            />
            <StaticImage
              src="../images/star.svg"
              alt="star"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-star"
            />
            <StaticImage
              src="../images/star.svg"
              alt="star"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-star"
            />
            <StaticImage
              src="../images/star.svg"
              alt="star"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-star"
            />
            <StaticImage
              src="../images/star.svg"
              alt="star"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-star"
            />
          </div>
          <div>Based on 8 review</div>
          <div>Icon + Trust PIlot</div>
        </div>
      </div>
    </AAA>
  );
}

const AAA = styled.figure`
  .container {
    width: 1140px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #fff0f6;
  }

  .items {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  .item {
    background-color: #fff;
    padding: 3rem 5rem;
    position: relative;
    border-radius: 1rem;
  }

  .img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    position: absolute;
    transform: translate(-20%, -150%);
  }

  .text {
    text-align: center;
  }

  .rating {
    text-align: center;
    margin-top: 2rem;
  }

  .overview__stars {
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .img-star {
    width: 25px;
    height: 25px;
    fill: #fff;
  }
`;
