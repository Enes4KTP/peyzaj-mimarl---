import { Box, Typography, Button, keyframes } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/ArrowForwardIos";
import foto from "../../images/5.png";
import fotoIlk from "../../images/2.2.jpg";
import foto1 from "../../images/bitki.png";
import foto2 from "../../images/bitki1.png";
import fotoAda1 from "../../images/ada.png";
import fotoAda2 from "../../images/ada2.png";
import iletisim from "../../images/iletisim.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Footer from "../Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import foto11 from "../../images/pets.png";
import foto3 from "../../images/park.png";
import cupressusArizonica from "../../images/ithal/cupressusArizonica.jpg";
import pinusSlyvestrisBonsai from "../../images/ithal/pinusSlyvestrisBonsai.jpg";
import festucaGlaucaMaviYumakOtu from "../../images/ithal/festucaGlaucaMaviYumakOtu.jpg";
import atropurpureum from "../../images/trees/atropurpureum.jpg";
import altuniPiramitMazı from "../../images/trees/altuniPiramitMazı.jpg";
import limoniServiCupressus from "../../images/trees/limoniServiCupressus.jpg";
import bannerAnimation from "../../images/bannerAnimation.jpg";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/peyzaj");
    window.scrollTo(0, 0); // Sayfayı en üstüne kaydır
  };

  const handleClickBitki = () => {
    navigate("/bitkiler");
    window.scrollTo(0, 0); // Sayfayı en üstüne kaydır
  };

  const navigate2 = useNavigate();

  const handleClickProject = () => {
    navigate2("/projeler");
    window.scrollTo(0, 0); // Sayfayı en üstüne kaydır
  };

  const themeYazi = createTheme({
    typography: {
      fontFamily: [
        "Poetsen One", // Belirtilen Google Font'u ekliyoruz
        "sans-serif",
      ].join(","),
    },
  });

  const moveLeftToCenter = keyframes`
  0%, 100% {
    transform: translateX(0);
    background-color: #509bb0;
  }
  50% {
    transform: translateX(calc(50vw - 225px));
    background-color: #124f60;
  }
`;

  const moveRightToCenter = keyframes`
  0%, 100% {
    transform: translateX(0);
    background-color: #2b430a
  }
  50% {
    transform: translateX(calc(-50vw + 200px));
    background-color: #80c225;
  }
`;

  const moveLeftToCenter2 = keyframes`
0%, 100% {
  transform: translateX(0);
  background-color: #ebe013;
}
50% {
  transform: translateX(calc(50vw - 125px));
  background-color: #439433;
}
`;

  const moveRightToCenter2 = keyframes`
0%, 100% {
  transform: translateX(0);
  background-color: #c45cb9
}
50% {
  transform: translateX(calc(-50vw + 180px));
  background-color: #d00fbd;
}
`;
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
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
          height: "100vh",
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
          height: { xs: "100vh", sm: "100vh" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#80c225",
          borderBottomRightRadius: "20%",
          borderTopLeftRadius: "20%",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            padding: "2rem",
            margin: "auto",
            animation: "moveUpDown 2s infinite alternate",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <img src={foto1} alt="" style={{ width: "250px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: { xs: "30%", sm: "2%" },
            width: { xs: "90%", sm: "40%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.4rem", sm: "2rem" },
              fontWeight: "600",
              backgroundAttachment: "fixed",
            }}
          >
            Dünyamızı Güzelleştirmek İçin Peyzaj Mimarları Durmadan Çalışıyorlar
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            Peyzaj mimarlarının çalışmaları, parklardan oyun alanlarına, su
            alanlarından şehirlerin genel tasarımına kadar geniş bir yelpazede
            mekanların kavramsal ve ayrıntılı tasarımını içerir.
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
                  Dayanıklı ve uzun ömürlü bir çam türü olup, estetik dallanma
                  ve iğne yapısı sayesinde popüler bir bonsai bitkisidir.
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
                  Düşük bakım gerektiren ve genellikle süs bahçelerinde yer
                  örtücü olarak kullanılan bir bitkidir.
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
                  Kırmızımsı mor yapraklarıyla dikkat çeken, genellikle
                  bahçelerde dekoratif amaçlarla kullanılan bir Japon akçaağaç
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
        <Button
          variant="outlined"
          sx={{ width: "200px", height: "40px", margin: "5% 0" }}
          color="warning"
          endIcon={<SendIcon />}
          onClick={handleClickBitki}
        >
          Bitkiler
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${bannerAnimation})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      >
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={foto11}
            alt="Image 1"
            sx={{
              width: { xs: "150px", sm: "250px" },
              borderRadius: "50%",
              position: "absolute",
              left: 0,
              bgcolor: "red",
              animation: {
                xs: `${moveLeftToCenter} 3s infinite ease-in-out`,
                sm: `${moveLeftToCenter} 5s infinite ease-in-out`,
              },
            }}
          />
          <Box
            component="img"
            src={foto3}
            alt="Image 2"
            sx={{
              width: { xs: "150px", sm: "250px" },
              borderRadius: "50%",
              position: "absolute",
              right: 0,
              bgcolor: "black",
              animation: {
                xs: `${moveRightToCenter} 4s infinite ease-in-out`,
                sm: `${moveRightToCenter} 6s infinite ease-in-out`,
              },
            }}
          />
        </Box>
        <Box
          class="text-with-gradient"
          sx={{
            textAlign: "center",
            fontSize: "2rem",

            fontFamily: "Poetsen One, sans-serif",
            color: "#5f166a",
          }}
        >
          Peyzaj Mimarları Neler Yaptı?
        </Box>
        <Button
          variant="outlined"
          sx={{
            alignItems: "center",
            width: { xs: "80%", sm: "50%" },
            margin: "4rem auto",
            width: "200px",
            height: "40px",
          }}
          color="primary"
          endIcon={<SendIcon />}
          onClick={handleClickProject}
        >
          Projeler
        </Button>
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={fotoAda1}
            alt="Image 1"
            sx={{
              width: { xs: "150px", sm: "250px" },
              borderRadius: "50%",
              position: "absolute",
              left: 0,
              animation: {
                xs: `${moveLeftToCenter2} 3s infinite ease-in-out`,
                sm: `${moveLeftToCenter2} 6s infinite ease-in-out`,
              },
            }}
          />
          <Box
            component="img"
            src={fotoAda2}
            alt="Image 2"
            sx={{
              width: { xs: "150px", sm: "250px" },
              borderRadius: "50%",
              position: "absolute",
              right: 0,
              bgcolor: "black",
              animation: {
                xs: `${moveRightToCenter2} 4s infinite ease-in-out`,
                sm: `${moveRightToCenter2} 7s infinite ease-in-out`,
              },
            }}
          />
        </Box>
      </Box>

      <ThemeProvider theme={themeYazi}>
        <Box
          sx={{
            height: { xs: "60vh", sm: "70vh" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            padding: "0 20%",
            borderBottomLeftRadius: "20%",
            borderTopRightRadius: "20%",
            border: "5px solid lightgrey",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto" }}>
            <Box
              sx={{
                zIndex: "999",
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  padding: "2rem",
                  margin: "-10rem auto",
                  animation: "iletisim 4s infinite alternate",
                }}
              >
                <img
                  src={iletisim}
                  alt=""
                  style={{ width: matchesSm ? "250px" : "200px" }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              margin: "0px auto",
            }}
          >
            <Typography variant="h3">Bana Ulaşın</Typography>
            <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1.3rem" } }}>
              Mail: xxxx@gmail.com
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1.3rem" } }}>
              Phone: +90 1111111111
            </Typography>
            <Typography sx={{ fontSize: { xs: "0.7rem", sm: "1.3rem" } }}>
              Linkedn: xxxx
            </Typography>
          </Box>
        </Box>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default Home;
