import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import supabase from "@/data/supabase";
import { personal_account_store } from "@/stores";

import { Personal_account_modal } from "./personal_account_modal";

const Personal_account_page = () => {
  const { isVisibleModal, change_modal } = personal_account_store;
  const [user, setUser] = useState<User | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [profileLoading, setProfileLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          console.error("Ошибка при получении данных пользователя:", error);
        } else {
          setUser(data?.user);
          if (data?.user) {
            await fetchProfileData(data.user.id);
          }
        }
      } catch (err) {
        console.error("Произошла ошибка:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const fetchProfileData = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("Ошибка при загрузке профиля:", error);
    } else {
      setFirstName(data.first_name ?? "");
      setLastName(data.last_name ?? "");
      setDateOfBirth(data.date_of_birth ?? "");
      setPhoneNumber(data.phone_number ?? "");
      setAvatarUrl(data.avatar_url ?? null);
    }
  };

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setProfileLoading(true);

    let newAvatarUrl = avatarUrl;

    if (file) {
      const fileName = `${user.id}-${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("avatars")
        .upload(fileName, file);

      if (error) {
        console.error("Ошибка при загрузке изображения:", error);
      } else {
        newAvatarUrl = supabase.storage.from("avatars").getPublicUrl(fileName)
          .data.publicUrl;

        setAvatarUrl(newAvatarUrl);
      }
    }

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dateOfBirth,
      phone_number: phoneNumber,
      avatar_url: newAvatarUrl,
    });

    if (error) {
      console.error("Ошибка при обновлении профиля:", error);
    } else {
      alert("Профиль успешно обновлен!");
    }

    setProfileLoading(false);
  };

  if (loading) {
    return <span>Загрузка...</span>;
  }

  if (!user) {
    return <p>Пользователь не авторизован.</p>;
  }

  return (
    <section className="py-12">
      <Container>
        <h1 className="mb-12">Личный кабинет</h1>
        <div className="flex gap-x-10">
          <div>
            {avatarUrl ? (
              <img
                src={avatarUrl}
                width="400"
                alt=""
                loading="lazy"
                aria-hidden
              />
            ) : (
              <picture>
                <source srcSet="/images/avatar_user.webp" type="image/webp" />
                <img
                  width={400}
                  src="/images/avatar_user.png"
                  alt=""
                  loading="lazy"
                  aria-hidden
                />
              </picture>
            )}
          </div>

          <ul className="flex flex-col gap-y-3">
            <li>
              <b className="mr-1">Имя: </b>
              <span className="text-xl">{firstName || "Шаньга"}</span>
            </li>
            <li>
              <b className="mr-1">Фамилия: </b>
              <span className="text-xl">{lastName || "Майонезная"}</span>
            </li>
            {dateOfBirth && (
              <li>
                <b className="mr-1">Дата рождения: </b>
                <span className="text-xl">{dateOfBirth}</span>
              </li>
            )}
            <li>
              <b className="mr-1">Email: </b>
              <span className="text-xl">{user.email}</span>
            </li>
            {phoneNumber && (
              <li>
                <b className="mr-1">Номер телефона: </b>
                <span className="text-xl">{phoneNumber}</span>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <Personal_account_modal />

      {/* <form onSubmit={updateProfile}>
        <div>
          <label htmlFor="first_name">Имя:</label>
          <span>{firstName}</span>
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="last_name">Фамилия:</label>
          <span>{lastName}</span>
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="date_of_birth">Дата рождения:</label>
          <input
            type="date"
            id="date_of_birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="phone_number">Номер телефона:</label>
          <input
            type="tel"
            id="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+7 (XXX) XXX-XX-XX"
          />
        </div>

        <div>
          <label htmlFor="avatar">Аватар:</label>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <button type="submit" disabled={profileLoading}>
          {profileLoading ? "Сохранение..." : "Сохранить"}
        </button>
      </form> */}

      <div className="flex items-center gap-x-5">
        <Button onClick={() => change_modal(!isVisibleModal)}>
          Редактировать
        </Button>
        <Link to="/logout">Выйти из аккаунта</Link>
      </div>
    </section>
  );
};

export default Personal_account_page;
