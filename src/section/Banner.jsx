import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Conatiner = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  span {
    display: block;
    background-color:${(props) => props.theme.body};
    padding:1rem 2rem;
  }
`;
const Banner = () => {
  return (
    <Section>
      <Conatiner id="up">
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="8" data-scroll-target="#up">Fashion is an armour </span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" data-scroll-target="#up"> to survive everyday life.</span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up">One is never over-dressed or</span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="-4" data-scroll-target="#up">  under-dressed </span>
        </BannerComponent>
        <BannerComponent>
          <span data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-target="#up"> with a Little black Dress</span>
        </BannerComponent>
      </Conatiner>
    </Section>
  );
};

export default Banner;
