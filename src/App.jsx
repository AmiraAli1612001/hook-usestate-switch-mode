import "./App.css";

import "./theme.css";

import { useContext } from "react";
import ThemeProvider from "./context/contextdata";
import { Link } from "react-router-dom";

function App() {
  let {
    name,
    changeName,
    changeCount,
    count,
    changeAge,
    age,
    toggle,
    mode,
  } = useContext(ThemeProvider);

  return (
    <div className={`App ${mode}`}>
      <Link to="/about">About</Link>
      <button
        onClick={() => {
          toggle(mode == "light" ? "dark" : "light");
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
              toggle(mode == "light" ? "dark" : "light");
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
            toggle("dark");
          }}
        >
          dark
        </button>
        <button
          onClick={() => {
            toggle("light");
          }}
        >
          light
        </button>
      </div>
      <h2>My Name Is : {name} </h2>
      {
        <button
          onClick={() => {
            changeName();
          }}
        >
          Change Name{" "}
        </button>
      }
      <h2>My Age Is : {age} </h2>
      <button
        onClick={() => {
          changeAge();
        }}
      >
        Change Age
      </button>

      <button
        onClick={() => {
          changeCount();
        }}
      >
        Change Count {count}
      </button>
    </div>
  );
}

export default App;
