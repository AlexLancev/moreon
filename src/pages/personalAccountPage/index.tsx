import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import { modalUserUpdateStore } from "@/stores";
import { authStore } from "@/stores/authStore";
import { profileStore } from "@/stores/profileStore";

import { PersonalAccountModal } from "./personalAccountModal";

const PersonalAccountPage = observer(() => {
  const { isVisibleModal, changeModal } = modalUserUpdateStore;

  useEffect(() => {
    authStore.fetchUser().then(() => {
      if (authStore.user) {
        profileStore.fetchProfile();
      }
    });
  }, []);

  if (authStore.isLoading || profileStore.isLoading) {
    return <span>Загрузка...</span>;
  }

  if (!authStore.user) {
    return <p>Пользователь не авторизован.</p>;
  }

  return (
    <section className="py-12">
      <Container>
        <h1 className="mb-12">Личный кабинет</h1>
        <div className="flex gap-x-10">
          <div className="flex-shrink-0">
            <div className="relative w-48 overflow-hidden rounded-full border-2 border-[rgba(191,191,191,1)]">
              {profileStore.avatarUrl ? (
                <img
                  src={profileStore.avatarUrl}
                  className="h-full w-full object-cover"
                  alt=""
                  aria-hidden
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-100">
                  <img
                    src="/images/avatar_user.png"
                    className="h-full w-full object-cover"
                    alt=""
                    aria-hidden
                  />
                </div>
              )}
            </div>
          </div>

          <ul className="flex flex-col gap-y-3">
            <li className="text-lg">
              <b className="font-semibold">Имя:</b>
              {profileStore.firstName || "Шаньга"}
            </li>
            <li className="text-lg">
              <b className="font-semibold">Фамилия:</b>
              {profileStore.lastName || "Майонезная"}
            </li>
            {profileStore.dateOfBirth && (
              <li className="text-lg">
                <b className="font-semibold">Дата рождения:</b>
                {profileStore.dateOfBirth}
              </li>
            )}
            <li className="text-lg">
              <b className="font-semibold">Email:</b> {authStore.user.email}
            </li>
            {profileStore.phoneNumber && (
              <li className="text-lg">
                <b className="font-semibold">Телефон:</b>
                {profileStore.phoneNumber}
              </li>
            )}
          </ul>
        </div>
      </Container>

      <PersonalAccountModal />

      <div className="mt-8 flex items-center gap-x-5">
        <Button onClick={() => changeModal(!isVisibleModal)}>
          Редактировать профиль
        </Button>
        <Link to="/logout" className="text-blue-600 hover:underline">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
});

export default PersonalAccountPage;
