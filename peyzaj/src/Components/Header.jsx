import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Header() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const location = useLocation();
  const isActive1 = location.pathname === "/";
  const isActive2 = location.pathname === "/projeler";
  const isActive3 = location.pathname === "/bitkiler";
  const isActive4 = location.pathname === "/peyzaj";

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
              color: isActive1 ? "orange" : "black",
              borderBottom: isActive1 ? "3px solid orange" : "none",
              marginRight: "4rem",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.3s ease",
              transform: isHovered1 ? "translateY(-10px)" : "translateY(0)",
              "&:hover": {
                color: "orange",
                borderBottom: "3px solid orange",
              },
            }}
          >
            Ana Sayfa
          </Link>

          <Link
            component={RouterLink}
            to="/projeler"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            sx={{
              color: isActive2 ? "orange" : "black",
              borderBottom: isActive2 ? "3px solid orange" : "none",
              marginRight: "4rem",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.3s ease",
              transform: isHovered2 ? "translateY(-10px)" : "translateY(0)",
              "&:hover": {
                color: "orange",
                borderBottom: "3px solid orange",
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
              color: isActive3 ? "orange" : "black",
              borderBottom: isActive3 ? "3px solid orange" : "none",
              textDecoration: "none",
              marginRight: "4rem",
              textTransform: "uppercase",
              transition: "transform 0.3s ease",
              transform: isHovered3 ? "translateY(-10px)" : "translateY(0)",
              "&:hover": {
                color: "orange",
                borderBottom: "3px solid orange",
              },
            }}
          >
            Bitki Örtüsü
          </Link>

          <Link
            component={RouterLink}
            to="/peyzaj"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            sx={{
              color: isActive4 ? "orange" : "black",
              borderBottom: isActive4 ? "3px solid orange" : "none",
              marginRight: "4rem",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "transform 0.3s ease",
              transform: isHovered4 ? "translateY(-10px)" : "translateY(0)",
              "&:hover": {
                color: "orange",
                borderBottom: "3px solid orange",
              },
            }}
          >
            Peyzaj Mimarlığı
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
