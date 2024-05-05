import { Typography, Box } from "@mui/material";
import React, { useState } from "react";
import doga from "../../images/doga.png";
import slide1 from "../../images/40771.jpg";
import slide2 from "../../images/image5.png";
import foto from "../../images/28572.jpg";

function Projeler() {
  const [slideIndex, setSlideIndex] = useState(1);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 3) {
        return 1;
      } else if (newIndex < 1) {
        return 3;
      } else {
        return newIndex;
      }
    });
  }

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
      <Box
        sx={{
          backgroundColor: "#c5eef0",
          borderTopLeftRadius: "45%",
          borderBottomRightRadius: "35%",
          width: "1400px",
          height: "600px",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            padding: "50px",
          }}
        >
          <div className="slideshow-container">
            <div
              className="mySlides fade"
              style={{ display: slideIndex === 1 ? "block" : "none" }}
            >
              <img src={slide1} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex === 2 ? "block" : "none" }}
            >
              <img src={slide2} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex === 3 ? "block" : "none" }}
            >
              <img src={slide1} alt="" />
            </div>

            <button className="prev" onClick={() => plusSlides(-1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => plusSlides(1)}>
              &#10095;
            </button>
          </div>
          <div
            style={{
              width: "400px",
              height: "400px",
              marginTop: "40px",
              marginLeft: "120px",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            <Typography sx={{}}>
              AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            </Typography>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Projeler;
