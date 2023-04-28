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

export const EcologyGame = () => {
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
            <Description
              fontSize={18}
              text="Разнообразный и богатый опыт говорит нам, что реализация
                намеченных плановых заданий однозначно определяет каждого
                участника как способного принимать собственные решения касаемо
                переосмысления внешнеэкономических политик. Противоположная точка
                зрения подразумевает, что независимые государства могут быть
                описаны максимально подробно. В рамках спецификации современных
                стандартов, интерактивные прототипы, вне зависимости от их уровня,
                должны быть ограничены исключительно образом мышления.
              "
            />
          }
        />
        <Query />

        <div className="relative" id="contact">
          <Title>
            <SubTitle text="Подписывайся на новости о наших игрых" />
          </Title>
          <Form
            withMessage={false}
            submitText="Подписаться"
            text="Хочешь получать актуальные новости о наших играх? Тогда смело подписывайся на рассылку!"
          />
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
