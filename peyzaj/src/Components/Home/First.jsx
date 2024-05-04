import React from "react";
import foto from "../../images/40771.jpg";
import { Box } from "@mui/material";

function First() {
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          position: "relative",
        }}
      >
        <img
          src={foto}
          style={{
            position: "absolute",
            width: "100%",
            objectFit: "contain",
            borderBottomRightRadius: "40%",
          }}
        />
      </Box>
    </div>
  );
}

export default First;
