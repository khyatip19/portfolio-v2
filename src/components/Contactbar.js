import React from 'react';
import styled from 'styled-components';

const Contactbar = () => {
  return (
    <Bar>
      {/* <a
        href="https://drive.google.com/file/d/1r5z5b76Gd1xCsxYzIGasYC8snlVN8fpw/view?usp=sharing"
        target="_blan"
      >
        <Circle style={{ backgroundColor: "#FEECEA" }}>
          <img src="/images/resume.png" alt="" />{" "}
        </Circle>
      </a> */}
      <a href='https://www.linkedin.com/in/khyati-prajapati/' target='_blan'>
        <Circle style={{ backgroundColor: '#E5F1F8' }}>
          <img src='/images/linkedin.svg' alt='' />
        </Circle>
      </a>
      <a href='https://github.com/khyatip19' target='_blan'>
        <Circle style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
          <img src='/images/github.png' alt='' />
        </Circle>
      </a>
      <a href={'mailto: khyatip19@gmail.com'}>
        <Circle style={{ backgroundColor: '#FEECEA' }}>
          <img src='/images/mail.svg' alt='' />
        </Circle>
      </a>
    </Bar>
  );
};

const Bar = styled.div`
  position: fixed;
  z-index: 20;
  bottom: 0;
  right: 2%;
  padding: 1rem;
  height: 30vh;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Circle = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  width: 7vh;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & > img {
    width: 3vh;
  }

  &:hover {
    height: 9vh;
    width: 9vh;
  }
`;

export default Contactbar;
