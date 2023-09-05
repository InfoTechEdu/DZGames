import styled from "styled-components";
import { Overlay } from "../Overlay/Overlay";
import { SubTitle } from "../SubTitle/SubTitle";

export const ConfirmationModal = ({
  title,
  onCancel,
  onConfirm,
}: {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <>
      <Overlay onClick={onCancel} />
      <Modal>
        <SubTitle withMarginTop={false} text={title} />
        <ButtonwsWrapper>
          <Button onClick={onConfirm}>Да</Button>
          <Button onClick={onCancel}>Нет</Button>
        </ButtonwsWrapper>
      </Modal>
    </>
  );
};

const Modal = styled.div`
  max-width: 700px;
  width: 90%;

  background-color: #ffca28;
  border-radius: 20px;

  padding: 48px 60px;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & .close {
    position: absolute;
    top: 20px;
    right: 20px;

    cursor: pointer;
  }

  & h2 {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const ButtonwsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;

  @media (max-width: 685px) {
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button({
  backgroundColor: "#FFF3E8",
  border: "none",
  height: "50px",
  maxWidth: "288px",
  width: "100%",
  borderRadius: "24px",
  padding: "16px 30px",
  color: "#FFA000",
  fontSize: "18px",
  fontWeight: "600",
  transition: ".2s",

  "&:hover": {
    backgroundColor: "#FFA000",
    color: "white",
  },

  "&:active": {
    backgroundColor: "#FF7001",
    color: "white",
  },
});
