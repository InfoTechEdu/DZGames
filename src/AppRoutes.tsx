import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { AboutGame } from "./pages/AboutGame/AboutGame";
import { Game } from "./pages/Game/Game";
import { EcologyGame } from "./pages/EcologyGame/EcologyGame";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="about-game" element={<AboutGame />} />
      <Route path="/game" element={<Game />} />
      <Route path="/ecology-game" element={<EcologyGame />} />
    </Routes>
  );
};
