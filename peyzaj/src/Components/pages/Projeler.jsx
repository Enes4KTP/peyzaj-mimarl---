import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

import slide1 from "../../images/projeler/Benjakitti-1.jpg";
import slide2 from "../../images/projeler/Benjakitti-2.jpg";
import slide3 from "../../images/projeler/Benjakitti-3.jpg";
import slide4 from "../../images/projeler/Benjakitti-4.jpg";

import slide5 from "../../images/projeler/leMeridien-1.jpg";
import slide6 from "../../images/projeler/leMeridien-2.jpg";
import slide7 from "../../images/projeler/leMeridien-3.jpg";
import slide8 from "../../images/projeler/leMeridien-4.jpg";

import slide9 from "../../images/projeler/Opera1.jpg";
import slide10 from "../../images/projeler/Opera2.jpg";
import slide11 from "../../images/projeler/Opera3.jpg";
import slide12 from "../../images/projeler/Opera4.jpg";
import slide13 from "../../images/projeler/01.jpg";
import slide14 from "../../images/projeler/03.jpg";
import slide15 from "../../images/projeler/05.jpg";
import slide16 from "../../images/projeler/10.jpg";
import slide17 from "../../images/projeler/Honghu-5.jpg";
import slide18 from "../../images/projeler/Honghu-8.jpg";
import slide19 from "../../images/projeler/Honghu-11.jpg";
import slide20 from "../../images/projeler/Honghu-12.jpg";
import plant from "../../images/animationplants/plant.png";
import Footer from "../../Components/Footer/Footer";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import foto from "../../images/banner2.jpg";

const SlideshowContainer = styled(Box)({
  position: "relative",
  textAlign: "center",
});

const MySlides = styled(Box)(({ theme }) => ({
  display: "none",
  width: "700px",
  height: "500px",
  borderRadius: "15px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "auto",
  },
}));

const SlideshowImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const PrevNextButton = styled(Button)({
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(128, 194, 37, 0.8)",
  padding: "16px",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
  borderRadius: "3px",
  userSelect: "none",
  transition: "0.6s ease",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  "&.next": {
    right: 0,
  },
  "&.prev": {
    left: 0,
  },
});

function Projeler() {
  const [slideIndex1, setSlideIndex1] = useState(1);
  const [slideIndex2, setSlideIndex2] = useState(1);
  const [slideIndex3, setSlideIndex3] = useState(1);
  const [slideIndex4, setSlideIndex4] = useState(1);
  const [slideIndex5, setSlideIndex5] = useState(1);
  const [slideIndex6, setSlideIndex6] = useState(1);

  function plusSlides(slideNumber, n) {
    switch (slideNumber) {
      case 1:
        setSlideIndex1((prevIndex) =>
          prevIndex + n > 4 ? 1 : prevIndex + n < 1 ? 4 : prevIndex + n
        );
        break;
      case 2:
        setSlideIndex2((prevIndex) =>
          prevIndex + n > 4 ? 1 : prevIndex + n < 1 ? 4 : prevIndex + n
        );
        break;
      case 3:
        setSlideIndex3((prevIndex) =>
          prevIndex + n > 4 ? 1 : prevIndex + n < 1 ? 4 : prevIndex + n
        );
        break;
      case 4:
        setSlideIndex4((prevIndex) =>
          prevIndex + n > 4 ? 1 : prevIndex + n < 1 ? 4 : prevIndex + n
        );
        break;
      case 5:
        setSlideIndex5((prevIndex) =>
          prevIndex + n > 4 ? 1 : prevIndex + n < 1 ? 4 : prevIndex + n
        );
        break;
      case 6:
          setSlideIndex6((prevIndex) =>
      prevIndex + n > 4 ? 1 : prevIndex + n < 1 ? 4 : prevIndex + n
      );
      break;
      default:
        break;
    }
  }
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "290px",
          width: "100%",
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
          Doğayla Dans Eden Yapılar,
          <br></br>
          Hayata Estetik Bir Nefes Katar.
        </Typography>
      </div>
      <Box
        sx={{
          position: "absolute",
          zIndex: "999",
          right: "5px",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            padding: "2rem",
            margin: "-10rem auto",
            animation: "moveUpDownProject 15s infinite alternate",
          }}
        >
          <img
            src={plant}
            alt=""
            style={{ width: matchesSm ? "250px" : "100px" }}
          />
        </Box>
      </Box>
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
            animation: "moveUpDownProject 15s infinite alternate",
          }}
        >
          <img
            src={plant}
            alt=""
            style={{ width: matchesSm ? "250px" : "100px" }}
          />
        </Box>
      </Box>
      <SlideshowContainer
        sx={{
          backgroundColor: "#80c225",
          borderTopLeftRadius: "45%",
          borderBottomRightRadius: "35%",
          width: "80%",
          height: "100%",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "50px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box className="slideshow-container">
            <MySlides style={{ display: slideIndex1 === 1 ? "block" : "none" }}>
              <SlideshowImage src={slide1} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex1 === 2 ? "block" : "none" }}>
              <SlideshowImage src={slide2} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex1 === 3 ? "block" : "none" }}>
              <SlideshowImage src={slide3} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex1 === 4 ? "block" : "none" }}>
              <SlideshowImage src={slide4} alt="" />
            </MySlides>
            <PrevNextButton className="prev" onClick={() => plusSlides(1, -1)}>
              &#10094;
            </PrevNextButton>
            <PrevNextButton className="next" onClick={() => plusSlides(1, 1)}>
              &#10095;
            </PrevNextButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginTop: "3%",
              marginLeft: "3%",
              overflowWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "26px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Benjakitti Orman Parkı
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Bangkok’un hareketli şehir hayatının ortasındaki eski bir tütün
              fabrikası -yağmur suyunun yıkıcı gücünü azaltan, kirlenmiş suyu
              filtreleyen ve çok ihtiyaç duyulan doğal yaşam habitatı sunan- az
              bakım gerektiren rejeneratif bir sisteme dönüştürülmüş. Ek olarak
              Benjakitti Orman Parkı şuanda, şehir merkezi sakinleri için en
              büyük kamusal dinlenme alanı ve başkentin yeni kültürel sembolü.
              Proje, düşük bütçeli olarak 18 aylık sıkıştırılmış bir zaman
              diliminde tamamlanmış. Cansız, beton döşeli zemini, geniş bir
              ekosistem hizmeti sağlayan dayanıklı, yaşayan bir ekosisteme
              dönüştürerek şehir mühendisliği için tekrarlanabilir modüler bir
              yaklaşım sunulmuş.
            </Typography>
          </Box>
        </Box>
      </SlideshowContainer>

      <SlideshowContainer
        sx={{
          backgroundColor: "#80c225",
          borderTopRightRadius: "45%",
          borderBottomLeftRadius: "35%",
          width: "80%",
          height: "100%",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginTop: "3%",
              marginRight: "3%",
              overflowWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "26px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Le Meridien Hotel Peyzaj Projesi
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              2013 yılında Neri & Hu tarafından tamamlanan beş yıldızlı otelin
              önündeki 6.000 m²'lik peyzaj projesi, otelin genel görünümünü
              iyileştirmeyi ve park alanlarını optimize etmeyi hedefliyor.
              Zhengzhou'nun tarihi tekstil dokuma endüstrisine bir saygı duruşu
              olarak, Shma tarafından yapılan peyzaj tasarımında, heykel benzeri
              örgüler ve kıvrımlar kullanılarak estetik bir alan oluşturulmuş.
              Paslanmaz çelik kaplı saksılar, şehir otelinin kamusal ve özel
              karakterlerini vurgulamak için iki farklı renkte kullanılmış; dışa
              dönük ve eğlenceli enerjiyi yansıtmak için bronz, otel tarafından
              bakıldığında ise daha sakin bir atmosfer sağlamak için siyah ayna
              kullanılmış.
            </Typography>
          </Box>
          <div className="slideshow-container">
            <MySlides style={{ display: slideIndex2 === 1 ? "block" : "none" }}>
              <SlideshowImage src={slide5} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex2 === 2 ? "block" : "none" }}>
              <SlideshowImage src={slide6} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex2 === 3 ? "block" : "none" }}>
              <SlideshowImage src={slide7} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex2 === 4 ? "block" : "none" }}>
              <SlideshowImage src={slide8} alt="" />
            </MySlides>
            <PrevNextButton className="prev" onClick={() => plusSlides(2, -1)}>
              &#10094;
            </PrevNextButton>
            <PrevNextButton className="next" onClick={() => plusSlides(2, 1)}>
              &#10095;
            </PrevNextButton>
          </div>
        </Box>
      </SlideshowContainer>

      <SlideshowContainer
        sx={{
          backgroundColor: "#80c225",
          borderTopLeftRadius: "45%",
          borderBottomRightRadius: "35%",
          width: "80%",
          height: "100%",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "50px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <div className="slideshow-container">
            <MySlides style={{ display: slideIndex3 === 1 ? "block" : "none" }}>
              <SlideshowImage src={slide9} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex3 === 2 ? "block" : "none" }}>
              <SlideshowImage src={slide10} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex3 === 3 ? "block" : "none" }}>
              <SlideshowImage src={slide11} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex3 === 4 ? "block" : "none" }}>
              <SlideshowImage src={slide12} alt="" />
            </MySlides>
            <PrevNextButton className="prev" onClick={() => plusSlides(3, -1)}>
              &#10094;
            </PrevNextButton>
            <PrevNextButton className="next" onClick={() => plusSlides(3, 1)}>
              &#10095;
            </PrevNextButton>
          </div>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginTop: "3%",
              marginLeft: "3%",
              overflowWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "26px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Opera Park
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              2019 yılında bir tasarım yarışmasının ardından, The A.P. Møller
              Foundation, Kopenhag'da yeni bir park projesi için Cobe firmasını
              seçti. Park, Danimarka Kraliyet Operası'nın yanında bulunan bir
              araziyi dönüştürerek Opera Parkı adıyla halka açıldı. Bu park, 6
              farklı temaya sahip bahçelerle ve bir sera ile zenginleştirilmiş.
              Kuzey Amerika Ormanı, Danimarka Meşe Ormanı, Norveç Ormanı, Doğu
              Ormanı, İngiliz Ormanı ve Subtropikal Orman gibi farklı coğrafi
              bölgelerden esinlenilmiş bahçeler, çeşitli bitki ve canlı
              türlerine ev sahipliği yapıyor. Ayrıca park içinde şelaleler,
              nilüfer göletleri, yansıtıcı havuzlar gibi özellikler bulunuyor.
              Tüm bunlar, parkın ziyaretçilere dinlenme ve keşfetme imkanı sunan
              çekici bir mekan olduğunu gösteriyor.
            </Typography>
          </Box>
        </Box>
      </SlideshowContainer>

      <SlideshowContainer
        sx={{
          backgroundColor: "#80c225",
          borderTopRightRadius: "45%",
          borderBottomLeftRadius: "35%",
          width: "80%",
          height: "100%",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginTop: "3%",
              marginRight: "3%",
              overflowWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "26px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Düden Şelalesi Çevre Düzenlemesi
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Düden Şelalesi ve çevresinin düzenlenmesi projesinin ana amacı
              şelale etrafındaki yoğun bitkili alanların rehabilitasyonunu
              yapmak; Antalya kenti yeşil alan sistemine günümüz
              kullanıcılarının ihtiyaçlarına hitap eden, mekan kalitesi yüksek
              ve program açısından çeşitlilik sunan bir açık ve yeşil alan
              kazandırmaktır. Tasarımda alanın fiziksel ve sosyal taşıma
              kapasitesi gözetilerek farklı yaş gruplarına hitap eden mekanların
              oluşturulmasına dikkat edilmiştir. Proje 3 ana zon ve bu zonlar
              altında pek çok aktiviteyi barındıran alt zonlardan oluşmaktadır.
              Bu zonların oluşmasında topoğrafya, mevcut bitki örtüsü, alan
              kullanımları, bakı, mevcut işlevler, kullanıcı profili ve alanın
              Antalya açık ve yeşil alan sistemindeki yerinin analizi rol
              oynamıştır.
            </Typography>
          </Box>
          <div className="slideshow-container">
            <MySlides style={{ display: slideIndex4 === 1 ? "block" : "none" }}>
              <SlideshowImage src={slide13} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex4 === 2 ? "block" : "none" }}>
              <SlideshowImage src={slide14} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex4 === 3 ? "block" : "none" }}>
              <SlideshowImage src={slide15} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex4 === 4 ? "block" : "none" }}>
              <SlideshowImage src={slide16} alt="" />
            </MySlides>
            <PrevNextButton className="prev" onClick={() => plusSlides(4, -1)}>
              &#10094;
            </PrevNextButton>
            <PrevNextButton className="next" onClick={() => plusSlides(4, 1)}>
              &#10095;
            </PrevNextButton>
          </div>
        </Box>
      </SlideshowContainer>

      <SlideshowContainer
        sx={{
          backgroundColor: "#80c225",
          borderTopLeftRadius: "45%",
          borderBottomRightRadius: "35%",
          width: "80%",
          height: "100%",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "50px",
            marginBottom: "40px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <div className="slideshow-container">
            <MySlides style={{ display: slideIndex5 === 1 ? "block" : "none" }}>
              <SlideshowImage src={slide17} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex5 === 2 ? "block" : "none" }}>
              <SlideshowImage src={slide18} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex5 === 3 ? "block" : "none" }}>
              <SlideshowImage src={slide19} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex5 === 4 ? "block" : "none" }}>
              <SlideshowImage src={slide20} alt="" />
            </MySlides>
            <PrevNextButton className="prev" onClick={() => plusSlides(5, -1)}>
              &#10094;
            </PrevNextButton>
            <PrevNextButton className="next" onClick={() => plusSlides(5, 1)}>
              &#10095;
            </PrevNextButton>
          </div>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginTop: "3%",
              marginLeft: "3%",
              overflowWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "26px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Honghu Park Su Arıtma Tesisi
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Honghu Su Arıtma Tesisi, şehir su kirliliğini kontrol etmek için
              önemli bir proje olarak öne çıkıyor. Tasarımı, gelişmiş gömülü su
              arıtma teknolojisi kullanmasıyla dikkat çekiyor. NODE ekibi,
              tasarım sürecinde su arıtma tesisi üzerinde restore edilmiş yüzey
              peyzajı ve yer altı ofislerini bir araya getirdi. Proje,
              başlangıçta farklı beklentilerle karşı karşıya kaldı ve yer
              üstünde tasarım zorluklarıyla mücadele etti. Mimari ekip,
              mühendislik mantığından öteye geçerek estetik ve toplum dostu bir
              kamusal alan yaratmaya odaklandı. Geleneksel Lingnan bahçelerinden
              ilham alan tasarımda, çağdaş malzemeler ve tasarım dilleri
              kullanılarak pagoda, pavilyon, çardak gibi unsurlar modernize
              edildi. Kamusal sanat enstalasyonlarıyla su arıtma tesisi, nilüfer
              işareti ve kuş gözlem platformu gibi özelliklerle
              zenginleştirildi.
            </Typography>
          </Box>
        </Box>
      </SlideshowContainer>

      <Box
          sx={{
            margin: "auto",
            fontSize: "3rem",
            marginTop: "30px",
            fontWeight: "700",textAlign:'center',
            "&:hover": {
              color: "#80c225",
              borderBottom: "2px solid",
            },
          }}
        >
          Öğrencilerden Projeler
        </Box>

      <SlideshowContainer
        sx={{
          backgroundColor: "#80c225",
          borderTopLeftRadius: "45%",
          borderBottomRightRadius: "35%",
          width: "80%",
          height: "100%",
          margin: "auto",
          marginTop: "70px",marginBottom:'80px',
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "50px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box className="slideshow-container">
            <MySlides style={{ display: slideIndex6 === 1 ? "block" : "none" }}>
              <SlideshowImage src={plant} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex6 === 2 ? "block" : "none" }}>
              <SlideshowImage src={plant} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex6 === 3 ? "block" : "none" }}>
              <SlideshowImage src={plant} alt="" />
            </MySlides>
            <MySlides style={{ display: slideIndex6 === 4 ? "block" : "none" }}>
              <SlideshowImage src={plant} alt="" />
            </MySlides>
            <PrevNextButton className="prev" onClick={() => plusSlides(6, -1)}>
              &#10094;
            </PrevNextButton>
            <PrevNextButton className="next" onClick={() => plusSlides(6, 1)}>
              &#10095;
            </PrevNextButton>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              marginTop: "3%",
              marginLeft: "3%",
              overflowWrap: "break-word",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "26px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Proje Başlığı
            </Typography>
            <Typography
              sx={{
                textAlign: "justify",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Proje Açıklaması
            </Typography>
          </Box>
        </Box>
      </SlideshowContainer>

      <Footer />
    </Box>
  );
}

export default Projeler;
