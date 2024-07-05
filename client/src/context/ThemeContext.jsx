import { createContext, useContext, useEffect, useState } from 'react';
import { setDefaultTheme as currentTheme } from '../utils/theme';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(currentTheme);

	const changeTheme = () => {
		if (theme === 'dark') {
			setTheme('light');
			localStorage.setItem('theme', 'light');
		} else {
			setTheme('dark');
			localStorage.setItem('theme', 'dark');
		}
	};

	useEffect(() => {
		const app = document.getElementById('html');
		if (theme === 'light') {
			app.classList.remove('dark');
		} else {
			app.classList.add('dark');
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, changeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => useContext(ThemeContext);
