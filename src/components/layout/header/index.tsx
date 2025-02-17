import { Menu, Feedback, Social, Logo } from "components";

export const Header = () => {
  return (
    <header className="w-full m-auto">
      <div className="flex items-center bg-[rgb(0,70,67)] min-h-10 py-2">
        <div className="container">
          <div className="flex items-center gap-x-6 justify-end">
            <Feedback />
            <Social />
          </div>
        </div>
      </div>
      <div className="py-4 bg-[rgb(0,9,8)]">
        <div className="container">
          <div className="flex items-center justify-between">
            <Logo />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};
