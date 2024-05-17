import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

export  function Portfolio() {
  return (
    <CustomStyle>
      <div className="container" id="portfolio">
        <p className="portfolio">Portfolio</p>
        <h2 className="recent-work">Recent work</h2>

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
    </CustomStyle>
  );
}

const CustomStyle = styled.figure`
  .container {
    margin: 3rem auto;
  }

  .portfolio {
    text-transform: uppercase;
  }

  .recent-work {
    font-weight: bold;
    font-size: 3rem;
    color: var(--primary);
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    padding: 1.5rem;
    justify-content: center;
  }
  @media (max-width: 37.5em) {
    .gallery {
      grid-template-columns: repeat(2, minmax(16rem, 1fr));

    }
  }

  .gallery__item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 1rem;
    aspect-ratio: 1;

  }
`;
