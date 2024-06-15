import Achievements from '../../../components/Achievements/Achievements'
import styles from './AchievementsProfile.module.css'

export const AchievementsProfile = () => {
	return (
		<div className={styles.achievements_wrapper}>
			<div className={styles.achievements}>
				<div className={styles.achievements_title}>
					<h2>Полученные бейджи</h2>
				</div>
				<Achievements />
			</div>
		</div>
	)
}
