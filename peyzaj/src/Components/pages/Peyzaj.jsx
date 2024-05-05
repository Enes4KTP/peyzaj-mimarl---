import React from "react";
import { Typography } from "@mui/material";
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
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Doğanın Renkli Dünyası: <br></br>
          Peyzaj Mimarlığı Nedir?
        </Typography>
      </div>
    </div>
  );
}

export default Peyzaj;
