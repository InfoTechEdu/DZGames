import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { MainCarousel } from '../../components/MainCarousel/MainCarousel';
import { CAROUSEL_DATA } from '../../shared/slider';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { ReactComponent as SelectImg } from '../../assets/select.svg';

export const Leaders = () => {
  return (
    <LeaderContainer>
      <div>
        <MainTitle text='Выбери игру' />
        <div>
          <SelectGame>
            Или найди по названию <SelectImg />
          </SelectGame>
          <Options>
            <Option>Юнга Мур и большая стройка котов-пиратов</Option>
            <Option>Экология</Option>
            <Option>Борьба Умов</Option>
            <Option>Время Истории</Option>
          </Options>
        </div>
      </div>
      <div>
        <MainCarousel data={CAROUSEL_DATA} />
      </div>
    </LeaderContainer>
  );
};

const LeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '100%',
  maxWidth: '1224px',
  paddingTop: '80px',
  gap: '24px',
});

const SelectGame = styled.div`
  width: 392px;
  height: 43px;
  border: 1px solid #bda5ff;
  border-radius: 8px;
  font-size: 16px;
  color: #bda5ff;
  padding-left: 16px;
  height: 45px;
  box-sizing: border-box;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const Options = styled.div`
  width: 392px;
  height: 172px;
  border-radius: 8px;
  border: 1px solid #bda5ff;
  margin-top: 7px;
`;

const Option = styled.div`
  color: #bda5ff;
  padding: 12px 16px;
`;
