import "./App.css";

import "./theme.css";
import { useState } from "react";

function App() {
  let [name, changeName] = useState("Amira Ali");
  let [age, setAge] = useState(0);
  const changeAge = () => {
    setAge(age++);
  };

  let [theme, setTheme] = useState("light");

  function toggle() {
    setTheme(theme == "dark" ? (theme = "light") : (theme = "dark"));
  }
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggle}>Toggle</button>

      {/* switch */}

      <div className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            onClick={() => {
              toggle()
            }}
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
            
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
            setTheme("dark");
          }}
        >
          dark
        </button>
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          light
        </button>
      </div>
      <h2>My Name Is : {name}</h2>
      <button
        onClick={() => {
          changeName("Meroo Ali ❤");
        }}
      >
        Change Name
      </button>
      <h2>My Age Is : {age}</h2>
      <button onClick={changeAge}>Change Age</button>
    </div>
  );
}

export default App;
