import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import supabase from "@/data/supabase";

export const Personal_account_page = () => {
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
    <>
      <h1>Личный кабинет</h1>
      <p>Email: {user.email}</p>

      <form onSubmit={updateProfile}>
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
          {avatarUrl ? (
            <div>
              <p>Текущий аватар:</p>
              <img src={avatarUrl} alt="Аватар" width="300" height="300" />
            </div>
          ) : (
            <div>
              <p>Заглушка аватара:</p>
              <img
                src="/default-avatar.png"
                alt="Заглушка аватара"
                width="300"
                height="300"
              />
            </div>
          )}
        </div>

        <button type="submit" disabled={profileLoading}>
          {profileLoading ? "Сохранение..." : "Сохранить"}
        </button>
      </form>

      <Link to="/logout">Выйти из аккаунта</Link>
    </>
  );
};
