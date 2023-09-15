import styled from "styled-components";

import { ReactComponent as PopupImg } from "../../assets/table_popup_btn.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrowDown.svg";

import {
  DEFAULT_PROFILE_PHOTO,
  LeadersItem,
  LeadersPopupItem,
  SortType,
} from "../../shared/leaders";

interface Props {
  leadersList: LeadersItem[];
  handleShowPopup: (value: LeadersPopupItem) => void;
  isUserHidden: boolean;
  onSort: () => void;
  sortType: SortType;
}

export const LeadersTable = ({
  leadersList,
  handleShowPopup,
  isUserHidden,
  onSort,
  sortType,
}: Props) => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Имя</th>
            <th>Класс</th>
            <th onClick={onSort}>
              Очки
              {sortType !== "" && (
                <ArrowDown
                  style={
                    sortType === "asc" ? { transform: "rotate(180deg)" } : {}
                  }
                />
              )}
            </th>
            <th>Игры</th>
          </tr>
        </thead>
        <tbody>
          {leadersList.map((item, index) => {
            const userId = localStorage.getItem("userId");

            const {
              id,
              name,
              grade,
              position,
              progressData,
              displayInLeaderboard = true,
            } = item;

            const gamesPlayed = item.statistics?.gamesPlayed ?? 0;

            const shouldHideUser =
              displayInLeaderboard === false || (userId === id && isUserHidden);

            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <ProfilePhoto src={DEFAULT_PROFILE_PHOTO} alt={name} />
                    {shouldHideUser ? (
                      <HiddenUserName>Пользователь скрыт</HiddenUserName>
                    ) : (
                      <span>{name}</span>
                    )}
                    <button
                      onClick={() =>
                        handleShowPopup({
                          name: "Я",
                          position,
                          grade,
                          totalPoints: progressData.totalPoints,
                          gamesPlayed,
                        })
                      }
                    >
                      <PopupImg />
                    </button>
                  </div>
                </td>
                <td>нет</td>
                <td>{progressData?.totalPoints}</td>
                <td>{gamesPlayed}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

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
    position: relative;

    & svg {
      position: absolute;
      top: 0;
    }

    & path {
      fill: black;
    }
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

const HiddenUserName = styled.span`
  color: gray;
`;
