import { create } from "zustand";
import { AvailableThemes } from "../context/theme.context";
import { AvailableLangs } from "../context/lang.context";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { temporal } from "zundo";

type State = {
  theme: AvailableThemes;
  lang: AvailableLangs;
};

type Actions = {
  setTheme: (theme: AvailableThemes) => void;
  setLang: (lang: AvailableLangs) => void;
};

export const useSettings = create(
  temporal(
    persist<State & Actions>(
      (set) => ({
        theme: "light",
        setTheme: (theme) => set({ theme }),
        lang: "tr-TR",
        setLang: (lang) => set({ lang }),
      }),
      {
        name: "SettingsData",
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
