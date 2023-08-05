// AboutMe.js
import React, { useRef } from 'react';
import * as S from "./AboutMe.style";
import { motion } from 'framer-motion';

const AboutMe = () => {
  const projectsRef = useRef(null);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownload = () => {
    const pdfFilePath = "../../files/Tomer-Cohen-resume.pdf";
    const anchor = document.createElement('a');
    anchor.href = pdfFilePath;
    anchor.download = 'Tomer-Cohen-resume.pdf';
    anchor.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <S.Container>
        <S.ImageContainer>
          <img src="https://www.freeiconspng.com/thumbs/penguin-png/madagascar-penguin-png-1.png" alt="Profile" />
        </S.ImageContainer>
        <S.TextContainer>
          <S.Text>About Me</S.Text>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur incidunt enim illum possimus voluptatibus, dolorem quasi, exercitationem minus iste accusantium, impedit nihil aliquid ab fuga repudiandae at voluptate corporis.</p>
          <S.DownloadButton onClick={handleDownload}>Download PDF</S.DownloadButton>
          <S.DownloadButton onClick={() => scrollToRef(projectsRef)}>PROJECTS</S.DownloadButton>
          <section ref={projectsRef} />
        </S.TextContainer>
      </S.Container>
    </motion.div>
  );
};

export default AboutMe;
