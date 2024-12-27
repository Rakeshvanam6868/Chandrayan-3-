"use client";
import React from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import { useRouter } from "next/navigation";

function LanguageBox() {
  const { state, setLanguage } = useGlobalState();
  const router = useRouter();
  const { currentPath } = state;

  const changeLanguage = (lang) => {
    setLanguage(lang);  // Update the global language state

    if (currentPath && currentPath !== "/") {
      // Navigate to the current path if it's valid
      router.push(currentPath);  
    } 
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {/* Render buttons for each language */}
        {['English', 'हिंदी', 'తెలుగు', 'தமிழ்', 'অসমীয়', 'ગુજરાત', 'ಕನ್ನಡ', 'മലയാളം'].map((lang) => (
          <button
            key={lang}
            className={`bg-[#e25a71] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#c4122f] transition ${state.lang === lang ? "brightness-110" : ""}`}
            onClick={() => changeLanguage(lang)}  // Change language and navigate to the current path
          >
            {lang}
          </button>
        ))}
      </div>
    </>
  );
}

export default LanguageBox;
