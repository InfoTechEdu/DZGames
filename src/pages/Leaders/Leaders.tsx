import styled from "styled-components";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel";
import { CAROUSEL_DATA } from "../../shared/slider";
import { ReactComponent as SelectImg } from "../../assets/select.svg";
import { useEffect, useState } from "react";
import { SubTitle } from "../../components/SubTitle/SubTitle";

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

const API_URL =
  "https://us-central1-dzgames-12ad8.cloudfunctions.net/DownloadTop10Leaderboard?game=battleofminds";

interface TableItem {
  id: string;
  name: string;
  position: string;
  profilePhoto: string;
  progressData: {
    points: number;
  };
  statistics: {
    gamesPlayed: number;
    winCount: number;
  };
}

export const Leaders = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);

  const [tableData, setTableData] = useState<TableItem[] | null>(null);

  const toggleDropDown = () => {
    setShowDropdown((s) => !s);
  };

  const handleGameSelect = (game: GameItem) => {
    setSelectedGame(game);
    setShowDropdown(false);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((json) => {
        const finalData = Object.entries(json).map(([id, item]) => {
          return {
            id,
            ...item,
          };
        });

        setTableData(finalData);
      });
  }, []);

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
      {tableData && (
        <>
          <SubTitle text="Таблица лидеров" />
          <TableWrapper
            imageSrc={
              new URL("../../assets/table-bg.png", import.meta.url).href
            }
          >
            <Table>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Имя</th>
                  <th>Класс</th>
                  <th>Очки</th>
                  <th>Игры</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(
                  (
                    {
                      id,
                      name,
                      position,
                      profilePhoto,
                      progressData: { points },
                      statistics: { gamesPlayed },
                    },
                    index
                  ) => {
                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>
                          <div>
                            <ProfilePhoto src={profilePhoto} alt={name} />
                            <span>{name}</span>
                          </div>
                        </td>
                        <td>{position}</td>
                        <td>{points}</td>
                        <td>{gamesPlayed}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
            <Table withBorder>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>
                    <div>
                      <ProfilePhoto src={tableData[0]?.profilePhoto} alt='Я' />
                      <span>Я</span>
                    </div>
                  </td>
                  <td>1</td>
                  <td>100</td>
                  <td>1</td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>
        </>
      )}
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

const TableWrapper = styled.div<{ imageSrc: string }>`
  width: 100%;
  background: ${({ imageSrc }) => `url(${imageSrc})`};
  background-color: #f7f7f8;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 30px 42px;
`;

const Table = styled.table<{withBorder?: boolean}>`
  width: 100%;

  ${({ withBorder }) => withBorder && `
    margin-top: 22px;
    border-top: 2px solid black;
  `};

  & th {
    font-size: 30px;
    font-weight: 600;

    text-align: left;
  }

  & td {
    font-size: 30px;
    font-weight: 300;

    & div {
      display: flex;
      align-items: center;
    }

    & span {
      margin-left: 10px;
    }
  }

  & td {
    padding-top: 22px;
  }

  & th:first-of-type, & tr td:first-of-type {
    width: 5%
  }

  & th:nth-child(2), & tr td:nth-child(2) {
    width: 50%
  }

  & th:nth-child(3), & tr td:nth-child(3) {
    width: 15%
  }

  & th:nth-child(4), & tr td:nth-child(4) {
    width: 15%
  }

  & th:last-of-type, & tr td:last-of-type {
    width: 15%
  }
`;

const ProfilePhoto = styled.img`
  width: 32px;
  height: 32px;
`