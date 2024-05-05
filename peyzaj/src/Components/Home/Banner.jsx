import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import foto from "../../images/5.png";

function Banner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/peyzaj");
  };

  return (
    <Box
      sx={{
        height: "80vh",
        marginTop: "-2rem",
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
          paddingLeft: "150px",
          // alignItems: "center",
        }}
      >
        <div style={{ width: "90%", marginBottom: "2rem" }}>
          <Typography sx={{ fontSize: "3rem" }}>
            Peyzaj Mimarı Nedir?
          </Typography>
          <Typography sx={{ fontSize: "1rem", textAlign: "justify" }}>
            Peyzaj mimarları, doğal ve yapay unsurları bir araya getirerek
            parklar, bahçeler ve diğer alanların estetik ve fonksiyonel
            tasarımlarını oluştururlar. İnsanların doğayla etkileşimini teşvik
            ederek yaşam kalitesini artırırlar ve çevresel sürdürülebilirliği
            desteklerler. Bitki seçimi, su özellikleri ve drenaj sistemleri gibi
            faktörleri dikkate alarak alanların kullanımını optimize ederler.
            Peyzaj mimarları, toplumların ruh sağlığını ve yaşam kalitesini
            iyileştirme amacıyla doğa ile insanın uyumlu bir birlikteliğini
            sağlayarak önemli bir rol oynarlar.
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
        }}
      />
    </Box>
  );
}

export default Banner;
