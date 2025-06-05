import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import supabase from "@/data/supabase";

export const Wrapper = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
    };

    checkSession();
  }, []);

  if (authenticated === null) {
    return <div>Загрузка...</div>;
  }

  // Если пользователь авторизован, но пытается зайти на /login или /register
  if (
    authenticated &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/personal_account" />;
  }

  // Если пользователь не авторизован, но пытается зайти на защищенные маршруты
  if (!authenticated && location.pathname.startsWith("/personal_account")) {
    return <Navigate to="/login" />;
  }

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};
