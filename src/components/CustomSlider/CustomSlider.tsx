import { useRef } from 'react';

import ReactSlickSlider, { Settings as SliderProps } from 'react-slick';

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

  return <ReactSlickSlider ref={sliderRef} {...{ swipeEvent, ...props }} />;
};

export type { SliderProps };
