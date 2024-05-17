import React from "react";
import styled from "styled-components";

const people = [
  {
    position: "Senior QA Engineer",
    company: "Multilogin",
    timePeriod: "2023 - current time",
    jobDescription: "Manual testing solomento. A bit SQL. Logs also was a hell",
    skills: ["Java Script", "Cypress", "Git"],
  },
  {
    position: "QA Automation Engineer",
    company: "OnAir EnterTainment",
    timePeriod: "2022 - 202",
    jobDescription: "Create automation test cases via Playwright framework",
    skills: ["Java Script", "Playwright", "Git"],
  },
  {
    position: "Senior QA Engineer",
    company: "HireRight",
    timePeriod: "2021 - 2022",
    jobDescription: "Manual testing solomento. A bit SQL. Logs also was a hell",
    skills: ["Jira", "SQL", "Postman"],
  },
];

export function About() {
  return (
    <CustomStyle>
      <div className="container" id="about">
        <h1 className="header">About</h1>
        <p>
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
        </p>
        <div className="experience">
          {people.map((item, index) => (
            <div className="workplace" key={index}>
              <h4 className="position">{item.position}</h4>
              <h4 className="position">{item.company}</h4>
              <p>{item.timePeriod}</p>
              <p className="job-description">{item.jobDescription}</p>
              <div className="skills">
                {item.skills.map((skill) => {
                  return <p className="skill">{skill}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomStyle>
  );
}

const CustomStyle = styled.section`
  .container {
    text-align: center;
    margin: 0 auto 3rem auto;
  }

  .header {
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 3rem;
  }
  .experience {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, 20rem);
    grid-template-rows: auto;
    justify-items: center;
    gap: 5rem;
    margin-top: 5rem;
  }

  .job-description {
    box-sizing: content-box;
    width: 100%;
    margin-bottom: 1rem;
  }

  .workplace {
    width: 15rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
  }

  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  .skill {
    color: var(--white);
    background-color: var(--primary);
    padding: 0.3rem 0.3rem;
    border-radius: 0.5rem;
  }

  .bold-text {
    font-weight: bold;
  }

  .position {
    margin-bottom: 1rem;
    color: var(--primary);
  }
`;
