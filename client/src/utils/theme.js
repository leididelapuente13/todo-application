const getCurrentTheme = () =>
	window.matchMedia('(prefers-color-scheme: dark)').matches;

const setDefaultTheme = () => {
	localStorage.getItem('theme') !== null
		? localStorage.getItem('theme')
		: getCurrentTheme === true
			? 'dark'
			: 'light';
};

export { setDefaultTheme };
