import styled from 'styled-components'
import { ReactComponent as StarRaiting } from '../../../assets/raitingstar.svg'
import styles from './Banner.module.css'

import { useEffect, useState } from 'react'
import GameBanner from '../../../assets/gameBannerEcology.png'
import GameBanner320 from '../../../assets/gameBannerEcology320.png'
import GameBanner720 from '../../../assets/gameBannerEcology720.png'
import RightArrow from '../../../assets/right_arrow.svg'
import { Button } from '../../../components/Button/Button'
import ReviewComponent from '../../../components/NewReview/NewReview'
import StarRating from '../../../components/StarRating/StarRating'

const openEcologyGame = async () => {
	const URL = `/builds/ecology/index.html`
	window.open(URL, '_blank')?.focus()
	// not correct. need editing
	// const deviceInfo = navigator.userAgent;
	// console.log(deviceInfo);

	//#analytics
	let uid = localStorage.getItem('uid')
	if (!uid) {
		localStorage.setItem('uid', generateUserId())
		uid = localStorage.getItem('uid')
	}
	function generateUserId() {
		var possibleChars =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		var userId = ''
		for (var j = 0; j < 20; j++)
			userId += possibleChars.charAt(
				Math.floor(Math.random() * possibleChars.length)
			)
		return userId
	}
	const response = await fetch(
		`https://functions.yandexcloud.net/d4ec1o5pg8he0c6aej8g?game=ecology&uid=${uid}`
	)

	// if(response.ok){
	//   console.log("Tracking event 'game-download' was sent");
	// }else{
	//   console.error("Failed to send tracking event 'game-download'. Error - " + response.body);
	// }
}

export const Banner = () => {
	const [gameRating, setGameRating] = useState<number | null>(null)
	const [copied, setCopied] = useState(false)
	const handleCopyLinkGame = () => {
		navigator.clipboard.writeText(window.location.href)
		setCopied(true)
	}

	useEffect(() => {
		const fetchGameRating = async () => {
			try {
				const response = await fetch(
					`https://functions.yandexcloud.net/d4euohp1rlksh9divobm?game=ecology`
				)
				if (response.ok) {
					const data = await response.json()
					const formattedRating = parseFloat(data.gameRating)
						.toFixed(1)
						.replace('.', ',')
					setGameRating(parseFloat(formattedRating.replace(',', '.')))
				} else {
					console.error('Failed to fetch game rating')
				}
			} catch (error) {
				console.error('Error fetching game rating:', error)
			}
		}

		fetchGameRating()
	}, [])
	return (
		<BannerStyle>
			<ImgBanner src={GameBanner} />
			<ImgBanner720 src={GameBanner720} />
			<ImgBanner320 src={GameBanner320} />
			<div className={styles.gameraiting}>
				<span>{gameRating}</span>
				<StarRaiting />
			</div>
			<BannerDescriptionBlock>
				<BannerTitle>Экология</BannerTitle>
				<BannerDescription>
					Соблюдение баланса между экологией и производством всегда было
					непростой задачей
				</BannerDescription>
				<div className={styles.star_rating_for_margin}>
					<StarRating gameRating={gameRating} />
				</div>
				<div className={styles.button_infogame}>
					<Button
						width='55%'
						onClick={openEcologyGame}
						className={styles.playbrowser}
					>
						Играть в браузере
					</Button>
					<Button
						width='25%'
						onClick={handleCopyLinkGame}
						style={{ background: copied ? '#009E3D' : '#504CFF' }}
						className={styles.linkforfriends}
					>
						{copied ? 'Ссылка скопирована!' : 'Поделиться с другом'}
					</Button>
				</div>
				<ReviewComponent
					backendUrl={`https://functions.yandexcloud.net/d4ej48ta5vbhapraj3j9?game=ecology&userId=userId&date=currentDate&rating=star&text=reviewText`}
				/>
			</BannerDescriptionBlock>
			<ImgRight src={RightArrow} />
		</BannerStyle>
	)
}

const BannerStyle = styled.div({
	position: 'relative',
	marginTop: 80,
	minHeight: 857,

	'@media(max-width: 768px)': {
		minHeight: 946,
	},

	'@media(max-width: 360px)': {
		minHeight: 1131,
	},
})

const ImgBanner = styled.img({
	width: '100%',

	'@media(max-width: 920px)': {
		display: 'none',
	},
})

const ImgBanner720 = styled.img({
	width: '100%',
	display: 'none',
	borderRadius: '20px',

	'@media(max-width: 920px)': {
		display: 'block',
	},

	'@media(max-width: 520px)': {
		display: 'none',
	},
})

const ImgBanner320 = styled.img({
	width: '100%',
	display: 'none',
	borderRadius: '20px',

	'@media(max-width: 520px)': {
		display: 'block',
	},
})

const ImgRight = styled.img({
	position: 'absolute',
	left: '-172px',
	bottom: '-295px',

	'@media(max-width: 1580px)': {
		display: 'none',
	},
})

const BannerDescriptionBlock = styled.div({
	background: 'rgba(247, 247, 248, 0.66)',
	backdropFilter: 'blur(12px)',
	borderRadius: '20px',
	height: 'auto',
	position: 'absolute',
	width: '100%',
	bottom: '0',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',

	padding: '48px 24px',

	'@media(max-width: 768px)': {
		height: 'auto',
	},
})

const BannerTitle = styled.div({
	fontSize: '30px',
	fontWeight: '600',
	marginBottom: '12px',
})

const BannerDescription = styled.div({
	fontSize: '18px',
	maxWidth: '1020px',
	textAlign: 'center',
})
