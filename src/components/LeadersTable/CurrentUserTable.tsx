import styled from "styled-components";

import { ReactComponent as PopupImg } from "../../assets/table_popup_btn.svg";
import {
  DEFAULT_PROFILE_PHOTO,
  LeadersItem,
  LeadersPopupItem,
} from "../../shared/leaders";

interface IProps {
  handleShowPopup: (value: LeadersPopupItem) => void;
  currentUserLeadersData: LeadersItem;
}

export const CurrentUserTable = ({
  handleShowPopup,
  currentUserLeadersData,
}: IProps) => {
  const { profilePhoto, position, progressData, statistics, grade } =
    currentUserLeadersData;

  return (
    <Table withBorder>
      <tbody>
        <tr>
          <td>{position === "null" || position === null || position === undefined ? "-" : position}</td>
          <td>
            <div>
              <ProfilePhoto
                src={profilePhoto || DEFAULT_PROFILE_PHOTO}
                alt="Я"
              />
              <span>Я</span>
              <button
                onClick={() => {
                  handleShowPopup({
                    name: "Я",
                    position,
                    grade,
                    totalPoints: progressData.totalPoints,
                    gamesPlayed: statistics?.gamesPlayed ?? 0,
                  });
                }}
              >
                <PopupImg />
              </button>
            </div>
          </td>
          <td>{grade || 'Нет'}</td>
          <td>{progressData.totalPoints}</td>
          {/* #TEMP. Edit */}
          {/* #refactor */}
          <td>{statistics?.gamesPlayed === null ? "-" : (statistics?.gamesPlayed === 0 ? "-" : statistics?.gamesPlayed)}</td>
          {/* <td>-</td> */}
        </tr>
      </tbody>
    </Table>
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
