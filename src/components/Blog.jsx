import React from "react";
import styled from "styled-components";

const data = [
  {
    boldText: "4 Tips for piking.",
    commonText:
      "and another nice staff which is yousefull for people. Some info should be here",
    dateFrame: "January 23 2023",
  },
  {
    boldText: "3 Tips from Spain.",
    commonText: "Just some nice photo are here. Some info should be here",
    dateFrame: "February 27 2024",
  },
];

export function Blog() {
  return (
    <CustomStyle id="blog">
      <div className="text1">
        <p className="text up">LATEST</p>
        <h2 className="header">FROM THE BLOG</h2>
      </div>
      <div className="container">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img
              src={`../../blog/blog${index + 1}.jpg`}
              alt={`Blog image ${index + 1}`}
              class="item-img"
              layout="constrained"
            ></img>

            <div className="text">
              <p>
                <b>{item.boldText}</b> {item.commonText}
              </p>
              <p className="date">{item.dateFrame}</p>
            </div>
          </div>
        ))}
      </div>
    </CustomStyle>
  );
}

const CustomStyle = styled.figure`
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 2rem;
    margin: 0 auto;
    justify-content: center;
  }
  @media (max-width: 37.5em) {
    .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .item {
    display: grid;
    grid-template-rows: 1fr 1fr;
    border-radius: 1rem;
    border: 1px solid #dee2e6;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .item-img {
    width: 100%;
    height: 100%;
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

  .date {
    margin-top: 1rem;
  }
`;
