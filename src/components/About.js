import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <About>
      <div className="container" id="about">
        <h1 className="header">About</h1>
        <p className="text">
          <b className="bold-text">
            Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to
            say that they were perfectly normal, thank you very much. They were
            the last people you’d expect
          </b>
          to be in- volved in anything strange or mysterious, because they just
          didn’t hold with such nonsense. Mr. Dursley was the director of a firm
          called Grunnings, which made drills. He was a big, beefy man with
          hardly any neck, al- though he did have a very large mustache. Mrs.
          Dursley was thin and blonde and had nearly twice the usual amount of
          neck, which came in very useful as she spent so much of her time
          craning over garden fences, spying on the neighbors. The Dursleys had
          a small son called Dudley and in their opinion there was no finer boy
          any- where. The Dursleys had everything they wanted, but they also had
          a secret, and their greatest fear was that somebody would discover it.
           1  CHAPTER ONE They didn’t think they could bear it if anyone found out
          about the Potters. Mrs. Potter was Mrs. Dursley’s sister, but they
          hadn’t met for several years; in fact, Mrs. Dursley pretended she
          didn’t have a sister, because her sister and her good-for-nothing
          husband were as unDursleyish as it was possible to be. The Dursleys
          shuddered to think what the neighbors would say if the Potters arrived
          in the street. The Dursleys knew that the Potters had a small son,
          too, but they had never even seen him. This boy was another good
          reason for keeping the Potters away; they didn’t want Dudley mixing
          with a child like that.
        </p>
        <div className="experience">
          <div className="workplace">
            <h3 className="position">Senior QA Engineer</h3>
            <h3 className="position">Multilogin</h3>
            <p className="years">2023 - current time</p>
            <p className="job-description">
              Create automation test cases. Manual testing. And more more more
              more
            </p>
            <div className="skills">
              <p className="skill">Java Script</p>
              <p className="skill">Cypress</p>
              <p className="skill">Git</p>
            </div>
          </div>
          <div className="workplace">
            <h3 className="position">QA Automation Engineer</h3>
            <h3 className="position">OnAir EnterTainment</h3>
            <p className="years">2022 - 2023</p>
            <p className="job-description">
              Create automation test cases via Playwright framework
            </p>
            <div className="skills">
              <p className="skill">Java Script</p>
              <p className="skill">Playwright</p>
              <p className="skill">Git</p>
            </div>
          </div>
          <div className="workplace">
            <h3 className="position">Senior QA Engineer</h3>
            <h3 className="position">HireRight</h3>
            <p className="years">2021 - 2022</p>
            <p className="job-description">
              Manual testing solomento. A bit SQL. Logs also was a hell
            </p>
            <div className="skills">
              <p className="skill">Jira</p>
              <p className="skill">Sql</p>
              <p className="skill">Postman</p>
            </div>
          </div>
        </div>
      </div>
    </About>
  );
}

const About = styled.section`
  .container {
    width: 1140px;
    margin: 3rem auto 5rem auto;
    text-align: center;
  }

  .header {
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    color: #0a2844;
    margin-bottom: 3rem;
  }
  .experience {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    margin-top: 5rem;
  }

  .job-description {
    box-sizing: content-box;
    width: 100%;
    font-weight: 500;
    font-size: 1rem;
    color: #495057;
    margin-bottom: 1rem;
  }

  .workplace {
    width: 15rem;
  }

  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .skill {
    color: #fff;
    background-color: #0a2844;
    padding: 0.3rem 0.3rem;
    border-radius: 0.5rem;
  }

  .text {
    font-weight: 500;
    font-size: 1rem;
    color: #495057;
  }

  .bold-text {
    font-weight: 700;
    color: #0c3256;
  }

  .position {
    margin-bottom: 1rem;
    color: #0a2844;
  }

  .years {
    font-weight: 500;
    font-size: 1rem;
    color: #495057;
  }
`;
