
import { useContext } from "react";
import ThemeProvider from "../context/contextdata"
import "../theme.css"
function About() {

  let {name , mode} = useContext(ThemeProvider)

  return (


    <div className={`App ${mode}`}>
        <h1>About Page</h1>
        <p>{name}</p>
        
    </div>

  );
}

export default About;
