import styled from 'styled-components';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  withBackground?: boolean;
}

export const Overlay = ({ withBackground = true, ...rest }: Props) => {
  return <StyledDiv {...rest} withBackground={withBackground} />;
};

const StyledDiv = styled.div<{ withBackground?: boolean }>`
  background-color: ${({ withBackground }) =>
    withBackground ? 'rgba(0, 0, 0, 0.4)' : 'transparent'};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  position: fixed;

  width: 100%;
  height: 100%;
  z-index: 30;
`;
