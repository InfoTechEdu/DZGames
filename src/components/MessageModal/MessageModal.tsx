import styled from 'styled-components';
import checkMark from '../../assets/checkmark.svg';
import closeIcon from '../../assets/close.svg';
import { Button } from '../Button/Button';
import { Overlay } from '../Overlay/Overlay';

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
        <img src={closeIcon} alt='close' className='close' onClick={onClose} />
        <img src={checkMark} alt='Checkmark' />
        <Text>{text}</Text>
        <Button onClick={onClose} width='100%'>
          Хорошо
        </Button>
      </Modal>
    </>
  );
};

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
