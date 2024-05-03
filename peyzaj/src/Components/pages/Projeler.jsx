import { Container, Grid, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import foto1 from "../../images/home2.png";

function Projeler() {
  const [animation, setAnimation] = useState(false);
  return (
    <div>
      {/* <Box
        sx={{
          width: "100%",
          height: "200vh",
          marginTop: "-7rem",
          paddingTop: "9rem",
        }}
      >
        <Typography
          sx={{
            color: "#FF8135",
            textAlign: "center",
            fontSize: "2.5rem",
          }}
        >
          Peyzaj Mimarlarının Sizin için Yaptığı Projeler Neler Olabilir?
        </Typography>

        <Box
          sx={{
            backgroundColor: "#3E7A3D",
            height: "50vh",
            margin: "2rem 12%",
            borderTopLeftRadius: "50%",
            borderBottomRightRadius: "60%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ color: "white", padding: "12%", fontSize: "2rem" }}
            >
              Buradaki gibi güzel evlerde oturmanızı peyzaj mimarları sağlar
            </Typography>
            <img
              src={foto1}
              alt="logo"
              style={{ height: "25rem", paddingRight: "7rem" }}
            />
          </Box>
        </Box>
      </Box> */}
      <Typography
        sx={{
          color: "#FF8135",
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "1.5rem",
        }}
      >
        Peyzaj Mimarlarının{" "}
        <span style={{ color: "#3E7A3D" }}>Sizin için Yaptığı Projeler</span>{" "}
        Neler Olabilir?
      </Typography>
      <section>
        <Container
          sx={{
            backgroundColor: "#3E7A3D",
            margin: "2rem 12%",
            borderTopLeftRadius: "50%",
            borderBottomRightRadius: "60%",
          }}
        >
          <Grid container alignItems="center">
            <Grid item lg={6} md={12}>
              <div>
                <img
                  onMouseEnter={() => setAnimation(true)}
                  onMouseLeave={() => setAnimation(false)}
                  src={foto1}
                  alt=""
                  style={{
                    transition: "transform 0.3s ease",
                    transform: animation
                      ? "translateY(-20px)"
                      : "translateY(0)",
                  }}
                />
                <a href="#">
                  <i></i>
                </a>
              </div>
            </Grid>
            <Grid item lg={6} md={12}>
              <div>
                <Typography variant="h4">EVLER</Typography>
                <Typography>Yaşayacağınız en güzel evler</Typography>
                <Typography variant="h2">
                  Güzel, Modern & <span>Zevkli </span>
                </Typography>
                <Typography sx={{ width: "60%" }}>
                  Aile bahçesi ve oyun alanı projesi, aile üyelerinin evlerinin
                  yakınında doğayla bağlantı kurmalarını ve birlikte keyifli
                  vakit geçirmelerini teşvik eder. Aynı zamanda, doğa sevgisi ve
                  çevre bilinci gibi değerleri aile içinde yaygınlaştırır.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section>
        <Container
          sx={{
            backgroundColor: "#FF8135",
            margin: "2rem 12%",
            borderTopRightRadius: "50%",
            borderBottomLeftRadius: "60%",
          }}
        >
          <Grid container alignItems="center">
            <Grid item lg={6} md={12}>
              <div style={{ paddingLeft: "4rem" }}>
                <Typography variant="h4">Parklar</Typography>
                <Typography>Doğa Oyun Alanı</Typography>
                <Typography variant="h2">
                  Doğal, Temiz & <span>Zevkli </span>
                </Typography>
                <Typography sx={{ width: "80%" }}>
                  Sürdürülebilir doğa oyun alanı, çocukların hayal gücünü ve
                  yaratıcılığını teşvik ederken aynı zamanda çevre bilinci ve
                  doğa sevgisi kazanmalarını sağlar. Bu proje, çocukların açık
                  havada eğlenirken doğayı koruma ve sürdürülebilirlik
                  ilkelerini anlama fırsatı sunar.
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} md={12}>
              <div>
                <img
                  onMouseEnter={() => setAnimation(true)}
                  onMouseLeave={() => setAnimation(false)}
                  src={foto1}
                  alt=""
                  style={{
                    transition: "transform 0.3s ease",
                    transform: animation
                      ? "translateY(-20px)"
                      : "translateY(0)",
                  }}
                />
                <a href="#">
                  <i></i>
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}

export default Projeler;
