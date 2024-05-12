import React from "react";
import styled from "styled-components";

export default function Methodology() {
  return (
    <Process>
      <div className="container">
        <div className="left">
          <h2>My Process</h2>
        </div>
        <div className="right">
          <div className="item">
            <p>Phase 1</p>
            <h2>Discovery</h2>
            <article>
              Nearly ten years had passed since the Dursleys had woken up to
              find their nephew on the front step, but Privet Drive had hardly
              changed at all. The sun rose on the same tidy front gardens and
              lit up the brass number four on the Dursleys’ front door; it crept
              into their living room, which was almost exactly the same as it
              had been on the night when Mr. Dursley had seen that fateful news
              report about the owls. Only the photographs on the mantelpiece
              really showed how much time had passed. Ten years ago
            </article>
          </div>
          <div className="item">
            <p>Phase 2</p>
            <h2>Design</h2>
            <article>
              there had been lots of pictures of what looked like a large pink
              beach ball wearing differentcoloured bonnets — but Dudley Dursley
              was no longer a baby, and now the photographs showed a large blond
              boy riding his first bicycle, on a carousel at the fair, playing a
              computer game with his father, being hugged and kissed by his
              mother. The room held no sign at all that another boy lived in the
              house, too
            </article>
          </div>
          <div className="item">
            <p>Phase 3</p>
            <h2>Build</h2>
            <article>
              Yet Harry Potter was still there, asleep at the moment, but not
              for long. His Aunt Petunia was awake and it was her shrill voice
              that made the first noise of the day.
            </article>
          </div>
          <div className="item">
            <p>Phase 4</p>
            <h2>Launch</h2>
            <article>
              “Up!” she screeched. Harry heard her walking toward the kitchen
              and then the sound of the frying pan being put on the stove. He
              rolled onto his back and tried to remember the dream he had been
              having. It had been a good one. There had been a flying motorcycle
              in it. He had a funny feeling he’d had the same dream before.
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
    grid-template-rows: 60vh;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    width: 1140px;
    margin: 2rem auto;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
