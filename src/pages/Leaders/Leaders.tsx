import styled from "styled-components";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel";
import { CAROUSEL_DATA } from "../../shared/slider";
import { ReactComponent as SelectImg } from "../../assets/select.svg";
import { useState } from "react";

export const Leaders = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropDown = () => {
    setShowDropdown((s) => !s);
  };

  return (
    <LeaderContainer>
      <div>
        <MainTitle text="Выбери игру" />
        <div>
          <SelectGame>
            Или найди по названию
            <button onClick={toggleDropDown}>
              <SelectImg style={{ transform: showDropdown ? 'rotate(180deg)' : '' }} />
            </button>
          </SelectGame>
          {showDropdown && (
            <Options>
              <Option>Юнга Мур и большая стройка котов-пиратов</Option>
              <Option>Экология</Option>
              <Option>Борьба Умов</Option>
              <Option>Время Истории</Option>
            </Options>
          )}
        </div>
      </div>
      <div>
        <MainCarousel data={CAROUSEL_DATA} />
      </div>
      {/* <div>
        <SubTitle text='Таблица лидеров' />
        <Table>
          <tr>
            <td>№</td>
            <td>Имя</td>
            <td>Класс</td>
            <td>Очки</td>
            <td>Игры</td>
          </tr>
        </Table>
      </div> */}
    </LeaderContainer>
  );
};

const LeaderContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  width: "100%",
  maxWidth: "1224px",
  paddingTop: "80px",
  gap: "24px",
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
`;

const Options = styled.div`

  position: absolute;
  z-index: 10;
  background-color: white;

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

// const Table = styled.table`
//   border: 1px solid black;
// `;
