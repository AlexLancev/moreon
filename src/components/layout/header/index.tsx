import { Menu, Feedback, Social, Logo, Container } from "components";
import { User, UserLock } from "lucide-react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import session_store from "@/stores/session_store";

export const Header = observer(() => {
  return (
    <header className="w-full m-auto">
      <div className="flex items-center bg-[rgb(0,70,67)] min-h-10 py-2 2xl:py-4">
        <Container>
          <div className="flex items-center gap-x-6 justify-end">
            <Feedback className="items-center justify-end gap-x-6" />
            <Social />
            <div className="flex items-center gap-x-2 group">
              <Link
                className="flex items-center gap-x-2 group-hover:text-white duration-300"
                to="/personal_account"
              >
                Личный кабинет
                {session_store && session_store.isActiveSession ? (
                  <User
                    size={16}
                    className="group-hover:stroke-white duration-300"
                  />
                ) : (
                  <UserLock
                    size={18}
                    className="group-hover:stroke-white duration-300"
                  />
                )}
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-4 bg-[rgb(0,9,8)]">
        <Container>
          <div className="flex items-center justify-between">
            <Logo />
            <Menu className="items-center gap-x-10" isVisibleSubMenu />
          </div>
        </Container>
      </div>
    </header>
  );
});
