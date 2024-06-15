import React from 'react'
import styled from 'styled-components'
import star1 from '../../assets/star1.svg'
import star2 from '../../assets/star2.svg'
import styles from './StarRating.module.css'

interface StarRatingProps {
	gameRating: number | null
}

const StarRating: React.FC<StarRatingProps> = ({ gameRating }) => {
	if (gameRating === null) {
		return <div className={styles.loading_rating}>Загрузка рейтинга...</div>
	}

	return (
		<div className={styles.star_raiting}>
			<div className={styles.ratingstar}>
				{[1, 2, 3, 4, 5].map(index => (
					<span key={index}>
						<ImgStar src={index <= gameRating ? star2 : star1} />
					</span>
				))}
			</div>
			<span className={styles.span_rating_players}>
				{gameRating} оценка игроков
			</span>
		</div>
	)
}

export default StarRating

const ImgStar = styled.img({
	width: 28,
	height: 28,
	marginLeft: 5,
})
