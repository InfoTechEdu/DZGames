import styled from 'styled-components';
import { Button } from '../Button/Button';
import { ReactComponent as Joystick } from '../../assets/filters/joystick.svg';
import { ReactComponent as Grammar } from '../../assets/filters/grammar.svg';
import { ReactComponent as Simulator } from '../../assets/filters/simulator.svg';
import { ReactComponent as Quiz } from '../../assets/filters/quiz.svg';

const inactiveStyle = {
  background: 'none',
  backgroundColor: '#FFF3E8',
  color: '#FFA000',
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
    text: 'Викторины',
    icon: <Quiz className='size' />,
  },
  {
    id: 4,
    text: 'Тренажеры',
    icon: <Simulator className='size' />,
  }
];

type Props = {
  setActiveGameIndex: (value: number) => void;
  activeGameIndex: number;
};

export const Filter = ({ activeGameIndex, setActiveGameIndex }: Props) => {
  return (
    <Container className='filters'>
      {buttons.map(({ text, icon, id }, index) => (
        <Button
          key={id}
          withShadow={false}
          onClick={() => setActiveGameIndex(index)}
          style={activeGameIndex !== index ? inactiveStyle : {}}
          className={`${activeGameIndex === index ? 'active' : ''}`}
        >
          <IconWrapper index={index} isActive={activeGameIndex === index}>
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
        return `stroke: #FFA000`;
      }

      return `fill: #FFA000`;
    }}
  }
`;
