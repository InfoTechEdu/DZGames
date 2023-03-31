import styled from "styled-components";

import { ReactComponent as GroupLessons } from "../../assets/groupLessons.svg";
import LeftArrow from "../../assets/left_arrow.svg";
import { Form } from "../Form/Form";

export const Main = () => {
  return (
    <MainStyle>
      <Container>
        {/* <Wrapper>
        </Wrapper> */}

        <Title>Наши игры</Title>
        <Carousel></Carousel>
        <Info>
          <TextInfo>Мы делаем игры на функциональную грамотность</TextInfo>
          <GroupLessons />
          <Img src={LeftArrow} />
        </Info>
          <Form text="У тебя есть идеи или вопросы? Напиши нам!" />
      </Container>
    </MainStyle>
  );
};

const MainStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  // position: "relative",
  gap: "60px",
});

const Img = styled.img({
  position: "absolute",
  right: "-172px",
  top: "183px",
});



const Container = styled.div({
  // backgroundColor: "#F7F7F8",
  width: "100%",
  maxWidth: "1224px",
  // height: "442px",
  // borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "60px",
  // justifyContent: "space-around",
});

const Carousel = styled.div({});

const Info = styled.div({
  backgroundColor: "#F7F7F8",
  borderRadius: "20px",
  height: "246px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
});

const TextInfo = styled.div({
  fontWeight: "600",
  fontSize: "30px",
  maxWidth: "516px",
  marginLeft: "48px",
});

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1128px",
  width: "100%",
  margin: "0 auto",
});

const Title = styled.h1({
  margin: "0",
});
