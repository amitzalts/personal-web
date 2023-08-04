// styles.js
import { styled } from "@mui/material/styles";

export const Nav = styled("ul")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: 0,
  listStyle: "none",
  backgroundColor: "#f0f0f0",
  borderRadius: "10px",
  width: "100%",
  margin: "0",
  position: "fixed",
  top: 0,

  "@media (max-width: 768px)": {
    flexDirection: "column",
    width: "60px",
  },
});

export const NavItem = styled("li")({
  margin: "10px 0",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "40px",
  borderRadius: "5px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#ddd",
  },
});
