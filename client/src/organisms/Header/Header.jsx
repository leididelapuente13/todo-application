import React from 'react';
import { ThemeButton } from '../../atoms/Buttons/Theme/ThemeButton';
import { ToDoForm } from '../../molecules/Form/ToDoForm';

export const Header = () => {
	return (
		<header className="flex h-1/3 max-h-60 flex-col flex-wrap items-start justify-between bg-mobile-lightTheme-img bg-cover bg-no-repeat py-12 dark:bg-mobile-darkTheme-img md:bg-desktop-lightTheme-img dark:md:bg-desktop-darkTheme-img">
			<div className="mx-auto flex w-11/12 max-w-2xl justify-between gap-x-2 px-5 lg:px-0">
				<h1 className="text-3xl font-bold tracking-[1rem] text-light-gray">
					TODO
				</h1>
				<ThemeButton />
			</div>
			<ToDoForm />
		</header>
	);
};
