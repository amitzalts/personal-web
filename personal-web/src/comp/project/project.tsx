// Projects.js
import React from "react";
import * as S from "./project.style";

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
      name: "Project 3",
      videoUrl: "https://via.placeholder.com/400",
    },
    {
      id: 5,
      name: "Project 3",
      videoUrl: "https://via.placeholder.com/400",
    },
    {
      id: 6,
      name: "Project 3",
      videoUrl: "https://via.placeholder.com/400",
    },
  ];

  return (
    <S.ProjectsContainer>
      {projectData.map((project) => (
        <S.ProjectItem key={project.id}>
          <S.VideoContainer>
            <S.Video src={project.videoUrl} alt={`Project ${project.id}`} />
            <S.ProjectName>{project.name}</S.ProjectName>
          </S.VideoContainer>
        </S.ProjectItem>
      ))}
    </S.ProjectsContainer>
  );
};

export default Projects;
