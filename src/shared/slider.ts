import GameImg from '../assets/game.png';
import SmallGameImg from '../assets/slide-image-small.jpg';
import EcologyGameImg from '../assets/ecology-game.png';

import bgImageMedium from '../assets/gameSliderItem.png';
import bgImageMediumEcology from '../assets/ecology_carousel_item.png'
import bgImageMediumTanksquiz from '../assets/tanksquiz_carousel_item.png'
import bgImageMediumAttentiontrainer from '../assets/attentiontrainer_carousel_item.png'

export const GRAMMAR_SLIDES = [
  {
    id: 'grammar1',
    img: GameImg,
    title: 'Ф_граммотность_1',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/attentiontrainer',
  },
  {
    id: 'grammar2',
    img: EcologyGameImg,
    title: 'Ф_граммотность_2',
    description:
      'Соблюдение баланса между экологией и производством всегда было непростой задачей',
    navigate: '/ecology-game',
  },
  {
    id: 'grammar3',
    img: GameImg,
    title: 'Ф_граммотность_3',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
      navigate: '/about-game',
  },
  {
    id: 'grammar4',
    img: GameImg,
    title: 'Ф_граммотность_4',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/ecology-game',
  },
  {
    id: 'grammar5',
    img: GameImg,
    title: 'Ф_граммотность_5',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/about-game',
  },
];

export const SIMULATOR_SLIDES = [
  {
    id: 'attentiontrainer',
    img: GameImg,
    title: 'Тренажер внимания',
    description:
      'Главное сосредоточиться',
    navigate: '/ecology-game',
  },
  {
    id: 'simulator2',
    img: EcologyGameImg,
    title: 'Тренажер_2',
    description:
      'Соблюдение баланса между экологией и производством всегда было непростой задачей',
    navigate: '/attention_trainer',
  },
  {
    id: 'simulator3',
    img: GameImg,
    title: 'Тренажер_3',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/ecology-game',
  },
  {
    id: 'simulator4',
    img: GameImg,
    title: 'Тренажер_4',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/ecology-game',
  },
  {
    id: 'simulator5',
    img: GameImg,
    title: 'Тренажер_5',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/ecology-game',
  },
];

export const QUIZ_SLIDES = [
  {
    id: 'quiz1',
    img: GameImg,
    title: 'Викторина_1',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/about-game',
  },
  {
    id: 'quiz2',
    img: EcologyGameImg,
    title: 'Викторина_2',
    description:
      'Соблюдение баланса между экологией и производством всегда было непростой задачей',
    navigate: '/ecology-game',
  },
  {
    id: 'quiz3',
    img: GameImg,
    title: 'Викторина_3',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/ecology-game',
  },
  {
    id: 'quiz4',
    img: GameImg,
    title: 'Викторина_4',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/ecology-game',
  },
  {
    id: 'quiz5',
    img: GameImg,
    title: 'Викторина_5',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/ecology-game',
  },
];

export const RECOMMENDED_GAMES_SLIDES = [
  SIMULATOR_SLIDES[1],
  SIMULATOR_SLIDES[2],
  GRAMMAR_SLIDES[0],
  GRAMMAR_SLIDES[1],
  QUIZ_SLIDES[3],
  QUIZ_SLIDES[4],
];

export const SMALL_SLIDER_DATA = [
  {
    img: SmallGameImg,
    title: 'Юнга Мур и большая стройка котов-пиратов',
    navigate: '/about-game',
  },
  {
    img: EcologyGameImg,
    title: 'Экология',
    navigate: '/ecology-game',
  },
  {
    img: SmallGameImg,
    title: 'Юнга Мур и большая стройка котов-пиратов',
  },
  {
    img: SmallGameImg,
    title: 'Юнга Мур и большая стройка котов-пиратов',
  },
  {
    img: SmallGameImg,
    title: 'Юнга Мур и большая стройка котов-пиратов',
  },
];

export const CAROUSEL_DATA = [
  { img: bgImageMedium, navigate: '/about-game' },
  { img: bgImageMediumAttentiontrainer, navigate: '/attentiontrainer' },
  { img: bgImageMediumTanksquiz, navigate: '/tanksquiz' },
  { img: bgImageMediumEcology, navigate: '/ecology-game' }
];