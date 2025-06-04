import { ReactNode, useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import supabase from "@/data/supabase";

type Wrapper_props = {
  children: ReactNode;
};

export const Wrapper = ({ children }: Wrapper_props) => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(false);
  const [loading, setLoading] = useState<boolean | null>(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
    };

    getSession();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  } else {
    if (authenticated) {
      return <>{children}</>;
    }
    return <Navigate to="/login" />;
  }
};
