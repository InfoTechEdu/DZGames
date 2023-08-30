import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
  data: {
    id: string;
    img: string;
    title?: string;
    description?: string;
    navigate?: string;
  }[];
}

export const GamesCarousel = ({ data }: IProps) => {
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

  const isMobile = width <= 600;
  const isTablet = width >= 600 && width <= 1024;

  const visibleSlides = isTablet ? 2 : (isMobile ? 1 : 3)

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={data.length}
      visibleSlides={visibleSlides}
      isIntrinsicHeight
    >
      <Slider style={  {paddingBottom: '24px'}}>
        {data.map((item, i) => {
          return (
            <Slide key={i} index={i} style={{ paddingRight: 24 }}>
              <Content onClick={() => {
                item.navigate && navigate(item.navigate)
                const data = JSON.parse(localStorage.getItem('recentlySeenGames') ?? '[]')

                if (!data.some(({ id }) => id === item.id)) {
                  data.push(item)
                  localStorage.setItem('recentlySeenGames', JSON.stringify(data))
                }

              }}>
                <Img alt='' src={item.img} />
                {(item.title || item.description) && (
                  <CardText>
                    {item.title && <CardTitle>{item.title}</CardTitle>}
                    {item.description && (
                      <CardDescription>{item.description}</CardDescription>
                    )}
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
  height: '466px',
  overflow: 'hidden',
  borderRadius: '20px',

  ':hover': {
    boxShadow: '16px 16px 0px #FFCD4C',
    transition: '0.5s',
  },

  '@media(max-width: 1024px)': {
    boxShadow: '16px 16px 0px #FFCD4C',
    borderRadius: '20px',
  },
});

const Img = styled.img({
  width: '100%',
  height: '50%',
  objectFit: 'cover',
});

const CardText = styled.div({
  width: '100%',
  height: '50%',
  background: '#F7F7F8',
  borderRadius: '0px 0px 20px 20px',
  padding: '24px',

  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '12px',
});

const CardTitle = styled.div({
  fontSize: '30px',
  fontWeight: '600',

  '@media(max-width: 1100px)': {
    fontSize: '26px',
  },

  '@media(max-width: 820px)': {
    fontSize: '24px',
  },
});

const CardDescription = styled.div`
  font-size: 18px;
  max-width: 296px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
