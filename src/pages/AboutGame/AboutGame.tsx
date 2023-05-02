import styled from "styled-components";

import { Banner } from "./Banner/Banner";
import { Info } from "./Info/Info";
import { Query } from "./Query/Query";
import { GrayBlock } from "../../components/GrayBlock/GrayBlock";
import { MiniBlock } from "./MiniBlock/MiniBlock";
import { Learn } from "./Learn/Learn";
import { SubTitle } from "../../components/SubTitle/SubTitle";

import D from "../../assets/D.svg";
import { Description } from "../../components/Description/Description";
import { SubscriptionForm } from "./SubscriptionForm/SubscriptionForm";

export const AboutGame = () => {
  return (
    <AboutGameStyle>
      <Container>
        <Banner />
        <MiniBlock />
        <Learn />
        <Info />
        <GrayBlock
          title="Об игре"
          description={
            <>
            <Description
              fontSize={18}
              text="В роли главного героя ты познакомишься с жизнью необычных котов, которые строят свой курорт для туристов. 
              Однако на их пути будет множество препятствий, которые они смогут преодолеть только благодаря твоим знаниям и навыкам.
              "
            />

            <Description
                fontSize={18}
                text="Эта игра - уникальный способ не только развлечься, но и значительно улучшить свой уровень функциональной грамотности. 
                Ведь каждое решение, которое вы принимаете в игре, будет иметь влияние на ваш городок для котов-туристов.
                Играй и отправься путешествовать в мир увлекательных заданий и приключений!
                "
              />
            </>
            
          }
        />
        <Query />

        <div className="relative">
          <Title>
            <SubTitle text="Подписывайся на новости о наших игрых" />
          </Title>
          <SubscriptionForm />
          <ImgD className="asideButton" src={D} />
        </div>
      </Container>
    </AboutGameStyle>
  );
};

const AboutGameStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
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
  gap: "30px",
});

const ImgD = styled.img({
  position: "absolute",
  left: "-46px",
  bottom: "-51px",

  "@media(max-width: 1340px)": {
    bottom: "-20px",
    left: "-18px",
  },
});
