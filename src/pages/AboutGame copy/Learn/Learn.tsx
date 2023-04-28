import styled from "styled-components";
import { SubTitle } from "../../../components/SubTitle/SubTitle";

import BackgroundGame from "../../../assets/backgroundGame.png";
import BackgroundGame760 from "../../../assets/backgroundGame760.png";
import BackgroundGame320 from "../../../assets/backgroundGame320.png";
import GG from "../../../assets/GG.png";
import A from "../../../assets/A.svg";

export const Learn = () => {
  return (
    <div className="relative">
      <SubTitle text="Чему ты научишься" />
      <LearnStyle>
        <LearnDescription>
          В игре ты потренируешься копить деньги и разумно их тратить, узнаешь,
          как правильно аргументировать выводы и затронешь азы строительства.
        </LearnDescription>
        <ImgBackgroundGame src={BackgroundGame} />
        <ImgBackgroundGame760 src={BackgroundGame760} />
        <ImgBackgroundGame320 src={BackgroundGame320} />
        <ImgGG src={GG} />
      </LearnStyle>
      <ImgA className="asideButton" src={A} />
    </div>
  );
};

const LearnStyle = styled.div({
  background: "#F7F7F8",
  display: "flex",
  alignItems: "center",
  borderRadius: "20px",
  position: "relative",

  "@media(max-width: 694px)": {
    flexDirection: "column",
  },
});

const LearnDescription = styled.div({
  fontSize: "30px",
  color: "#0B0D22",
  margin: "48px",

  "@media(max-width: 1300px)": {
    marginLeft: "24px",
    marginRight: "0",
  },

  "@media(max-width: 440px)": {
    marginBottom: "130px",
  },

  "@media(max-width: 380px)": {
    marginBottom: "196px",
  },
});

const ImgBackgroundGame = styled.img({
  "@media(max-width: 1041px)": {
    display: "none",
  },
});

const ImgBackgroundGame760 = styled.img({
  display: "none",

  "@media(max-width: 1041px)": {
    display: "block",
  },

  "@media(max-width: 694px)": {
    display: "none",
  },
});

const ImgBackgroundGame320 = styled.img({
  display: "none",
  width: "100%",

  "@media(max-width: 694px)": {
    display: "block",
  },
});

const ImgGG = styled.img({
  position: "absolute",
  right: "36px",
  bottom: "0",

  "@media(max-width: 694px)": {
    right: "auto",
  },
});

const ImgA = styled.img({
  position: "absolute",
  bottom: "-47px",
  left: "-56px",

  "@media(max-width: 1340px)": {
    bottom: "-10px",
    left: "-20px",
  },
});
