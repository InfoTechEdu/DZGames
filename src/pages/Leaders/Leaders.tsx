import styled from 'styled-components';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { MainCarousel } from '../../components/MainCarousel/MainCarousel';

import { ReactComponent as SelectImg } from '../../assets/select.svg';
import { ReactComponent as PopupImg } from '../../assets/table_popup_btn.svg';
import { ReactComponent as CloseImg } from '../../assets/close.svg';
import { useCallback, useState } from 'react';
import { SubTitle } from '../../components/SubTitle/SubTitle';
import { Button } from '../../components/Button/Button';
import { Overlay } from '../../components/Overlay/Overlay';
import { CurlyArrow } from '../../components/CurlyArrow/CurlyArrow';

import bgImageMedium from '../../assets/gameSliderItem.png';

import A from "../../assets/A.svg";

interface GameItem {
  id: string;
  title: string;
}

const gamesList: GameItem[] = [
  {
    id: '1',
    title: 'Юнга Мур и большая стройка котов-пиратов',
  },
  {
    id: '2',
    title: 'Экология',
  },
  {
    id: 'battleofminds',
    title: 'Борьба Умов',
  },
  {
    id: '4',
    title: 'Время Истории',
  },
  {
    id: 'attentiontrainer',
    title: 'Тренажер внимания',
  },
];

const API_URL =
  'https://us-central1-dzgames-12ad8.cloudfunctions.net/DownloadTop10Leaderboard';


export const CAROUSEL_DATA = [
  { img: bgImageMedium, id: '1'},
  { img: bgImageMedium, id: '2'},
  { img: bgImageMedium, id: 'battleofminds'},
  { img: bgImageMedium, id: '4' },
  { img: bgImageMedium, id: 'attentiontrainer' },
];

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
    winCount?: number;
  };
}

export const Leaders = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [selectedGameId, setSelectedGameId] = useState('');

  const [tableData, setTableData] = useState<TableItem[] | null>(null);

  const [showPersonalData, setShowPersonalData] = useState(true);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTableItem, setSelectedTableItem] = useState<TableItem | null>(null);

  const toggleDropDown = () => {
    setShowDropdown((s) => !s);
  };

  const getTableData = useCallback((id: string) => {
    fetch(`${API_URL}?game=${id}`)
    .then((data) => data.json())
    .then((json: any) => {
      if (!json) {
        setTableData(null);

        return
      }

      const finalData = Object.entries(json).map(([id, item]) => {
        return {
          id,
          ...item as any,
        };
      });

      setTableData(finalData);
    })
  }, [])

  const handleGameSelect = (game: GameItem) => {
    if (game.id === selectedGame?.id) return

    setSelectedGame(game);
    setShowDropdown(false);

    getTableData(game.id)
  };

  const togglePersonalData = () => {
    setShowPersonalData((s) => !s);
  };

  const handleShowPopup = (tableItem: TableItem) => {
    setShowPopup(true);
    setSelectedTableItem(tableItem);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  const onHide = () => {
    if (showDropdown) {
      setShowDropdown(false)
    }

    if (showPopup) {
      handleHidePopup()
    }
  }

  const onItemClick = (id: string) => {
    if (selectedGameId === id) return

    setSelectedGameId(id)
    getTableData(id)
  }

  return (
    <LeaderContainer>
      <div style={{ position: 'relative' }}>
        <MainTitle text='Выбери игру' />
        <CurlyArrow style={{ top: 92, left: -175 }} />
        <div style={{ position: 'relative' }}>
          <SelectGame onClick={toggleDropDown}>
            <span>{selectedGame?.title ?? 'Или найди по названию'}</span>
            <SelectImg
              style={{ transform: showDropdown ? 'rotate(180deg)' : '' }}
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
      <MainCarousel onItemClick={onItemClick} data={CAROUSEL_DATA} />
      {tableData ? (
        <>
          <SubTitle withMarginTop={false} text='Таблица лидеров' />
          <TableWrapper
            imageSrc={
              new URL('../../assets/table-bg.png', import.meta.url).href
            }
          >
            <ImgA className="asideButton" src={A} />
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
                {tableData.map((item, index) => {
                    const {
                      id,
                      name,
                      profilePhoto,
                      progressData: { points },
                      statistics: { gamesPlayed },
                    } = item

                    return (
                      <tr key={id}>
                        <td>{index + 1}</td>
                        <td>
                          <div>
                            <ProfilePhoto src={profilePhoto} alt={name} />
                            <span>{name}</span>
                            <button onClick={() => handleShowPopup(item)}>
                              <PopupImg />
                            </button>
                          </div>
                        </td>
                        <td>нет</td>
                        <td>{points}</td>
                        <td>{gamesPlayed}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </Table>
            {showPersonalData && (
              <Table withBorder>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>
                      <div>
                        <ProfilePhoto
                          src={tableData[0]?.profilePhoto}
                          alt='Я'
                        />
                        <span>Я</span>
                        <button
                          onClick={() => {
                            handleShowPopup({
                              id: 'me',
                              name: 'Я',
                              position: '1',
                              profilePhoto: '',
                              progressData: { points: 100 },
                              statistics: { gamesPlayed: 1 },
                            })
                          }}
                        >
                          <PopupImg />
                        </button>
                      </div>
                    </td>
                    <td>1</td>
                    <td>100</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </Table>
            )}
            {(showPopup && selectedTableItem) && (
              <Popup>
                <button onClick={handleHidePopup}>
                  <CloseImg />
                </button>

                <SubTitle text={selectedTableItem.name} />
                <div>
                  <span>Место в рейтинге:</span>
                  <span>{selectedTableItem.position}</span>
                </div>
                <div>
                  <span>Класс:</span>
                  <span>нет</span>
                </div>
                <div>
                  <span>Очки:</span>
                  <span>{selectedTableItem.progressData.points}</span>
                </div>
                <div>
                  <span>Игры:</span>
                  <span>{selectedTableItem.statistics.gamesPlayed}</span>
                </div>
              </Popup>
            )}
          </TableWrapper>
          <div style={{ margin: '0 auto' }}>
            <Button width='332px' onClick={togglePersonalData}>
              {showPersonalData ? 'Скрыть' : 'Показать'} мои данные в таблице
            </Button>
          </div>
        </>
      ) : <SubTitle text='Нет данных' />}
      {
        (showDropdown || showPopup) && (
          <Overlay withBackground={false} onClick={onHide} />
        )
      }
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Options = styled.div`
  position: absolute;
  z-index: 100;
  background-color: white;

  width: 392px;
  border-radius: 8px;
  border: 1px solid #bda5ff;
  margin-top: 7px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
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
  border-radius: 20px;

  padding: 30px 42px;

  position: relative;
`;

const Table = styled.table<{ withBorder?: boolean }>`
  width: 100%;

  ${({ withBorder }) =>
    withBorder &&
    `
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

  & tr td:nth-child(2) {
    & button {
      display: none;
    }
  }

  & th:first-of-type,
  & tr td:first-of-type {
    width: 5%;
  }

  & th:nth-child(2),
  & tr td:nth-child(2) {
    width: 50%;
  }

  & th:nth-child(3),
  & tr td:nth-child(3) {
    width: 15%;
  }

  & th:nth-child(4),
  & tr td:nth-child(4) {
    width: 15%;
  }

  & th:last-of-type,
  & tr td:last-of-type {
    width: 15%;
  }

  @media screen and (max-width: 768px) {
    & th:nth-child(3),
    & tr td:nth-child(3),
    & th:nth-child(4),
    & tr td:nth-child(4),
    & th:last-of-type,
    & tr td:last-of-type {
      display: none;
    }

    & th:first-of-type,
    & tr td:first-of-type {
      width: 10%;
    }

    & th:nth-child(2),
    & tr td:nth-child(2) {
      width: 90%;
    }

    & tr td:nth-child(2) {
      & button {
        display: block;
      }
    }

    & div {
      justify-content: space-between;
    }
  }
`;

const ProfilePhoto = styled.img`
  width: 32px;
  height: 32px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Popup = styled.div`
  width: 288px;
  padding: 24px;

  border-radius: 20px;
  background: var(--Linear, linear-gradient(180deg, #FF6F00 0%, #E9953E 100%));

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;

  color: #fff;
  

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%
  }

  & div+div {
    margin-top: 12px
  }

  & h2 {
    text-align: center;
    font-size: 18px;
    font-weight: 600;

    margin: 0;
    margin-bottom: 24px;

    color: #fff;
  }

  & button {
    position: absolute;
    top: 15px;
    right: 10px;

    cursor: pointer;

    & svg {
      width: 14px;
      height: 14px;
    }

    & path {
      fill: #fff
    }
  }
`;

const ImgA = styled.img({
  position: 'absolute',
  right: '-46px',
  top: '-51px',
  transform: 'rotate(45deg)',

  '@media(max-width: 1340px)': {
    right: '-10px',
    top: '-23px',
  },
});