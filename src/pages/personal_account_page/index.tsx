import { Link } from "react-router-dom";

export const Personal_account_page = () => {
  return (
    <>
      <h1>Личный кабинет</h1>
      <Link to="/logout">Выйти из аккаунта</Link>
    </>
  );
};