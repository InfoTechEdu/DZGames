import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { FooterBg } from './components/FooterBg/FooterBg';
import { Header } from './components/Header/Header';
import { ScrollToTopController } from './containers/ScrollToTopController/ScrollToTopController';
import { YMInitializer } from 'react-yandex-metrika';

function App() {
  // Uncomment this to cleare Recently seen games list at first entering
  // localStorage.removeItem('recentlySeenGames');

  return (
    <>
      <div className='App'>
        <YMInitializer
          accounts={[89272904]}
          options={{ webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true, }} version="2" />
        <Header />
        <ScrollToTopController />
        <AppRoutes />
        <Footer />
      </div>
      <FooterBg />
      <noscript><div><img src="https://mc.yandex.ru/watch/89272904" style={{position:'absolute', left:'-9999px'}} alt="" /></div></noscript>
    </>
  );
}

export default App;
