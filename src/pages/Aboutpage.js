import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'aos/dist/aos.css';

const Aboutpage = () => {
  const [time, setTime] = useState(1000);

  useEffect(() => {
    // window.scrollTo(0, 0)
    if (window.location.pathname === '/') {
      setTime(100);
    }
    document.title = 'Khyati Prajapati -- About';
  }, []);

  return (
    <About>
      <Container>
        <Design>
          <h1 data-aos='fade-left' data-aos-delay={time} data-aos-duration='1000'>
            Khyati Prajapati
          </h1>
          <h2 data-aos='fade-right' data-aos-delay={time} data-aos-duration='1000'>
            &lt;About /&gt;
          </h2>
        </Design>
        <img data-aos='zoom-in' data-aos-duration='2000' src='/images/posef/phone_trans.png' alt='' />
        <h3 data-aos='fade-up' data-aos-delay={time} data-aos-duration='1000'>
          I am a Full-stack creative developer based in Mumbai,
          <span> India</span>. I am a Information Technology graduate and did some coursework to the SEO.
        </h3>
        <h4 data-aos='fade-up' data-aos-delay={time} data-aos-duration='1000'>
          I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on performance & accessibility with
          delightful interactions.
          {/* I create lighting fast WebApps and Websites using <span>MERN</span> Stack with the help of ReactJS. */}
        </h4>
        <BG
          style={{
            backgroundColor: 'rgb(248,224,142, 0.3)',
            top: '10%',
            left: '55%',
          }}
        ></BG>
      </Container>

      <Container>
        <Design2>
          <h1 data-aos='fade-left' data-aos-delay='100' data-aos-duration='1000'>
            ToolBox
          </h1>
          <h2 data-aos='fade-right' data-aos-delay='100' data-aos-duration='1000'>
            TECH
          </h2>
          {/* <img src='/images/pose/pose_m14.png' alt='' />
          <BG style={{ backgroundColor: '#E5F1F8', top: '10%', left: '57%' }}></BG> */}
        </Design2>
        <ToolBox>
          <Circle data-aos='zoom-in' data-aos-delay='3500' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/html5.svg' alt='' />
            <span>HTML</span>
          </Circle>
          <Circle data-aos='zoom-in' data-aos-delay='3700' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/css.svg' alt='' />
            <span>CSS</span>
          </Circle>
          {/* <Circle data-aos='zoom-in' data-aos-delay='3900' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/sass.svg' alt='' />
            <span>SASS</span>
          </Circle> */}
          {/* <Circle data-aos='zoom-in' data-aos-delay='3700' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/react.svg' alt='' />
            <span>REACT</span>
          </Circle> */}
          {/* <Circle data-aos='zoom-in' data-aos-delay='3700' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/redux.svg' alt='' />
            <span>REDUX</span>
          </Circle>
          <Circle data-aos='zoom-in' data-aos-delay='4100' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/nodejs.svg' alt='' />
            <span>NODEJS</span>
          </Circle>
          <Circle data-aos='zoom-in' data-aos-delay='4100' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/expressjs.svg' alt='' />
            <span>EXPRESSJS</span>
          </Circle> */}
          <Circle data-aos='zoom-in' data-aos-delay='4500' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/javascript.svg' alt='' />
            <span>JS</span>
          </Circle>
          <Circle data-aos='zoom-in' data-aos-delay='4700' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/mongodb.svg' alt='' />
            <span>MONGODB</span>
          </Circle>
          {/* <Circle data-aos='zoom-in' data-aos-delay='4700' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/nextjs.svg' alt='' />
            <span>NEXTJS</span>
          </Circle> */}
          <Circle data-aos='zoom-in' data-aos-delay='4900' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/getbootstrap.svg' alt='' />
            <span>BOOTSTRAP</span>
          </Circle>
          {/* <Circle data-aos='zoom-in' data-aos-delay='5200' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/nestjs.svg' alt='' />
            <span>NestJS</span>
          </Circle>
          <Circle data-aos='zoom-in' data-aos-delay='5500' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/laravel.svg' alt='' />
            <span>Laravel</span>
          </Circle> */}
          <Circle data-aos='zoom-in' data-aos-delay='5700' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/firebase.svg' alt='' />
            <span>Firebase</span>
          </Circle>
          <Circle data-aos='zoom-in' data-aos-delay='5800' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/docker.svg' alt='' />
            <span>Docker</span>
          </Circle>
          <Circle data-aos='zoom-in' data-aos-delay='5900' data-aos-duration='1000' style={{ backgroundColor: '#E5F1F8' }}>
            <img src='/images/kubernetes.svg' alt='' />
            <span>Kubernetes</span>
          </Circle>
        </ToolBox>
      </Container>

      <Container>
        <Design2>
          <h1 data-aos='fade-left' data-aos-delay='100' data-aos-duration='1000'>
            Why me?
          </h1>
          <h2 data-aos='fade-right' data-aos-delay='100' data-aos-duration='1000'>
            About Me
          </h2>
          {/* <img src='/images/pose/pose_m22.png' alt='' />
          <BG style={{ backgroundColor: '#E5F1F8', top: '10%', left: '57%' }}></BG> */}
        </Design2>
        <h4 data-aos='fade-left' data-aos-duration='1000'>
          There’s nothing Good than enjoying more than developing good WebApps and Software for Industry. I believe that people should do things they
          are good at or in which their <span style={{ color: 'crimson' }}>Hearts </span>
          lie. That's why I choose <span style={{ color: '#31c48c' }}>Software development</span> as my career.
        </h4>
        <h4 data-aos='fade-right' data-aos-duration='1000' style={{ marginBottom: '2rem' }}>
          I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close.
        </h4>
        <h3 data-aos='fade-left' data-aos-duration='1000'>
          If you’ve got a project you’d like to work on with me just get in touch and we can get to work!
        </h3>
      </Container>
    </About>
  );
};

const About = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Circle = styled.div`
  padding: 2rem 0;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 13rem;
  width: 13rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & > img {
    height: auto;
    width: 30%;
  }

  & > span {
    font-size: 1.5rem;
    font-weight: 400;
  }

  & > i {
    font-size: 3rem;
  }
`;

const Design = styled.div`
  position: relative;
  overflow: hidden;
  height: 45vh;

  @media (max-width: 1024px) {
    height: 30vh;
  }

  & > h2 {
    color: transparent;
    font-size: 17rem;
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--yellow);
    bottom: 9%;
    left: 0%;

    @media (max-width: 768px) {
      font-size: 10rem;
    }
  }

  & > img {
    width: 40%;
    position: absolute;
    right: -20%;
    height: auto;
  }

  & > h1 {
    font-size: 6rem;
    font-weight: 200;
    position: absolute;
    z-index: 2;
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
  max-width: 1580px;
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
    width: 40%;
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
    margin: 2rem 0;
    /* margin-left: auto; */
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 2rem;

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 70%;
    }
  }

  & > h4 {
    /* margin-left: auto; */
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 2rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
      margin: 2rem 0;
      width: 70%;
    }
  }
`;

const Design2 = styled(Design)`
  height: 30vh;
  padding: 0 5rem;

  @media (max-width: 768px) {
    height: 20vh;
  }

  & > h2 {
    color: transparent;
    font-size: 14rem;
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--yellow);
    left: 0%;

    @media (max-width: 768px) {
      left: 10%;
      font-size: 13rem;
    }
  }

  & > h1 {
    font-size: 8rem;
    font-weight: 500;
    position: absolute;
    z-index: 2;
    left: 0%;

    @media (max-width: 768px) {
      left: 5%;
      line-height: 13rem;
    }
  }
`;

const ToolBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  width: 60%;
  margin: 5rem 0;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    align-items: center;
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

export default Aboutpage;
