// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'
// import { GameSliderData, saveGameToLocalStorage } from '../../shared/slider'
// import { CustomSlider } from '../CustomSlider/CustomSlider'

// const SLIDER_SETTINGS = {
// 	dots: false,
// 	infinite: false,
// 	speed: 500,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	initialSlide: 0,
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 2,
// 				slidesToScroll: 1,
// 			},
// 		},
// 		{
// 			breakpoint: 600,
// 			settings: {
// 				slidesToShow: 1,
// 				slidesToScroll: 1,
// 			},
// 		},
// 	],
// }

// interface IProps {
// 	data: GameSliderData[]
// }

// export const GamesCarousel = ({ data }: IProps) => {
// 	const [showModal, setShowModal] = useState(false)

// 	return (
// 		<CustomSlider {...SLIDER_SETTINGS} swipe className='gameSlider'>
// 			{data.map((item, i) => {
// 				const linkToGame = item.description
// 					? item.descriptionLink
// 					: item.playLink

// 				return (
// 					<SliderLinkItem
// 						key={i}
// 						to={linkToGame ?? ''}
// 						target='_blank'
// 						onClick={e => {
// 							if (!linkToGame) {
// 								e.preventDefault()

// 								return
// 							}

// 							saveGameToLocalStorage(item)
// 						}}
// 					>
// 						<Img alt='' src={item.img} />
// 						{(item.title || item.description) && (
// 							<CardText>
// 								{item.title && <CardTitle>{item.title}</CardTitle>}
// 								{item.description && (
// 									<CardDescription>{item.description}</CardDescription>
// 								)}
// 							</CardText>
// 						)}
// 					</SliderLinkItem>
// 				)
// 			})}
// 		</CustomSlider>
// 	)
// }

// const SliderLinkItem = styled(Link)({
// 	cursor: 'pointer',
// 	display: 'flex',
// 	flexDirection: 'column',
// 	height: '466px',
// 	overflow: 'hidden',
// 	borderRadius: '20px',

// 	':hover': {
// 		boxShadow: '16px 16px 0px #FFCD4C',
// 		transition: '0.5s',
// 	},

// 	'@media(max-width: 1024px)': {
// 		boxShadow: '16px 16px 0px #FFCD4C',
// 		borderRadius: '20px',
// 	},
// })

// const Img = styled.img({
// 	width: '100%',
// 	height: '50%',
// 	objectFit: 'cover',
// 	objectPosition: 'center top',
// })

// const CardText = styled.div({
// 	width: '100%',
// 	height: '50%',
// 	background: '#F7F7F8',
// 	borderRadius: '0px 0px 20px 20px',
// 	padding: '24px',

// 	display: 'flex',
// 	alignItems: 'flex-start',
// 	flexDirection: 'column',
// 	justifyContent: 'flex-start',
// 	gap: '12px',
// })

// const CardTitle = styled.div({
// 	fontSize: '30px',
// 	fontWeight: '600',

// 	'@media(max-width: 1100px)': {
// 		fontSize: '26px',
// 	},

// 	'@media(max-width: 820px)': {
// 		fontSize: '24px',
// 	},
// })

// const CardDescription = styled.div`
// 	font-size: 18px;
// 	max-width: 296px;
// 	overflow: hidden;
// 	text-overflow: ellipsis;
// 	display: -webkit-box;
// 	-webkit-line-clamp: 3;
// 	-webkit-box-orient: vertical;
// `

import { useState } from 'react'
import styled from 'styled-components'
import { GameSliderData } from '../../shared/slider'
import { CustomSlider } from '../CustomSlider/CustomSlider'
import HoverInfoOnGame from '../HoverInfoOnGame/HoverInfoOnGame'

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
}

interface IProps {
	data: GameSliderData[]
}

export const GamesCarousel: React.FC<IProps> = ({ data }) => {
	const [selectedGame, setSelectedGame] = useState<GameSliderData | null>(null)
	const [showModal, setShowModal] = useState(false)

	const handleOpenModal = (game: GameSliderData) => {
		setSelectedGame(game)
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
		setSelectedGame(null)
	}

	return (
		<>
			<CustomSlider {...SLIDER_SETTINGS} swipe className='gameSlider'>
				{data.map((item, i) => {
					const linkToGame = item.description
						? item.descriptionLink
						: item.playLink

					return (
						<SliderLinkItem
							key={i}
							onClick={e => {
								if (item.id === 'ecology' || item.id === 'mur') {
									// Переход по ссылке для id 'ecology' или 'mur'
									return
								} else {
									// Открытие модального окна для остальных id
									e.preventDefault()
									handleOpenModal(item)
								}
							}}
							href={linkToGame ?? '#'}
							target='_blank'
							rel='noopener noreferrer'
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
						</SliderLinkItem>
					)
				})}
			</CustomSlider>
			<HoverInfoOnGame
				isOpen={showModal}
				onClose={handleCloseModal}
				game={selectedGame}
			/>
		</>
	)
}

const SliderLinkItem = styled.a`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	height: 466px;
	overflow: hidden;
	border-radius: 20px;

	:hover {
		box-shadow: 16px 16px 0px #ffcd4c;
		transition: 0.5s;
	}

	@media (max-width: 1024px) {
		box-shadow: 16px 16px 0px #ffcd4c;
		border-radius: 20px;
	}
`

const Img = styled.img`
	width: 100%;
	height: 50%;
	object-fit: cover;
	object-position: center top;
`

const CardText = styled.div`
	width: 100%;
	height: 50%;
	background: #f7f7f8;
	border-radius: 0px 0px 20px 20px;
	padding: 24px;

	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: flex-start;
	gap: 12px;
`

const CardTitle = styled.div`
	font-size: 30px;
	font-weight: 600;

	@media (max-width: 1100px) {
		font-size: 26px;
	}

	@media (max-width: 820px) {
		font-size: 24px;
	}
`

const CardDescription = styled.div`
	font-size: 18px;
	max-width: 296px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`
