import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import supabase from "@/data/supabase";
import { AuthForm } from "@/AuthForm";

export const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const checkAuthentication = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/personal_account");
      }
    };

    checkAuthentication();
  }, [navigate]);

  const handleRegister = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user?.identities?.length === 0) {
      setMessage("Аккаунт с указанной почтой уже существует");
      return;
    }

    if (data.user && !data.session) {
      navigate("/congratulations_registration");
      return;
    }

    if (data.user?.email) {
      navigate("/personal_account");
    }
  };

  return (
    <div>
      {message && message.length !== 0 && <span>{message}</span>}
      <AuthForm
        onSubmit={handleRegister}
        submitButtonText="Создать аккаунт"
        title="Регистрация"
      />
      <div className="mt-5">
        <span>Есть аккаунт?</span>
        <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};
