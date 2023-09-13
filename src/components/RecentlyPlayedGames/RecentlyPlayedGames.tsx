import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CustomSlider } from '../CustomSlider/CustomSlider';
import { GameSliderData } from '../../shared/slider';

const SLIDER_SETTINGS = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

interface IProps {
  data: GameSliderData[]
}

export const RecentlyPlayedGames = ({ data }: IProps) => {
  return (
    <div style={{ maxWidth: 650, width: '100%', marginBottom: 60 }}>
      <CustomSlider
        {...SLIDER_SETTINGS}
        swipe
        className='recentlySeenSlider'
        arrows={false}
      >
        {data.map((item, i) => {
          const linkToGame = item.description ? item.descriptionLink : item.playLink

          return (
            <SliderLinkItem
              key={i}
              to={linkToGame ?? ""}
              target="_blank"
              onClick={(e) => {
                if (!linkToGame) {
                  e.preventDefault();
                }
              }}
            >
              <Img alt='' src={item.img} />
                {item.title && (
                  <CardText>
                    {item.title && <CardTitle>{item.title}</CardTitle>}
                  </CardText>
                )}
            </SliderLinkItem>
          );
        })}
      </CustomSlider>
    </div>
  );
};

const SliderLinkItem = styled(Link)`
  display: flex;
  flex-direction: column;
  max-width: 110px;
  outline: none;
  padding-right: 24px;
  overflow: hidden;
  box-sizing: content-box;
`;

const Img = styled.img`
  border-radius: 14px;
  width: 110px;
  height: 110px;
  object-fit: cover;
`;

const CardText = styled.div`
  width: 100%;
  margin-top: 8px;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 108%;
  letter-spacing: 0.18px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
