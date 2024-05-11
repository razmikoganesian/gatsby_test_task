import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <Container>
      <div className="container">
        <div className="left">
          <div className="article">
            <h3 className="dark-text">I Build Custom</h3>
            <h3 className="light-text">Website Solutions</h3>
            <h3 className="dark-text">That Help Your</h3>
            <h3 className="light-text">Business grow</h3>
          </div>
          <p>
            I help you increase conversion and performance in every possible way
          </p>
          <div className="buttons">
            <button class="btn btn-left">See my work</button>
            <button class="btn btn-right">Start a project</button>
          </div>
        </div>
        <div className="right">
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
    </Container>
  );
}

const Container = styled.section`
  .container {
    display: grid;
    grid-template-rows: 60vh;
    grid-template-columns: repeat(2, 40rem);
    justify-content: center;
    margin: 1rem auto;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
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
    color: #fff;
    background-color: #101d2c;
  }

  .btn-right {
    color: #fff;
    background-color: #228be6;
  }

  .dark-text {
    color: #101d2c;
  }

  .light-text {
    color: #228be6;
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
`;
