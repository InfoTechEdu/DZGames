import styled from "styled-components";

import A from "../../assets/A.svg";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import { GrayBlock } from "../../components/GrayBlock/GrayBlock";
import { Description } from "../../components/Description/Description";
import { SendMessageForm } from "../Main/SendMessageForm/SendMessageForm";

export const AboutUs = () => {
  return (
    <AboutUsStyle>
      <Container>
        <GrayBlock
          title="О нас"
          isMainTitle
          isImg
          description={
            <>
              <Description
                fontSize={18}
                text="Мы помогаем детям улучшить свои навыки функциональной грамотности. 
                Используя инновационные методы обучения, мы стремимся помочь детям улучшить свои знания и создать будущих лидеров.
                "
              />
              <Description
                fontSize={18}
                text="Обучение в наших играх подано в интересном формате разных игровых жанров, чтобы каждый ребенок мог найти ту, что ему нравится. 
                Наша убеждение - обучение должно быть не только полезным, но и увлекательным, и все наши игры разработаны с учетом этого подхода. 
                Мы постоянно работаем над улучшением наших продуктов и стремимся создавать игры, которые будут максимально полезны для детей.
                "
              />
              <Description
                fontSize={18}
                text="Наши двери всегда открыты к сотрудничеству с образовательными организациями и экспертами в области обучения, чтобы взаимодействовать и усовершенствовать нашу продукцию. 
                Мы верим, что наша игровая платформа поможет школьникам достичь больших успехов в учебе и дает возможность весело проводить время, не забывая при этом обучаться.
                "
              />
            </>
          }
        />

        <div>
          <SubTitle text="Наши ценности" />
          <Wrapper>

            <GrayBlockMini>
              <BlockTitle>Эффективность</BlockTitle>
              <BlockDescription>
              Обучающие игры должны приносить результат
              </BlockDescription>
            </GrayBlockMini>

            <GrayBlockMini>
              <BlockTitle>Учет интересов</BlockTitle>
              <BlockDescription>
              Мы верим, что обучение построенное на увлечениях и интересах - ключ к повышенной мотивации и постоянной заинтересованности в обучении
              </BlockDescription>
            </GrayBlockMini>

            <GrayBlockMini>
              <BlockTitle>Креатив</BlockTitle>
              <BlockDescription>
              Новые навыки и знания в увлекательном формате
              </BlockDescription>
            </GrayBlockMini>

            <GrayBlockMini>
              <BlockTitle>Сторителлинг</BlockTitle>
              <BlockDescription>
              Истории и персонажи для обучения детей в интересном формате для более эффективного усвоения знаний
              </BlockDescription>
            </GrayBlockMini>

            <GrayBlockMini>
              <BlockTitle>Нарратив</BlockTitle>
              <BlockDescription>
              Мы понимаем, что дети больше усваивают когда учатся в контексте эмоциональных историй
              </BlockDescription>
            </GrayBlockMini>
            
          </Wrapper>
        </div>
        <RelativeBlock className="relative">
          <SubTitle text="Стань частью нашей команды" />
          <SendMessageForm />
          <ImgA className="asideButton" src={A} />
        </RelativeBlock>
      </Container>
    </AboutUsStyle>
  );
};

const AboutUsStyle = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  gap: "60px",
});

const Container = styled.div({
  width: "100%",
  maxWidth: "1224px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  marginTop: "140px",

  "@media(max-width: 820px)": {
    marginTop: "72px",
  },

  "@media(max-width: 600px)": {
    gap: "0",
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

const GrayBlockMini = styled.div({
  width: "calc(33.3% - 26px)",
  padding: "24px 24px",
  backgroundColor: "#F7F7F8",
  borderRadius: "20px",
  boxShadow: "16px 16px 0px #FFCD4C",
  display: "flex",
  gap: "12px",
  flexDirection: "column",
  marginRight: 26,
  marginBottom: 30,

  "@media(max-width: 991px)": {
    width: "calc(50% - 26px)",
  },

  "@media(max-width: 650px)": {
    width: "100%",
  },
});

const Wrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const BlockTitle = styled.div({
  fontSize: "30px",
  fontWeight: "600",
  color: "#0B0D22",

  "@media(max-width: 820px)": {
    fontSize: "24px",
  },
});

const BlockDescription = styled.div({
  color: "#0B0D22",
  fontSize: "18px",
});

const RelativeBlock = styled.div`
  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;
