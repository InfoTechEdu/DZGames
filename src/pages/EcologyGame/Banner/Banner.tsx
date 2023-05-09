import styled from "styled-components";

import GameBanner from "../../../assets/gameBannerEcology.png";
import GameBanner720 from "../../../assets/gameBannerEcology720.png";
import GameBanner320 from "../../../assets/gameBannerEcology320.png";
import RightArrow from "../../../assets/right_arrow.svg";
import { Button } from "../../../components/Button/Button"; 
import { useNavigate } from "react-router-dom";

const openEcologyGame = () => {
  // const navigate = useNavigate();
  // navigate("/ecology-game-index");
  const URL = "https://games.domznaniy.school/games/ecology/index.html";
  window.open(URL, '_blank')?.focus();
};

export const Banner = () => {
  return (
    <BannerStyle>
      <ImgBanner src={GameBanner} />
      <ImgBanner720 src={GameBanner720} />
      <ImgBanner320 src={GameBanner320} />
      <BannerDescriptionBlock>
        <BannerTitle>Экология</BannerTitle>
        <BannerDescription>
        Соблюдение баланса между экологией и производством всегда было непростой задачей
        </BannerDescription>
        <Button width="1020px" text="Играть в браузере" handleClick={openEcologyGame} />
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
