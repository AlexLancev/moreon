import { useEffect } from "react";

import supabase from "@/data/supabase";
import sessionStore from "@/stores/sessionStore";

export const useSession = () => {
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        sessionStore.setSessionActive();
      } else {
        sessionStore.setSessionInactive();
      }
    };

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          sessionStore.setSessionActive();
        } else if (event === "SIGNED_OUT") {
          sessionStore.setSessionInactive();
        }
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);
};
