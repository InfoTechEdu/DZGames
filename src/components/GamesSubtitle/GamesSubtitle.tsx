import styled from "styled-components";

export const GamesSubtitle = ({
  text,
  fontSize,
}: {
  text: string;
  fontSize?: number;
  withMargin?: boolean;
}) => {
  return <StyledTitle fontSize={fontSize}>{text}</StyledTitle>;
};

const StyledTitle = styled.h2<{ fontSize?: number }>`
  font-size: ${({ fontSize }) => (fontSize && `${fontSize}px`) || "40px"};
  font-weight: 600;
  color: #0b0d22;
  margin-top: 30px;
  margin-bottom: 24px;

  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 0px;
    margin-bottom: 12px;
  }
`;
