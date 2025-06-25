import { useEffect } from "react";

import supabase from "@/data/supabase";

import session_store from "@/stores/session_store";

function useSession() {

  useEffect(() => {
    // Функция для проверки текущей сессии при загрузке приложения
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        session_store.setSessionActive();
      } else {
        session_store.setSessionInactive();
      }
    };

    // Проверяем сессию при монтировании компонента
    checkSession();

    // Подписываемся на изменения состояния аутентификации
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          session_store.setSessionActive();
        } else if (event === "SIGNED_OUT") {
          session_store.setSessionInactive();
        }
      },
    );

    // Отписываемся от слушателя при размонтировании компонента
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);
}

export default useSession;
