import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { AboutGame } from "./pages/AboutGame/AboutGame";
import { Game } from "./pages/Game/Game";
import { EcologyGame } from "./pages/EcologyGame/EcologyGame";
import { AuthStatus } from "./pages/Auth/AuthStatus";
// import { Index } from "./pages/EcologyGame/Game/Index";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="about-game" element={<AboutGame />} />
      <Route path="/games" element={<Game />} />
      <Route path="/ecology-game" element={<EcologyGame />} />
      <Route path="/accounts/login" element={<AuthStatus />} />
      {/* <Route path="/ecology-game-index" element={<Index />} /> */}
    </Routes>
  );
};
