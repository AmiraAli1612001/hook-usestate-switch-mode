import { createContext, useReducer } from "react";

const context = createContext();

let initialData = {
  name: "Amira",
  age: 0,
  mode:
    localStorage.getItem("theme") == null
      ? "light"
      : localStorage.getItem("theme"),
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.new_name };
    case "changeAge":
      return { ...state, age: action.new_age };
    case "changeMode":
      return { ...state, mode: action.new_mode };
    case "increase":
      return { ...state, count: action.new_count };
    case "toggle":
      return { ...state, mode: action.new_mode };
    default:
      return state;
  }
};
export function ThemeProvider({ children }) {
  const [value, setValue] = useReducer(reducer, initialData);
  const changeName = () => {
    setValue({ type: "changeName", new_name: "Hello Miroo❤👌" });
  };

  const changeCount = () => {
    setValue({ type: "increase", new_count: initialData.count++ });
  };
  const changeAge = () => {
    setValue({ type: "changeAge", new_age: 23 });
  };
  const toggle = (theme) => {
    localStorage.setItem("theme", theme);
    setValue({ type: "toggle", new_mode: theme });
  };

  return (
    <context.Provider
      value={{ ...value, changeName, changeCount, changeAge, toggle }}
    >
      {children}
    </context.Provider>
  );
}
export default context;
