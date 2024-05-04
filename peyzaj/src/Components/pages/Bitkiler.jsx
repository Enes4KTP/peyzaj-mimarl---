import { Box, Typography } from "@mui/material";
import React from "react";
import bgPhoto from "../../images/plant-landscape.jpg";
import Sardunya from "../../images/plants/sardunya.jpg";
import misterLincoln from "../../images/plants/mister-lincoln.jpg";
import roseSunsprite from "../../images/plants/rosa-sunsprite.jpg";
import japonGulu from "../../images/plants/japon-gulu.jpg";
import doga from "../../images/doga.png";

function Bitkiler() {
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
        }}
      >
        <Typography
          style={{ fontSize: "32px", fontWeight: "bold", color: "white" }}
        >
          Bahçenizi renklendirin, <br></br>
          doğanın büyülü dünyasını keşfedin.
        </Typography>
        <img
          src={doga}
          alt=""
          style={{
            marginLeft: "165px",
            marginBottom: "20px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
          }}
        />
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={bgPhoto}
          alt=""
          style={{ objectFit: "contain", height: "430px" }}
        />
      </div> */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Box
          className="container"
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            // border: "2px solid black",
            marginRight: "20px",
          }}
        >
          <img
            src={misterLincoln}
            alt=""
            style={{
              backgroundSize: "auto",
              width: "100%",
              height: "94%",
            }}
          />
          <Typography style={{ fontSize: "18px" }}>Mister Lincoln</Typography>
          <div className="overlay">
            <div class="text">Hello World</div>
          </div>
          <hr></hr>
        </Box>
        <Box
          className="container"
          sx={{
            width: "320px",
            height: "430px",
            bgcolor: "white",
            // border: "2px solid black",
            marginRight: "20px",
          }}
        >
          <img
            src={roseSunsprite}
            alt=""
            style={{
              backgroundSize: "auto",
              width: "100%",
              height: "94%",
            }}
          />
          <Typography style={{ fontSize: "18px" }}>Rosa Sunsprite</Typography>
          <div className="overlay">
            <div class="text">Hello World</div>
          </div>
          <hr></hr>
        </Box>
        <Box className="container">
          <img
            src={japonGulu}
            alt=""
            style={{
              backgroundSize: "auto",
              width: "100%",
              height: "94%",
            }}
          />
          <Typography style={{ fontSize: "18px" }}>Japon Gülü</Typography>
          <div className="overlay">
            <div class="text">Hello World</div>
          </div>
          <hr></hr>
        </Box>
      </Box>
    </div>
  );
}

export default Bitkiler;
