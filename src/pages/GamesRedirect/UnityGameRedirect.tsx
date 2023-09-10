import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UnityGameRedirectProps {
  redirectPath: string;
}

const UnityGameRedirect: React.FC<UnityGameRedirectProps> = ({ redirectPath }) => {
    useEffect(() => {
      // Открываем новую вкладку с указанным URL
      const newTab = window.open(redirectPath, '_blank');
      
      // Если новую вкладку не удалось открыть, можно перенаправить текущую
      if (!newTab) {
        window.location.href = redirectPath;
      }
    }, [redirectPath]);
  
    // Этот компонент не рендерит ничего, так как выполняет открытие новой вкладки
    return null;
  };

  //Redirect без открытия новой вкладки (not working: происходит редирект, но игра не запускается)
// const UnityGameRedirect: React.FC<UnityGameRedirectProps> = ({ redirectPath }) => {
//   const navigate = useNavigate();

//   useEffect(() => {

//     // Выполняем перенаправление на указанный путь
//     navigate(redirectPath);
//   }, [navigate, redirectPath]);

//   // Этот компонент не рендерит ничего, так как выполняет перенаправление
//   return null;
// };

export default UnityGameRedirect;
