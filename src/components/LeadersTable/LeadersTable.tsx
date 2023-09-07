import styled from "styled-components";

import { ReactComponent as PopupImg } from "../../assets/table_popup_btn.svg";
import { LeadersItem } from "../../shared/leaders";

const userId = localStorage.getItem("userId");

interface Props {
  leadersList: LeadersItem[];
  handleShowPopup: (value: LeadersItem) => void;
  isUserHidden: boolean;
}

export const LeadersTable = ({
  leadersList,
  handleShowPopup,
  isUserHidden,
}: Props) => {
  return (
    <>
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
          {leadersList.map((item, index) => {
            const {
              id,
              name,
              profilePhoto,
              progressData: { points },
              statistics: { gamesPlayed },
            } = item;

            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <div>
                    <ProfilePhoto src={profilePhoto} alt={name} />
                    <span>
                      {userId === id && isUserHidden ? "Скрыт" : name}
                    </span>
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
          })}
        </tbody>
      </Table>
      <Table withBorder>
        <tbody>
          <tr>
            <td>-</td>
            <td>
              <div>
                <ProfilePhoto src={leadersList[0]?.profilePhoto} alt="Я" />
                <span>Я</span>
                <button
                  onClick={() => {
                    handleShowPopup({
                      id: "me",
                      name: "Я",
                      position: "1",
                      profilePhoto: "",
                      progressData: { points: 100 },
                      statistics: { gamesPlayed: 1 },
                    });
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
