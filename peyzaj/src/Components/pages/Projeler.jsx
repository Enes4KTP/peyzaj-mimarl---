import { Container, Grid, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";
import foto1 from "../../images/home2.png";
import foto from "../../images/cevre.avif";

function Projeler() {
  const [animation, setAnimation] = useState(false);
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          marginTop: "-8.7rem",
          backgroundImage: `url(${foto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          sx={{
            padding: "0 12%",
            borderBottom: "4px solid purple",
            borderTop: "4px solid purple",
            color: "#FF8135",
            textAlign: "center",
            fontSize: "4rem",
          }}
        >
          Peyzaj Mimarlarının{" "}
          <span style={{ color: "#3E7A3D" }}>Sizin için Yaptığı Projeler</span>{" "}
          Neler Olabilir?
        </Typography>
      </Box>
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
