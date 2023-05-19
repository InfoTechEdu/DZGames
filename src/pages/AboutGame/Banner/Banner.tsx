import styled from "styled-components";

import GameBanner from "../../../assets/gameBanner.png";
import GameBanner720 from "../../../assets/gameBanner720.png";
import GameBanner320 from "../../../assets/gameBanner320.png";
import RightArrow from "../../../assets/right_arrow.svg";
import { Button } from "../../../components/Button/Button";

export const Banner = () => {
  const handleDownloading = async () => {
    const response = await fetch(
      `https://functions.yandexcloud.net/d4ec1o5pg8he0c6aej8g?game=yunga-mur&uid=undefined`
    ); //#edit. Add UID paramaeter to request
    if(response.ok){
      console.log("Tracking event 'game-download' was sent");
    }else{
      console.error("Failed to send tracking event 'game-download'. Error - " + response.body);
    }

    window.open(
      //"https://file-examples.com/storage/fe0d875dfd645260e96b346/2017/11/file_example_MP3_700KB.mp3"
      "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1Ou6k75bsuQ0l9RAOiZ_SnoAN2byM_hsH"
      );
  };

  return (
    <BannerStyle>
      <ImgBanner src={GameBanner} />
      <ImgBanner720 src={GameBanner720} />
      <ImgBanner320 src={GameBanner320} />
      <BannerDescriptionBlock>
        <BannerTitle>Юнга Мур и большая стройка котов-пиратов</BannerTitle>
        <BannerDescription>
          Используй свои знания и навыки и помоги котам построить городок для
          туристов.
        </BannerDescription>
        <Button
          handleClick={handleDownloading}
          width="1020px"
          text="Скачать для Windows"
        />
      </BannerDescriptionBlock>
      <ImgRight src={RightArrow} />
    </BannerStyle>
  );
};

const BannerStyle = styled.div({
  position: "relative",
});

const ImgBanner = styled.img({
  width: "100%",

  "@media(max-width: 920px)": {
    display: "none",
  },
});

const ImgBanner720 = styled.img({
  width: "100%",
  display: "none",
  borderRadius: "20px",

  "@media(max-width: 920px)": {
    display: "block",
  },

  "@media(max-width: 520px)": {
    display: "none",
  },
});

const ImgBanner320 = styled.img({
  width: "100%",
  display: "none",
  borderRadius: "20px",

  "@media(max-width: 520px)": {
    display: "block",
  },
});

const ImgRight = styled.img({
  position: "absolute",
  left: "-172px",
  bottom: "-295px",

  "@media(max-width: 1580px)": {
    display: "none",
  },
});

const BannerDescriptionBlock = styled.div({
  background: "rgba(247, 247, 248, 0.66)",
  backdropFilter: "blur(12px)",
  borderRadius: "20px",
  height: "268px",
  position: "absolute",
  width: "100%",
  bottom: "0",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  padding: "48px 24px",

  "@media(max-width: 520px)": {
    height: "408px",
  },
});

const BannerTitle = styled.div({
  fontSize: "30px",
  fontWeight: "600",
  marginBottom: "12px",
});

const BannerDescription = styled.div({
  fontSize: "18px",
  marginBottom: "32px",
  maxWidth: "1020px",
  textAlign: "center",
});
