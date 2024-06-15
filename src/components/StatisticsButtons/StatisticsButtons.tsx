import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
	GRAMMAR_SLIDES,
	QUIZ_SLIDES,
	SIMULATOR_SLIDES,
} from '../../shared/slider'
import styles from './StatisticsButtons.module.css'

const allGames = [...GRAMMAR_SLIDES, ...SIMULATOR_SLIDES, ...QUIZ_SLIDES]

const StatisticsButtons: React.FC = () => {
	const [gameStats, setGameStats] = useState<{
		gamesPlayed: number
		winCount: number
		leaderboardPosition: number
		points: number
		surrender: number
	}>({
		gamesPlayed: 0,
		winCount: 0,
		leaderboardPosition: 0,
		points: 0,
		surrender: 0,
	})

	const [selectedGameId, setSelectedGameId] = useState<string | null>(null)

	// const userId = Cookies.get('user_token')
	const userId = '7c35493ffd7316a4322fe6061a01cc4c8ebbb8b0'

	const handleButtonClick = async (gameId: string) => {
		if (!userId) {
			alert('User ID not found')
			return
		}

		setSelectedGameId(gameId)

		try {
			const response = await axios.get(
				`https://us-central1-dzgames-12ad8.cloudfunctions.net/GetUserProfileStatistics?game=${gameId}&userId=${userId}`
			)

			const {
				gamesPlayed = 0,
				winCount = 0,
				leaderboardPosition = 0,
				points = 0,
				surrender = 0,
			} = response.data

			setGameStats({
				gamesPlayed,
				winCount,
				leaderboardPosition,
				points,
				surrender,
			})
		} catch (error) {
			console.error('Error fetching game statistics:', error)
			setGameStats({
				gamesPlayed: 0,
				winCount: 0,
				leaderboardPosition: 0,
				points: 0,
				surrender: 0,
			})
		}
	}

	return (
		<div>
			<ButtonContainer className={styles.button_container}>
				{allGames.map(game => (
					<GameButton
						key={game.id}
						onClick={() => handleButtonClick(game.id)}
						isSelected={game.id === selectedGameId}
						className={styles.button_game}
					>
						{game.title}
					</GameButton>
				))}
			</ButtonContainer>
			<StatsContainer>
				<StatItem>
					<p className={styles.title_options}>Игры сыграно:</p>
					<span className={styles.options}>{gameStats.gamesPlayed}</span>
				</StatItem>
				<StatItem>
					<p className={styles.title_options}>Побед:</p>
					<span className={styles.options}>{gameStats.winCount}</span>
				</StatItem>
				<StatItem>
					<p className={styles.title_options}>Место рейтинга</p>
					<span className={styles.options}>
						{gameStats.leaderboardPosition}
					</span>
				</StatItem>
				<StatItem>
					<p className={styles.title_options}>Очки</p>
					<span className={styles.options}>{gameStats.points}</span>
				</StatItem>
				<StatItem>
					<p className={styles.title_options}>Поражений:</p>
					<span className={styles.options}>{gameStats.surrender}</span>
				</StatItem>
			</StatsContainer>
		</div>
	)
}

const ButtonContainer = styled.div`
	margin: 40px 0 45px;

	@media screen and (max-width: 360px) {
		margin: 20px 0 25px;
	}
`

const GameButton = styled.button<{ isSelected: boolean }>`
	padding: 25px 30px;
	background: ${({ isSelected }) =>
		isSelected
			? 'linear-gradient(90deg,rgba(255, 197, 102, 1) 0%, rgba(255, 116, 1, 1) 100%)'
			: '#F7F7F8'};
	color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#000000')};
	border: none;
	border-radius: 20px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;

	&:hover {
		background: linear-gradient(
			90deg,
			rgba(255, 197, 102, 1) 0%,
			rgba(255, 116, 1, 1) 100%
		);
		color: #ffffff;
	}

	@media screen and (max-width: 360px) {
		font-size: 12px;
		padding: 20px 20px;
	}
`

const StatsContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 15px 15px;
		grid-template-areas:
			'. . .'
			'. . .';
	}
	@media screen and (max-width: 360px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 5px 5px;
		grid-template-areas:
			'. . '
			'. . '
			'. . ';
	}
`

const StatItem = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 30px 40px;
	background-color: #fff3d6;
	border-radius: 20px;
	min-width: 215px;

	@media screen and (max-width: 360px) {
		min-width: 152px;
		padding: 20px 40px;
	}
`

export default StatisticsButtons
