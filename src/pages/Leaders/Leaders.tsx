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
  GameItem,
  LEADERS_CAROUSEL_DATA,
  LeadersItem,
} from "../../shared/leaders";
import { LeadersTable } from "../../components/LeadersTable/LeadersTable";

import A from "../../assets/A.svg";
import { LeadersTablePopup } from "../../components/LeadersTable/LeadersTablePopup";
import { DropDown } from "../../components/DropDown/DropDown";
import { API_URL } from "../../shared/general";

const userId = localStorage.getItem("userId");

const TABLE_BACKGROUND_IMG = new URL("../../assets/table-bg.png", import.meta.url).href

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

  const getLeadersData = useCallback((id: string) => {
    setIsLoading(true);

    fetch(`${API_URL}/DownloadTop10Leaderboard?game=${id}`)
      .then((data) => data.json())
      .then((json: any) => {
        if (!json) {
          setLeadersList(null);

          return;
        }

        const finalData = Object.entries(json).map(([id, item]) => {
          return {
            id,
            ...(item as any),
          };
        });

        setLeadersList(finalData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
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

  const onConfirmUserHiding = () => {
    fetch(
      `${API_URL}/UpdateUserLeaderboardDisplayStatus?userId=${userId}&enabled=false`
    )
      .then((res) => {
        if (res.ok) {
          localStorage.setItem(
            "userId",
            "7c35493ffd7316a4322fe6061a01cc4c8ebbb8b0"
          );
          setIsUserHidden(true);
        }
      })
      .catch(console.error)
      .finally(() => {
        onModalClose();
      });
  };

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

      <SubTitle withMarginTop={false} text="Таблица лидеров" />
      {isLoading ? <SubTitle text="Идет загрузка данных..." /> : leadersList ? (
        <>
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

          <Button style={{ margin: "0 auto" }} width="332px" onClick={onShowModal}>
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
