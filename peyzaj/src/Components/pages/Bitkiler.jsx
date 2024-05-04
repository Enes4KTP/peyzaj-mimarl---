import { Box, Typography } from "@mui/material";
import React from "react";
import bgPhoto from "../../images/park.png";

function Bitkiler() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          backgroundColor: "#def4ff",
          width: "100%",
        }}
      >
        <Typography style={{ fontSize: "22px" }}>
          Bitkiler Muazzamdır.
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={bgPhoto}
          alt=""
          style={{
            width: 300,
            height: 200,
          }}
        />
      </div>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            border: "1px solid black",
            marginRight: "20px",
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default Bitkiler;
