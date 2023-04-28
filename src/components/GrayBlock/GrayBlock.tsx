import styled from 'styled-components';
import { SubTitle } from '../SubTitle/SubTitle';
import { Description } from '../Description/Description';
import { MainTitle } from '../MainTitle/MainTitle';

import S from '../../assets/S.svg';
import RightArrow from '../../assets/right_arrow.svg';

export const GrayBlock = ({
  title,
  description,
  isMainTitle,
  isImg,
}: {
  title: string;
  description: JSX.Element;
  isMainTitle?: boolean;
  isImg?: boolean;
}) => {
  return (
    <div>
      {isMainTitle ? <MainTitle text={title} /> : <SubTitle text={title} />}
      <GrayBlockStyle>
        {description}
        {isImg && (
          <>
            <ImgS className='asideButton' src={S} />
            <Img src={RightArrow} />
          </>
        )}
      </GrayBlockStyle>
    </div>
  );
};

const GrayBlockStyle = styled.div({
  width: '100%',
  maxWidth: '1224px',
  padding: '48px 104px',
  backgroundColor: '#F7F7F8',
  borderRadius: '20px',
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
  position: 'relative',

  '@media(max-width: 1024px)': {
    padding: '24px',
  },
});

const ImgS = styled.img({
  position: 'absolute',
  right: '-46px',
  top: '-51px',
  transform: 'rotate(322deg)',

  '@media(max-width: 1340px)': {
    right: '-10px',
    top: '-23px',
  },
});

const Img = styled.img({
  position: 'absolute',
  left: '-172px',
  top: '123px',

  '@media(max-width: 1580px)': {
    display: 'none',
  },
});
