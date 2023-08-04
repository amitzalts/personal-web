// AboutMe.style.js
import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  display: "flex",
  marginTop: '1rem',
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "navy",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const ImageContainer = styled("div")({
  border: "1px solid #ccc",
  backgroundColor: 'pink',
  padding: "10px",
  marginBottom: "20px",
  width: "300px",
  borderRadius: "5px",
  overflow: "hidden",
  "@media (max-width: 768px)": {
    width: "150px", 
  },
});

export const TextContainer = styled("div")({
  border: "1px solid #ccc",
  padding: "20px",
  textAlign: "center",
  maxWidth: "500px", 
  borderRadius: "5px",
  backgroundColor: 'gray',
  "@media (max-width: 768px)": {
    width: "80%", 
  },
});

export const Text = styled("div")({
  backgroundColor: "red",
  padding: "10px",
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "10px",
  textAlign: "center",
});

export const DownloadButton = styled("button")({
  marginTop: "10px",
  margin: '1rem',
  padding: "8px 20px",
  backgroundColor: "#4caf50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#45a049",
  },
});
