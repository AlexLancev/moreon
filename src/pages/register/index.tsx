import { Link, useNavigate } from "react-router-dom";
import supabase from "@/data/supabase";
import { AuthForm } from "@/AuthForm";
import { useState } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");

  const handleRegister = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    // Проверка на существование пользователя
    if (data.user?.identities?.length === 0) {
      setMessage("Аккаунт с указанной почтой уже существует");
      return;
    }

    // Если пользователь успешно создан, но почта еще не подтверждена
    if (data.user && !data.session) {
      navigate('/congratulations_registration')
      return;
    }

    // Если пользователь успешно зарегистрирован и авторизован
    if (data.user?.email) {
      navigate("/personal_account");
    }
  };

  return (
    <div>
      {/* Отображение сообщения */}
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
