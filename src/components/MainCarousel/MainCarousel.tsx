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

  return (
    <CustomSlider {...settings} swipe>
      {data.map((item, i) => {
        return (
          <SliderItem
            onClick={() => item.navigate && navigate(item.navigate)}
            key={i}
          >
            <Img src={item.img} />
          </SliderItem>
        );
      })}
    </CustomSlider>
  );
};

const SliderItem = styled.div`
  cursor: pointer;
  border-radius: 20px;
  padding: 5px;
  width: 100%;

  outline: none;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;
