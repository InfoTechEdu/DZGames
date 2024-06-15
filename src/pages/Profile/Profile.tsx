import styled from 'styled-components'
import { AchievementsProfile } from './AchievementsProfile/AchievementsProfile'
import { PersonalInformation } from './PersonalInformation/PersonalInformation'
import { PersonalStatistics } from './PersonalStatistics/PersonalStatistics'

export const Profile = () => {
	return (
		<Wrapper>
			<PersonalInformation />
			<PersonalStatistics />
			<AchievementsProfile />
		</Wrapper>
	)
}

const Wrapper = styled.div({
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	width: '100%',
	gap: '25px',
})
