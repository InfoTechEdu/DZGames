import styled from "styled-components";
import { MainTitle } from "../../components/MainTitle/MainTitle";
import { MainCarousel } from "../../components/MainCarousel/MainCarousel";

import { useCallback, useState } from "react";
import { SubTitle } from "../../components/SubTitle/SubTitle";
import { Button } from "../../components/Button/Button";
import { Overlay } from "../../components/Overlay/Overlay";
import { CurlyArrow } from "../../components/CurlyArrow/CurlyArrow";

import { ConfirmationModal } from "../../components/ConfirmationModal/ConfirmationModal";
import {
  DEFAULT_USER_ID,
  GameItem,
  LEADERS_CAROUSEL_DATA,
  LeadersItem,
  fetchLeadersDataById,
  hideUserInLeadersTable,
} from "../../shared/leaders";
import { LeadersTable } from "../../components/LeadersTable/LeadersTable";

import A from "../../assets/A.svg";
import { LeadersTablePopup } from "../../components/LeadersTable/LeadersTablePopup";
import { DropDown } from "../../components/DropDown/DropDown";

const userId = localStorage.getItem("userId") || DEFAULT_USER_ID;

const TABLE_BACKGROUND_IMG = new URL(
  "../../assets/table-bg.png",
  import.meta.url
).href;

export const Leaders = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [selectedGameId, setSelectedGameId] = useState("");

  const [leadersList, setLeadersList] = useState<LeadersItem[] | null>(null);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedLeadersItem, setSelectedLeadersItem] =
    useState<LeadersItem | null>(null);

  const [isUserHidden, setIsUserHidden] = useState(Boolean(userId));

  const [isLoading, setIsLoading] = useState(false);

  const toggleDropDown = () => {
    setShowDropdown((s) => !s);
  };

  const getLeadersData = useCallback(async (gameId: string) => {
    setIsLoading(true);

    const data = await fetchLeadersDataById(gameId, userId);

    if (!data) {
      setLeadersList(null);
      setIsLoading(false);

      return;
    }

    const mappedDataToIds = Object.entries(data).map(([id, item]) => {
      return {
        id,
        ...(item as any),
      };
    });

    setLeadersList(mappedDataToIds);
    setIsLoading(false);
  }, []);

  const handleGameSelect = (game: GameItem) => {
    if (game.id === selectedGame?.id) return;

    setSelectedGame(game);
    setShowDropdown(false);

    getLeadersData(game.id);
  };

  const onShowModal = () => {
    setShowConfirmationModal(true);
  };

  const onModalClose = () => {
    setShowConfirmationModal(false);
  };

  const onConfirmUserHiding = useCallback(async () => {
    if (!userId) return;

    const res = await hideUserInLeadersTable(userId);
    if (res?.ok) {
      localStorage.setItem("userId", userId);
      setIsUserHidden(true);
    }

    onModalClose();
  }, []);

  const handleShowPopup = (leadersItem: LeadersItem) => {
    setShowPopup(true);
    setSelectedLeadersItem(leadersItem);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  const onHide = () => {
    if (showDropdown) {
      setShowDropdown(false);
    }

    if (showPopup) {
      handleHidePopup();
    }
  };

  const onCarouselItemClick = (id: string) => {
    if (selectedGameId === id) return;

    setSelectedGameId(id);
    getLeadersData(id);
  };

  return (
    <Wrapper>
      <LeadersHeader style={{ position: "relative" }}>
        <MainTitle text="Выбери игру" />
        <CurlyArrow style={{ top: 92, left: -175 }} />
      </LeadersHeader>

      <DropDown
        showDropdown={showDropdown}
        selectedGame={selectedGame}
        toggleDropDown={toggleDropDown}
        handleGameSelect={handleGameSelect}
      />

      <MainCarousel
        onItemClick={onCarouselItemClick}
        data={LEADERS_CAROUSEL_DATA}
      />

      {isLoading ? (
        <SubTitle text="Идет загрузка данных..." />
      ) : leadersList ? (
        <>
          <SubTitle withMarginTop={false} text="Таблица лидеров" />
          <TableWrapper imageSrc={TABLE_BACKGROUND_IMG}>
            <ImgA className="asideButton" src={A} />
            <LeadersTable
              handleShowPopup={handleShowPopup}
              leadersList={leadersList}
              isUserHidden={isUserHidden}
            />

            {showPopup && selectedLeadersItem && (
              <LeadersTablePopup
                handleHidePopup={handleHidePopup}
                selectedLeadersItem={selectedLeadersItem}
              />
            )}
          </TableWrapper>

          <Button
            style={{ margin: "0 auto" }}
            width="332px"
            onClick={onShowModal}
          >
            Скрыть мои данные в таблице
          </Button>
        </>
      ) : (
        <SubTitle text="Нет данных" />
      )}

      {(showDropdown || showPopup) && (
        <Overlay withBackground={false} onClick={onHide} />
      )}

      {showConfirmationModal && (
        <ConfirmationModal
          onCancel={onModalClose}
          onConfirm={onConfirmUserHiding}
          title="Действительно хотите скрыть данные?"
        />
      )}
    </Wrapper>
  );
};

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

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  width: "100%",
  maxWidth: "1224px",
  paddingTop: "80px",
  gap: "24px",
});

const LeadersHeader = styled.div`
  position: relative;
`;

const ImgA = styled.img({
  position: "absolute",
  right: "-46px",
  top: "-51px",
  transform: "rotate(45deg)",

  "@media(max-width: 1340px)": {
    right: "-10px",
    top: "-23px",
  },
});
