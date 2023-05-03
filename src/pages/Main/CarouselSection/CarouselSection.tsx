import styled from "styled-components";
import bgImage from "../../../assets/slider-bg.png";
import bgImageMedium from "../../../assets/slider-bg-medium.png";
import bgImageEcology from "../../../assets/slider-bg-ecology.png";
import bgImageMediumEcology from "../../../assets/slider-bg-medium-ecology.png";
import sliderOpacity from "../../../assets/slider-opacity.png";
import { Carousel } from "react-responsive-carousel";
import { Button } from "../../../components/Button/Button";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const INTERVAL = 6000;

export const CarouselSection = () => {
  const navigate = useNavigate();

  const [slideIndex, setSlideIndex] = useState(0);

  const navigateToMurGame = useCallback(() => {
    console.log("Navigating");
    navigate("/about-game");
  }, [navigate]);

  const navigateToEcologyGame = useCallback(() => {
    console.log("Navigating");
    navigate("/ecology-game");
  }, [navigate]);

  const buttons = useMemo(
    () => [
      <Button
        handleClick={navigateToMurGame}
        width="100%"
        text="Скачать для Windows"
      />,
      <Button
        handleClick={navigateToEcologyGame}
        width="100%"
        text="Играть в браузере"
      />,
    ],
    [navigateToMurGame, navigateToEcologyGame]
  );

  useEffect(() => {
    const dots = document.querySelector(".carousel .control-dots");
    const backBlock = document.querySelector(".backBlock .backRight");

    if (dots && backBlock) {
      backBlock.append(dots);
    }
  }, []);

  return (
    <Container>
      <BackgroundBlock className="backBlock">
        <div className="backLeft" />
        <div className="backRight">
          {buttons[slideIndex]}
        </div>
      </BackgroundBlock>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={INTERVAL}
        infiniteLoop
        emulateTouch
        autoPlay
        onChange={(index) => setSlideIndex(index)}
        renderIndicator={(
          clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
          isSelected: boolean,
          index: number
        ) => {
          return (
            <CustomIndicator
              isSelected={isSelected}
              onClick={(e) => {
                setSlideIndex(index);
                clickHandler(e);
              }}
            >
              <div />
            </CustomIndicator>
          );
        }}
      >
        <SliderItem className="mySliderItem">
          <Left />
          <Inner>
            <Wrapper>
              <h2>Юнга Мур и большая стройка котов-пиратов</h2>
              <p>
                Используй свои знания и навыки и помоги котам построить городок
                для туристов.
              </p>
            </Wrapper>
          </Inner>
        </SliderItem>
        <SliderItem className="mySliderItem">
          <Left />
          <Inner>
            <Wrapper>
              <h2>Экология</h2>
              <p>
                Соблюдение баланса между экологией и производством всегда было
                непростой задачей{" "}
              </p>
            </Wrapper>
          </Inner>
        </SliderItem>
        {/* <SliderItem className='mySliderItem'>
          <Left />
          <Inner>
            <Wrapper>
              <h2>Юнга Мур и большая стройка котов-пиратов</h2>
              <p>
                Есть много вариантов Lorem Ipsum, но большинство из них имеет не
                всегда приемлемые модификации, например, юмористические вставки
                или слова, которые даже отдалённо не напоминают латынь.
              </p>
            </Wrapper>
            <Button handleClick={navigateToAboutGame} width='100%' text='Скачать для Windows' />
          </Inner>
        </SliderItem> */}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;

  position: relative;

  @media only screen and (max-width: 690px) {
    height: auto;
  }
`;

const BackgroundBlock = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @media only screen and (max-width: 690px) {
    flex-direction: column;
  }

  & .backLeft {
    display: flex;
    flex: 1;
    height: 100%;
  }

  & .backRight {
    height: 100%;
    width: 520px;
    position: relative;
    padding: 96px 48px 48px 48px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    z-index: 100;
  }

  @media only screen and (max-width: 1100px) {
    & .backRight,
    & .backLeft {
      width: 50%;
    }
  }

  @media only screen and (max-width: 820px) {
    & .backRight {
      padding: 86px 24px 38px 24px;
    }
  }

  @media only screen and (max-width: 690px) {
    & .backRight,
    & .backLeft {
      width: 100%;
    }

    & .backLeft {
      flex: auto;
      height: 266px;
    }

    & .backRight {
      height: 378px;
    }
  }
`;

const SliderItem = styled.div`
  display: flex;
  min-height: 426px;
  height: 100%;

  @media only screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  overflow: hidden;

  border-radius: 20px 0 0 20px;

  background-image: url("${bgImage}");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;

  @media only screen and (max-width: 1100px) {
    width: 50%;
  }

  @media only screen and (max-width: 820px) {
    background-image: url("${bgImageMedium}");
  }

  @media only screen and (max-width: 690px) {
    width: 100%;
    height: 266px;
    flex: auto;

    border-radius: 20px 20px 0 0;

    background-image: url("${bgImage}");
  }
`;

const LeftEcology = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  overflow: hidden;

  border-radius: 20px 0 0 20px;

  background-image: url("${bgImageEcology}");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;

  @media only screen and (max-width: 1100px) {
    width: 50%;
  }

  @media only screen and (max-width: 820px) {
    background-image: url("${bgImageMediumEcology}");
  }

  @media only screen and (max-width: 690px) {
    width: 100%;
    height: 266px;
    flex: auto;

    border-radius: 20px 20px 0 0;

    background-image: url("${bgImage}");
  }
`;

const CustomIndicator = styled.button<{
  isSelected: boolean;
}>`
  width: 25%;
  height: 4px;
  border-radius: 5px;
  margin-left: 5px;

  border: 0;
  padding: 0;
  overflow: hidden;

  z-index: 200;

  & div {
    background-color: #ff7001;
    width: 0;
    height: 4px;
    border-radius: 5px;
    animation: ${({ isSelected }) =>
      isSelected && `changeWidth ${INTERVAL / 1000}s linear`};

    @keyframes changeWidth {
      0% {
        width: 0;
      }

      100% {
        width: 100%;
      }
    }
  }
`;

const Inner = styled.div`
  height: 100%;
  width: 520px;
  padding: 96px 48px 48px 48px;
  border-radius: 0 20px 20px 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  overflow: hidden;

  z-index: 200;

  position: relative;

  background-image: url("${sliderOpacity}");
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 1100px) {
    width: 50%;
  }

  @media only screen and (max-width: 820px) {
    padding: 86px 24px 38px 24px;
  }

  @media only screen and (max-width: 690px) {
    width: 100%;
    height: 378px;

    padding: 52px 24px 24px 24px;

    border-radius: 0 0 20px 20px;
  }
`;

const Wrapper = styled.div`
  & h2 {
    font-weight: 600;
    font-size: 30px;
    line-height: 100%;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;

    @media only screen and (max-width: 820px) {
      font-size: 24px;
    }
  }

  & p {
    font-weight: 400;
    font-size: 18px;
    line-height: 132%;
    text-align: left;

    margin-bottom: 30px;
    margin-top: 12px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    @media only screen and (max-width: 820px) {
      margin-bottom: 48px;
    }

    @media only screen and (max-width: 690px) {
      margin-bottom: 24px;
      -webkit-line-clamp: 7;
    }
  }
`;
