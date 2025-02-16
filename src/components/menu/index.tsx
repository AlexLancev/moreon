import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-x-10 text-[#ffffffcc] text-sm">
        <li>
          <Link to="/" className="transition duration-300 hover:text-white">
            О клубе
          </Link>
        </li>
        <li>
          <Link to="/" className="transition duration-300 hover:text-white">
            Услуги
          </Link>
        </li>
        <li>
          <Link to="/" className="transition duration-300 hover:text-white">
            Команда
          </Link>
        </li>
        <li>
          <Link to="/" className="transition duration-300 hover:text-white">
            Клубные карты
          </Link>
        </li>
        <li>
          <Link to="/" className="transition duration-300 hover:text-white">
            Расписание
          </Link>
        </li>
        <li>
          <Link to="/" className="transition duration-300 hover:text-white">
            Бани и бассейны
          </Link>
        </li>
        <li>
          <Link to="/" className="transition duration-300 hover:text-white">
            Детский фитнес
          </Link>
        </li>
      </ul>
    </nav>
  );
};
