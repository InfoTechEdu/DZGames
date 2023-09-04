import styled from 'styled-components';
import RightArrow from '../../assets/right_arrow.svg';

export const CurlyArrow = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <StyledImg {...props} src={RightArrow} />
}

const StyledImg = styled.img({
  position: 'absolute',
  left: '-174px',
  bottom: '-218px',

  '@media(max-width: 1580px)': {
    display: 'none',
  },
});
