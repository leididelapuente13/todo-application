import React from 'react';
import { Header } from '../../organisms/Header/Header';
import { Footer } from '../../organisms/Footer/Footer';

export const MainTemplate = ({ children }) => {
	return (
		<main className="h-full min-h-screen bg-light-gray pb-3 font-josefin-sans dark:bg-dark-blue">
			<Header />
			{children}
			<Footer />
		</main>
	);
};
