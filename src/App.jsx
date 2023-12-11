import "./App.css";

import "./theme.css";
import { useReducer } from "react";

function App() {
  let initialData = {
    name: "Amira",
    age: 0,
    mode: "light",
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

  let [value, setValue] = useReducer(reducer, initialData);

  return (
    <div className={`App ${value.mode}`}>
      <button
        onClick={() => {
          setValue({
            type: "toggle",
            new_mode: value.mode == "light" ? "dark" : "light",
          });
        }}
      >
        Toggle
      </button>

      {/********* * switch mode****************/}

      <div className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
            onClick={() => {
              setValue({
                type: "toggle",
                new_mode: value.mode == "light" ? "dark" : "light",
              });
            }}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div className="modes">
        <button
          onClick={() => {
            setValue({ type: "changeMode", new_mode: "dark" });
          }}
        >
          dark
        </button>
        <button
          onClick={() => {
            setValue({ type: "changeMode", new_mode: "light" });
          }}
        >
          light
        </button>
      </div>
      <h2>My Name Is : {value.name}</h2>
      <button
        onClick={() => {
          setValue({ type: "changeName", new_name: "Hello Meroo❤👌" });
        }}
      >
        Change Name{" "}
      </button>
      <h2>My Age Is : {value.age}</h2>
      <button
        onClick={() => {
          setValue({ type: "changeAge", new_age: 22 });
        }}
      >
        Change Age
      </button>

      <button
        onClick={() => {
          setValue({ type: "increase", new_count: value.count + 1 });
        }}
      >
        Change Count {value.count}
      </button>
    </div>
  );
}

export default App;
