import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';

const Loader = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 1000 });
    document.title = 'Khyati Prajapati Portfolio';
  }, []);

  return (

    <Load>
      <BG style={{ backgroundColor: 'rgb(49,196,140, 0.2)', top: '50%', left: '70%' }}></BG>

      <h1 style={{ color: 'purple' }} data-aos='fade-up'>
        Welcome aboard !
        {/* वसुधैव कुटुम्बकम् 🙏 */}
      </h1>

      <BG
        style={{
          backgroundColor: '#FEECEA',
          top: '15%',
          left: '-15%',
        }}
      ></BG>
      <BG
        style={{
          backgroundColor: 'rgb(248,224,142, 0.3)',
          top: '-40%',
          left: '35%',
        }}
      ></BG>
    </Load>
    
  );
};

const Load = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  overflow: hidden;

  & > h1 {
    font-size: 8vw;
    top: 50%
  }
  & > h2 {
    font-size: 2rem;
    top: 60%
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

export default Loader;
