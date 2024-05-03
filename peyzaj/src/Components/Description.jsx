import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import foto2 from "../images/image5.png";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      sx={{
        height: "100vh",
        position: "relative",
        margin: "2rem 12%",
        borderRadius: "50%",
        overflow: "hidden", // Arkaplan fotoğrafından dışarı taşan kısımları kesmek için
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${foto2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
          opacity: "0.9",
          zIndex: -1,
        }}
      ></div>

      {/* Metinler */}
      <Typography
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        variant="h2"
        sx={{
          color: "white",
          marginLeft: "12%",
          marginRight: "12%",
          paddingTop: "10%",
          textAlign: "center",
          textDecoration: "uppercase",
          transition: "transform 0.3s ease", // Geçiş efekti ekliyoruz
          transform: isHovered ? "translateY(-10px)" : "translateY(0)", // Üzerine gelindiğinde yukarı kayması için transform kullanıyoruz
          "&:hover": {
            color: "#3E7A3D",
          },
        }}
      >
        Peyzaj Mimarları Ne İş Yapar?
      </Typography>
      <Typography
        sx={{
          marginLeft: "12%",
          marginRight: "12%",
          marginTop: "4%",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        Bir peyzaj mimarı, parkları, bahçeleri, oyun alanlarını ve hatta okul
        avlularını tasarlar. Düşünsene, bir parka gittiğinde rahat bir bankta
        otururken etrafındaki güzel çiçekleri, yeşil ağaçları görmüşsündür. İşte
        bunları düşünen ve tasarlayan kişiler peyzaj mimarlarıdır.
      </Typography>
      <Typography
        sx={{
          marginLeft: "12%",
          marginRight: "12%",
          marginTop: "2%",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        Peyzaj mimarları aynı zamanda hayvanları da düşünürler. Onlar için özel
        alanlar oluşturarak kuşların, kelebeklerin ve diğer hayvanların doğal
        yaşamlarını korur ve desteklerler. Kısacası, peyzaj mimarları doğayı
        seviyor ve onu korumak için çalışıyorlar.
      </Typography>
      <Typography
        sx={{
          marginLeft: "12%",
          marginRight: "12%",
          marginTop: "2%",
          textAlign: "center",
          fontWeight: "100",
          fontSize: "2rem",
          color: "white",
        }}
      >
        Belki bir gün sen de bir peyzaj mimarı olursun ve doğayı daha güzel bir
        yer haline getirmek için çalışırsın!
      </Typography>
    </Box>
  );
}

export default Projects;
