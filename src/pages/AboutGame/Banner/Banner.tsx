import styled from 'styled-components'

import { useEffect, useState } from 'react'
import ym from 'react-yandex-metrika'
import GameBanner from '../../../assets/gameBanner.png'
import GameBanner320 from '../../../assets/gameBanner320.png'
import GameBanner720 from '../../../assets/gameBanner720.png'
import { ReactComponent as StarRaiting } from '../../../assets/raitingstar.svg'
import RightArrow from '../../../assets/right_arrow.svg'
import { Button } from '../../../components/Button/Button'
import ReviewComponent from '../../../components/NewReview/NewReview'
import StarRating from '../../../components/StarRating/StarRating'
import styles from './Banner.module.css'

export const Banner = () => {
	const [buttonText, setButtonText] = useState('Нажми меня')
	const [gameRating, setGameRating] = useState<number | null>(null)
	const [isButtonDisabled, setIsButtonDisabled] = useState(false)

	useEffect(() => {
		const fetchGameRating = async () => {
			try {
				const response = await fetch(
					`https://functions.yandexcloud.net/d4euohp1rlksh9divobm?game=mur`
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

	const handleDownload = async () => {
		ym('reachGoal', 'yunga-mur-download')

		setButtonText('Идет скачивание...')
		setIsButtonDisabled(true)
		alert('Скачивание началось!')

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
			`https://functions.yandexcloud.net/d4ec1o5pg8he0c6aej8g?game=yunga-mur&uid=${uid}`
		) //#edit. Add UID paramaeter to request
		if (response.ok) {
			console.log("Tracking event 'game-download' was sent. Your uid:  " + uid)
		} else {
			console.error(
				"Failed to send tracking event 'game-download'. Error - " +
					response.body
			)
		}

		window.location.href = `/builds/Yunga_Mur_Installer.zip`
		// window.location.href = `../../../../public/builds/Yunga_Mur_Installer.zip`; //zip, так как прямое скачивание и запуск exe вызывает предупреждение windows. Но с zip форматом (как сообщает chatgpt) это не всегда вызывает предупреждение
	}

	const [copied, setCopied] = useState(false)
	const handleCopyLinkGame = () => {
		navigator.clipboard.writeText(window.location.href)
		setCopied(true)
	}

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
				<BannerTitle>Юнга Мур и большая стройка котов-пиратов</BannerTitle>
				<BannerDescription>
					Используй свои знания и навыки и помоги котам построить городок для
					туристов.
				</BannerDescription>
				<div className={styles.star_rating_for_margin}>
					<StarRating gameRating={gameRating} />
				</div>
				<div className={styles.button_infogame}>
					<Button
						onClick={handleDownload}
						width='55%'
						className={styles.playbrowser}
						disabled={isButtonDisabled}
						style={{
							background: isButtonDisabled
								? 'grey'
								: 'linear-gradient(-270deg, rgb(255, 111, 0), rgb(255, 160, 0) 25%, rgb(255, 111, 0)) 0% 0% / 400%;',
							cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
						}}
					>
						Скачать для Windows
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
					backendUrl={`https://functions.yandexcloud.net/d4ej48ta5vbhapraj3j9?game=mur&userId=userId&date=currentDate&rating=star&text=reviewText`}
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

	'@media(max-width: 520px)': {
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
	marginBottom: '32px',
	maxWidth: '1020px',
	textAlign: 'center',
})

///* Backup Banner () => { ...*/
/*
  const handleDownloading = async () => {
    const response = await fetch(
      `https://functions.yandexcloud.net/d4ec1o5pg8he0c6aej8g?game=yunga-mur&uid=undefined`
    ); //#edit. Add UID paramaeter to request
    if(response.ok){
      console.log("Tracking event 'game-download' was sent");
    }else{
      console.error("Failed to send tracking event 'game-download'. Error - " + response.body);
    }

    window.open(
      //"https://file-examples.com/storage/fe0d875dfd645260e96b346/2017/11/file_example_MP3_700KB.mp3"
      "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1Ou6k75bsuQ0l9RAOiZ_SnoAN2byM_hsH"
      );
  };
  */

// function handleDownload() {
//   const fileUrl = '../../../../public/builds/Yunga_Mur_Installer.exe'; //process.env.PUBLIC_URL + '/hotel_recolor_icon.png'; // URL of the file to download
//   const fileName = 'Yunga_Mur_Installer.exe'; // Name of the file to download
//   console.log("FileURL = " + fileUrl);

//   fetch(fileUrl, {
//     headers: {
//       'Content-Type': 'application/vnd.microsoft.portable-executable'
//     }
//   })
//     .then(response => response.blob())
//     .then(blob => {
//       const url = window.URL.createObjectURL(new Blob([blob]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', fileName);
//       document.body.appendChild(link);
//       link.click();
//       if(link.parentNode) link.parentNode.removeChild(link);
//     });
// }

// function handleDownload() {
//   const downloadUrl = 'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1Ou6k75bsuQ0l9RAOiZ_SnoAN2byM_hsH';
//     fetch(downloadUrl)
//     .then(response => response.blob())
//     .then(blob => {
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'file.exe';
//       a.click();
//     });
//   }
