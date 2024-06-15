import styled from 'styled-components'
import { ReactComponent as Cubik } from '../../../assets/cubik.svg'
import Kapitan from '../../../assets/kapitan.png'
import ProfileGirl from '../../../assets/profilegirl.png'
import AvatarChanger from '../AvatarChanger/AvatarChanger'
import styles from './PersonalInformation.module.css'

export const PersonalInformation = () => {
	// const userId = '7c35493ffd7316a4322fe6061a01cc4c8ebbb8b0'
	return (
		<div className={styles.personal_wrapper}>
			<div className={styles.personal}>
				<h2>Профиль</h2>
				<div className={styles.personal_information}>
					<Cubik className={styles.cubik} />
					<div className={styles.banner_personal_information}>
						<ImgL src={Kapitan} />
						<ImgA src={ProfileGirl} />
					</div>
					<div className={styles.avatarImage}>
						{/* <AvatarChanger userId={userId} /> */}
						<AvatarChanger />
					</div>
				</div>
			</div>
		</div>
	)
}

const ImgL = styled.img({
	width: 716,
	position: 'absolute',
	left: -110,
	top: -100,

	'@media(max-width: 768px)': {
		width: 560,
		left: -80,
		top: -30,
	},

	'@media(max-width: 360px)': {
		width: 360,
	},
})

const ImgA = styled.img({
	width: 278,
	position: 'absolute',
	right: -20,
	top: 15,

	'@media(max-width: 768px)': {
		width: 200,
		top: 68,
	},
	'@media(max-width: 360px)': {
		width: 124,
	},
})
