import bgImageMediumEcology from '../assets/ecology-game.png';
import bgImageMedium from '../assets/gameSliderItem.png';
import bgImageMediumTanksquiz from '../assets/tanksquiz_carousel_item.png'
import bgImageMediumAttentiontrainer from '../assets/attentiontrainer_carousel_item.png'
import bgImageMediumArithmetic from '../assets/arithmetic_carousel_item.png';
import bgImageMediumGrammarspaceshooter from '../assets/grammarspaceshooter_carousel_item.png';

const TANKS_QUIZ_LINK = '/builds/tanksquiz/index.html';
const ATTENTION_TRAINER_LINK = '/builds/attentiontrainer/index.html';

export const GRAMMAR_SLIDES = [
  {
    id: 'mur',
    img: bgImageMedium,
    title: 'Юнга Мур и большая стройка котов-пиратов',
    description:
      'Используй свои знания и навыки и помоги котам построить городок для туристов',
      descriptionLink: '/about-game',
  },
  {
    id: 'ecology',
    img: bgImageMediumEcology,
    title: 'Экология',
    description:
      'Соблюдение баланса между экологией и производством всегда было непростой задачей',
      descriptionLink: '/ecology-game',
  }
];

export const SIMULATOR_SLIDES = [
  {
    id: 'attentiontrainer',
    img: bgImageMediumAttentiontrainer,
    title: 'Тренажер внимания',
    description:
      'Главное сосредоточиться',
    playLink: ATTENTION_TRAINER_LINK,
    descriptionLink: '/about-game'
  },
  {
    id: 'arithmetic',
    img: bgImageMediumArithmetic,
    title: 'Арифметик',
    description:
      'Сразись за звание арифметического чемпиона',
    descriptionLink: '/about-game',
  },
  {
    id: 'grammarspaceshooter',
    img: bgImageMediumGrammarspaceshooter,
    title: 'Грамматический шутер',
    description:
      'ВетреНый или ВетреННый?',
    descriptionLink: '/grammarspaceshooter',
  }
];

export const QUIZ_SLIDES = [
  {
    id: 'tanksquiz',
    img: bgImageMediumTanksquiz,
    title: 'TanksQuiz',
    description:
      'Отвечай на вопросы, собирай снаряды и освободи территорию от врагов!',
    playLink: TANKS_QUIZ_LINK,
    descriptionLink: '/about-game'
  },
  {
    id: 'battleofminds',
    img: bgImageMedium,
    title: 'Борьба умов',
    description: 'Борьба умов',
    descriptionLink: '/about-game'
  },
  {
    id: 'historyTime',
    img: bgImageMedium,
    title: 'Время истории',
    description: 'Время истории',
    descriptionLink: '/about-game'
  }
];

export const RECOMMENDED_GAMES_SLIDES = [
  GRAMMAR_SLIDES[0],
  GRAMMAR_SLIDES[1],
  SIMULATOR_SLIDES[1],
  SIMULATOR_SLIDES[0],
  QUIZ_SLIDES[0]
];

export const MAIN_CAROUSEL_SLIDES = [
  GRAMMAR_SLIDES[0],
  SIMULATOR_SLIDES[0],
  QUIZ_SLIDES[0],
  GRAMMAR_SLIDES[1],
];

export interface GameSliderData {
  id: string;
  img: string;
  title?: string;
  description?: string;
  descriptionLink?: string;
  playLink?: string;
}

export const saveGameToLocalStorage = (item: GameSliderData) => {
  const savedData = JSON.parse(
    localStorage.getItem('recentlySeenGames') ?? '[]'
  ) as GameSliderData[];

  if (!savedData.some(({ id }) => id === item.id)) {

    if (savedData.length === 10) {
      savedData.shift()
    }

    savedData.push(item);

    localStorage.setItem(
      'recentlySeenGames',
      JSON.stringify(savedData)
    );
  }
}

export const LEADERS_CAROUSEL_SLIDES = [
  GRAMMAR_SLIDES[0],
  GRAMMAR_SLIDES[1],
  QUIZ_SLIDES[1],
  QUIZ_SLIDES[2],
  SIMULATOR_SLIDES[0],
  SIMULATOR_SLIDES[1],
];
