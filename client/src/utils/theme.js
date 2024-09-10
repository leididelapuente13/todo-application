const getCurrentTheme = () => {
	window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const setDefaultTheme = () => {
	const theme = localStorage.getItem('theme') !== null
		? localStorage.getItem('theme')
		: getCurrentTheme === true
			? 'dark'
			: 'light';
	return theme;
};

export { setDefaultTheme };
