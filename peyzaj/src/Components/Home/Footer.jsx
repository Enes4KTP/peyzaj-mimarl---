import { Box, Typography, Button } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0.8",
      }}
    >
      <Typography sx={{ textAlign: "center" }}>
        design by calaksi-2024{" "}
      </Typography>
    </Box>
  );
}

export default Footer;