import Cookies from 'js-cookie'
import moment from 'moment'
import React, { ChangeEvent, useEffect, useState } from 'react'
import DefaultAvatar from '../../assets/defaultAvatar.svg'
import star1 from '../../assets/star1.svg'
import star2 from '../../assets/star2.svg'
import styles from './NewReview.module.css'

interface ReviewComponentProps {
	backendUrl: string
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ backendUrl }) => {
	const [rating, setRating] = useState<number>(0)
	const [reviewText, setReviewText] = useState<string>('')
	const [isReviewVisible, setReviewVisible] = useState<boolean>(false)
	const currentDate = moment().format('YYYY-MM-DD')
	const [userId, setUserId] = useState<string | null>(null)
	useEffect(() => {
		const userIdFromCookie = Cookies.get('userId')
		if (userIdFromCookie) {
			setUserId(userIdFromCookie)
		}
	}, [])

	const handleStarClick = (starRating: number): void => {
		setRating(starRating)
		setReviewVisible(true)
	}
	const putStarClick = () => {
		setRating(0)
		setReviewVisible(false)
	}

	const handleReviewChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
		setReviewText(e.target.value)
	}

	const handleSubmitReview = (): void => {
		fetch(backendUrl, {
			method: 'POST',
			body: JSON.stringify({ rating, review: reviewText, currentDate, userId }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				console.log('Все отлично отправилось')
			})
			.catch(error => {
				console.log('Неудалось')
			})
	}

	return (
		<div className={styles.new_review_options}>
			<div className={styles.title_new_review}>
				<p>Оцените игру</p>
			</div>
			<div className={styles.review_star}>
				{[1, 2, 3, 4, 5].map(star => (
					<img
						key={star}
						src={star <= rating ? star2 : star1}
						alt='star'
						onClick={() => handleStarClick(star)}
						style={{ cursor: 'pointer' }}
					/>
				))}
			</div>
			{isReviewVisible && (
				<div className={styles.open_review}>
					<div className={styles.user_add_review}>
						<div className={styles.user_options}>
							<img src={DefaultAvatar} alt='' />
							<p>Гость</p>
						</div>
						<span onClick={putStarClick}>Отменить</span>
					</div>
					<textarea
						value={reviewText}
						onChange={handleReviewChange}
						className={styles.feedbackreview}
					/>
					<button onClick={handleSubmitReview} className={styles.button_submit}>
						<span>Отправить отзыв</span>
					</button>
				</div>
			)}
		</div>
	)
}

export default ReviewComponent
