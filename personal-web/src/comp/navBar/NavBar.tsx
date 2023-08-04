import React, { useRef } from 'react';
import TopCenter from '../center/center';
import AboutMe from '../aboutMe/AboutMe';
import * as S from "./NavBar.style"
const NavBar = () => {
	const Home = useRef(null);
	const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
	<>
    <S.Nav>
        
          <li onClick={() => scrollToRef(Home)}>Home</li>
          <li onClick={() => scrollToRef(aboutRef)}>ABOUT</li>
          <li onClick={() => scrollToRef(projectsRef)}>PROJECTS</li>
          <li onClick={() => scrollToRef(contactRef)}>CONTACT ME</li>
        
      </S.Nav>

      <section ref={Home}>
	  <TopCenter />
      </section>

	  <section ref={aboutRef}>
        <AboutMe />
      </section>
      <section ref={projectsRef}>
		
      </section>

      <section ref={contactRef}>
      </section>

    </>
  );
};

export default NavBar;