// ContactMe.style.js
import { styled } from "@mui/material/styles";

export const FormContainer = styled('div')({
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "wheat",
});

export const Form = styled('form')({
  display: "flex",
  flexDirection: "column",
});

export const FormGroup = styled('div')({
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
});

export const Input = styled('input')({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

export const TextArea = styled('textarea')({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  resize: "vertical",
  minHeight: "100px",
});

export const SubmitButton = styled('button')({
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
