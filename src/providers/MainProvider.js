import { createContext, useState } from "react";

const defaultValue = {
  isDark: false,
};

export const MainContext = createContext(defaultValue);

export const MainProvider = ({ children, isDark = true }) => {
  const [currentMode, setCurrentMode] = useState(isDark);

  const toggleMode = () => {
    setCurrentMode(!currentMode);
  };

  return (
    <MainContext.Provider value={{ isDark: currentMode, toggleMode }}>
      {children}
    </MainContext.Provider>
  );
};
