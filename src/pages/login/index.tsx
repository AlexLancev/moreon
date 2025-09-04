import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthForm } from "@/AuthForm";
import supabase from "@/data/supabase";
import sessionStore from "@/stores/sessionStore";

const Login = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    const dispose = reaction(
      () => sessionStore.isActiveSession,
      (isActive) => {
        if (isActive) {
          navigate("/personalAccount");
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
      alert("Такого пользователя не существует");
      return;
    }

    if (data) {
      navigate("/personalAccount");
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
