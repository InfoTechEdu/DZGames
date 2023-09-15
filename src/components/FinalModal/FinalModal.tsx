import styled from "styled-components";
import { Overlay } from "../Overlay/Overlay";
import { SubTitle } from "../SubTitle/SubTitle";

export const FinalModal = ({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <Modal>
        <SubTitle withMarginTop={false} text={title} />
        <Button onClick={onClose}>Закрыть</Button>
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

const Button = styled.button<{ isLoading?: boolean }>`
  background-color: ${({ isLoading }) => (isLoading ? "#EFEFEF" : "#FFF3E8")};
  color: ${({ isLoading }) => (isLoading ? "#BBBBBB" : "#FFA000")};
  border: none;
  height: 50px;
  max-width: 288px;
  width: 100%;
  border-radius: 24px;
  padding: 16px 30px;
  font-size: 18px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background-color: #ffa000;
    color: white;
  }

  &:active {
    background-color: #ff7001;
    color: white;
  }
`;
