// import { useEffect, useState } from "react";

// export const useTheme = () => {
//   // 1. Initialize state from localStorage or system preference
//   const [theme, setTheme] = useState<"light" | "dark">(() => {
//     const stored = localStorage.getItem("theme");
//     if (stored === "light" || stored === "dark") return stored;
    
//     // Optional: Default to system preference if no localStorage exists
//     return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
//   });

//   // 2. Every time 'theme' changes, update the DOM and localStorage
//   useEffect(() => {
//     const root = window.document.documentElement;
    
//     if (theme === "dark") {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }

//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   return { theme, toggleTheme };
// };

import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme");
    return (stored as "light" | "dark") || "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
      console.log("Dark mode applied to HTML tag");
    } else {
      root.classList.remove("dark");
      console.log("Light mode applied to HTML tag");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};