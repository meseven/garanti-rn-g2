import React, { createContext, useContext, useState } from "react";

export type AvailableThemes = "dark" | "light";

type ContextDataType = {
  theme: AvailableThemes;
  setTheme: React.Dispatch<React.SetStateAction<AvailableThemes>>;
};

const ThemeContext = createContext<ContextDataType>({} as ContextDataType);

type IProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<AvailableThemes>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme hook must be call inside ThemeContextProvider.");
  }

  return context;
};
