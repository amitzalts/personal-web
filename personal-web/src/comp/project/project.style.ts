// Projects.style.js
import { styled } from "@mui/material/styles";

export const ProjectsContainer = styled('div')({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  margin: "20px auto",
  maxWidth: "1000px",
});

export const ProjectItem = styled('div')({
  position: "relative",
  overflow: "hidden",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

export const VideoContainer = styled('div')({
  position: "relative",
  cursor: "pointer",
  "&:hover div": {
    visibility: "visible",
  },
});

export const Video = styled('img')({
  width: "100%",
  height: "auto",
  borderRadius: "5px",
});

export const ProjectName = styled('div')({
  position: "absolute",
  bottom: "10px",
  left: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "5px",
  visibility: "hidden",
});
