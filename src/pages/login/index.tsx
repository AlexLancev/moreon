import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import supabase from "@/data/supabase";
import { AuthForm } from "@/AuthForm";

export const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  const handleLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Такого пользователя не существует");
      return;
    }

    if (data) {
      navigate("/personal_account");
    }
  };

  return (
    <div>
      {message && message.length !== 0 && <span>{message}</span>}
      <AuthForm onSubmit={handleLogin} submitButtonText="Войти" title="Логин" />
      <div className="mt-5">
        <span>Нет аккаунта?</span>
        <Link to="/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};
