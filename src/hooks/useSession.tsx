import { useEffect } from "react";

import supabase from "@/data/supabase";
import session_store from "@/stores/session_store";

function useSession() {
  useEffect(() => {
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

    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          session_store.setSessionActive();
        } else if (event === "SIGNED_OUT") {
          session_store.setSessionInactive();
        }
      },
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);
}

export default useSession;
