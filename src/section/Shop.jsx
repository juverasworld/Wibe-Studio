import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    margin: 5% 3%;
    width: 80%;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.grey};

  width: 65%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;
const Shop = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref =useRef(null);
    useLayoutEffect(() => {
      let element = ref.current; 

      let t1 = gsap.timeline();

      setInterval(() => {
        
      }, 1000);
    
      return () => {
       
      }
    }, [])
    

  return (



    <Section ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        New Collections
      </Title>
      <Left>
        <p>
          The brand new collection is currently being developed in USA. We
          create our products using best quality material, including the use of
          some of the pure fabrics to make our products.
          <br />
          <br />
          We have lots of different clothing options like shoes, jackets and
          dresses. Not only clothes but we also provide unique Jewellery as
          well.
        </p>
      </Left>
      <Right>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
        <h1>Img</h1>
      </Right>
    </Section>
  );
};

export default Shop;
