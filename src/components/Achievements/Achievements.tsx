import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Info } from '../../assets/infoachievement.svg'
import bstr from '../../assets/str_2.png'
import { ReactComponent as Zamok } from '../../assets/zamok.svg'
import { Achievement, achievements } from '../../shared/achievements'
import styles from './Achievements.module.css'

const Achievements: React.FC = () => {
	const [userAchievements, setUserAchievements] = useState<Achievement[]>([])
	const [showAllAchievements, setShowAllAchievements] = useState(false)
	const [selectedAchievement, setSelectedAchievement] =
		useState<Achievement | null>(null)
	const [isScrollable, setIsScrollable] = useState(false)
	const scrollableContainerRef = useRef<HTMLDivElement>(null)
	const userId = '7c35493ffd7316a4322fe6061a01cc4c8ebbb8b0'

	useEffect(() => {
		if (userId) {
			axios
				.get(
					`https://us-central1-dzgames-12ad8.cloudfunctions.net/GetUserProfileInfo?userId=${userId}`
				)
				.then(response => {
					const { achievementIds } = response.data
					const userAchievements = achievements.filter(achievement =>
						achievementIds.includes(Number(achievement.id))
					)
					setUserAchievements(userAchievements)
				})
				.catch(error =>
					console.error('Error fetching user achievements:', error)
				)
		}
	}, [userId])

	useEffect(() => {
		const container = scrollableContainerRef.current
		if (container) {
			setIsScrollable(container.scrollWidth > container.clientWidth)
		}
	}, [userAchievements])

	const handleShowAllAchievements = () => {
		setShowAllAchievements(true)
	}

	const handleCloseAllAchievements = () => {
		setShowAllAchievements(false)
	}

	const handleShowDetails = (achievement: Achievement) => {
		setSelectedAchievement(achievement)
	}

	const handleCloseDetails = () => {
		setSelectedAchievement(null)
	}

	const handleModalClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			handleCloseAllAchievements()
			handleCloseDetails()
		}
	}

	return (
		<div>
			<div className={styles.achievement_main}>
				<img src={bstr} alt='' className={styles.image_background} />
				<ScrollableContainer ref={scrollableContainerRef}>
					<AchievementsContainer className={styles.main_achievements}>
						{userAchievements.map(achievement => (
							<AchievementItem
								key={achievement.id}
								className={styles.main_item_achievement}
							>
								<AchievementImage
									src={achievement.img}
									alt={achievement.title}
									className={styles.image_main}
								/>
								<AchievementTitle className={styles.main_achievements_title}>
									{achievement.title}
								</AchievementTitle>
							</AchievementItem>
						))}
					</AchievementsContainer>
					{isScrollable && <FadeEffect />}
					<ShowAllButton
						onClick={handleShowAllAchievements}
						className={styles.button_all_achievement}
					>
						Все мои достижения
					</ShowAllButton>
				</ScrollableContainer>
			</div>

			{showAllAchievements && (
				<Modal onClick={handleModalClick} className={styles.modal}>
					<ModalContent className={styles.modal_all_achievements}>
						<div className={styles.title_modal_all_achievements}>
							<h3>Все мои достижения</h3>
							<span>Выберите игру</span>
						</div>
						<CloseButton
							onClick={handleCloseAllAchievements}
							className={styles.close_modal_achievement}
						>
							×
						</CloseButton>
						<div className={styles.all_achievement}>
							{achievements.map(achievement => {
								const isUserAchievement = userAchievements.some(
									userAchievement => userAchievement.id === achievement.id
								)
								return (
									<AchievementItem
										key={achievement.id}
										className={styles.item_all_modal_achievement}
									>
										<AchievementImageWrapper>
											<AchievementImage
												src={achievement.img}
												alt={achievement.title}
												className={styles.image_all_modal_achievement}
											/>
											{!isUserAchievement && (
												<div>
													<Overlay className={styles.background_image} />
													<Zamok className={styles.zamok_modal_achievement} />
												</div>
											)}

											<DetailsButton
												onClick={() => handleShowDetails(achievement)}
												className={styles.info_bottom}
											>
												<Info />
												<span>Подробнее</span>
											</DetailsButton>
										</AchievementImageWrapper>
										<AchievementTitle
											className={styles.title_all_achievements_modal}
										>
											{achievement.title}
										</AchievementTitle>
									</AchievementItem>
								)
							})}
						</div>
					</ModalContent>
				</Modal>
			)}

			{selectedAchievement && (
				<Modal onClick={handleModalClick}>
					<ModalContent className={styles.detail_modal}>
						<CloseButton
							onClick={handleCloseDetails}
							className={styles.close_buttom_modal_detail}
						>
							×
						</CloseButton>
						<AchievementDetails className={styles.detail_modal_image}>
							<AchievementImage
								src={selectedAchievement.img}
								alt={selectedAchievement.title}
							/>
							<p>Достижение</p>
							<AchievementTitle className={styles.detail_title_modal}>
								{selectedAchievement.title}
							</AchievementTitle>
							<p className={styles.description_modal_p}>Описание</p>
							<AchievementDescription
								className={styles.modal_detail_description}
							>
								{selectedAchievement.description}
							</AchievementDescription>
						</AchievementDetails>
					</ModalContent>
				</Modal>
			)}
		</div>
	)
}

const ScrollableContainer = styled.div`
	position: relative;
	overflow-x: auto;
	padding-bottom: 10px;
`

const AchievementsContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	gap: 12.72px;
	margin-top: 24px;
`

const FadeEffect = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 50px;
	height: 100%;
	background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
	pointer-events: none;
`

const AchievementItem = styled.div`
	position: relative;
	width: 162px;
	text-align: center;
	flex: 0 0 auto;
	&:hover button {
		display: flex;
	}
`

const AchievementImageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
`

const AchievementImage = styled.img`
	width: 100%;
	height: auto;
`

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 96%;
`

const AchievementTitle = styled.div`
	font-weight: bold;
`

const ShowAllButton = styled.button`
	font-size: 16px;
	cursor: pointer;
	margin-bottom: 20px;
`

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999999;
`

const ModalContent = styled.div`
	background-color: white;
	border-radius: 20px;
	position: relative;
	padding: 48px 38px;

	@media screen and (max-width: 360px) {
		padding: 48px 18px;
	}
`

const CloseButton = styled.button`
	font-size: 24px;
	cursor: pointer;
`

const DetailsButton = styled.button`
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 5px 10px;
	cursor: pointer;
	border: none;
`

const AchievementDetails = styled.div`
	text-align: left;
`

const AchievementDescription = styled.div`
	color: rgba(11, 13, 34, 0.4);
`

export default Achievements
