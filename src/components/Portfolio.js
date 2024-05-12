import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export default function Portfolio() {
  return (
    <Gallery>
      <div className="container">
        <p>Portfolio</p>
        <h2>Recent work</h2>

        <div className="gallery">
          <StaticImage
            src="../images/gallery/1.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--1"
          />
          <StaticImage
            src="../images/gallery/2.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--2"
          />
          <StaticImage
            src="../images/gallery/3.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--3"
          />
          <StaticImage
            src="../images/gallery/4.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--4"
          />
          <StaticImage
            src="../images/gallery/5.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--5"
          />
          <StaticImage
            src="../images/gallery/6.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--6"
          />
          <StaticImage
            src="../images/gallery/7.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--7"
          />
          <StaticImage
            src="../images/gallery/8.jpg"
            alt="Spain"
            layout="constrained"
            placeholder="tracedSVG"
            as="section"
            class="gallery__item gallery__item--8"
          />
        </div>
      </div>
    </Gallery>
  );
}

const Gallery = styled.figure`
  .container {
    width: 1140px;
    margin: 0 auto;
    /* text-align: center; */
    margin-top: 2rem;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 30vh);
    grid-template-rows: repeat(3, 20vw);
    grid-gap: 1.5rem;
    padding: 1.5rem;
    justify-content: center;
  }

  .gallery__item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 1rem;
  }

  .gallery__item--1 {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .gallery__item--2 {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  .gallery__item--3 {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
  }

  .gallery__item--4 {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  .gallery__item--5 {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }

  .gallery__item--6 {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
  }

  .gallery__item--7 {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }

  .gallery__item--8 {
    grid-row: 3 / 4;
    grid-column: 2/ 3;
  }
`;
