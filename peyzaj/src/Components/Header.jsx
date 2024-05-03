import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "@mui/material/Link";
import foto from "../images/image2bg.png";
import { useState } from "react";
import { Typography } from "@mui/material";

function Header() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: "#FF8135",
          height: "15vh",
          borderRadius: "50px",
          zIndex: "999",
          position: "sticky",
          boxShadow: "0px 0px 25px -1px rgba(0,0,0,0.75)",
          top: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img
            src={foto}
            alt="logo"
            style={{ margin: "5rem", height: "100px" }}
          />
          <Box
            variant="div"
            sx={{
              display: "flex",
            }}
          >
            <Typography
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              variant="h6"
              sx={{
                color: "white",
                marginRight: "2rem",
                textDecoration: "none",
                textTransform: "uppercase",
                borderBottom: "3px solid #3E7A3D",
                transition: "transform 0.3s ease", // Geçiş efekti ekliyoruz
                transform: isHovered1 ? "translateY(-10px)" : "translateY(0)", // Üzerine gelindiğinde yukarı kayması için transform kullanıyoruz
                "&:hover": {
                  color: "white",
                  borderBottom: "3px solid white",
                },
              }}
              href="#"
            >
              Peyzaj Mimarlığı
            </Typography>
            <Typography
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              variant="h6"
              sx={{
                color: "white",
                marginRight: "2rem",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "transform 0.3s ease", // Geçiş efekti ekliyoruz
                transform: isHovered2 ? "translateY(-10px)" : "translateY(0)", // Üzerine gelindiğinde yukarı kayması için transform kullanıyoruz
                "&:hover": {
                  color: "#3E7A3D",
                  borderBottom: "3px solid #3E7A3D",
                },
              }}
              href="#"
            >
              Projeler
            </Typography>
            <Typography
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
              variant="h6"
              sx={{
                color: "white",
                marginRight: "2rem",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "transform 0.3s ease", // Geçiş efekti ekliyoruz
                transform: isHovered3 ? "translateY(-10px)" : "translateY(0)", // Üzerine gelindiğinde yukarı kayması için transform kullanıyoruz
                "&:hover": {
                  color: "#3E7A3D",
                  borderBottom: "3px solid #3E7A3D",
                },
              }}
              href="#"
            >
              Bitkiler
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Header;
