import React from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher: React.FC = () => {
const { theme, setTheme } = useTheme();

const toggleTheme = () => {
setTheme(theme === 'light' ? 'dark' : 'light');
};

return (
<button
   className="focus:outline-none text-white dark:text-gray-300 hover:text-indigo-600"
   onClick={toggleTheme}
 >
{theme === 'light' ? (
<FontAwesomeIcon icon={faMoon} />
) : (
<FontAwesomeIcon icon={faSun} />
)}
</button>

);
};

export default ThemeSwitcher;