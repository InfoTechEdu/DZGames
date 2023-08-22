import styled from "styled-components";
import checkMark from "../../assets/checkmark.svg";
import closeIcon from "../../assets/close.svg";
import { Button } from "../Button/Button";

export const MessageModal = ({
  text,
  onClose,
}: {
  text: string;
  onClose: () => void;
}) => {
  return (
    <>
      <Overlay onClick={onClose} />
      <Modal>
        <img src={closeIcon} alt="close" className="close" onClick={onClose} />
        <img src={checkMark} alt="Checkmark" />
        <Text>{text}</Text>
        <Button onClick={onClose} text="Хорошо" width="100%" />
      </Modal>
    </>
  );
};

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  position: fixed;

  width: 100%;
  height: 100%;
  z-index: 900;
`;

const Modal = styled.div`
  max-width: 700px;
  width: 90%;

  background-color: white;
  border-radius: 20px;

  padding: 50px;

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
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;

  text-align: center;
`;
