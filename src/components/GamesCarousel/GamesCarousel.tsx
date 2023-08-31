import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomSlider } from '../CustomSlider/CustomSlider';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

interface SliderData {
  id: string;
  img: string;
  title?: string;
  description?: string;
  navigate?: string;
}

interface IProps {
  data: SliderData[];
}

export const GamesCarousel = ({ data }: IProps) => {
  const navigate = useNavigate();

  return (
    <CustomSlider {...settings} swipe className='gameSlider'>
      {data.map((item, i) => {
        return (
          <Content
            key={i}
            onClick={() => {
              item.navigate && navigate(item.navigate);
              const savedData = JSON.parse(
                localStorage.getItem('recentlySeenGames') ?? '[]'
              ) as SliderData[];

              if (!savedData.some(({ id }) => id === item.id)) {
                savedData.push(item);
                localStorage.setItem(
                  'recentlySeenGames',
                  JSON.stringify(savedData)
                );
              }
            }}
          >
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
        );
      })}
    </CustomSlider>
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
