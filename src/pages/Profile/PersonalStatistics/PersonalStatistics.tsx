import StatisticsButtons from '../../../components/StatisticsButtons/StatisticsButtons'
import styles from './PersonalStatistics.module.css'

export const PersonalStatistics = () => {
	return (
		<div className={styles.statistics_wrapper}>
			<div className={styles.statistics}>
				<div className={styles.statistics_title}>
					<h2>Статистика</h2>
					<span>Выберите игру</span>
				</div>
				<StatisticsButtons />
			</div>
		</div>
	)
}
