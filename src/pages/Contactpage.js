import React, { useEffect } from 'react';
import styled from 'styled-components';

const Contactpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Contact>
      <Container>
        <Design>
          <h1 data-aos='fade-left' data-aos-delay='1000' data-aos-duration='1000'>
            Let's Discuss
          </h1>
          <h2 data-aos='fade-right' data-aos-delay='1000' data-aos-duration='1000'>
            &lt;Contact /&gt;
          </h2>
        </Design>
        <BG style={{ backgroundColor: '#FEECEA' }} data-aos='zoom-in' data-aos-duration='2000'></BG>
        <img data-aos='zoom-in' data-aos-duration='2000' style={{left: '65%', width:'45%', top:'10%', height:'auto'}} src='/images/posef/tablet_trans.png' alt='' />
        {/* <span>left: '65%', width: '50%', height:'auto'
          <a
            href="https://drive.google.com/file/d/1r5z5b76Gd1xCsxYzIGasYC8snlVN8fpw/view?usp=sharing"
            target="_blan"
          >
            <i class="iconify" data-icon="mdi:file-account"></i>
            Resume
          </a>
        </span> */}
        <span>
          <a href='https://github.com/khyatip19' target='_blan'>
            <i class='fab fa-github'></i> GitHub
          </a>
        </span>
        <span>
          <a href='https://www.linkedin.com/in/khyati-prajapati/' target='_blan'>
            <i class='fab fa-linkedin'></i> LinkedIn
          </a>
        </span>
        <span>
          <a href={'mailto: khyatip19@gmail.com'}>
            <i class='fas fa-envelope'></i> Mail
          </a>
        </span>
      </Container>
    </Contact>
  );
};

const Contact = styled.div`
  width: 100%;
  min-height: 50vh;
  overflow: hidden;
`;

const Design = styled.div`
  position: relative;
  height: 35vh;

  & > h2 {
    color: transparent;
    font-size: 20rem;
    position: absolute;
    z-index: -3;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--yellow);
    bottom: 10%;
    left: 0%;
    

    @media (max-width: 768px) {
      font-size: 11rem;
    }
  }

  & > h1 {
    font-size: 12rem;
    font-weight: 500;
    position: absolute;
    z-index: 3;
    bottom: 10%;
    left: 0%;

    @media (max-width: 768px) {
      line-height: 13rem;
      width: 70%;
    }
  }
`;

const Container = styled.div`
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
  // overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 30vh;
  }
  & > span > a {
    font-size: 4rem;
    text-decoration: none;
    color: #191919;

    &:hover {
      color: var(--blue);
    }
  }

  & > h3 {
    margin-left: auto;
    width: 50%;
    text-align: left;
    font-weight: 400;
    font-size: 3rem;
  }

  

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
`;
const BG = styled.div`
  position: absolute;
  left: 53%;
  width: 70rem;
  height: 70rem;
  border-radius: 50%;
  z-index: -5;
`;

export default Contactpage;
