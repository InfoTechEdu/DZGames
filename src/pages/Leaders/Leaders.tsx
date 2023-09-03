import styled from "styled-components";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel";
import { CAROUSEL_DATA } from "../../shared/slider";
import { ReactComponent as SelectImg } from "../../assets/select.svg";
import { useState } from "react";

interface GameItem {
  id: number;
  title: string;
}

const gamesList: GameItem[] = [
  {
    id: 1,
    title: "Юнга Мур и большая стройка котов-пиратов",
  },
  {
    id: 2,
    title: "Экология",
  },
  {
    id: 3,
    title: "Борьба Умов",
  },
  {
    id: 4,
    title: "Время Истории",
  },
];

export const Leaders = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);

  const toggleDropDown = () => {
    setShowDropdown((s) => !s);
  };

  const handleGameSelect = (game: GameItem) => {
    setSelectedGame(game);
    setShowDropdown(false);
  };

  return (
    <LeaderContainer>
      <div>
        <MainTitle text="Выбери игру" />
        <div>
          <SelectGame onClick={toggleDropDown}>
            <span>{selectedGame?.title ?? "Или найди по названию"}</span>
            <SelectImg
              style={{ transform: showDropdown ? "rotate(180deg)" : "" }}
            />
          </SelectGame>
          {showDropdown && (
            <Options>
              {gamesList.map((game) => {
                return (
                  <Option
                    isSelected={selectedGame?.id === game.id}
                    onClick={() => handleGameSelect(game)}
                    key={game.id}
                  >
                    {game.title}
                  </Option>
                );
              })}
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

const SelectGame = styled.button`
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

  & span {
    text-align: left;
  }
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
  overflow: hidden;
`;

const Option = styled.button<{ isSelected: boolean }>`
  display: block;
  color: #bda5ff;
  padding: 12px 16px;
  width: 100%;
  text-align: left;

  font-size: 16px;

  &:hover {
    background-color: #bda5ff;
    color: #fff;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #bda5ff;
    color: #fff;
  `}
`;

// const Table = styled.table`
//   border: 1px solid black;
// `;
