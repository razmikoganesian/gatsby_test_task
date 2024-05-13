import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

export default function Testimonial() {
  return (
    <AAA>
      <div className="container">
        <div className="headline">
          <p className="text up">Reviews</p>
          <h1 className="header">Customer testimonials</h1>
        </div>
        <div className="items">
          <figure className="item">
            <StaticImage
              src="../images/testimonial/person1.jpg"
              alt="person1"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img"
            />
            <StaticImage
              src="../images/quotes.svg"
              alt="quote"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-quote"
            />
            <div className="list">
              <p className="text">Razmik was quite good</p>
              <p className="person">Markus Hovhannisyan</p>
              <p className="connect">aaa@gmail.com</p>
            </div>
          </figure>
          <figure className="item">
            <StaticImage
              src="../images/testimonial/person2.jpg"
              alt="Person2"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img"
            />
            <StaticImage
              src="../images/quotes.svg"
              alt="quote"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-quote"
            />
            <div className="list">
              <p className="text">He is a fan of Spain</p>
              <p className="person">Armen Ashakyan</p>
              <p className="connect">aaa@gmail.com</p>
            </div>
          </figure>
          <figure className="item">
            <StaticImage
              src="../images/testimonial/person3.jpg"
              alt="Person3"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img"
            />
            <StaticImage
              src="../images/quotes.svg"
              alt="quote"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-quote"
            />
            <div className="list">
              <p className="text">He is good automation engineer</p>
              <p className="person">Vazgen Manukyan</p>
              <p className="connect">aaa@gmail.com</p>
            </div>
          </figure>
        </div>
        <div className="rating">
          <p className="person">Five stars</p>
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
          <div className="text">Based on 8 review</div>
          <div className="aaa">
            <StaticImage
              src="../images/star.svg"
              alt="star"
              layout="constrained"
              placeholder="tracedSVG"
              as="section"
              class="img-star"
            />
            <div>Trustpilot</div>
          </div>
        </div>
      </div>
    </AAA>
  );
}

const AAA = styled.div`
  margin-top: 5rem;
  .container {
    width: 1140px;
    margin: 5rem auto;
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
    width: 25vw;
  }

  .img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    position: absolute;
    transform: translate(75%, -150%);
  }

  .img-quote {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    transform: translate(500%, -100%);
    margin-bottom: 1rem;
  }

  .headline {
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
    margin-top: 1rem;
  }

  .img-star {
    width: 25px;
    height: 25px;
    fill: #fff;
  }

  .header {
    font-weight: bold;
    font-size: 3rem;
    color: #0a2844;
    margin-bottom: 6rem;
  }

  .up {
    text-transform: uppercase;
  }

  .text {
    font-weight: 500;
    font-size: 1rem;
    color: #495057;
    margin-top: 1rem;
  }

  .person {
    font-weight: 700;
    font-size: 1rem;
    color: #0a2844;
    margin-top: 1rem;
  }

  .connect {
    font-weight: 500;
    font-size: 0.8rem;
    color: #495057;
    margin-top: 1rem;
  }

  .list {
    text-align: center;
  }

  .aaa {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;
