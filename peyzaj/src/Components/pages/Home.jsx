import React from "react";
import Header from "../Header";
import Banner from "../Banner";
import Description from "../Description";
import foto from "../../images/40771.jpg";
import { Box } from "@mui/material";

function Home() {
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#c4edff",
          marginTop: "-6.7rem",
          position: "relative",
        }}
      >
        <img
          src={foto}
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "7rem",
            borderBottomRightRadius: "40%",
          }}
        />
      </Box>
      {/* <Banner />
      <Description /> */}
    </div>
  );
}

export default Home;
