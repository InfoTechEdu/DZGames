import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  data: {
    img: string;
    title?: string;
    description?: string;
    navigate?: string;
  }[];
}

export const RecentlyPlayedGames = ({ data }: IProps) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 600;

  const visibleSlides = isMobile ? 4 : data.length

  return (
    <CarouselProvider
      naturalSlideWidth={110}
      naturalSlideHeight={110}
      totalSlides={data.length}
      visibleSlides={visibleSlides}
      isIntrinsicHeight
    >
      <Slider style={{paddingBottom: '24px'}}>
        {data.map((item, i) => {
          return (
            <Slide key={i} index={i} style={{ width: 110, paddingRight: 20 }}>
              <Content>
                <Img alt='' src={item.img} />
                {(item.title || item.description) && (
                  <CardText>
                    {item.title && <CardTitle>{item.title}</CardTitle>}
                  </CardText>
                )}
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
});

const Img = styled.img`
  border-radius: 14px;
`;

const CardText = styled.div`
  width: 100%;
  margin-top: 8px;
`

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
