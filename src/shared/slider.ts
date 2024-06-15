import bgImageMediumArithmetic from '../assets/arithmetic_carousel_item.png'
import bgImageSmallBannerArithmeticChain from '../assets/arithmeticchain_small_banner.png'
import bgImageSmallBannerArticlesGame from '../assets/articlesgame_small_banner.png'
import bgImageMediumAttentiontrainer from '../assets/attentiontrainer_carousel_item.png'
import bgImageSmallBannerBattleofminds from '../assets/battleofminds_small_banner.png'
import bgImageMediumEcology from '../assets/ecology-game.png'
import bgImageMedium from '../assets/gameSliderItem.png'
import bgImageMediumGrammarspaceshooter from '../assets/grammarspaceshooter_carousel_item.png'
import bgImageSmallBannerLogicTrainer from '../assets/logictrainer_small_banner.png'
import bgImageMediumTanksquiz from '../assets/tanksquiz_carousel_item.png'
import bgImageSmallBannerTimeOfHIstory from '../assets/timeofhistory_small_banner.png'

import bgImageRecentArithmeticchain from '../assets/arithmeticchain_recent_item.png'
import bgImageRecentArticlesgame from '../assets/articlesgame_recent_item.png'
import bgImageRecentBattleofminds from '../assets/battleofminds_recent_item.png'
import bgImageRecentLogictrainer from '../assets/logictrainer_recent_item.png'
import bgImageRecentTimeofhistory from '../assets/timeofhistory_recent_item.png'

import bgImageSmallBannerForMainCarouselArithmeticChain from '../assets/arithmeticchain_small_banner_for_main_carousel.png'
import bgImageSmallBannerForMainCarouselArticlesGame from '../assets/articlesgame_small_banner_for_main_carousel.png'

const TANKS_QUIZ_LINK = '/builds/tanksquiz/index.html'
const ATTENTION_TRAINER_LINK = '/builds/attentiontrainer/index.html'
const ARITHMETIC_LINK = '/builds/arithmetic/index.html'
const GRAMMAR_SPACE_SHOOTER_LINK = '/builds/grammarspaceshooter/index.html'
const BATTLE_OF_MINDS_LINK = `/builds/battleofminds/index.html`
const LOGIC_TRAINER_LINK = `/builds/logictrainer/index.html`
const TIME_OF_HISTORY_LINK = `/builds/timeofhistory/index.html`
const ARITHMETIC_CHAIN_LINK = `/builds/arithmeticchain/index.html`
const ARTICLES_GAME_LINK = `/builds/articlesgame/index.html`

export const GRAMMAR_SLIDES = [
	{
		id: 'mur',
		img: bgImageMedium,
		title: 'Юнга Мур и большая стройка котов-пиратов',
		description:
			'Используй свои знания и навыки и помоги котам построить городок для туристов',
		descriptionLink: '/about-game',
		rating: 0,
	},
	{
		id: 'ecology',
		img: bgImageMediumEcology,
		title: 'Экология',
		description:
			'Соблюдение баланса между экологией и производством всегда было непростой задачей',
		descriptionLink: '/ecology-game',
		rating: 0,
	},
]

export const SIMULATOR_SLIDES = [
	{
		id: 'attentiontrainer',
		img: bgImageMediumAttentiontrainer,
		title: 'Тренажер внимания',
		description: 'Главное сосредоточиться',
		playLink: ATTENTION_TRAINER_LINK,
		descriptionLink: '/builds/attentiontrainer/index.html',
		rating: 0,
	},
	{
		id: 'articlesgame',
		img: bgImageSmallBannerArticlesGame,
		imgRecent: bgImageRecentArticlesgame,
		imgMainCarousel: bgImageSmallBannerForMainCarouselArticlesGame,
		title: 'Артикли',
		description: 'Проверь свою english грамматику',
		playLink: ARTICLES_GAME_LINK,
		descriptionLink: '/builds/articlesgame/index.html',
		rating: 0,
	},
	{
		id: 'logictrainer',
		img: bgImageSmallBannerLogicTrainer,
		imgRecent: bgImageRecentLogictrainer,
		title: 'Тренажер логики',
		description: 'Ищи логические связи в разных режимах',
		playLink: LOGIC_TRAINER_LINK,
		descriptionLink: '/builds/logictrainer/index.html',
		rating: 0,
	},
	{
		id: 'arithmetic',
		img: bgImageMediumArithmetic,
		title: 'Арифметик',
		description: 'Сразись за звание арифметического чемпиона',
		playLink: ARITHMETIC_LINK,
		descriptionLink: '/builds/arithmetic/index.html',
		rating: 0,
	},
	{
		id: 'grammarspaceshooter',
		img: bgImageMediumGrammarspaceshooter,
		title: 'Грамматический шутер',
		description: 'ВетреНый или ВетреННый?',
		playLink: GRAMMAR_SPACE_SHOOTER_LINK,
		descriptionLink: '/builds/grammarspaceshooter/index.html',
		rating: 0,
	},
	{
		id: 'arithmeticchain',
		img: bgImageSmallBannerArithmeticChain,
		imgRecent: bgImageRecentArithmeticchain,
		imgMainCarousel: bgImageSmallBannerForMainCarouselArithmeticChain,
		title: 'Арифметическая цепочка',
		description: 'Считай и запоминай',
		playLink: ARITHMETIC_CHAIN_LINK,
		descriptionLink: '/builds/arithmeticchain/index.html',
		rating: 0,
	},
]

export const QUIZ_SLIDES = [
	{
		id: 'battleofminds',
		img: bgImageSmallBannerBattleofminds,
		imgRecent: bgImageRecentBattleofminds,
		title: 'Борьба умов',
		description: 'Вступай в онлайн-викторину и побеждай!',
		playLink: BATTLE_OF_MINDS_LINK,
		descriptionLink: '/builds/battleofminds/index.html',
		rating: 0,
	},
	{
		id: 'tanksquiz',
		img: bgImageMediumTanksquiz,
		title: 'TanksQuiz',
		description:
			'Отвечай на вопросы, собирай снаряды и освободи территорию от врагов!',
		playLink: TANKS_QUIZ_LINK,
		descriptionLink: '/builds/tanksquiz/index.html',
		rating: 0,
	},
	{
		id: 'timeofhistory',
		img: bgImageSmallBannerTimeOfHIstory,
		imgRecent: bgImageRecentTimeofhistory,
		title: 'Время истории',
		description: 'Шкала времени и исторические события в онлайн-викторине',
		playLink: TIME_OF_HISTORY_LINK,
		descriptionLink: '/builds/timeofhistory/index.html',
		rating: 0,
	},
	// ,
	// {
	//   id: 'battleofminds',
	//   img: bgImageMedium,
	//   title: 'Борьба умов',
	//   description: 'Борьба умов',
	//   descriptionLink: '/builds/battleofminds/index.html',
	// },
	// {
	//   id: 'timeofhistory',
	//   img: bgImageMedium,
	//   title: 'Время истории',
	//   description: 'Время истории',
	//   descriptionLink: '/builds/timeofhistory/index.html',
	// }
]

export const RECOMMENDED_GAMES_SLIDES = [
	GRAMMAR_SLIDES[0],
	QUIZ_SLIDES[0],
	// GRAMMAR_SLIDES[1],
	SIMULATOR_SLIDES[2],
	SIMULATOR_SLIDES[0],
]

export const MAIN_CAROUSEL_SLIDES = [
	GRAMMAR_SLIDES[0],
	QUIZ_SLIDES[0],
	SIMULATOR_SLIDES[1],
	SIMULATOR_SLIDES[2],
	GRAMMAR_SLIDES[1],
]

export interface GameSliderData {
	id: string
	img: string
	imgRecent?: string
	imgMainCarousel?: string
	title?: string
	description?: string
	descriptionLink?: string
	playLink?: string
	rating?: string
}

export const saveGameToLocalStorage = (item: GameSliderData) => {
	const savedData = JSON.parse(
		localStorage.getItem('recentlySeenGames') ?? '[]'
	) as GameSliderData[]

	if (!savedData.some(({ id }) => id === item.id)) {
		if (savedData.length === 10) {
			savedData.shift()
		}

		savedData.push(item)

		localStorage.setItem('recentlySeenGames', JSON.stringify(savedData))
	}
}

export const LEADERS_CAROUSEL_SLIDES = [
	// GRAMMAR_SLIDES[0],
	// GRAMMAR_SLIDES[1],
	// QUIZ_SLIDES[2],
	QUIZ_SLIDES[0],
	SIMULATOR_SLIDES[0],
	SIMULATOR_SLIDES[2],
	SIMULATOR_SLIDES[3],
]

async function fetchGameRating(gameId: string) {
	const url = `https://functions.yandexcloud.net/d4euohp1rlksh9divobm?game=${gameId}`

	try {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error('Failed to fetch game rating')
		}

		const data = await response.json()
		return data.gameRating
	} catch (error) {
		console.error('Error fetching game rating:', error)
		return null
	}
}

async function updateGameRatings() {
	for (const slide of MAIN_CAROUSEL_SLIDES) {
		const rating = await fetchGameRating(slide.id)
		slide.rating = rating

		// Код с обновлением span без валидации
		// const spanElement = document.getElementById(slide.id)
		// if (spanElement) {
		// 	spanElement.innerText = rating
		// }

		// Обновляем значение в теге <span> с уникальным id с валидацией
		function formatNumberWithOneDecimal(number: string) {
			return number
				.toString()
				.replace(/\./, ',')
				.replace(/(\,\d)\d+/, '$1')
		}

		const spanElement = document.getElementById(slide.id)
		if (spanElement) {
			const formattedRating = formatNumberWithOneDecimal(rating)
			spanElement.innerText = formattedRating
		}
	}

	console.log('Updated game ratings:', MAIN_CAROUSEL_SLIDES)
}

// Вызовите функцию updateGameRatings для обновления рейтингов игр
updateGameRatings()
