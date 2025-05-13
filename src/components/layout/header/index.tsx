import { Menu, Feedback, Social, Logo, Container } from "components";

export const Header = () => {
  return (
    <header className="w-full m-auto">
      <div className="flex items-center bg-[rgb(0,70,67)] min-h-10 py-2 2xl:py-4">
        <Container>
          <div className="flex items-center gap-x-6 justify-end">
            <Feedback />
            <Social />
          </div>
        </Container>
      </div>
      <div className="py-4 bg-[rgb(0,9,8)]">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Menu />
          </div>
        </Container>
      </div>
    </header>
  );
};
