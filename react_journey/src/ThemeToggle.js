import React, { useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#fff' : '#222';
//     document.body.style.color = darkMode ? '#000' : '#fff';
//   };

//   return (
//     <button onClick={toggleTheme}>
//       {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//     </button>
//   );
}
