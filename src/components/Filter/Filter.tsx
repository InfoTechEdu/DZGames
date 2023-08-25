import styled from 'styled-components';
import { Button } from '../Button/Button';
import { ReactComponent as Joystick } from '../../assets/filters/joystick.svg';
import { ReactComponent as Grammar } from '../../assets/filters/grammar.svg';
import { ReactComponent as Simulator } from '../../assets/filters/simulator.svg';
import { ReactComponent as Quiz } from '../../assets/filters/quiz.svg';

export const Filter = () => {

  return (
    <Container className='filters'>
      <Button className='active'>
        <Joystick className='size' />
        <span>Все</span>
      </Button>
      <Button>
        <Grammar className='size' />
        <span>Функциональная грамотность</span>
      </Button>
      <Button>
        <Simulator className='size' />
        <span>Тренажеры</span>
      </Button>
      <Button>
        <Quiz className='size' />
        <span>Викторины</span>
      </Button>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 40px;

  & button {
    padding-left: 30px;
    padding-right: 30px;

    & span {
      margin-left: 12px;
    }
  }
`;
