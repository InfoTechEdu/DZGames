import bgImageMedium from '../../assets/gameSliderItem.png';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export const CarouselMain = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={0}
      naturalSlideHeight={0}
      totalSlides={5}
      visibleSlides={3}
      isIntrinsicHeight
    >
      <Slider>
        {[...new Array(6)].map((_, i) => {
          return (
            <Slide key={i} index={i}>
              <img style={{ paddingRight: 10 }} src={bgImageMedium} />
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
};
