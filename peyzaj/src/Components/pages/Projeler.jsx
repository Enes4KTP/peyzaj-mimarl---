import { Typography, Box } from "@mui/material";
import React, { useState } from "react";
import doga from "../../images/doga.png";
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

function Projeler() {
  const [slideIndex1, setSlideIndex1] = useState(1);
  const [slideIndex2, setSlideIndex2] = useState(1);
  const [slideIndex3, setSlideIndex3] = useState(1);

  function plusSlides(slideNumber, n) {
    switch (slideNumber) {
      case 1:
        setSlideIndex1((prevIndex) => {
          let newIndex = prevIndex + n;
          if (newIndex > 4) {
            return 1;
          } else if (newIndex < 1) {
            return 4;
          } else {
            return newIndex;
          }
        });
        break;
      case 2:
        setSlideIndex2((prevIndex) => {
          let newIndex = prevIndex + n;
          if (newIndex > 4) {
            return 1;
          } else if (newIndex < 1) {
            return 4;
          } else {
            return newIndex;
          }
        });
        break;
      case 3:
        setSlideIndex3((prevIndex) => {
          let newIndex = prevIndex + n;
          if (newIndex > 4) {
            return 1;
          } else if (newIndex < 1) {
            return 4;
          } else {
            return newIndex;
          }
        });
        break;
      default:
        break;
    }
  }

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
          backgroundColor: "#c5eef0",
          borderTopLeftRadius: "45%",
          borderBottomRightRadius: "35%",
          width: "1400px",
          height: "600px",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            padding: "50px",
          }}
        >
          <div className="slideshow-container">
            <div
              className="mySlides fade"
              style={{ display: slideIndex1 === 1 ? "block" : "none" }}
            >
              <img src={slide1} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex1 === 2 ? "block" : "none" }}
            >
              <img src={slide2} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex1 === 3 ? "block" : "none" }}
            >
              <img src={slide3} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex1 === 4 ? "block" : "none" }}
            >
              <img src={slide4} alt="" />
            </div>

            <button className="prev" onClick={() => plusSlides(1, -1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => plusSlides(1, -1)}>
              &#10095;
            </button>
          </div>
          <div
            style={{
              width: "400px",
              height: "400px",
              marginTop: "40px",
              marginLeft: "120px",
              overflowWrap: "break-word",
              // wordWrap: "break-word",
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
            <Typography sx={{ textAlign: "justify" }}>
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
          </div>
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: "#c5eef0",
          borderTopRightRadius: "45%",
          borderBottomLeftRadius: "35%",
          width: "1400px",
          height: "600px",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "center",
            padding: "50px",
          }}
        >
          {" "}
          <div
            style={{
              width: "450px",
              height: "400px",
              marginTop: "40px",
              marginLeft: "60px",
              // marginRight: "160px",
              // display: "flex", // İçeriği dikey ve yatayda ortalamak için
              // justifyContent: "center", // İçeriği yatayda ortala
              // alignItems: "center", // İçeriği dikeyde ortala
              // flexDirection: "column",
              overflowWrap: "break-word",
              // wordWrap: "break-word",
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
            <Typography sx={{ textAlign: "justify" }}>
              2013 yılında Neri & Hu tarafından tamamlanan beş yıldızlı otelin
              önündeki 6.000 m²'lik peyzaj projesi, otelin genel görünümünü
              iyileştirmeyi ve park alanlarını optimize etmeyi hedefliyor.
              Zhengzhou'nun tarihi tekstil dokuma endüstrisine bir saygı duruşu
              olarak, Shma tarafından yapılan peyzaj tasarımında, heykel benzeri
              örgüler ve kıvrımlar kullanılarak estetik bir kamusal alan
              oluşturulmuş. Çim şeritlerinin dalgalı deseni, geleneksel dokuma
              makinelerini temsil ediyor. Paslanmaz çelik kaplı saksılar, şehir
              otelinin kamusal ve özel karakterlerini vurgulamak için iki farklı
              renkte kullanılmış; dışa dönük ve eğlenceli enerjiyi yansıtmak
              için bronz, otel tarafından bakıldığında ise daha sakin bir
              atmosfer sağlamak için siyah ayna kullanılmış. Yeraltı metro
              istasyonunun yapıları dikkate alınarak peyzaj düzenlemesi yapılmış
              ve acil durum merdiveni gibi unsurlar görsel olarak kamufle
              edilmiş.
            </Typography>
          </div>
          <div className="slideshow-container">
            <div
              className="mySlides fade"
              style={{ display: slideIndex2 === 1 ? "block" : "none" }}
            >
              <img src={slide5} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex2 === 2 ? "block" : "none" }}
            >
              <img src={slide6} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex2 === 3 ? "block" : "none" }}
            >
              <img src={slide7} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex2 === 4 ? "block" : "none" }}
            >
              <img src={slide8} alt="" />
            </div>

            <button className="prev" onClick={() => plusSlides(2, -1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => plusSlides(2, 1)}>
              &#10095;
            </button>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          backgroundColor: "#c5eef0",
          borderTopLeftRadius: "45%",
          borderBottomRightRadius: "35%",
          width: "1400px",
          height: "600px",
          margin: "auto",
          marginTop: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            padding: "50px",
          }}
        >
          <div className="slideshow-container">
            <div
              className="mySlides fade"
              style={{ display: slideIndex3 === 1 ? "block" : "none" }}
            >
              <img src={slide9} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex3 === 2 ? "block" : "none" }}
            >
              <img src={slide10} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex3 === 3 ? "block" : "none" }}
            >
              <img src={slide11} alt="" />
            </div>

            <div
              className="mySlides fade"
              style={{ display: slideIndex3 === 4 ? "block" : "none" }}
            >
              <img src={slide12} alt="" />
            </div>

            <button className="prev" onClick={() => plusSlides(3, -1)}>
              &#10094;
            </button>
            <button className="next" onClick={() => plusSlides(3, -1)}>
              &#10095;
            </button>
          </div>
          <div
            style={{
              width: "400px",
              height: "400px",
              marginTop: "40px",
              marginLeft: "120px",
              overflowWrap: "break-word",
              // wordWrap: "break-word",
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
            <Typography sx={{ textAlign: "justify" }}>
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
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Projeler;
