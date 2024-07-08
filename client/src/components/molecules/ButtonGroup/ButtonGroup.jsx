export const ButtonGroup = () => {
	return (
		<div className="mx-auto mt-8 flex w-10/12 items-center justify-center gap-x-5 rounded-md bg-light-gray px-4 py-6 shadow-xl shadow-light-grayish-blue dark:bg-dark-desaturated-blue dark:shadow-xl md:-mt-16 md:h-16 md:w-4/12 md:shadow-none">
			<button type="button" className="font-bold text-primary-bright-blue">
				All
			</button>
			<button
				type="button"
				className="font-bold text-light-dark-grayish-blue dark:text-dark-basic-grayishBlue"
			>
				Active
			</button>
			<button
				type="button"
				className="font-bold text-light-dark-grayish-blue dark:text-dark-basic-grayishBlue"
			>
				Completed
			</button>
		</div>
	);
};
