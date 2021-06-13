import { useState } from "react";
import "./App.css";
import MainPage from "./Components/Main";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div>
    <div>
    <div className={`App ${theme}`}>
      <button
        className="buttons"
        onClick={() => {
          if (theme === "light") setTheme("dark");
          else setTheme("light");
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}{" "}
      </button>
      <br />
      <MainPage content="Hey" />
      <MainPage content="Mukka Deepak" />
      {/* <div className="cirlces"></div>
      <div className="squares"></div> */}
    </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L21.8,154.7C43.6,181,87,235,131,234.7C174.5,235,218,181,262,160C305.5,139,349,149,393,170.7C436.4,192,480,224,524,234.7C567.3,245,611,235,655,224C698.2,213,742,203,785,170.7C829.1,139,873,85,916,58.7C960,32,1004,32,1047,80C1090.9,128,1135,224,1178,266.7C1221.8,309,1265,299,1309,293.3C1352.7,288,1396,288,1418,288L1440,288L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg> */}
    </div>
    </div>
  );
}

export default App;
