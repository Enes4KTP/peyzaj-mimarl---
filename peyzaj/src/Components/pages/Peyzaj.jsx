import React from "react";
import { Box, Typography } from "@mui/material";
import foto from "../../images/28572.jpg";

function Peyzaj() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "290px",
          backgroundColor: "#c5eef0",
          width: "100%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundImage: `url(${foto})`,
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#80c225",
            textAlign: "center",
          }}
        >
          Doğanın Renkli Dünyası <br></br>
          Peyzaj Mimarlığı
        </Typography>
      </div>
    </div>
  );
}

export default Peyzaj;
