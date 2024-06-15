import ReactDOM from 'react-dom/client'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
