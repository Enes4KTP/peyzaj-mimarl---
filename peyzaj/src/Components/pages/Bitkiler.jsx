import { Box, Typography } from "@mui/material";
import React from "react";
import misterLincoln from "../../images/plants/kırmızı.jpg";
import roseSunsprite from "../../images/plants/sarı.jpg";
import japonGulu from "../../images/plants/image.png";
import atropurpureum from "../../images/trees/atropurpureum.jpg";
import altuniPiramitMazı from "../../images/trees/altuniPiramitMazı.jpg";
import limoniServiCupressus from "../../images/trees/limoniServiCupressus.jpg";
import cupressusArizonica from "../../images/ithal/cupressusArizonica.jpg";
import pinusSlyvestrisBonsai from "../../images/ithal/pinusSlyvestrisBonsai.jpg";
import festucaGlaucaMaviYumakOtu from "../../images/ithal/festucaGlaucaMaviYumakOtu.jpg";
import euonymusFortuneiAureaTaflan from "../../images/calı-sarmasık/euonymusFortuneiAureaYayılıcıTaflan.jpg";
import miscanthusSinensisVariegata from "../../images/calı-sarmasık/miscanthusSinensisVariegata.jpg";
import phottiniaFraseriLittleRedBodurAlevÇalısı from "../../images/calı-sarmasık/phottiniaFraseriLittleRedBodurAlevÇalısı.webp";
import foto from "../../images/banner2.jpg";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import plant from "../../images/animationplants/plant.png";
import Footer from "../Footer/Footer";
import viburnumOpolus from "../../images/çiçek/viburnumOpolus.webp";
import begonvilSarmaşığı from "../../images/çiçek/begonvilsarmaşığı.jpg";
import bodurBegonvil from "../../images/çiçek/bodurBegonvil.webp";
import stromantheSanguinea from "../../images/çiçek/stromantheSanguinea.webp";
import spathiphyllum from "../../images/çiçek/spathiphyllum.jpg";
import kufeyaLanesse from "../../images/çiçek/kufeyaLanesse.jpg";
import cestrumNocturnum from "../../images/çiçek/cestrumNocturnum.jpg";
import anthurium from "../../images/çiçek/Anthurium.jpg";
import bougainvilleaAlexandra from "../../images/çiçek/bougainvilleaAlexandra.jpg";

function Bitkiler() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "290px",
          width: "100%",
          backgroundSize: "cover",
          backgroundSize: "cover",
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
          Bahçenizi Renklendirin,
          <br></br>
          Doğanın Büyülü Dünyasını Keşfedin.
        </Typography>
      </div>

      <Box
        sx={{
          position: "absolute",
          zIndex: "999",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            padding: "2rem",
            margin: "-10rem auto",
            animation: "moveUpDownPlant 5s infinite alternate",
          }}
        >
          <img
            src={plant}
            alt=""
            style={{ width: matchesSm ? "250px" : "100px" }}
          />
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
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Box
            className="container"
            sx={{
              width: "320px",
              height: "430px",
              bgcolor: "white",
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Cupressus Arizonica
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Cupressus Arizonica</div>
              <div class="text" style={{}}>
                Sıkça kullanılan bir süs bitkisi olup sert iklimlere
                dayanıklıdır.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Pinus Slyvestris Bonsai
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Pinus Slyvestris Bonsai</div>
              <div class="text" style={{}}>
                Dayanıklı ve uzun ömürlü bir çam türü olup, estetik dallanma ve
                iğne yapısı sayesinde popüler bir bonsai bitkisidir.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Festuca Glauca Mavi Yumak Otu
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Festuca Glauca Mavi Yumak Otu</div>
              <div class="text" style={{}}>
                Düşük bakım gerektiren ve genellikle süs bahçelerinde yer örtücü
                olarak kullanılan bir bitkidir.
              </div>
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
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Acer Palmatum Atropurpureum
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Acer Palmatum Atropurpureum</div>
              <div class="text" style={{}}>
                Kırmızımsı mor yapraklarıyla dikkat çeken, genellikle bahçelerde
                dekoratif amaçlarla kullanılan bir Japon akçaağaç türüdür.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Altuni Piramit Mazı
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Altuni Piramit Mazı</div>
              <div class="text" style={{}}>
                Altın sarısı renkli yaprakları ve piramit şekilli büyüme
                yapısıyla peyzaj düzenlemelerinde sıkça tercih edilen bir çalı
                türüdür.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Limoni Servi Cupressus
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Limoni Servi Cupressus</div>
              <div class="text" style={{}}>
                Hoş limon kokulu, altın sarısı yapraklarıyla dikkat çeken ve
                genellikle dekoratif amaçlarla kullanılan bir servi türüdür.
              </div>
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
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Euonymus Fortunei Aurea Taflan
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Euonymus Fortunei Aurea Taflan</div>
              <div class="text" style={{}}>
                Altın sarısı kenarlı yeşil yapraklarıyla tanınan, yer örtücü
                veya çit bitkisi olarak kullanılan dayanıklı bir çalıdır.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Miscanthus Sinensis Variegata
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Miscanthus Sinensis Variegata</div>
              <div class="text" style={{}}>
                Yeşil ve beyaz çizgili yaprakları ve zarif duruşuyla peyzajda
                dekoratif amaçlarla sıkça tercih edilen bir süs otu çeşididir.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Phottinia Fraseri Bodur Alev Çalısı
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Phottinia Fraseri Bodur Alev Çalısı</div>
              <div class="text" style={{}}>
                Yeni büyüyen kırmızı yaprakları ve yoğun yaprak örtüsü ile
                bahçelerde dekoratif çit veya çalı olarak sıkça kullanılan
                dayanıklı bir bitkidir.
              </div>
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
          Çiçekler
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Box
            className="container"
            sx={{
              width: "320px",
              height: "430px",
              bgcolor: "white",
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Mister Lincoln
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Mister Lincoln</div>
              <div class="text" style={{}}>
                Büyük ve kadifemsi koyu kırmızı çiçekleriyle tanınan, yoğun
                kokulu bir gül çeşididir.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Rosa Sunsprite
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Rosa Sunsprite</div>
              <div class="text" style={{}}>
                Parlak sarı çiçekleri ve güçlü kokusuyla bilinen, hastalıklara
                dayanıklı bir gül çeşididir.
              </div>
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
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Japon Gülü
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Japon Gülü</div>
              <div class="text" style={{}}>
                Büyük ve renkli çiçekleriyle bilinen, yaygın olarak peyzajda
                kullanılan bir çalı türüdür.
              </div>
            </div>
            <hr></hr>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Box
            className="container"
            sx={{
              width: "320px",
              height: "430px",
              bgcolor: "white",
              marginRight: "20px",
            }}
          >
            <img
              src={begonvilSarmaşığı}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Begonvil Sarmaşığı
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Begonvil Sarmaşığı</div>
              <div class="text" style={{}}>
                Zarif ve renkli çiçekleriyle bilinen, genellikle saksılarda veya
                pergolalarda yetiştirilen bir sarmaşık türüdür.
              </div>
            </div>
            <hr></hr>
          </Box>

          <Box
            className="container"
            sx={{
              width: "320px",
              height: "430px",
              bgcolor: "white",
              marginRight: "20px",
            }}
          >
            <img
              src={viburnumOpolus}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Viburnum Opolus
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Viburnum Opolus</div>
              <div class="text" style={{}}>
                Beyaz çiçekleri ve parlak kırmızı meyveleriyle dikkat çeken, süs
                değeri yüksek bir çalı türüdür.
              </div>
            </div>
            <hr></hr>
          </Box>

          <Box className="container">
            <img
              src={bodurBegonvil}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Bodur Begonvil
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Bodur Begonvil</div>
              <div class="text" style={{}}>
                Kompakt yapısı ve çeşitli renklerdeki çiçekleriyle dikkat çeken,
                genellikle saksılarda veya küçük bahçelerde yetiştirilen bir
                begonvil çeşididir.
              </div>
            </div>
            <hr></hr>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Box
            className="container"
            sx={{
              width: "320px",
              height: "430px",
              bgcolor: "white",
              marginRight: "20px",
            }}
          >
            <img
              src={stromantheSanguinea}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Stromanthe Sanguinea
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Stromanthe Sanguinea</div>
              <div class="text" style={{}}>
                Çarpıcı renkli yaprakları ve çekici desenleriyle tanınan, iç
                mekanlarda yetiştirilen dekoratif bir bitki türüdür.
              </div>
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
              src={spathiphyllum}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Spathiphyllum
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Spathiphyllum</div>
              <div class="text" style={{}}>
                Düşük bakım gerektiren ve zarif beyaz çiçekleriyle dikkat çeken
                bir iç mekan bitkisidir.
              </div>
            </div>
            <hr></hr>
          </Box>

          <Box className="container">
            <img
              src={kufeyaLanesse}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Cennet Çiçeği
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Cennet Çiçeği</div>
              <div class="text" style={{}}>
                Büyük ve gösterişli çiçekleriyle tanınan egzotik bir bitki
                türüdür.
              </div>
            </div>
            <hr></hr>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Box
            className="container"
            sx={{
              width: "320px",
              height: "430px",
              bgcolor: "white",
              marginRight: "20px",
            }}
          >
            <img
              src={cestrumNocturnum}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Cestrum Nocturnum
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Cestrum Nocturnum</div>
              <div class="text" style={{}}>
                Güçlü ve tatlı kokulu beyaz çiçekleri gece boyunca açan bir çalı
                türüdür.
              </div>
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
              src={anthurium}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Anthurium
            </Typography>
            <div className="overlay">
              <div class="textBaslik">Anthurium </div>
              <div class="text" style={{}}>
                Parlak ve derin renkli çiçekleriyle bilinen, iç mekanlarda
                yetiştirilen popüler bir bitki türüdür.
              </div>
            </div>
            <hr></hr>
          </Box>

          <Box className="container">
            <img
              src={bougainvilleaAlexandra}
              alt=""
              style={{
                backgroundSize: "auto",
                width: "100%",
                height: "94%",
              }}
            />
            <Typography
              style={{
                fontSize: "18px",
                marginTop: "-7px",
                marginBottom: "-3px",
              }}
            >
              Bougainvillea Alexandra
            </Typography>
            <div className="overlay">
              <div class="textBaslik"> Bougainvillea Alexandra</div>
              <div class="text" style={{}}>
                Canlı renkli çiçekleriyle bilinen ve sıcak iklimlerde
                yetiştirilen bir sarmaşık türüdür.
              </div>
            </div>
            <hr></hr>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default Bitkiler;
