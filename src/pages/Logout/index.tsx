import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import supabase from "@/data/supabase";

export const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const signOut = async () => {
      await supabase.auth.signOut();
      navigate("/login");
    };

    signOut();
  }, [navigate]);

  return <div>Выход из аккаунта...</div>;
};