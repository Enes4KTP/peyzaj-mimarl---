import React from "react";
import { Box, styled } from "@mui/system";
import foto from "../../images/28572.jpg";
import foto2 from "../../images/dunya.png";
import { Typography } from "@mui/material";
import foto3 from "../../images/2.1.jpg";
import student from "../../images/student.png";

function Peyzaj() {
  const RotateAnimation = styled(Box)(({ theme }) => ({
    borderRadius: "50%",
    padding: "2rem",
    margin: "-10rem auto",
    animation: "rotate 30s linear infinite", // rotate animasyonunu uygula
    transformOrigin: "center center", // Dönüşün merkezini belirle
  }));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "290px",
          backgroundColor: "#c5eef0",
          width: "100%",
          backgroundSize: "contain",
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
          Doğanın Renkli Dünyası <br></br>
          Peyzaj Mimarlığı
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "70%",
          paddingTop: "4rem",
          margin: "auto",
        }}
      >
        <RotateAnimation>
          <img src={foto2} alt="" style={{ marginTop: "5rem" }} />
        </RotateAnimation>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h3">Peyzaj Mimarlığı Nedir?</Typography>
          <Typography>
            Peyzaj mimarlığı, açık hava alanlarının tasarımı, planlaması ve
            yönetimiyle ilgilenen bir tasarım mesleğidir. Amacı, doğal ve yapay
            unsurların bir araya gelerek çevresel, sosyal ve estetik açıdan hoş
            mekanlar oluşturmak için çalışmaktır. Peyzaj mimarları, kentsel
            tasarım, parklar, rekreasyon alanları, yeşil altyapı ve özel alan
            planlaması gibi çeşitli alanlarda faaliyet gösterirler. Bu meslek,
            kent parkları hareketinin köklerine dayanır ve tarihsel olarak açık
            alanların yaratılmasında önemli bir rol oynamıştır.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "70%",
          paddingTop: "4rem",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h3">Peyzaj Mimarları Ne İş Yapar?</Typography>
          <Typography>
            Peyzaj mimarları, doğal ve yapılı çevrenin analizi, planlaması,
            tasarımı ve yönetimiyle ilgilenirler. Çalışmaları, parklardan oyun
            alanlarına, su alanlarından şehirlerin genel tasarımına kadar geniş
            bir yelpazede mekanların kavramsal ve ayrıntılı tasarımını içerir.
            Peyzaj mimarları, estetik ve fonksiyonel açıdan etkileyici mekanlar
            yaratmak için tasarım becerilerini kullanır ve çevrenin korunması ve
            insan yaşam kalitesinin artırılması için çalışırlar.
          </Typography>
        </Box>
        <img src={foto3} alt="" style={{ width: "40%" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "70%",
          paddingTop: "4rem",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            padding: "2rem",
            margin: "-10rem auto",
            animation: "moveUpDownStudent 2s infinite alternate",
          }}
        >
          <img src={student} alt="" style={{ width: "250px" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <Typography variant="h3">Nasıl Peyzaj Mimarı Olabilirim?</Typography>
          <Typography>
            Peyzaj mimarı olmak istiyorsan, öncelikle doğayı ve dış mekanları
            sevmelisin. Peyzaj mimarı olmak için okulda matematik, fen bilgisi
            ve sanat derslerine iyi çalışmalısın. Üniversiteye gittiğinde peyzaj
            mimarlığı bölümünü seçebilirsin. Üniversite eğitimi sırasında bitki
            bilimi, çevre tasarımı ve çizim gibi dersler alacaksın. Staj yaparak
            gerçek projelerde çalışma deneyimi kazanabilirsin. Ve sonunda,
            hayalindeki bahçeleri ve açık hava alanlarını tasarlayarak
            insanların yaşam kalitesini artırabilirsin. Unutma, her zaman
            hayalini kurduğun bir kariyere ulaşabilirsin!
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Peyzaj;
