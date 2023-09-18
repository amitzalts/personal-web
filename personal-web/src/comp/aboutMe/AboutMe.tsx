// AboutMe.js
import  { useRef } from 'react';
import * as S from './AboutMe.style';
import pdfFile from '../../files/Tomer Cohen -09.2023 (1).pdf'; // Import your PDF file

const AboutMe = () => {
  const projectsRef = useRef(null);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <img
          src="https://www.freeiconspng.com/thumbs/penguin-png/madagascar-penguin-png-1.png"
          alt="Profile"
        />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Text>About Me</S.Text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          consectetur incidunt enim illum possimus voluptatibus, dolorem quasi,
          exercitationem minus iste accusantium, impedit nihil aliquid ab fuga
          repudiandae at voluptate corporis.
        </p>
        <a href={pdfFile} download="Tomer Cohen Resume">
          <S.DownloadButton>Download PDF</S.DownloadButton>
        </a>
        <S.DownloadButton onClick={() => scrollToRef(projectsRef)}>
          PROJECTS
        </S.DownloadButton>
        <section ref={projectsRef} />
      </S.TextContainer>
    </S.Container>
  );
};

export default AboutMe;
