import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ShowTheme() {
  const theme = useContext(ThemeContext); // take from jar
  return <p>Theme is: {theme}</p>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ShowTheme />
    </ThemeContext.Provider>
  );
}
