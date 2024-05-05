import React from "react";
import foto from "../../images/2.2.jpg";
import { Box } from "@mui/material";

function First() {
  return (
    <div>
      <Box
        sx={{
          height: "85vh",
          position: "relative",
        }}
      >
        <img
          src={foto}
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderBottomRightRadius: "40%",
          }}
        />
      </Box>
    </div>
  );
}

export default First;
