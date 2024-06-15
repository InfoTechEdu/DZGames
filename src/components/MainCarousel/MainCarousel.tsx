import { ReactComponent as StarRaiting } from '../../assets/raitingstar.svg'
import styles from './MainCarousel.module.css'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useEffect } from 'react'
import { GameSliderData } from '../../shared/slider'
import { CustomSlider } from '../CustomSlider/CustomSlider'

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
	onItemClick?: (id: string) => void
	data: GameSliderData[]
}

export const MainCarousel = ({ onItemClick, data }: IProps) => {
	useEffect(() => {
		// Конвертация рейтинга
		const spans = document.querySelectorAll('span')
		// Проходим по каждому элементу <span>
		spans.forEach(span => {
			// Получаем текстовое содержимое элемента
			const text: string | null = span.textContent

			// Проверяем, что содержимое является числом
			if (text !== null && !isNaN(parseFloat(text))) {
				const formattedNumber = parseFloat(text)
					.toString()
					.replace(/\./, ',')
					.replace(/(\,\d)\d+/, '$1')

				// Заменяем текст внутри элемента <span> на отформатированное число
				span.textContent = formattedNumber
			}
		})
	})
	return (
		<CustomSlider {...SLIDER_SETTINGS} swipe>
			{data.map((item, i) => {
				const linkToGame = item.description
					? item.descriptionLink
					: item.playLink
				const bannerImgSrc = item.imgMainCarousel ?? item.img
				const gameRating = item.rating
				const itemId = item.id

				if (onItemClick) {
					return (
						<SliderDivItem
							onClick={() => {
								if (onItemClick && item?.id) {
									onItemClick(item.id)
								}
							}}
							key={i}
						>
							<Img src={bannerImgSrc} />
						</SliderDivItem>
					)
				}
				return (
					<SliderLinkItem
						target='_blank'
						to={linkToGame ?? ''}
						onClick={e => !linkToGame && e.preventDefault()}
						key={i}
					>
						{/* <Img src={bannerImgSrc} /> */}
						<div className={styles.itemgames}>
							<Img src={bannerImgSrc} />
							<div className={styles.gameraiting}>
								<span id={itemId}>{gameRating}</span>
								<StarRaiting />
							</div>
						</div>
					</SliderLinkItem>
				)
			})}
		</CustomSlider>
	)
}

const SliderDivItem = styled.div`
	cursor: pointer;
	border-radius: 20px;
	padding: 5px;
	width: 100%;

	outline: none;
	overflow: hidden;
`

const SliderLinkItem = styled(Link)`
	border-radius: 20px;
	padding: 5px;
	width: 100%;

	outline: none;
	overflow: hidden;
`

const Img = styled.img`
	width: 100%;
`
