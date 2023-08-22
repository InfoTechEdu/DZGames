import styled from "styled-components";
import bgImageMedium from "../../assets/gameSliderItem.png";
import { Carousel } from "react-responsive-carousel";

export const CarouselMain = () => {
  return (
    <Container>
      <Text>Попробуй викторины</Text>
      <ContainerCarousel>
        <Carousel
          centerMode
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          emulateTouch
          centerSlidePercentage={24}
          
        >
          <SliderItem className="mySliderItem">
            <img src={bgImageMedium} />
          </SliderItem>
          <SliderItem className="mySliderItem">
            <img src={bgImageMedium} />
          </SliderItem>
          <SliderItem className="mySliderItem">
            <img src={bgImageMedium} />
          </SliderItem>
          <SliderItem className="mySliderItem">
            <img src={bgImageMedium} />
          </SliderItem>
          <SliderItem className="mySliderItem">
            <img src={bgImageMedium} />
          </SliderItem>
          <SliderItem className="mySliderItem">
            <img src={bgImageMedium} />
          </SliderItem>
        </Carousel>
      </ContainerCarousel>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 50px 0;
  margin-left: 620px;
`;

const ContainerCarousel = styled.div`
  width: 100%;

  position: relative;

  @media only screen and (max-width: 690px) {
    height: auto;
  }
`;

const Text = styled.div({
  color: "#0B0D22",
  fontSize: "40px",
  fontWeight: "600",
  marginBottom: "24px",

  "@media(max-width: 1220px)": {
    marginLeft: "24px",
    marginRight: "24px",
  },
});

const SliderItem = styled.div`
  display: flex;
  width: 400px;

  @media only screen and (max-width: 690px) {
    flex-direction: column;
  }
`;
