import { CheckButton } from './CheckButton';

export const ToDoForm = () => {
	return (
		<form className="mx-auto mt-6 flex w-10/12 max-w-2xl gap-x-2 rounded-lg bg-light-gray p-5 shadow-md dark:bg-dark-desaturated-blue">
			<CheckButton />
			<input
				type="text"
				name="task"
				placeholder="Create a new todo..."
				className="block w-10/12 bg-light-gray p-1 text-xl text-light-very-dark-grayishBlue outline-none dark:bg-dark-desaturated-blue !dark:text-primary-bright-blue dark:placeholder:text-dark-grayishBlue dark:text-dark-light-grayishBlue-shade"
			/>
		</form>
	);
};
