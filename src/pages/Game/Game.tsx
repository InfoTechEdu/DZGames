import { useState } from 'react';

import styled from 'styled-components';
import A from '../../assets/A.svg';
import GameImg from '../../assets/game.png';
import EcologyGameImg from '../../assets/ecology-game.png';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { SendMessageForm } from '../Main/SendMessageForm/SendMessageForm';
import { Filter } from '../../components/Filter/Filter';
import { CarouselMain } from '../../components/Carousel/Carousel';

import { ReactComponent as Grammar } from '../../assets/filters/grammar.svg';
import { ReactComponent as Simulator } from '../../assets/filters/simulator.svg';
import { ReactComponent as Quiz } from '../../assets/filters/quiz.svg';

const SLIDER_DATA_CARDS = [
  {
    img: GameImg,
    title: 'Юнга Мур и большая стройка котов-пиратов',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/about-game',
  },
  {
    img: EcologyGameImg,
    title: 'Экология',
    description:
      'Соблюдение баланса между экологией и производством всегда было непростой задачей',
    navigate: '/ecology-game',
  },
  {
    img: GameImg,
    title: 'Юнга Мур и большая стройка котов-пиратов',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
  },
  {
    img: EcologyGameImg,
    title: 'Экология',
    description:
      'Соблюдение баланса между экологией и производством всегда было непростой задачей',
  },
  {
    img: GameImg,
    title: 'Юнга Мур и большая стройка котов-пиратов',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
  },
];

export const Game = () => {
  const [activeGameIndex, setActiveGameIndex] = useState(0);

  return (
    <GameStyle>
      <Container>
        <Games>
          <Filter
            activeGameIndex={activeGameIndex}
            setActiveGameIndex={setActiveGameIndex}
          />

          {activeGameIndex === 0 && (
            <ContainerCarousel>
              <MainTitle text='Рекомендуемые' />
              <CarouselMain data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 1) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Grammar className='size' />
                <SubTitle text='Функциональная грамотность' />
              </CarouselHeader>
              
              <CarouselMain data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 2) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Simulator className='size' />
                <SubTitle text='Тренажеры' />
              </CarouselHeader>
              <CarouselMain data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}

          {(activeGameIndex === 0 || activeGameIndex === 3) && (
            <ContainerCarousel>
              <CarouselHeader>
                <Quiz className='size' />
                <SubTitle text='Викторины' />
              </CarouselHeader>
              <CarouselMain data={SLIDER_DATA_CARDS} />
            </ContainerCarousel>
          )}
        </Games>

        <div className='relative'>
          <Title>
            <SubTitle text='Задавай вопросы и делись идеями' />
          </Title>
          <SendMessageForm />
          <ImgA className='asideButton' src={A} />
        </div>
      </Container>
    </GameStyle>
  );
};

const GameStyle = styled.div({
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

const Games = styled.div({
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
