import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <Container>
      <div className="container">
        <div>
          <div className="article">
            <h3 className="dark-text">I Build Custom</h3>
            <h3 className="light-text">Website Solutions</h3>
            <h3 className="dark-text">That Help Your</h3>
            <h3 className="light-text">Business grow</h3>
          </div>
          <p className="text">
            I help you increase conversion and performance in every possible way
          </p>
          <div className="buttons">
            <button class="btn btn-left">See my work</button>
            <button class="btn btn-right">Start a project</button>
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/face.jpg"
            alt="Recipe 1"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="example-img"
          />
        </div>
      </div>
      <div className="underline"></div>
    </Container>
  );
}

const Container = styled.section`
  .container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    justify-items: center;
    margin: 0 auto;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn {
    text-decoration: none;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    position: relative;
    border: none;
    cursor: pointer;
  }

  .btn-left {
    color: var(--white);
    background-color: var(--primary);
  }

  .btn-right {
    color: var(--white);
    background-color: var(--secondary);
  }

  .dark-text {
    color: var(--primary);
    font-weight: bold;
    font-size: 3rem;
  }

  .light-text {
    color: var(--secondary);
    font-weight: bold;
    font-size: 3rem;
  }

  .article {
    display: flex;
    flex-direction: column;
  }

  .example-img {
    border-radius: 1rem;
    height: 400px;
    width: 400px;
  }

  .text {
    margin-top: 2rem;
  }

  .underline {
    margin-top: 8rem;
    border-bottom: 1px solid #e9ecef;
    margin-bottom: 3rem;
  }
`;
