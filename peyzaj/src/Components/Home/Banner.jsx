import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/ArrowForwardIos";
import foto from "../../images/5.png";

function Banner() {
  return (
    <Box
      sx={{
        height: "100vh",
        marginTop: "-7rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "3rem" }}>Ne İş Yaparlar?</Typography>
        <Button
          variant="outlined"
          sx={{
            alignItems: "center",
          }}
          color="warning"
          endIcon={<SendIcon />}
        >
          Peyzaj Mimarları
        </Button>
      </Box>
      <img
        src={foto}
        style={{
          height: "35rem",
          paddingRight: "15rem",
          paddingTop: "5rem",
        }}
      />
    </Box>
  );
}

export default Banner;
