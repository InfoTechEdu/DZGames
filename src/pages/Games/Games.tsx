import { useMemo, useState } from "react";

import styled from "styled-components";
import A from "../../assets/A.svg";

import { MainTitle } from "../../components/MainTitle/MainTitle";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import { GamesSubtitle } from "../../components/GamesSubtitle/GamesSubtitle";
import { SendMessageForm } from "../Main/SendMessageForm/SendMessageForm";
import { Filter } from "../../components/Filter/Filter";
import { GamesCarousel } from "../../components/GamesCarousel/GamesCarousel";

import { ReactComponent as Grammar } from "../../assets/filters/grammar.svg";
import { ReactComponent as Simulator } from "../../assets/filters/simulator.svg";
import { ReactComponent as Quiz } from "../../assets/filters/quiz.svg";
import { RecentlyPlayedGames } from "../../components/RecentlyPlayedGames/RecentlyPlayedGames";
import {
  GRAMMAR_SLIDES,
  QUIZ_SLIDES,
  RECOMMENDED_GAMES_SLIDES,
  SIMULATOR_SLIDES,
} from "../../shared/slider";

import { ReactComponent as TimeMachine } from "../../assets/time-machine.svg";

export const Games = () => {
  const [activeGameIndex, setActiveGameIndex] = useState(0);

  const recentlySeenGames = useMemo(() => {
    const data = JSON.parse(
      localStorage.getItem("recentlySeenGames") ?? '[]'
    );

    return data.reverse()
  }, [])

  return (
    <Wrapper>
      <Container>
        <SlidersWrapper>
          <Filter
            activeGameIndex={activeGameIndex}
            setActiveGameIndex={setActiveGameIndex}
          />

          {recentlySeenGames.length > 0 && (
            <>
              <CarouselHeader>
                <TimeMachine className="size" />
                <SubTitle text="Вы недавно играли" />
              </CarouselHeader>
              <RecentlyPlayedGames data={recentlySeenGames} />
            </>
          )}

          {activeGameIndex === 0 && (
            <ContainerCarousel>
              <MainTitle text="Рекомендуемые" />
              <GamesCarousel data={RECOMMENDED_GAMES_SLIDES} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 1) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Grammar className="size" />
                <GamesSubtitle text="Функциональная грамотность" />
              </CarouselHeader>

              <GamesCarousel data={GRAMMAR_SLIDES} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 2) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Simulator className="size" />
                <GamesSubtitle text="Тренажеры" />
              </CarouselHeader>
              <GamesCarousel data={SIMULATOR_SLIDES} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 3) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Quiz className="size" />
                <GamesSubtitle text="Викторины" />
              </CarouselHeader>
              <GamesCarousel data={QUIZ_SLIDES} />
            </ContainerCarousel>
          )}
        </SlidersWrapper>

        <div className="relative">
          <Title>
            <SubTitle text="Задавай вопросы и делись идеями" />
          </Title>
          <SendMessageForm />
          <ImgA className="asideButton" src={A} />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div({
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
  // gap: '76px',
  marginTop: "140px",

  "@media(max-width: 820px)": {
    marginTop: "72px",
  },

  "@media(max-width: 600px)": {
    gap: "60px",
  },
});

const SlidersWrapper = styled.div({
  marginBottom: "0px",
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

const ContainerCarousel = styled.div({
  marginBottom: "60px",
});

const CarouselHeader = styled.div`
  display: flex;
  align-items: center;

  & svg {
    margin-right: 10px;
    min-width: 48px;
    min-height: 48px;

    & path {
      fill: #000;
    }
  }
`;
