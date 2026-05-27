import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("portfolioDarkMode");
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("portfolioDarkMode", JSON.stringify(isDark));
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={theme} isDark={isDark} toggleTheme={() => setIsDark(d => !d)} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
