import styled from 'styled-components';

export const SubTitle = ({
  text,
  fontSize,
  withMarginTop = true,
}: {
  text: string;
  fontSize?: number;
  withMarginTop?: boolean;
}) => {
  return (
    <StyledTitle withMarginTop={withMarginTop} fontSize={fontSize}>
      {text}
    </StyledTitle>
  );
};

const StyledTitle = styled.h2<{ fontSize?: number; withMarginTop: boolean }>`
  font-size: ${({ fontSize }) => (fontSize && `${fontSize}px`) || '40px'};
  font-weight: 600;
  color: #0b0d22;
  margin-top: ${({ withMarginTop }) => withMarginTop ? '30px' : 0};
  margin-bottom: 24px;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 0px;
    margin-bottom: 12px;
  }
`;
