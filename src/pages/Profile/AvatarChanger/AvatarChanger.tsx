// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import Avatar1 from '../../../assets/avatar/1.png'
// import Avatar10 from '../../../assets/avatar/10.png'
// import Avatar11 from '../../../assets/avatar/11.png'
// import Avatar2 from '../../../assets/avatar/2.png'
// import Avatar3 from '../../../assets/avatar/3.png'
// import Avatar4 from '../../../assets/avatar/4.png'
// import Avatar5 from '../../../assets/avatar/5.png'
// import Avatar6 from '../../../assets/avatar/6.png'
// import Avatar7 from '../../../assets/avatar/7.png'
// import Avatar8 from '../../../assets/avatar/8.png'
// import Avatar9 from '../../../assets/avatar/9.png'
// import { ReactComponent as EditAvatar } from '../../../assets/editimage.svg'
// import styles from './AvatarChanger.module.css'

// interface AvatarChangerProps {
// 	userId: string
// }

// interface Avatar {
// 	id: string
// 	src: string
// }

// const AvatarChanger: React.FC<AvatarChangerProps> = ({ userId }) => {
// 	const [currentAvatar, setCurrentAvatar] = useState<string | null>(null)
// 	const [currentAvatarId, setCurrentAvatarId] = useState<string | null>(null)
// 	const [avatars, setAvatars] = useState<Avatar[]>([])
// 	const [isModalOpen, setIsModalOpen] = useState(false)
// 	const [selectedAvatarId, setSelectedAvatarId] = useState<string | null>(null)
// 	const [name, setName] = useState<string | null>(null)
// 	const [grade, setGrade] = useState<string | null>(null)

// 	useEffect(() => {
// 		// Fetch user profile info
// 		axios
// 			.get(
// 				`https://us-central1-dzgames-12ad8.cloudfunctions.net/GetUserProfileInfo?userId=${userId}`
// 			)
// 			.then(response => {
// 				const { avatarId, name, grade } = response.data
// 				setCurrentAvatar(`/src/assets/avatar/${avatarId}.png`)
// 				setCurrentAvatarId(avatarId.toString())
// 				setName(name)
// 				setGrade(grade)
// 			})
// 			.catch(error => console.error('Error fetching user profile info:', error))

// 		// Fetch available avatars
// 		const availableAvatars: Avatar[] = [
// 			{ id: '1', src: Avatar1 },
// 			{ id: '2', src: Avatar2 },
// 			{ id: '3', src: Avatar3 },
// 			{ id: '4', src: Avatar4 },
// 			{ id: '5', src: Avatar5 },
// 			{ id: '6', src: Avatar6 },
// 			{ id: '7', src: Avatar7 },
// 			{ id: '8', src: Avatar8 },
// 			{ id: '9', src: Avatar9 },
// 			{ id: '10', src: Avatar10 },
// 			{ id: '11', src: Avatar11 },
// 			// Add more avatars as needed
// 		]
// 		setAvatars(availableAvatars)
// 	}, [userId])

// 	const handleAvatarClick = (avatarId: string) => {
// 		setSelectedAvatarId(avatarId)
// 	}

// 	const handleSave = () => {
// 		if (selectedAvatarId) {
// 			axios
// 				.post(
// 					`https://us-central1-dzgames-12ad8.cloudfunctions.net/SetUserAvatarId?userId=${userId}&avatarId=${selectedAvatarId}`
// 				)
// 				.then(() => {
// 					setCurrentAvatar(`/src/assets/avatar/${selectedAvatarId}.png`)
// 					setCurrentAvatarId(selectedAvatarId)
// 					setIsModalOpen(false)
// 				})
// 				.catch(error => console.error('Error setting user avatar:', error))
// 		}
// 	}

// 	return (
// 		<div>
// 			<UserInfo>
// 				{name && <UserName>{name}</UserName>}
// 				{grade && <UserGrade>{grade + ' класс'}</UserGrade>}
// 			</UserInfo>
// 			<AvatarContainer>
// 				{currentAvatar && (
// 					<AvatarImage src={currentAvatar} alt='Current Avatar' />
// 				)}
// 				<EditButton onClick={() => setIsModalOpen(true)}>
// 					<EditAvatar />
// 				</EditButton>
// 			</AvatarContainer>

// 			{isModalOpen && (
// 				<Modal>
// 					<ModalContent>
// 						<CancelButton onClick={() => setIsModalOpen(false)}>×</CancelButton>
// 						<div className={styles.header_modal}>
// 							<div className={styles.title_modal}>
// 								<p>Смена аватара</p>
// 								<span>Выберите аватар</span>
// 							</div>
// 							<div className={styles.button_header_modal}>
// 								<a href='#'>Аватар</a>
// 							</div>
// 						</div>

// 						<div className={styles.avatar_container}>
// 							<AvatarGrid>
// 								{avatars.map(avatar => (
// 									<AvatarOption
// 										key={avatar.id}
// 										src={avatar.src}
// 										alt={`Avatar ${avatar.id}`}
// 										onClick={() => handleAvatarClick(avatar.id)}
// 										isSelected={avatar.id === selectedAvatarId}
// 										isCurrent={avatar.id === currentAvatarId}
// 									/>
// 								))}
// 							</AvatarGrid>
// 						</div>
// 						<SaveButton onClick={handleSave}>Установить аватар</SaveButton>
// 					</ModalContent>
// 				</Modal>
// 			)}
// 		</div>
// 	)
// }

// const UserInfo = styled.div`
// 	position: absolute;
// 	top: 12px;
// 	left: 227px;
// `

// const UserName = styled.p`
// 	font-size: 40px;
// 	font-weight: 700;
// 	color: #ffffff;
// 	width: 462px;
// 	margin-bottom: 29px;
// `

// const UserGrade = styled.span`
// 	margin: 0;
// 	font-size: 18px;
// 	color: #ff8b00;
// 	padding: 17px 40px;
// 	background: #ffffff;
// 	border-radius: 20px;
// `

// const AvatarContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// 	position: relative;
// `

// const AvatarImage = styled.img`
// 	width: 191px;
// 	border-radius: 20px;
// `

// const EditButton = styled.button`
// 	width: 48px;
// 	height: 48px;
// 	position: absolute;
// 	cursor: pointer;
// 	right: -20px;
// 	bottom: -10px;
// `

// const Modal = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width: 100%;
// 	height: 100%;
// 	background-color: rgba(0, 0, 0, 0.5);
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	z-index: 999999;
// `

// const ModalContent = styled.div`
// 	background-color: white;
// 	width: auto;
// 	height: auto;
// 	padding: 44px 38px;
// 	border-radius: 20px;
// 	position: relative;
// `

// const AvatarGrid = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
// 	grid-template-rows: 1fr 1fr;
// 	gap: 15px 10px;
// 	grid-template-areas:
// 		'. . . . .'
// 		'. . . . .';
// `

// const AvatarOption = styled.img<{ isSelected: boolean; isCurrent: boolean }>`
// 	width: 191px;
// 	height: auto;
// 	cursor: pointer;
// 	border-radius: 26px;
// 	border: ${props =>
// 		props.isSelected
// 			? '3px solid #504cff'
// 			: props.isCurrent
// 			? '3px solid orange'
// 			: '3px solid transparent'};
// `

// const SaveButton = styled.button`
// 	padding: 20px 54px;
// 	color: white;
// 	border: none;
// 	border-radius: 20px;
// 	cursor: pointer;
// 	background: linear-gradient(
// 		90deg,
// 		rgba(255, 197, 102, 1) 0%,
// 		rgba(255, 116, 1, 1) 100%
// 	);
// `

// const CancelButton = styled.button`
// 	width: 34px;
// 	height: 34px;
// 	border: none;
// 	cursor: pointer;
// 	font-size: 16px;
// 	color: rgba(0, 0, 0, 0.4);
// 	position: absolute;
// 	top: 20px;
// 	right: 20px;
// `

// export default AvatarChanger

import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Avatar1 from '../../../assets/avatar/1.png'
import Avatar10 from '../../../assets/avatar/10.png'
import Avatar11 from '../../../assets/avatar/11.png'
import Avatar2 from '../../../assets/avatar/2.png'
import Avatar3 from '../../../assets/avatar/3.png'
import Avatar4 from '../../../assets/avatar/4.png'
import Avatar5 from '../../../assets/avatar/5.png'
import Avatar6 from '../../../assets/avatar/6.png'
import Avatar7 from '../../../assets/avatar/7.png'
import Avatar8 from '../../../assets/avatar/8.png'
import Avatar9 from '../../../assets/avatar/9.png'
import { ReactComponent as EditAvatar } from '../../../assets/editimage.svg'
import styles from './AvatarChanger.module.css'

interface Avatar {
	id: string
	src: string
}

const AvatarChanger: React.FC = () => {
	const userId = Cookies.get('user_token')
	const [currentAvatar, setCurrentAvatar] = useState<string | null>(null)
	const [currentAvatarId, setCurrentAvatarId] = useState<string | null>(null)
	const [avatars, setAvatars] = useState<Avatar[]>([])
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [selectedAvatarId, setSelectedAvatarId] = useState<string | null>(null)
	const [name, setName] = useState<string | null>(null)
	const [grade, setGrade] = useState<string | null>(null)

	useEffect(() => {
		if (userId) {
			// Fetch user profile info
			axios
				.get(
					`https://us-central1-dzgames-12ad8.cloudfunctions.net/GetUserProfileInfo?userId=${userId}`
				)
				.then(response => {
					const { avatarId, name, grade } = response.data
					setCurrentAvatar(`/src/assets/avatar/${avatarId}.png`)
					setCurrentAvatarId(avatarId.toString())
					setName(name)
					setGrade(grade)
				})
				.catch(error =>
					console.error('Error fetching user profile info:', error)
				)
		} else {
			// Set default values if userId is not found
			setCurrentAvatar(Avatar1)
			setName('Фамилия Имя')
			setGrade('класс')
		}

		// Fetch available avatars
		const availableAvatars: Avatar[] = [
			{ id: '1', src: Avatar1 },
			{ id: '2', src: Avatar2 },
			{ id: '3', src: Avatar3 },
			{ id: '4', src: Avatar4 },
			{ id: '5', src: Avatar5 },
			{ id: '6', src: Avatar6 },
			{ id: '7', src: Avatar7 },
			{ id: '8', src: Avatar8 },
			{ id: '9', src: Avatar9 },
			{ id: '10', src: Avatar10 },
			{ id: '11', src: Avatar11 },
			// Add more avatars as needed
		]
		setAvatars(availableAvatars)
	}, [userId])

	const handleAvatarClick = (avatarId: string) => {
		setSelectedAvatarId(avatarId)
	}

	const handleSave = () => {
		if (selectedAvatarId && userId) {
			axios
				.post(
					`https://us-central1-dzgames-12ad8.cloudfunctions.net/SetUserAvatarId?userId=${userId}&avatarId=${selectedAvatarId}`
				)
				.then(() => {
					setCurrentAvatar(`/src/assets/avatar/${selectedAvatarId}.png`)
					setCurrentAvatarId(selectedAvatarId)
					setIsModalOpen(false)
				})
				.catch(error => console.error('Error setting user avatar:', error))
		}
	}

	return (
		<div>
			<UserInfo>
				{name && <UserName>{name}</UserName>}
				{grade && <UserGrade>{grade}</UserGrade>}
			</UserInfo>
			<AvatarContainer>
				{currentAvatar && (
					<AvatarImage src={currentAvatar} alt='Current Avatar' />
				)}
				<EditButton onClick={() => setIsModalOpen(true)}>
					<EditAvatar />
				</EditButton>
			</AvatarContainer>

			{isModalOpen && (
				<Modal>
					<ModalContent>
						<CancelButton onClick={() => setIsModalOpen(false)}>×</CancelButton>
						<div className={styles.header_modal}>
							<div className={styles.title_modal}>
								<p>Смена аватара</p>
								<span>Выберите аватар</span>
							</div>
							<div className={styles.button_header_modal}>
								<a href='#'>Аватар</a>
							</div>
						</div>

						<div className={styles.avatar_container}>
							<AvatarGrid>
								{avatars.map(avatar => (
									<AvatarOption
										key={avatar.id}
										src={avatar.src}
										alt={`Avatar ${avatar.id}`}
										onClick={() => handleAvatarClick(avatar.id)}
										isSelected={avatar.id === selectedAvatarId}
										isCurrent={avatar.id === currentAvatarId}
									/>
								))}
							</AvatarGrid>
						</div>
						<SaveButton onClick={handleSave}>Установить аватар</SaveButton>
					</ModalContent>
				</Modal>
			)}
		</div>
	)
}

const UserInfo = styled.div`
	position: absolute;
	top: 12px;
	left: 227px;

	@media (max-width: 360px) {
		top: -60px;
		left: 0px;
	}
`

const UserName = styled.p`
	font-size: 40px;
	font-weight: 700;
	color: #ffffff;
	width: 462px;
	margin-bottom: 29px;

	@media (max-width: 360px) {
		font-size: 20px;
		margin-bottom: 29px;
		width: 300px;
	}
`

const UserGrade = styled.span`
	margin: 0;
	font-size: 18px;
	color: #ff8b00;
	padding: 14px 40px;
	background: #ffffff;
	border-radius: 20px;

	@media (max-width: 360px) {
		position: absolute;
		padding: 7px 20px;
		font-size: 10px;
		left: 120px;
		top: 100px;
		border-radius: 10px;
	}
`

const AvatarContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`

const AvatarImage = styled.img`
	width: 191px;
	border-radius: 20px;

	@media (max-width: 360px) {
		width: 102px;
		border-radius: 10px;
	}
`

const EditButton = styled.button`
	width: 48px;
	height: 48px;
	position: absolute;
	cursor: pointer;
	right: -20px;
	bottom: -10px;

	@media (max-width: 768px) {
		width: 32px;
		height: 32px;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
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
	overflow-y: scroll;
`

const ModalContent = styled.div`
	background-color: white;
	width: auto;
	height: auto;
	padding: 44px 38px;
	border-radius: 20px;
	position: relative;
	margin-top: 100px;

	@media (max-width: 768px) {
		margin-top: 200px;
	}
`

const AvatarGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 15px 10px;
	grid-template-areas:
		'. . . . .'
		'. . . . .';

	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
		gap: 10px;
		grid-template-areas:
			'. . .'
			'. . .';
	}
`

const AvatarOption = styled.img<{ isSelected: boolean; isCurrent: boolean }>`
	width: 191px;
	height: auto;
	cursor: pointer;
	border-radius: 26px;
	border: ${props =>
		props.isSelected
			? '3px solid #504cff'
			: props.isCurrent
			? '3px solid orange'
			: '3px solid transparent'};
`

const SaveButton = styled.button`
	padding: 20px 54px;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	background: linear-gradient(
		90deg,
		rgba(255, 197, 102, 1) 0%,
		rgba(255, 116, 1, 1) 100%
	);
`

const CancelButton = styled.button`
	width: 34px;
	height: 34px;
	border: none;
	cursor: pointer;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.4);
	position: absolute;
	top: 20px;
	right: 20px;
`

export default AvatarChanger
