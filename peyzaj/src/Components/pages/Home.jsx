import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/ArrowForwardIos";
import foto from "../../images/5.png";
import fotoIlk from "../../images/2.2.jpg";
import foto1 from "../../images/bitki.png";
import foto2 from "../../images/bitki1.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Footer from "../Footer/Footer";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/peyzaj");
    window.scrollTo(0, 0); // Sayfayı en üstüne kaydır
  };

  const navigate2 = useNavigate();

  const handleClickProject = () => {
    navigate2("/projeler");
    window.scrollTo(0, 0); // Sayfayı en üstüne kaydır
  };

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Box
        sx={{
          height: "85vh",
        }}
      >
        <img
          src={fotoIlk}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderBottomRightRadius: "40%",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "50%",
          marginTop: "-2rem",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "20%",
            marginTop: "2rem",
          }}
        >
          <div style={{ width: "90%", marginBottom: "2rem" }}>
            <Typography
              sx={{ fontSize: { xs: "2rem", sm: "3rem" }, marginTop: "2rem" }}
            >
              Peyzaj Mimarı Nedir?
            </Typography>
            <Typography sx={{ fontSize: "1rem", textAlign: "justify" }}>
              Peyzaj mimarları, doğal ve yapay unsurları bir araya getirerek
              parklar, bahçeler ve diğer alanların estetik ve fonksiyonel
              tasarımlarını oluştururlar. İnsanların doğayla etkileşimini teşvik
              ederek yaşam kalitesini artırırlar ve çevresel sürdürülebilirliği
              desteklerler.
            </Typography>
          </div>
          <Button
            variant="outlined"
            sx={{ width: "200px", height: "40px" }}
            color="warning"
            endIcon={<SendIcon />}
            onClick={handleClick}
          >
            Peyzaj Mimarları
          </Button>
        </Box>
        <img
          src={foto}
          alt=""
          style={{
            height: "35rem",
            paddingRight: "15rem",
            paddingTop: "5rem",
            width: matchesSm ? "50%" : "90%",
            padding: "auto",
          }}
        />
      </Box>
      <Box
        sx={{
          height: { xs: "100vh", sm: "50vh" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#80c225",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>
            Dünyamızı Güzelleştirmek İçin Peyzaj Mimarları Durmadan Çalışıyorlar
          </Typography>
          <Button
            variant="outlined"
            sx={{
              alignItems: "center",
              width: { xs: "80%", sm: "50%" },
              margin: "4rem auto",
            }}
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleClickProject}
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
      <Footer />
    </div>
  );
}

export default Home;
