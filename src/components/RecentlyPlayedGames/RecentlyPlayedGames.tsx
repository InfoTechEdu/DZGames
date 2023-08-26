import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as TimeMachine } from '../../assets/time-machine.svg';

interface IProps {
  data: {
    img: string;
    title?: string;
    description?: string;
    navigate?: string;
  }[];
}

export const RecentlyPlayedGames = ({ data }: IProps) => {
  const navigate = useNavigate();

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

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={data.length}
      visibleSlides={data.length}
      isIntrinsicHeight
    >
      <Slider style={{paddingBottom: '24px'}}>
        {data.map((item, i) => {
          return (
            <Slide key={i} index={i} style={{ width: 110, paddingRight: 20 }}>
              <Content onClick={() => item.navigate && navigate(item.navigate)}>
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
