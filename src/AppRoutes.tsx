import { Route, Routes } from 'react-router-dom'
import { AboutGame } from './pages/AboutGame/AboutGame'
import { AboutUs } from './pages/AboutUs/AboutUs'
import { AuthStatus } from './pages/Auth/AuthStatus'
import { EcologyGame } from './pages/EcologyGame/EcologyGame'
import { Games } from './pages/Games/Games'
import { Leaders } from './pages/Leaders/Leaders'
import { Main } from './pages/Main/Main'
import { Profile } from './pages/Profile/Profile'

export const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Main />} />
			<Route path='/about-us' element={<AboutUs />} />
			<Route path='/leaders' element={<Leaders />} />
			<Route path='about-game' element={<AboutGame />} />
			<Route path='/games' element={<Games />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='/ecology-game' element={<EcologyGame />} />
			<Route path='/accounts/login' element={<AuthStatus />} />
			{/* <Route path="/ecology-game-index" element={<Index />} /> */}
		</Routes>
	)
}
