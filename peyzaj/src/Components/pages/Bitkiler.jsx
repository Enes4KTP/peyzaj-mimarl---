import { Box, Typography } from "@mui/material";
import React from "react";
import misterLincoln from "../../images/plants/kırmızı.jpg";
import roseSunsprite from "../../images/plants/sarı.jpg";
import japonGulu from "../../images/plants/image.png";
import image2 from "../../images/trees/image2.png";
import atropurpureum from "../../images/trees/atropurpureum.jpg";
import altuniPiramitMazı from "../../images/trees/altuniPiramitMazı.jpg";
import limoniServiCupressus from "../../images/trees/limoniServiCupressus.jpg";
import cupressusArizonica from "../../images/ithal/cupressusArizonica.jpg";
import pinusSlyvestrisBonsai from "../../images/ithal/pinusSlyvestrisBonsai.jpg";
import festucaGlaucaMaviYumakOtu from "../../images/ithal/festucaGlaucaMaviYumakOtu.jpg";
import euonymusFortuneiAureaTaflan from "../../images/calı-sarmasık/euonymusFortuneiAureaYayılıcıTaflan.jpg";
import miscanthusSinensisVariegata from "../../images/calı-sarmasık/miscanthusSinensisVariegata.jpg";
import phottiniaFraseriLittleRedBodurAlevÇalısı from "../../images/calı-sarmasık/phottiniaFraseriLittleRedBodurAlevÇalısı.webp";

import plant from "../../images/animationplants/plant.png";

function Bitkiler() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "290px",
          backgroundColor: "#c5eef0",
          width: "100%",
          backgroundImage: `url(${image2})`,

          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
          }}
        >
          Bahçenizi renklendirin, <br></br>
          doğanın büyülü dünyasını keşfedin.
        </Typography>
        {/* <img
          src={doga}
          alt=""
          style={{
            marginLeft: "165px",
            marginBottom: "20px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
          }}
        /> */}
      </div>
      <Box sx={{ position: "absolute" }}>
        <Box
          sx={{
            borderRadius: "50%",
            padding: "2rem",
            margin: "-10rem auto",
            animation: "moveUpDownPlant 5s infinite alternate",
          }}
        >
          <img src={plant} alt="" style={{ width: "250px" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            margin: "auto",
            fontSize: "3rem",
            marginTop: "30px",
            fontWeight: "700",
            "&:hover": {
              color: "#80c225",
              borderBottom: "2px solid",
            },
          }}
        >
          İthal Bitkiler
        </Box>
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
              src={cupressusArizonica}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Cupressus Arizonica
            </Typography>
            <div className="overlay">
              <div class="text">Cupressus Arizonica</div>
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
              src={pinusSlyvestrisBonsai}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Pinus Slyvestris Bonsai
            </Typography>
            <div className="overlay">
              <div class="text">Pinus Slyvestris Bonsai</div>
            </div>
            <hr></hr>
          </Box>

          <Box className="container">
            <img
              src={festucaGlaucaMaviYumakOtu}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Festuca Glauca Mavi Yumak Otu
            </Typography>
            <div className="overlay">
              <div class="text">Festuca Glauca Mavi Yumak Otu</div>
            </div>
            <hr></hr>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            margin: "auto",
            fontSize: "3rem",
            marginTop: "30px",
            fontWeight: "700",
            "&:hover": {
              color: "#80c225",
              borderBottom: "2px solid",
            },
          }}
        >
          Ağaçlar
        </Box>
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
              src={atropurpureum}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Acer Palmatum Atropurpureum
            </Typography>
            <div className="overlay">
              <div class="text">Acer Palmatum Atropurpureum</div>
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
              src={altuniPiramitMazı}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Altuni Piramit Mazı
            </Typography>
            <div className="overlay">
              <div class="text">Altuni Piramit Mazı</div>
            </div>
            <hr></hr>
          </Box>

          <Box className="container">
            <img
              src={limoniServiCupressus}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Limoni Servi Cupressus
            </Typography>
            <div className="overlay">
              <div class="text">Limoni Servi Cupressus</div>
            </div>
            <hr></hr>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
        <Box
          sx={{
            margin: "auto",
            fontSize: "3rem",
            fontWeight: "700",
            "&:hover": {
              color: "#80c225",
              borderBottom: "2px solid",
            },
          }}
        >
          Çalı & Sarmaşıklar
        </Box>
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
              src={euonymusFortuneiAureaTaflan}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Euonymus Fortunei Aurea Taflan
            </Typography>
            <div className="overlay">
              <div class="text">Euonymus Fortunei Aurea Taflan</div>
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
              src={miscanthusSinensisVariegata}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Miscanthus Sinensis Variegata
            </Typography>
            <div className="overlay">
              <div class="text">Miscanthus Sinensis Variegata</div>
            </div>
            <hr></hr>
          </Box>

          <Box className="container">
            <img
              src={phottiniaFraseriLittleRedBodurAlevÇalısı}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography style={{ fontSize: "18px" }}>
              Phottinia Fraseri Bodur Alev Çalısı
            </Typography>
            <div className="overlay">
              <div class="text">Phottinia Fraseri Bodur Alev Çalısı</div>
            </div>
            <hr></hr>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
        <Box
          sx={{
            margin: "auto",
            fontSize: "3rem",
            fontWeight: "700",
            "&:hover": {
              color: "#80c225",
              borderBottom: "2px solid",
            },
          }}
        >
          Güller
        </Box>
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
              <div class="text">Mister Lincoln</div>
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
              <div class="text">Rosa Sunsprite</div>
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
              <div class="text">Japon Gülü</div>
            </div>
            <hr></hr>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Bitkiler;
