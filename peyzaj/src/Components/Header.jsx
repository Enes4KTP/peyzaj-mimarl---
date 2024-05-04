import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import foto from "../images/image2bg.png";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div>
      <Box
        sx={{
          bgcolor: "white",
          height: "7vh",
          // borderRadius: "50px",
          zIndex: "999",
          position: "sticky",
          width: "100%",
          // boxShadow: "0px 0px 25px -1px rgba(0,0,0,0.75)",
          top: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            sx={{
              color: "black",
              marginRight: "4rem",
              textDecoration: "none",
              textTransform: "uppercase",
              // borderBottom: "3px solid #3E7A3D",
              transition: "transform 0.3s ease",
              transform: isHovered1 ? "translateY(-10px)" : "translateY(0)",
              "&:hover": {
                // color: "white",
                borderBottom: "3px solid white",
              },
            }}
          >
            Peyzaj Mimarlığı
          </Link>
          <Link
            component={RouterLink}
            to="/projeler"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            sx={{
              color: "black",
              marginRight: "4rem",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.3s ease",
              transform: isHovered2 ? "translateY(-10px)" : "translateY(0)",
              "&:hover": {
                // color: "#3E7A3D",
                borderBottom: "3px solid #3E7A3D",
              },
            }}
          >
            Projeler
          </Link>
          <Link
            component={RouterLink}
            to="/bitkiler"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            sx={{
              color: "black",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.3s ease",
              transform: isHovered3 ? "translateY(-10px)" : "translateY(0)",
              "&:hover": {
                color: "#3E7A3D",
                borderBottom: "3px solid #3E7A3D",
              },
            }}
            href="#"
          >
            Bitkiler
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
