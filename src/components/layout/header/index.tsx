import { Menu, Feedback, Social, Logo, Container } from "components";
import { UserCheck as IconUserCheck, UserLock as IconUserLock } from "lucide-react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";
import session_store from "@/stores/session_store";

export const Header = observer(() => {
  const innerWidth = useGettingWindowWidth();

  return (
    <header className="m-auto w-full">
      <div className="flex min-h-10 items-center bg-[rgb(0,70,67)] py-4">
        <Container>
          <div className="flex items-center justify-end gap-x-7 lg:gap-x-4 xl:gap-x-6 2xl:gap-x-8 3xl:gap-x-12">
            <Feedback className="items-center justify-end 2xl:gap-x-8 3xl:gap-x-12" />
            <Social />
            <Link
              className="flex items-center gap-x-4 duration-300 hover:text-white xl:text-base 2xl:text-xl 3xl:text-2xl"
              to="/personal_account"
            >
              {innerWidth > 945 && <span>Личный кабинет</span>}
              {session_store && session_store.isActiveSession ? (
                <IconUserCheck className="h-auto w-[17px] duration-300 group-hover:stroke-white xl:w-[20px] 2xl:w-[24px] 3xl:w-[30px]" />
              ) : (
                <IconUserLock className="h-auto w-[17px] duration-300 group-hover:stroke-white xl:w-[20px] 2xl:w-[24px] 3xl:w-[30px]" />
              )}
            </Link>
          </div>
        </Container>
      </div>
      <div className="bg-[rgb(0,9,8)] py-4 md:py-6 xl:py-8">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Menu className="hidden items-center lg:flex" isVisibleSubMenu />
          </div>
        </Container>
      </div>
    </header>
  );
});
