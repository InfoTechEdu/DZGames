import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import styles from './AllGame.module.css'

const AllGame = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<div className={styles.gameInfo}>
				<p className={styles.titleInfo}>Посмотрите все наши игры</p>
				<span className={styles.textInfo}>
					Более 10 игр разных игровых жанров
				</span>
				<Button
					style={{
						background: '#FFF3E8',
						color: '#FFA000',
					}}
					onClick={() => navigate('/games')}
					className={styles.buttonGame}
				>
					Перейти
				</Button>
			</div>
			<div className={styles.gameImage}></div>
		</div>
	)
}

export default AllGame
