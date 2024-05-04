import { Box } from "@mui/material";
import React from "react";

function Bitkiler() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "200px",
            height: "300px",
            bgcolor: "grey",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "200px",
            height: "300px",
            bgcolor: "grey",
            marginRight: "20px",
          }}
        ></Box>
        <Box
          sx={{
            width: "200px",
            height: "300px",
            bgcolor: "grey",
            marginRight: "20px",
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default Bitkiler;
