import axios from 'axios'
import React, { useEffect, useState } from 'react'
import avatar from '../../assets/defaultAvatar.svg'
import star1 from '../../assets/star1.svg'
import star2 from '../../assets/star2.svg'
import { CustomSlider, SliderProps } from '../CustomSlider/CustomSlider' // Импортируйте компонент CustomSlider
import styles from './ReviewSlider.module.css'

const settings: SliderProps = {
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

const ReviewSlider: React.FC<{ gameId: string }> = ({ gameId }) => {
	const [reviews, setReviews] = useState<any[]>([])

	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await axios.get(
					`https://functions.yandexcloud.net/d4euohp1rlksh9divobm?game=${gameId}`
				)
				if (response.data && response.data.feedbacks) {
					setReviews(response.data.feedbacks)
				}
			} catch (error) {
				console.error('Error fetching reviews:', error)
			}
		}

		fetchReviews()
	}, [gameId])

	if (reviews.length === 0) {
		return null
	}

	const renderStars = (rating: number) => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			stars.push(<img key={i} src={i <= rating ? star2 : star1} alt='star' />)
		}
		return stars
	}

	return (
		<div>
			<div className={styles.title_slider_review}>
				<h2>Отзывы об игре</h2>
			</div>
			<CustomSlider className={styles.slider_review} {...settings}>
				{reviews.map((review, index) => (
					<div className={styles.review_option_container}>
						<div key={index} className={styles.review_option}>
							<div className={styles.user_option}>
								<img src={avatar} alt='' />
								<p>Гость</p>
								<span>{review.date}</span>
							</div>
							<div className={styles.review_star}>
								{renderStars(review.rating)}
							</div>
							<p className={styles.feedbacks_review}>{review.text}</p>
						</div>
					</div>
				))}
			</CustomSlider>
		</div>
	)
}

export default ReviewSlider
