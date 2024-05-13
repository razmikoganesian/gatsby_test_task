import React from "react";
import styled from "styled-components";

export default function Methodology() {
  return (
    <Process>
      <div className="container">
        <div className="left">
          <p className="text">Methodology</p>
          <h2 className="header">My Process</h2>
        </div>
        <div className="right">
          <div className="item">
            <p className="phase phase-1">Phase 1</p>
            <h2 className="headline">Discovery</h2>
            <article>
              Nearly ten years had passed since the Dursleys had woken up to
              find their nephew on the front step, but Privet Drive had hardly
              changed at all. The sun rose on the same tidy front gardens and
              lit up the brass number four on the Dursleys’
            </article>
          </div>
          <div className="item">
            <p className="phase phase-2">Phase 2</p>
            <h2 className="headline">Design</h2>
            <article>
              there had been lots of pictures of what looked like a large pink
              beach ball wearing differentcoloured bonnets — but Dudley Dursley
              was no longer a baby, and now the photographs showed a large blond
              boy riding his first bicycle, on a carousel at the fair, playing a
              computer game with his father,
            </article>
          </div>
          <div className="item">
            <p className="phase phase-3">Phase 3</p>
            <h2 className="headline">Build</h2>
            <article>
              Yet Harry Potter was still there, asleep at the moment, but not
              for long. His Aunt Petunia was awake and it was her shrill voice
              that made the first noise of the day.
            </article>
          </div>
          <div className="item">
            <p className="phase phase-4">Phase 4</p>
            <h2 className="headline">Launch</h2>
            <article>
              “Up!” she screeched. Harry heard her walking toward the kitchen
              and then the sound of the frying pan being put on the stove. He
              rolled onto his back and tried to remember the dream he had been
              having.
            </article>
          </div>
        </div>
      </div>
    </Process>
  );
}

const Process = styled.figure`
  .container {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    width: 1140px;
    margin: 4rem auto;
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
    color: #0a2844;
    margin-bottom: 3rem;
  }

  .text {
    font-weight: 500;
    font-size: 1rem;
    color: #495057;
    text-transform: uppercase;
  }

  .phase {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .phase-1 {
    color: #2b8a3e;
  }

  .phase-2 {
    color: #1864ab;
  }

  .phase-3 {
    color: #c92a2a;
  }

  .phase-4 {
    color: #862e9c;
  }

  .headline {
    font-weight: bold;
    font-size: 2rem;
    color: #0a2844;
    margin-bottom: 1rem;
  }

  article {
    font-weight: 500;
    font-size: 1rem;
    color: #495057;
  }
`;
