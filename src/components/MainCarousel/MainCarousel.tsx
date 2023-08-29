import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";

interface IProps {
  data: {
    img: string;
    title?: string;
    description?: string;
    navigate?: string;
  }[];
}

export const MainCarousel = ({ data }: IProps) => {
  const navigate = useNavigate();

  const timerRef = useRef<any>(0)

  const [timeWhenClicked, setTimeWhenClicked] = useState(0)

  console.log(timeWhenClicked)

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 600;
  const isTablet = width >= 600 && width <= 1024;

  const visibleSlides = isTablet ? 2 : isMobile ? 1 : 3;

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={data.length}
      visibleSlides={visibleSlides}
      isIntrinsicHeight
      touchEnabled
    >
      <Slider>
        {data.map((item, i) => {
          return (
            <Slide
              onMouseDown={() => {
                timerRef.current = setInterval(() => {
                  setTimeWhenClicked((t) => t + 0.1)
                }, 50)
              }}
              onClick={() => {
                clearInterval(timerRef.current)
                setTimeWhenClicked(0)

                if (timeWhenClicked > 0.1) return

                item.navigate && navigate(item.navigate)
              }}
              key={i}
              index={i}
              style={{ paddingRight: 24 }}
            >
              <Content>
                <Img alt="" src={item.img} />
              </Content>
            </Slide>
          );
        })}
      </Slider>
      <ArrowsWrapper>
        <ButtonBack>
          <ArrowLeft />
        </ButtonBack>
        <ButtonNext>
          <ArrowRight />
        </ButtonNext>
      </ArrowsWrapper>
    </CarouselProvider>
  );
};

const Content = styled.div({
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  borderRadius: "20px",
});

const ArrowsWrapper = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 22px);
  transform: translateY(-50%);

  & button {
    background: none;
    border: none;
  }

  & svg {
    width: 22px;
    height: 22px;
  }
`;

const Img = styled.img``;
