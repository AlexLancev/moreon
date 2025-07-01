import { Menu, Feedback, Social, Logo, Container } from "components";
import { UserCheck, UserLock } from "lucide-react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import session_store from "@/stores/session_store";
import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";

export const Header = observer(() => {
  const innerWidth = useGettingWindowWidth();

  return (
    <header className="w-full m-auto">
      <div className="flex items-center bg-[rgb(0,70,67)] min-h-10 py-4">
        <Container>
          <div className="flex items-center gap-x-7 3xl:gap-x-12 2xl:gap-x-8 xl:gap-x-6 lg:gap-x-4 justify-end">
            <Feedback className="items-center justify-end 3xl:gap-x-12 2xl:gap-x-8" />
            <Social />
            <Link
              className="flex items-center gap-x-4 3xl:text-2xl 2xl:text-xl xl:text-base hover:text-white duration-300"
              to="/personal_account"
            >
              {innerWidth > 945 && <span>Личный кабинет</span>}
              {session_store && session_store.isActiveSession ? (
                <UserCheck
                  className="group-hover:stroke-white duration-300 w-[17px] 3xl:w-[30px] 2xl:w-[24px] xl:w-[20px] h-auto"
                />
              ) : (
                <UserLock
                  className="group-hover:stroke-white duration-300 w-[17px] 3xl:w-[30px] 2xl:w-[24px] xl:w-[20px] h-auto"
                />
              )}
            </Link>
          </div>
        </Container>
      </div>
      <div className="py-8 bg-[rgb(0,9,8)]">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Menu
              className="min-[1025px]:flex hidden items-center"
              isVisibleSubMenu
            />
          </div>
        </Container>
      </div>
    </header>
  );
});
