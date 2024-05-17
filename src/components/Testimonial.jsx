import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Star } from "../images/star.svg";

const data = [
  {
    name: "Hachatur",
    feedback: "Razmik is nice",
    email: "hach@gmail.com",
  },
  {
    name: "Ashot",
    feedback: "Razmik is awesome",
    email: "ashot@gmail.com",
  },
  {
    name: "Armen",
    feedback: "He is good",
    email: "armen@gmail.com",
  },
];

export function Testimonial() {
  return (
    <CustomStyle>
      <div className="container" id="testimonials">
        <div className="headline">
          <p className="text up">Reviews</p>
          <h1 className="header">Customer testimonials</h1>
        </div>
        <div className="items">
          {data.map((item, index) => (
            <figure className="item" key={index}>
              <img
                src={`../../testimonial/person${index + 1}.jpg`}
                alt={`Person ${index + 1}`}
                class="img"
                layout="constrained"
              ></img>
              <StaticImage
                src="../images/quotes.svg"
                alt="quote"
                layout="constrained"
                placeholder="tracedSVG"
                as="section"
                class="img-quote"
              />
              <div className="list">
                <p>{item.feedback}</p>
                <p className="person">{item.name}</p>
                <p>{item.email}</p>
              </div>
            </figure>
          ))}
        </div>
        <div className="rating">
          <p className="person">Five stars</p>
          <div className="overview__stars">
            <Star class="img-star" fill="white" alt="star" />
            <Star class="img-star" fill="white" alt="star" />
            <Star class="img-star" fill="white" alt="star" />
            <Star class="img-star" fill="white" alt="star" />
            <Star class="img-star" fill="white" alt="star" />
          </div>
          <div className="text">Based on 8 review</div>
          <div className="aaa">
            <div>
              <Star class="last-star" fill="orange" alt="star" />
            </div>

            <div>Trustpilot</div>
          </div>
        </div>
      </div>
    </CustomStyle>
  );
}

const CustomStyle = styled.div`
  margin-top: 5rem;
  .container {
    margin: 5rem auto;
    padding: 2rem;
    background-color: #fff0f6;
  }

  .items {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }
  @media (max-width: 37.5em) {
    .items {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }

  .item {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .img {
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    position: absolute;
    transform: translate(200%, -50%);
  }

  .img-quote {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    position: absolute;
    transform: translate(100%, 10%);
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
    width: 2rem;
    height: 2rem;
    background-color: orange;
  }

  .last-star {
    width: 2rem;
    height: 2rem;
  }

  .header {
    font-weight: bold;
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 6rem;
  }

  .up {
    text-transform: uppercase;
  }

  .person {
    font-weight: 700;
    font-size: 1rem;
    color: var(--primary);
    margin-top: 1rem;
  }

  .list {
    width: 25rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    background-color: #fff;
    padding: 3rem 2rem;
  }

  .aaa {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;
