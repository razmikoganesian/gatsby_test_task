import React from "react";
import styled from "styled-components";

export default function () {
  return (
    <About>
      <h1 className="header">About</h1>
      <p>
        <b>
          Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say
          that they were perfectly normal, thank you very much. They were the
          last people you’d expect{" "}
        </b>
        to be in- volved in anything strange or mysterious, because they just
        didn’t hold with such nonsense. Mr. Dursley was the director of a firm
        called Grunnings, which made drills. He was a big, beefy man with hardly
        any neck, al- though he did have a very large mustache. Mrs. Dursley was
        thin and blonde and had nearly twice the usual amount of neck, which
        came in very useful as she spent so much of her time craning over garden
        fences, spying on the neighbors. The Dursleys had a small son called
        Dudley and in their opinion there was no finer boy any- where. The
        Dursleys had everything they wanted, but they also had a secret, and
        their greatest fear was that somebody would discover it.  1  CHAPTER ONE
        They didn’t think they could bear it if anyone found out about the
        Potters. Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met for
        several years; in fact, Mrs. Dursley pretended she didn’t have a sister,
        because her sister and her good-for-nothing husband were as unDursleyish
        as it was possible to be. The Dursleys shuddered to think what the
        neighbors would say if the Potters arrived in the street. The Dursleys
        knew that the Potters had a small son, too, but they had never even seen
        him. This boy was another good reason for keeping the Potters away; they
        didn’t want Dudley mixing with a child like that.
      </p>
      <div className="experience">
        <div className="workplace">
          <h3>Senior QA Engineer</h3>
          <h3>Multilogin</h3>
          <p>2023 - current time</p>
          <p className="workplace1">
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
          <h3>QA Automation Engineer</h3>
          <h3>OnAir EnterTainment</h3>
          <p>2022 - 2023</p>
          <p>Create automation test cases</p>
          <div className="skills">
            <p className="skill">Java Script</p>
            <p className="skill">Cypress</p>
            <p className="skill">Git</p>
          </div>
        </div>
        <div className="workplace">
          <h3>Senior QA Engineer</h3>
          <h3>HireRight</h3>
          <p>2021 - 2022</p>
          <p>Manual testing solomento</p>
          <div className="skills">
            <p className="skill">JIRA</p>
            <p className="skill">SQL</p>
            <p className="skill">POSTMAN</p>
          </div>
        </div>
      </div>
    </About>
  );
}

const About = styled.section`
  .header {
    text-align: center;
  }
  .experience {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
  }

  .workplace1 {
    box-sizing: content-box;
    width: 100%;
  }

  .workplace {
    width: 15rem;
  }

  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .skill {
    color: #fff;
    background-color: #228be6;
    padding: 0.3rem 0.3rem;
    border-radius: 1rem;
  }
`;
