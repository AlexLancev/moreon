import { useState } from "react";

type AuthFormProps = {
  onSubmit: (email: string, password: string) => Promise<void>;
  submitButtonText: string;
  title: string;
};

export const AuthForm = ({
  onSubmit,
  submitButtonText,
  title,
}: AuthFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await onSubmit(email, password);
  };

  return (
    <div>
      <h2>{title}</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{submitButtonText}</button>
      </form>
    </div>
  );
};
