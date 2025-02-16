import { Menu, Feedback } from "components";

export const Header = () => {
  return (
    <header className="w-full m-auto">
      <div className="bg-[#004643] min-h-10 p-2">
        <Feedback />
      </div>
      <div className="flex items-center justify-between py-3 bg-[#000908]">
        <img
          className="cursor-pointer"
          src="/images/logowhite.webp"
          width={160}
          alt="Логотип фитнес клуба Moreon Fitness"
        />
        <Menu />
      </div>
    </header>
  );
};
