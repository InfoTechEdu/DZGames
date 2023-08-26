import { useState } from 'react';

import styled from 'styled-components';
import A from '../../assets/A.svg';

import { MainTitle } from '../../components/MainTitle/MainTitle';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { GamesSubtitle } from '../../components/GamesSubtitle/GamesSubtitle';
import { SendMessageForm } from '../Main/SendMessageForm/SendMessageForm';
import { Filter } from '../../components/Filter/Filter';
import { GamesCarousel } from '../../components/GamesCarousel/GamesCarousel';

import { ReactComponent as Grammar } from '../../assets/filters/grammar.svg';
import { ReactComponent as Simulator } from '../../assets/filters/simulator.svg';
import { ReactComponent as Quiz } from '../../assets/filters/quiz.svg';
import { RecentlyPlayedGames } from '../../components/RecentlyPlayedGames/RecentlyPlayedGames';
import { SLIDER_DATA_CARDS, SMALL_SLIDER_DATA } from '../../shared/slider';

import { ReactComponent as TimeMachine } from '../../assets/time-machine.svg';

export const Games = () => {
  const [activeGameIndex, setActiveGameIndex] = useState(0);

  return (
    <Wrapper>
      <Container>
        <SlidersWrapper>
          <Filter
            activeGameIndex={activeGameIndex}
            setActiveGameIndex={setActiveGameIndex}
          />

          <CarouselHeader>
            <TimeMachine className='size' />
            <SubTitle text='Вы недавно играли' />
          </CarouselHeader>
          <RecentlyPlayedGames data={SMALL_SLIDER_DATA} />

          {activeGameIndex === 0 && (
            <ContainerCarousel>
              <MainTitle text='Рекомендуемые' />
              <GamesCarousel data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 1) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Grammar className='size' />
                <GamesSubtitle text='Функциональная грамотность' />
              </CarouselHeader>
              
              <GamesCarousel data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 2) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Simulator className='size' />
                <GamesSubtitle text='Тренажеры' />
              </CarouselHeader>
              <GamesCarousel data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 3) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Quiz className='size' />
                <GamesSubtitle text='Викторины' />
              </CarouselHeader>
              <GamesCarousel data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}
        </SlidersWrapper>

        <div className='relative'>
          <Title>
            <SubTitle text='Задавай вопросы и делись идеями' />
          </Title>
          <SendMessageForm />
          <ImgA className='asideButton' src={A} />
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  gap: '25px',
});

const Title = styled.div({
  display: 'none',
  '@media(max-width: 650px)': {
    display: 'block',
  },
});

const Container = styled.div({
  width: '100%',
  maxWidth: '1224px',
  display: 'flex',
  flexDirection: 'column',
  // gap: '76px',
  marginTop: '140px',

  '@media(max-width: 820px)': {
    marginTop: '72px',
  },

  '@media(max-width: 600px)': {
    gap: '60px',
  },
});

const SlidersWrapper = styled.div({
  marginBottom: '0px',
});

const ImgA = styled.img({
  position: 'absolute',
  bottom: '-47px',
  left: '-56px',

  '@media(max-width: 1340px)': {
    bottom: '-15px',
    left: '-10px',
  },
});

const ContainerCarousel = styled.div({
  marginBottom: '60px',
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
`
