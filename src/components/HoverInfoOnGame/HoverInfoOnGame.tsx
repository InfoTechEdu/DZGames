import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as StarRaiting } from '../../assets/raitingstar.svg'
import { GameSliderData } from '../../shared/slider'
import { Button } from '../Button/Button'
import ReviewComponent from '../NewReview/NewReview'
import StarRating from '../StarRating/StarRating'
import styles from './HoverInfoOnGame.module.css'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	game: GameSliderData | null
}

const HoverInfoOnGame: React.FC<ModalProps> = ({ isOpen, onClose, game }) => {
	const [copied, setCopied] = useState(false)
	const [gameRating, setGameRating] = useState<number | null>(null)

	useEffect(() => {
		if (!game) return
		const fetchGameRating = async () => {
			try {
				const response = await fetch(
					`https://functions.yandexcloud.net/d4euohp1rlksh9divobm?game=${game.id}`
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
	}, [game])

	if (!isOpen || !game) return null
	const handleCopyLinkGame = () => {
		const baseUrl = 'https://games.domznaniy.school'
		const linkToCopy = baseUrl + (game.descriptionLink || game.playLink || '') // Добавляем базовый URL
		if (linkToCopy) {
			navigator.clipboard.writeText(linkToCopy)
			setCopied(true)
		}
	}
	return (
		<ModalOverlay onClick={onClose}>
			<div className={styles.modalGame}>
				<ModalContent onClick={e => e.stopPropagation()}>
					<CloseButton onClick={onClose}>×</CloseButton>
					<Img alt='' src={game.imgRecent ?? game.img} />
					<div className={styles.gameraiting}>
						<span>{gameRating}</span>
						<StarRaiting />
					</div>
					<div className={styles.modal_option}>
						<div className={styles.up_modal_otion}>
							<div className={styles.header_up_modal_option}>
								<h2 className={styles.game_title_name}>{game.title}</h2>
								<StarRating gameRating={gameRating} />
							</div>
							<div className={styles.footer_up_modal_option}>
								<div className={styles.option_button_game}>
									<a
										href={game.descriptionLink ?? game.playLink}
										target='_blank'
										rel='noopener noreferrer'
										className={styles.play_button_game}
									>
										Перейти к игре
									</a>
									<Button
										width='25%'
										onClick={handleCopyLinkGame}
										style={{
											background: copied ? '#009E3D' : '#504CFF',
										}}
										className={styles.linkforfriends}
									>
										{copied ? 'Ссылка скопирована!' : 'Поделиться с другом'}
									</Button>
								</div>
								<div className={styles.add_reviews_games}>
									<ReviewComponent
										backendUrl={`https://functions.yandexcloud.net/d4ej48ta5vbhapraj3j9?game=${game.id}userId=userId&date=currentDate&rating=star&text=reviewText`}
									/>
								</div>
							</div>
						</div>
						<div className={styles.down_modal_option}>
							<div className={styles.header_down_modal_option}>
								<h2 className={styles.about_game}>Об игре</h2>
							</div>
							<div className={styles.footer_down_modal_option}>
								<p className={styles.game_description}>{game.description}</p>
							</div>
						</div>
					</div>
				</ModalContent>
			</div>
		</ModalOverlay>
	)
}

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 9999999;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ModalContent = styled.div`
	background: white;
	border-radius: 13px;
	width: 100%;
	position: relative;
	width: 1152px;
	min-height: 954px;
	height: auto;
	overflow-y: auto;

	@media (max-width: 768px) {
		width: 720px;
	}

	@media (max-width: 360px) {
		width: 325px;
	}
`

const CloseButton = styled.button`
	position: absolute;
	top: 20px;
	right: 26px;
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
	width: 34px;
	height: 34px;
	opacity: 40%;
`

const Img = styled.img`
	border-radius: 13px;
	width: 100%;
	max-height: 546px;
	object-fit: cover;
`

export default HoverInfoOnGame
