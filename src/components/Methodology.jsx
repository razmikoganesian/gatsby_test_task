import React from "react";
import styled from "styled-components";

const articles = [
  {
    title: "Discovery 1",
    article: `Nearly ten years had passed since the Dursleys had woken up to
    find their nephew on the front step, but Privet Drive had hardly
    changed at all. The sun rose on the same tidy front gardens and
    lit up the brass number four on the Dursleys’`,
  },
  {
    title: "Discovery",
    article: `there had been lots of pictures of what looked like a large pink
    beach ball wearing differentcoloured bonnets — but Dudley Dursley
    was no longer a baby, and now the photographs showed a large blond
    boy riding his first bicycle, on a carousel at the fair, playing a
    computer game with his father,`,
  },
  {
    title: "Build",
    article: `Yet Harry Potter was still there, asleep at the moment, but not
    for long. His Aunt Petunia was awake and it was her shrill voice
    that made the first noise of the day.`,
  },
  {
    title: "Launch",
    article: `“Up!” she screeched. Harry heard her walking toward the kitchen
    and then the sound of the frying pan being put on the stove. He
    rolled onto his back and tried to remember the dream he had been
    having.`,
  },
];

export function Methodology() {
  return (
    <CustomStyle>
      <div className="container">
        <div className="left">
          <p>Methodology</p>
          <h2 className="header">My Process</h2>
        </div>
        <div className="right">
          {articles.map((item, index) => (
            <div className="item" key={index}>
              <p className={`phase phase-${index + 1}`}>Phase {index + 1}</p>
              <h2 className="headline">{item.title}</h2>
              <article>{item.article}</article>
            </div>
          ))}
        </div>
      </div>
    </CustomStyle>
  );
}

const CustomStyle = styled.figure`
  .container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 35vw auto;
    justify-content: center;
    margin: 3rem auto;
  }
  @media (max-width: 37.5em) {
    .container {
      grid-template-columns: auto;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }

  .header {
    font-weight: bold;
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 3rem;
  }

  .phase {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .phase-1 {
    color: var(--green-dark);
  }

  .phase-2 {
    color: var(--purple);
  }

  .phase-3 {
    color: var(--red-dark);
  }

  .phase-4 {
    color: var(--blue);
  }

  .headline {
    font-weight: bold;
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }
`;
