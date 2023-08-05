import React from "react";
import * as S from "./project.style";

const getRandomSpan = () => Math.floor(Math.random() * 1.5) + 1; // Generates a random span between 1 and 4

const getRandomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16); // Generates a random hex color
const Projects = () => {
  const projectData = [
    {
      id: 1,
      name: "Project 1",
      videoUrl: "https://via.placeholder.com/400",
    },
    {
      id: 2,
      name: "Project 2",
      videoUrl: "https://via.placeholder.com/400",
    },
    {
      id: 3,
      name: "Project 3",
      videoUrl: "https://via.placeholder.com/400",
    },
    {
      id: 4,
      name: "Project 4",
      videoUrl: "https://via.placeholder.com/400",
    },
    {
      id: 5,
      name: "Project 5",
      videoUrl: "https://via.placeholder.com/400",
    },
    {
      id: 6,
      name: "Project 6",
      videoUrl: "https://via.placeholder.com/400",
    },
  ];


  const generateRandomGridStyle = () => {
    let gridStyles = [];
    for (let i = 0; i < projectData.length; i++) {
      const colSpan = getRandomSpan();
      const color = getRandomColor();
      gridStyles.push({
        gridColumn: `span ${colSpan}`,
        backgroundColor: color,
      });
    }
    return gridStyles;
  };

  const gridStyles = generateRandomGridStyle();

  return (
    <S.ProjectsContainer>
      {projectData.map((project, index) => (
        <S.ProjectWrapper key={project.id} style={gridStyles[index]}>
          <S.ProjectItem>
            <S.VideoContainer>
              <S.Video src={project.videoUrl} alt={`Project ${project.id}`} />
              <S.ProjectName>{project.name}</S.ProjectName>
            </S.VideoContainer>
          </S.ProjectItem>
        </S.ProjectWrapper>
      ))}
    </S.ProjectsContainer>
  );
};


export default Projects;
