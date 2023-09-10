import { Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import { Main } from "./pages/Main/Main";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { AboutGame } from "./pages/AboutGame/AboutGame";
import { Games } from "./pages/Games/Games";
import { EcologyGame } from "./pages/EcologyGame/EcologyGame";
import { AuthStatus } from "./pages/Auth/AuthStatus";
import { Leaders } from "./pages/Leaders/Leaders";
import UnityGameRedirect from './pages/GamesRedirect/UnityGameRedirect';
// import { Index } from "./pages/EcologyGame/Game/Index";

export const AppRoutes = () => {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/leaders" element={<Leaders />} />
      <Route path="about-game" element={<AboutGame />} />
      <Route path="/games" element={<Games />} />
      <Route path="/ecology-game" element={<EcologyGame />} />
      <Route path="/accounts/login" element={<AuthStatus />} />
      {/* <Route path="/ecology-game-index" element={<Index />} /> */}

      {/* Перенаправление на разные страницы с помощью UnityGameRedirect */}
      <Route
          path="/attentiontrainer"
          element={<UnityGameRedirect redirectPath="/builds/ecology/index.html" />}
        />

        <Route
          path="/battleofminds"
          element={<UnityGameRedirect redirectPath="/builds/battleofminds/index.html" />}
        />
    </Routes>
  );
};
