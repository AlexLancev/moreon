import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import supabase from "@/data/supabase";

const Wrapper = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setAuthenticated(!!session);
      } catch (error) {
        console.error("Ошибка при проверке сессии:", error);
        setAuthenticated(false);
      }
    };

    checkSession();
  }, []);

  if (authenticated === null) {
    return <div>Загрузка...</div>;
  }

  if (
    authenticated &&
    (location.pathname === "/login" || location.pathname === "/register")
  ) {
    return <Navigate to="/personalAccount" />;
  }

  if (!authenticated && location.pathname.startsWith("/personalAccount")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Wrapper;
