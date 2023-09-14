import { LeadersPopupItem } from "../../shared/leaders";
import { SubTitle } from "../SubTitle/SubTitle";

import { ReactComponent as CloseImg } from "../../assets/close.svg";
import styled from "styled-components";

interface Props {
  selectedLeadersItem: LeadersPopupItem;
  handleHidePopup: () => void;
}

export const LeadersTablePopup = ({
  handleHidePopup,
  selectedLeadersItem,
}: Props) => {
  return (
    <Popup>
      <button onClick={handleHidePopup}>
        <CloseImg />
      </button>

      <SubTitle text={selectedLeadersItem.name} />
      <div>
        <span>Место в рейтинге:</span>
        <span>{selectedLeadersItem.position}</span>
      </div>
      <div>
        <span>Класс:</span>
        <span>{(selectedLeadersItem.grade || "Нет")}</span>
      </div>
      <div>
        <span>Очки:</span>
        <span>{selectedLeadersItem.totalPoints}</span>
      </div>
      <div>
        <span>Игры:</span>
        <span>{selectedLeadersItem?.gamesPlayed}</span>
      </div>
    </Popup>
  );
};

const Popup = styled.div`
  width: 288px;
  padding: 24px;

  border-radius: 20px;
  background: var(--Linear, linear-gradient(180deg, #ff6f00 0%, #e9953e 100%));

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

    width: 100%;
  }

  & div + div {
    margin-top: 12px;
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
      fill: #fff;
    }
  }
`;
