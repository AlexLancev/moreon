import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthForm } from "@/AuthForm";
import supabase from "@/data/supabase";

const Register = () => {
  const navigate = useNavigate();

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
      alert("Аккаунт с указанной почтой уже существует");
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
    <>
      <AuthForm
        onTypeSubmit={handleRegister}
        submitButtonText="Создать аккаунт"
        title="Регистрация"
        validatePassword
      />
      <div className="mt-5">
        <span>Есть аккаунт?</span>
        <Link to="/login">Войти</Link>
      </div>
    </>
  );
};

export default Register;
