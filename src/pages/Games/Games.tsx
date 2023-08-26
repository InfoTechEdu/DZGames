import { useState } from 'react';

import styled from 'styled-components';
import A from '../../assets/A.svg';

import { MainTitle } from '../../components/MainTitle/MainTitle';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { SendMessageForm } from '../Main/SendMessageForm/SendMessageForm';
import { Filter } from '../../components/Filter/Filter';
import { GamesCarousel } from '../../components/GamesCarousel/GamesCarousel';

import { ReactComponent as Grammar } from '../../assets/filters/grammar.svg';
import { ReactComponent as Simulator } from '../../assets/filters/simulator.svg';
import { ReactComponent as Quiz } from '../../assets/filters/quiz.svg';
import { RecentlyPlayedGames } from '../../components/RecentlyPlayedGames/RecentlyPlayedGames';
import { SLIDER_DATA_CARDS, SMALL_SLIDER_DATA } from '../../shared/slider';


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
                <SubTitle text='Функциональная грамотность' />
              </CarouselHeader>
              
              <GamesCarousel data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 2) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Simulator className='size' />
                <SubTitle text='Тренажеры' />
              </CarouselHeader>
              <GamesCarousel data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 3) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Quiz className='size' />
                <SubTitle text='Викторины' />
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

const Img = styled.img({
  width: '100%',
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
    width: 48px;
    height: 48px;

    & path {
      fill: #000;
    }
  }
`

const Cards = styled.div({
  display: 'flex',
  gap: '24px',

  '@media(max-width: 1024px)': {
    flexWrap: 'wrap',
  },

  '@media(max-width: 856px)': {
    justifyContent: 'center',
  },
});

const Card = styled.div({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  ':hover': {
    boxShadow: '16px 16px 0px #FFCD4C',
    borderRadius: '20px',
    transition: '0.5s',
  },

  '@media(max-width: 1024px)': {
    boxShadow: '16px 16px 0px #FFCD4C',
    borderRadius: '20px',
  },
});

const CardText = styled.div({
  width: '100%',
  maxWidth: '392px',
  maxHeight: '198px',
  background: '#F7F7F8',
  borderRadius: '0px 0px 20px 20px',
  padding: '24px',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
});

const CardTitle = styled.div({
  fontSize: '30px',
  fontWeight: '600',
  maxWidth: '296px',

  '@media(max-width: 820px)': {
    fontSize: '24px',
  },
});

const CardDescription = styled.div({
  fontSize: '18px',
  maxWidth: '296px',
});
