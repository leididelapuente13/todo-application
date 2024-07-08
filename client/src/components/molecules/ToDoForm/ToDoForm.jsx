import { CheckButton } from '../../atoms/Buttons/Check/CheckButton';

export const ToDoForm = () => {
	return (
		<form className="mx-auto mt-6 flex w-10/12 max-w-2xl gap-x-2 rounded-lg bg-light-gray p-5 shadow-md dark:bg-dark-desaturated-blue">
			<CheckButton />
			<input
				type="text"
				name="task"
				placeholder="Create a new todo..."
				className="!dark:text-primary-bright-blue block w-10/12 bg-light-gray p-1 text-xl text-light-very-dark-grayishBlue outline-none dark:bg-dark-desaturated-blue dark:text-dark-light-grayishBlue-shade dark:placeholder:text-dark-grayishBlue"
			/>
		</form>
	);
};
