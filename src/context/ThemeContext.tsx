"use client";
import React, { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext({
  theme: "Light",
  changeTheme: () => {},
});
export const ThemeContextProvider = ({ children: children }: any) => {
  const [theme, setTheme] = useState("Light");
  const changeTheme = () => {
    setTheme(theme == "Light" ? "Dark" : "Light");
  };
  // useEffect(() => {
  //   console.log(theme);
  // }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
