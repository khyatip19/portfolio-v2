/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Moreproject from '../components/Moreproject';
import { Link } from 'react-router-dom';

const Workpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Work>
      <Container>
        <Design>
          <h1 data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
            Projects
          </h1>
          <h2 data-aos='fade-right' data-aos-delay='1000' data-aos-duration='1000'>
            &lt;Work /&gt;
          </h2>
        </Design>
        <img data-aos='zoom-in' data-aos-duration='2000'  style={{left: '55%', top:'5%', height:'auto'}} src='/images/posef/working2_trans.png' alt='' />
        <h3 data-aos='fade-up' data-aos-delay='2000' data-aos-duration='1000'>
          A collection of front-end, full-stack Coding. These are a mix of practice and side projects.
        </h3>
      </Container>

      <Container>
        <Row>
          <Col>
            <Link to="/project/7">
              <Moreproject name="LeprosyDetect" id={7} />
            </Link>
            <hr
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <Link to="/project/6">
              <Moreproject name="Cropifier" id={6} />
            </Link>
            <hr
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <Link to="/project/8">
              <Moreproject name="Leprosy Website" id={8} />
            </Link>
            {/* <hr
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <Link to="/project/2">
              <Moreproject name="TrackerX" id={2} />
            </Link> */}
          </Col>
          {/* <Col>
            <Link to="/project/1">
              <Moreproject name="Dev.to Clone" id={1} />
            </Link>
            <hr
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <Link to="/project/5">
              <Moreproject name="NetFlix Clone" id={5} />
            </Link>
            <hr
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <Link to="/project/4">
              <Moreproject name="Portflio 2021" id={4} />
            </Link>
            <hr
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
            />
            <Link to="/project/3">
              <Moreproject name="devFriend.io" id={3} />
            </Link>
          </Col> */}
        </Row>
      </Container>
      <BG
        style={{
          backgroundColor: 'rgb(49,196,140, 0.2)',
          top: '10%',
          left: '55%',
        }}
      ></BG>
    </Work>
  );
};

const Work = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;

  & > h2 {
    color: transparent;
    font-size: 20rem;
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--green);
    bottom: 10%;
    left: 0%;

    @media (max-width: 768px) {
      font-size: 13rem;
    }
  }

  & > h1 {
    font-size: 12rem;
    font-weight: 500;
    position: absolute;
    z-index: 0;
    bottom: 10%;
    left: 0%;

    @media (max-width: 768px) {
      line-height: 13rem;
    }
  }
`;

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  padding: 5rem;
  z-index: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > img {
    position: absolute;
    width: 50%;
    height: auto;
    left: 70%;
    z-index: -2;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  @media (max-width: 1024px) {
    min-height: 80vh;
  }

  & > h3 {
    margin-right: auto;
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 3rem;

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 90%;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Col = styled.div`
  flex: 1;
  width: 50%;
  min-height: max-content;
  margin: 2rem;
  display: flex;
  flex-direction: column;

  & > h1 {
    font-size: 5rem;
    font-weight: 400;
    margin: 2rem;
    margin-bottom: 0;
  }

  & > img {
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  & > h2 {
    color: gray;
    font-size: 2rem;
    font-weight: 400;
    margin: 0 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const BG = styled.div`
  position: absolute;
  left: 53%;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  z-index: -5;
`;

export default Workpage;
