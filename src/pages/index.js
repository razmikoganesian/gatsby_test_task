import * as React from "react";
import styled from "styled-components";
import "../css/main.css";

import {
  About,
  Blog,
  Footer,
  Hero,
  Methodology,
  NavBar,
  Portfolio,
  Testimonial,
} from "../components/Index";

export default function Home() {
  return (
    <CustomStyle>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      <Methodology />
      <Testimonial />
      <Blog />
      <Footer />
    </CustomStyle>
  );
}

const CustomStyle = styled.div`
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
