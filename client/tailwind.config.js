/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx}', 'index.html'],
	theme: {
		colors: {
			'primary-brightBlue': 'hsl(220, 98%, 61%)',
			'primary-gradient': 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
			//Light theme
			'light-gray': 'hsl(0, 0%, 98%)',
			'light-grayish-blue': 'hsl(233, 11%, 84%)',
			'light-dark-grayish-blue': 'hsl(236, 9%, 61%)',
			'light-very-dark-grayishBlue': 'hsl(235, 19%, 35%)',
			// Dark theme
			'dark-blue': 'hsl(235, 21%, 11%)',
			'dark-desaturated-blue': 'hsl(235, 24%, 19%)',
			'dark-light-grayishBlue': 'hsl(234, 39%, 85%)',
			'dark-light-grayishBlue-shade': 'hsl(236, 33%, 92%)',
			'dark-light-grayishBlue': 'hsl(234, 11%, 52%)',
			'dark-grayishBlue': 'hsl(233, 14%, 35%)',
			'dark-grayishBlue-shade': 'hsl(237, 14%, 26%)'
		}, 
		fontFamily: {
			'josefin-sans': ["Josefin Sans", "sans-serif"]
		},
		backgroundImage: {
			'primary-gradient': 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
			'mobile-lightTheme-img': 'url("./src/assets/images/mobile/bg-mobile-light.jpg")',
			'mobile-darkTheme-img': 'url("./src/assets/images/mobile/bg-mobile-dark.jpg")',
			'mobile-lightTheme-img': 'url("./src/assets/images/desktop/bg-desktop-dark.jpg")',
			'mobile-darkTheme-img': 'url("./src/assets/images/desktop/bg-desktop-dark.jpg")'
		},
		extend: {}
	},
	plugins: []
};
