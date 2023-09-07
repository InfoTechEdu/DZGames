import styled from "styled-components";

import { ReactComponent as SelectImg } from "../../assets/select.svg";
import { GameItem, gamesList } from "../../shared/leaders";

interface Props {
  selectedGame: GameItem | null;
  toggleDropDown: () => void;
  showDropdown: boolean;
  handleGameSelect: (value: GameItem) => void;
}

export const DropDown = ({
  showDropdown,
  selectedGame,
  toggleDropDown,
  handleGameSelect,
}: Props) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

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
