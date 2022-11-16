import { createContext, useState } from "react";

const defaultValue = {
  isDark: false,
  todos: [],
};

export const MainContext = createContext(defaultValue);

export const MainProvider = ({ children, isDark = true }) => {
  const [currentMode, setCurrentMode] = useState(isDark);
  const [todos, setTodos] = useState([]);

  const toggleMode = () => {
    setCurrentMode(!currentMode);
  };

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <MainContext.Provider
      value={{ isDark: currentMode, toggleMode, todos, addTodo }}
    >
      {children}
    </MainContext.Provider>
  );
};
