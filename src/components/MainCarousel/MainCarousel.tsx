import { Link } from "react-router-dom";
import styled from "styled-components";

import { CustomSlider } from "../CustomSlider/CustomSlider";

const SLIDER_SETTINGS = {
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
  onItemClick?: (id: string) => void;
  data: {
    img: string;
    title?: string;
    description?: string;
    navigate?: string;
    id?: string;
  }[];
}

export const MainCarousel = ({ onItemClick, data }: IProps) => {
  return (
    <CustomSlider {...SLIDER_SETTINGS} swipe>
      {data.map((item, i) => {

        if (onItemClick) {
          return (
            <SliderDivItem
              onClick={() => {
                if (onItemClick && item?.id) {
                  onItemClick(item.id)
                }
              }}
            >
              <Img src={item.img} />
            </SliderDivItem>
          );
        }

        return (
          <SliderLinkItem
            target="_blank"
            to={item?.navigate ?? ""}
            onClick={(e) => !item?.navigate && e.preventDefault()}
            key={i}
          >
            <Img src={item.img} />
          </SliderLinkItem>
        );
      })}
    </CustomSlider>
  );
};

const SliderDivItem = styled.div`
  cursor: pointer;
  border-radius: 20px;
  padding: 5px;
  width: 100%;

  outline: none;
  overflow: hidden;
`;

const SliderLinkItem = styled(Link)`
  border-radius: 20px;
  padding: 5px;
  width: 100%;

  outline: none;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
`;
