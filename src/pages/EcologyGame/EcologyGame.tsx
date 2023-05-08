import styled from "styled-components";

import { Form } from "../../components/Form/Form";
import { Banner } from "./Banner/Banner";
import { Info } from "./Info/Info";
import { Query } from "./Query/Query";
import { GrayBlock } from "../../components/GrayBlock/GrayBlock";
import { MiniBlock } from "./MiniBlock/MiniBlock";
import { Learn } from "./Learn/Learn";
import { SubTitle } from "../../components/SubTitle/SubTitle";

import D from "../../assets/D.svg";
import { Description } from "../../components/Description/Description";
import { SubscriptionForm } from "../AboutGame/SubscriptionForm/SubscriptionForm";

export const EcologyGame = () => {
  return (
    <AboutGameStyle>
      <Container>
        <Banner />
        {/* <MiniBlock /> */}
        {/* <Learn /> */}
        <Info />

        <GrayBlock
          title="Об игре"
          description={
            <>
            <Description
              fontSize={18}
              text="Эта игра перенесет вас в разнообразные сценарии, где вы получите представление о мире охраны окружающей среды, узнаете о важности поддержания экологического баланса и исследуете тонкие отношения между промышленностью и природой. Узнайте о работе экологов и раскрывайте различные проблемы, с которыми сталкивается современное общество."
            />
            <Description
              fontSize={18}
              text="Игра подойдет как для самостоятельного прохождения, так и для совместного прохождения в классе. 
              Желаем успехов!"
            />
            </>
            
          }
        />
        <Query />

        <div className="relative">
          <Title>
            <SubTitle text="Подписывайся на новости о наших играх" />
          </Title>
          <SubscriptionForm></SubscriptionForm>
          {/* <Form
            withMessage={false}
            submitText="Подписаться"
            text="Подпишись на рассылку, чтобы не пропустить актуальные новости!"
          /> */}
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
