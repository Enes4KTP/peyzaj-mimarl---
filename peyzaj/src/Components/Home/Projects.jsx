import { Box, Typography, Button } from "@mui/material";
import React from "react";
import foto1 from "../../images/bitki.png";
import foto2 from "../../images/bitki1.png";
import SendIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/projeler");
  };

  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#def4ff",
      }}
    >
      <Box
        sx={{
          borderRadius: "50%",
          padding: "2rem",
          margin: "auto",
          animation: "moveUpDown 2s infinite alternate",
        }}
      >
        <img src={foto1} alt="" style={{ width: "250px" }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography>
          Dünyamızı Güzelleştirmek İçin Peyzaj Mimarları Durmadan Çalışıyorlar
        </Typography>
        <Button
          variant="outlined"
          sx={{
            alignItems: "center",
            width: "50%",
            margin: "4rem auto",
          }}
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleClick}
        >
          Projeler
        </Button>
      </Box>

      <Box
        sx={{
          borderRadius: "50%",
          padding: "2rem",
          margin: "auto",
          animation: "moveUpDown 3s infinite alternate",
        }}
      >
        <img src={foto2} alt="" style={{ width: "200px" }} />
      </Box>
    </Box>
  );
}

export default Projects;
