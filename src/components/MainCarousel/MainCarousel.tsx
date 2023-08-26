import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
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
    >
      <Slider>
        {data.map((item, i) => {
          return (
            <Slide key={i} index={i} style={{ paddingRight: 24 }}>
              <Content onClick={() => item.navigate && navigate(item.navigate)}>
                <Img alt='' src={item.img} />
              </Content>
            </Slide>
          );
        })}
      </Slider>
    </CarouselProvider>
  );
};

const Content = styled.div({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  borderRadius: '20px',
});

const Img = styled.img``;
