import { Menu, Feedback, Social, Logo, Container } from "components";
import { User, UserLock } from "lucide-react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import session_store from "@/stores/session_store";
import { useGettingWindowWidth } from "@/hooks/useGettingWindowWidth";

export const Header = observer(() => {
  const innerWidth = useGettingWindowWidth();
  
  return (
    <header className="w-full m-auto">
      <div className="flex items-center bg-[rgb(0,70,67)] min-h-10 py-2 2xl:py-4 3xl:py-6">
        <Container>
          <div className="flex items-center gap-x-6 2xl:gap-x-8 3xl:gap-x-12 justify-end">
            <Feedback className="items-center justify-end gap-x-6" />
            <Social />
            <div className="flex items-center gap-x-2 group">
              <Link
                className="flex items-center md:gap-x-2 sm:gap-x-0 group-hover:text-white duration-300"
                to="/personal_account"
              >
                {innerWidth > 768 && (
                  <span className="md:text-base 2xl:text-[1.25rem] 3xl:text-[1.75rem]">
                    Личный кабинет
                  </span>
                )}
                {session_store && session_store.isActiveSession ? (
                  <User className="group-hover:stroke-white duration-300 w-[17px] 3xl:w-[40px]" />
                ) : (
                  <UserLock className="group-hover:stroke-white duration-300 w-[17px] 3xl:w-[40px]" />
                )}
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-4 bg-[rgb(0,9,8)] 2xl:py-6 3xl:py-8">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Menu
              className="items-center lg:gap-x-6 xl:gap-x-8 hidden lg:flex 2xl:gap-x-12 3xl:gap-x-14"
              isVisibleSubMenu
            />
          </div>
        </Container>
      </div>
    </header>
  );
});
