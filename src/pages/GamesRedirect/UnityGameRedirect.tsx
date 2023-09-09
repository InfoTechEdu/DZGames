import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UnityGameRedirectProps {
  redirectPath: string;
}

const UnityGameRedirect: React.FC<UnityGameRedirectProps> = ({ redirectPath }) => {
  const navigate = useNavigate();

  useEffect(() => {

    // Выполняем перенаправление на указанный путь
    navigate(redirectPath);
  }, [navigate, redirectPath]);

  // Этот компонент не рендерит ничего, так как выполняет перенаправление
  return null;
};

export default UnityGameRedirect;
