import { PropsWithChildren, useRef } from 'react';

import ReactSlickSlider, { Settings as SliderProps } from 'react-slick';

import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';
import { ReactComponent as ArrowLeft } from '../../assets/arrowLeft.svg';

interface ArrowProps {
  currentSlide: number;
  slideCount: number;
  onClick: () => void;
}

const SliderArrowButton = ({
  currentSlide,
  slideCount,
  onClick,
  children,
  ...props
}: PropsWithChildren<Partial<ArrowProps>>) =>
  onClick ? (
    <div onClick={onClick} {...props}>
      {children}
    </div>
  ): null;

  const nextArrow = (
    <SliderArrowButton>
      <ArrowRight />
    </SliderArrowButton>
  )
  const prevArrow = (
    <SliderArrowButton>
      <ArrowLeft />
    </SliderArrowButton>
  )

export const CustomSlider = ({ ...props }: SliderProps) => {
  const clickableRef = useRef(true);
  const sliderRef = useRef<ReactSlickSlider>(null);

  const handleClick = (event: MouseEvent) => {
    if (!clickableRef.current) {
      event.stopPropagation();
      event.preventDefault();
    }
    clickableRef.current = true;
  };

  const swipeEvent = () => {
    if (sliderRef?.current?.innerSlider?.list) {
      sliderRef.current.innerSlider.list.onclick = handleClick;
      clickableRef.current = false;
    }
  };

  return <ReactSlickSlider ref={sliderRef} {...{ swipeEvent, ...props, nextArrow, prevArrow }} />;
};

export type { SliderProps };
