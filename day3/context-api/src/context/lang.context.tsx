import React, { createContext, useContext, useState } from "react";

export type AvailableLangs = "tr-TR" | "en-US" | "de-DE";

type ContextDataType = {
  lang: AvailableLangs;
  setLang: React.Dispatch<React.SetStateAction<AvailableLangs>>;
};

const LangContext = createContext<ContextDataType | undefined>(undefined);

type IProps = {
  children: React.ReactNode;
};

export const LangContextProvider = ({ children }: IProps) => {
  const [lang, setLang] = useState<AvailableLangs>("tr-TR");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LangContext);

  if (context === undefined) {
    throw new Error("useLang hook must be call inside LangContextProvider.");
  }

  return context;
};
