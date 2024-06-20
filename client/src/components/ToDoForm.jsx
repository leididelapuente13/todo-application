import { CheckButton } from './CheckButton';

export const ToDoForm = () => {
	return (
		<form className="mx-auto mt-6 flex w-10/12 gap-x-2 rounded-lg bg-light-gray p-5 shadow-md">
			<CheckButton />
			<input
				type="text"
				name="todo"
				placeholder="Create a new todo..."
				className="w-10/12 p-1 text-xl text-light-very-dark-grayishBlue outline-none"
			/>
		</form>
	);
};
