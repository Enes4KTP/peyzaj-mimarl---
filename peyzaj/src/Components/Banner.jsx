import { Box, Typography } from "@mui/material";
import React from "react";
import foto from "../images/park.png";

function Banner() {
  return (
    <Box
      sx={{
        height: "100vh",
        marginTop: "-7rem",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "35%",
          right: "50%",
          color: "#3E7A3D",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontFamily: "sans-serif", color: "#FFA041" }}
        >
          Peyzaj Mimarları
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: "sans-serif", color: "#FFA041" }}
        >
          Bu kadar
        </Typography>
        <Typography variant="h2">GÜZEL PARK YAPMAYI</Typography>
        <Typography
          variant="h3"
          sx={{ fontFamily: "sans-serif", color: "#FFA041" }}
        >
          Nereden Öğrendi?
        </Typography>
      </Box>
      <img
        src={foto}
        style={{
          position: "absolute",
          top: "15%",
          left: "55% ",
          width: "33rem",
          borderRadius: "50%",
        }}
      />
    </Box>
  );
}

export default Banner;
