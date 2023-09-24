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
  // DEFAULT_USER_ID,
  GameItem,
  LeadersItem,
  LeadersPopupItem,
  fetchLeadersDataById,
  hideUserInLeadersTable,
} from "../../shared/leaders";
import { LeadersTable } from "../../components/LeadersTable/LeadersTable";

import A from "../../assets/A.svg";
import { LeadersTablePopup } from "../../components/LeadersTable/LeadersTablePopup";
import { DropDown } from "../../components/DropDown/DropDown";
import { LEADERS_CAROUSEL_SLIDES } from "../../shared/slider";
import { CurrentUserTable } from "../../components/LeadersTable/CurrentUserTable";
import { FinalModal } from "../../components/FinalModal/FinalModal";
import { getItemFromCookies, setItemToCookies } from "../../shared/cookies";

// const userId = getItemFromCookies('userId');// ?? DEFAULT_USER_ID;
// const userId = "7c35493ffd7316a4322fe6061a01cc4c8ebbb8b0"; //for tests
const userId = getItemFromCookies('userId') ?? undefined;

const TABLE_BACKGROUND_IMG = new URL(
  "../../assets/table-bg.png",
  import.meta.url
).href;

export const Leaders = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [selectedGameId, setSelectedGameId] = useState("");

  const [leadersList, setLeadersList] = useState<LeadersItem[] | null>(null);
  const [currentUserLeadersData, setCurrentUserLeadersData] =
    useState<LeadersItem | null>(null);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [showFinalModal, setShowFinalModal] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedLeadersItem, setSelectedLeadersItem] =
    useState<LeadersPopupItem | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isHidingLoading, setIsHidingLoading] = useState(false);

  const toggleDropDown = () => {
    setShowDropdown((s) => !s);
  };

  const getLeadersData = useCallback(async (gameId: string) => {
    setIsLoading(true);

    const data = await fetchLeadersDataById(gameId, userId);

    if (!data.users) {
      setLeadersList(null);
      setIsLoading(false);

      return;
    }

    const mappedLeadersDataToIds = Object.entries(data.users).map(
      ([id, item]) => {
        return {
          id,
          ...(item as any),
        };
      }
    );

    setLeadersList(
      mappedLeadersDataToIds.sort((a, b) => {
        const pointsA = a.progressData.totalPoints || 0;
        const pointsB = b.progressData.totalPoints || 0;

        return pointsB - pointsA;
      })
    );

    setCurrentUserLeadersData(data.requestedUserData);
    setIsLoading(false);
  }, []);

  const handleGameSelect = (game: GameItem) => {
    if (game.id === selectedGame?.id) return;

    setSelectedGame(game);
    setShowDropdown(false);

    getLeadersData(game.id);
  };

  const onConfirmationModalShow = () => {
    setShowConfirmationModal(true);
  };

  const onConfirmationModalClose = () => {
    setShowConfirmationModal(false);
  };

  const onFinalModalClose = () => {
    setShowFinalModal(false);
  };

  const onFinalModalShow = () => {
    setShowFinalModal(true);
  };

  const onConfirmUserHiding = useCallback(async () => {
    if (!userId) return;

    setIsHidingLoading(true);

    const res = await hideUserInLeadersTable(userId);
    if (res?.ok) {
      // setItemToCookies('userId', userId)
      setLeadersList((l) => {
        if (!l) return null;

        return l.map((leader) => {
          if (leader.id === userId) {
            return {
              ...leader,
              displayInLeaderboards: false,
            };
          }

          return leader;
        });
      });
    }

    setIsHidingLoading(false);
    onConfirmationModalClose();
    onFinalModalShow();
  }, []);

  const handleShowPopup = (leadersItem: LeadersPopupItem) => {
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
        data={LEADERS_CAROUSEL_SLIDES}
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
            />

            {currentUserLeadersData && (
              <CurrentUserTable
                handleShowPopup={handleShowPopup}
                currentUserLeadersData={currentUserLeadersData}
              />
            )}

            {showPopup && selectedLeadersItem && (
              <LeadersTablePopup
                handleHidePopup={handleHidePopup}
                selectedLeadersItem={selectedLeadersItem}
              />
            )}
          </TableWrapper>

          {currentUserLeadersData && (
            <Button
              style={{ margin: "0 auto" }}
              width="332px"
              onClick={onConfirmationModalShow}
            >
              Скрыть мои данные в таблице
            </Button>
          )}
        </>
      ) : (
        <SubTitle text="Нет данных" />
      )}

      {(showDropdown || showPopup) && (
        <Overlay withBackground={false} onClick={onHide} />
      )}

      {showConfirmationModal && (
        <ConfirmationModal
          isLoading={isHidingLoading}
          onCancel={onConfirmationModalClose}
          onConfirm={onConfirmUserHiding}
          title="Действительно хотите скрыть данные?"
        />
      )}

      {showFinalModal && (
        <FinalModal
          title="Tеперь ваше имя скрыто в таблице лидеров"
          onClose={onFinalModalClose}
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
