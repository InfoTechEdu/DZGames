import styled from "styled-components";
import A from "../../assets/A.svg";
import GameImg from "../../assets/game.png";
import EcologyGameImg from "../../assets/ecology-game.png";
import { useNavigate } from "react-router-dom";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import { SendMessageForm } from "../Main/SendMessageForm/SendMessageForm"; 
import { Filter } from "../../components/Filter/Filter";

export const Game = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about-game");
  };

  const handleEcologyNavigation = () => {
    navigate("/ecology-game");
  };

  return (
    <GameStyle>
      <Container>
        <Games>
          <Filter />
          <MainTitle text="Наши игры" />
          <Cards>
            <Card onClick={handleNavigation}>
              <Img src={GameImg} />
              <CardText>
                <CardTitle>Юнга Мур и большая стройка котов-пиратов</CardTitle>
                <CardDescription>
                Используй свои знания и навыки и помоги котам построить городок для туристов
                </CardDescription>
              </CardText>
            </Card>
            <Card onClick={handleEcologyNavigation}>
              <Img src={EcologyGameImg} />
              <CardText>
                <CardTitle>Экология</CardTitle>
                <CardDescription>
                Соблюдение баланса между экологией и производством всегда было непростой задачей
                </CardDescription>
              </CardText>
            </Card>
            {/* <Card onClick={handleNavigation}>
              <Img src={GameImg} />
              <CardText>
                <CardTitle>Юнга Мур и большая стройка котов-пиратов</CardTitle>
                <CardDescription>
                  Описание игры Описание игры Описание игры Описание игры
                </CardDescription>
              </CardText>
            </Card> */}
          </Cards>
        </Games>

        <div className="relative">
          <Title><SubTitle text="Задавай вопросы и делись идеями" /></Title>
          <SendMessageForm />
          <ImgA className="asideButton" src={A} />
        </div>
      </Container>
    </GameStyle>
  );
};

const GameStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  gap: "25px",
});

const Title = styled.div({
  display: "none",
  "@media(max-width: 650px)": {
    display: "block",
  },
});

const Container = styled.div({
  width: "100%",
  maxWidth: "1224px",
  display: "flex",
  flexDirection: "column",
  gap: "76px",
  marginTop: "140px",

  "@media(max-width: 820px)": {
    marginTop: "72px",
  },

  "@media(max-width: 600px)": {
    gap: "60px",
  },
});

const Games = styled.div({
  marginBottom: "0px",
});

const Img = styled.img({
  width: "100%",
});

const ImgA = styled.img({
  position: "absolute",
  bottom: "-47px",
  left: "-56px",

  "@media(max-width: 1340px)": {
    bottom: "-15px",
    left: "-10px",
  },
});

const Cards = styled.div({
  display: "flex",
  gap: "24px",

  "@media(max-width: 1024px)": {
    flexWrap: "wrap",
  },

  "@media(max-width: 856px)": {
    justifyContent: "center",
  },
});

const Card = styled.div({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  ":hover": {
    boxShadow: "16px 16px 0px #FFCD4C",
    borderRadius: "20px",
    transition: "0.5s",
  },

  "@media(max-width: 1024px)": {
    boxShadow: "16px 16px 0px #FFCD4C",
    borderRadius: "20px",
  },
});

const CardText = styled.div({
  width: "100%",
  maxWidth: "392px",
  maxHeight: "198px",
  background: "#F7F7F8",
  borderRadius: "0px 0px 20px 20px",
  padding: "24px",

  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: "12px",
});

const CardTitle = styled.div({
  fontSize: "30px",
  fontWeight: "600",
  maxWidth: "296px",

  "@media(max-width: 820px)": {
    fontSize: "24px",
  },
});

const CardDescription = styled.div({
  fontSize: "18px",
  maxWidth: "296px",
});
