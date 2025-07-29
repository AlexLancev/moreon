import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthForm } from "@/AuthForm";
import supabase from "@/data/supabase";
import session_store from "@/stores/session_store";

const Login = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    const dispose = reaction(
      () => session_store.isActiveSession,
      (isActive) => {
        if (isActive) {
          navigate("/personal_account");
        }
      },
    );

    return () => dispose();
  }, [navigate]);

  const handleLogin = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Такого пользователя не существует"); // Лучше заменить на модальное окно
      return;
    }

    if (data) {
      navigate("/personal_account");
    }
  };

  return (
    <div>
      <AuthForm
        onTypeSubmit={handleLogin}
        submitButtonText="Войти"
        title="Логин"
      />
      <div className="mt-5">
        <span>Нет аккаунта?</span>
        <Link to="/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
});

export default Login;
