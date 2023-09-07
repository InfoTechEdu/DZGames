import { AppRoutes } from './AppRoutes';
import { Footer } from './components/Footer/Footer';
import { FooterBg } from './components/FooterBg/FooterBg';
import { Header } from './components/Header/Header';
import { ScrollToTopController } from './containers/ScrollToTopController/ScrollToTopController';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <ScrollToTopController />
        <AppRoutes />
        <Footer />
      </div>
      <FooterBg />
    </>
  );
}

export default App;
