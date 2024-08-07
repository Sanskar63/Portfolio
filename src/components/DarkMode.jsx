import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => 
    // Check localStorage to set initial dark mode state
    localStorage.getItem('dark-mode') === 'true'
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  }, [darkMode]);

  return (
    <button
      className="p-2 text-black dark:text-white rounded-full w-[10vw] md:[8vw] lg:w-[5vw]"
      onClick={toggleDarkMode}
    >
      {darkMode ? <img src='/moon.svg' /> : <img src='sun.svg' />}
    </button>
  );
};

export default DarkModeToggle;
