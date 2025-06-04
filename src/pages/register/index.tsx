import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import supabase from "@/data/supabase";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setMessage("");
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data && data.user?.email === session?.user.email?.toLowerCase()) {
      setMessage("Такая почта уже сущестует");
      return null;
    }

    if (data) {
      setMessage("Аккаунт создан!");
      navigate("/personal_account");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Регистрация</h2>
      <br></br>
      {message && <span>{message}</span>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Создать аккаунт</button>
      </form>
      <span>У вас уже есть аккаунт?</span>
      <br />
      <Link to="/login">Вход</Link>
    </div>
  );
};
