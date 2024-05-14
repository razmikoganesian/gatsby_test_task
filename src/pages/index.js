import * as React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import styled from "styled-components";
import Methodology from "../components/Methodology";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import "../css/main.css";

export default function Home() {
  return (
    <Main>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Methodology />
      <Testimonial />
      <Blog />
      <Footer />
    </Main>
  );
}

const Main = styled.div`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: "Nunito", sans-serif;
    color: #6d5d4b;
    font-weight: 300;
    line-height: 1.6;
  }
`;
