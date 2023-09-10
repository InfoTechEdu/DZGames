import GameImg from '../assets/game.png';
import SmallGameImg from '../assets/slide-image-small.jpg';
import EcologyGameImg from '../assets/ecology-game.png';

import bgImageMedium from '../assets/gameSliderItem.png';
import bgImageMediumEcology from '../assets/ecology_carousel_item.png'
import bgImageMediumTanksquiz from '../assets/tanksquiz_carousel_item.png'
import bgImageMediumAttentiontrainer from '../assets/attentiontrainer_carousel_item.png'
import bgImageMediumArithmetic from '../assets/arithmetic_carousel_item.png';
import bgImageMediumGrammarspaceshooter from '../assets/grammarspaceshooter_carousel_item.png';

export const GRAMMAR_SLIDES = [
  {
    id: 'mur',
    img: bgImageMedium,
    title: 'Юнга Мур и большая стройка котов-пиратов',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
    navigate: '/about-game',
  },
  {
    id: 'ecology',
    img: EcologyGameImg,
    title: 'Экология',
    description:
      'Соблюдение баланса между экологией и производством всегда было непростой задачей',
    navigate: '/ecology-game',
  }
];

export const SIMULATOR_SLIDES = [
  {
    id: 'attentiontrainer',
    img: bgImageMediumAttentiontrainer,
    title: 'Тренажер внимания',
    description:
      'Главное сосредоточиться',
    navigate: '/attentiontrainer',
  },
  {
    id: 'arithmetic',
    img: bgImageMediumArithmetic,
    title: 'Арифметик',
    description:
      'Сразись за звание арифметического чемпиона',
    navigate: '/arithmetic',
  },
  {
    id: 'grammarspaceshooter',
    img: bgImageMediumGrammarspaceshooter,
    title: 'Грамматический шутер',
    description:
      'ВетреНый или ВетреННый?',
    navigate: '/grammarspaceshooter',
  }
];

export const QUIZ_SLIDES = [
  {
    id: 'tanksquiz',
    img: bgImageMediumTanksquiz,
    title: 'TanksQuiz',
    description:
      'Отвечай на вопросы, собирай снаряды и освободи территорию от врагов!',
    navigate: '/tanksquiz',
  }
];

export const RECOMMENDED_GAMES_SLIDES = [
  GRAMMAR_SLIDES[0],
  GRAMMAR_SLIDES[1],
  SIMULATOR_SLIDES[1],
  SIMULATOR_SLIDES[0],
  QUIZ_SLIDES[0]
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