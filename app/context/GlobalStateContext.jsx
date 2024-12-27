"use client";
import { createContext, useContext, useState } from "react";

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({
    lang: "English", // Default language
    currentPath: "/", // Default path
  });

  // Function to update the language
  const setLanguage = (lang) => {
    setState((prev) => ({
      ...prev,
      lang,
    }));
  };

  const setCurrentPath = (path) => {
    setState((prev) => ({
      ...prev,
      currentPath: path,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ state, setLanguage, setCurrentPath }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
