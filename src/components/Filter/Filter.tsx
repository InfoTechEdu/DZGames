import styled from 'styled-components';
import { Button } from '../Button/Button';
import { ReactComponent as Joystick } from '../../assets/filters/joystick.svg';
import { ReactComponent as Grammar } from '../../assets/filters/grammar.svg';
import { ReactComponent as Simulator } from '../../assets/filters/simulator.svg';
import { ReactComponent as Quiz } from '../../assets/filters/quiz.svg';
import { useState } from 'react';

const inactiveStyle = {
  background: 'none',
  backgroundColor: '#EFEFEF',
  color: '#BBBBBB',
};

const buttons = [
  {
    id: 1,
    text: 'Все',
    icon: <Joystick className='size' />,
  },
  {
    id: 2,
    text: 'Функциональная грамотность',
    icon: <Grammar className='size' />,
  },
  {
    id: 3,
    text: 'Тренажеры',
    icon: <Simulator className='size' />,
  },
  {
    id: 4,
    text: 'Викторины',
    icon: <Quiz className='size' />,
  },
];

export const Filter = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className='filters'>
      {buttons.map(({ text, icon }, index) => (
        <Button
          onClick={() => setActiveIndex(index)}
          style={activeIndex !== index ? inactiveStyle : {}}
          className={`${activeIndex === index ? 'active' : ''}`}
        >
          <IconWrapper index={index} isActive={activeIndex === index}>
            {icon}
          </IconWrapper>
          <span>{text}</span>
        </Button>
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: auto;

  margin-bottom: 40px;

  & button {
    padding-left: 30px;
    padding-right: 30px;

    & span {
      margin-left: 12px;
    }
  }
`;

const IconWrapper = styled.div<{ isActive: boolean; index: number }>`
  & path {
    ${({ isActive, index }) => {
      if (isActive && index === 0) {
        return `stroke: #fff`;
      }

      if (isActive) {
        return `fill: #fff`;
      }

      if (index === 0) {
        return `stroke: #BBBBBB`
      }

      return `fill: #BBBBBB`
    }}
  }
`;
