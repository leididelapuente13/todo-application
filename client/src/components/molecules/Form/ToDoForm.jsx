import { useState } from 'react';
import { CheckButton } from '../../atoms/Buttons/Check/CheckButton';
import { addTask } from '../../../api/Task';
import { useTaskListContext } from '../../../context/TasksContext';

export const ToDoForm = () => {
	const [task, setTask] = useState({
		task: '',
		status: 0
	});

	const { fetchTasks } = useTaskListContext();

	const cleanInput = () => {
		setTask((prevData) => ({ ...prevData, task: '' }));
	};

	const handleInputChange = (event) => {
		setTask((prevTaskData) => ({ ...prevTaskData, task: event.target.value }));
		console.log(task);
	};

	const createTask = async (event) => {
		event.preventDefault();
		if (task === '') {
			return alert('Please, write a task');
		}
		const { result, isError, error } = await addTask(task);
		console.log('form', isError, error);
		if (isError) return alert('There has been an error creating the task', error);
		cleanInput();
		alert(result);
		await fetchTasks();
	};
	return (
		<form
			className="mx-auto mt-6 flex w-10/12 max-w-2xl gap-x-2 rounded-lg bg-light-gray p-5 shadow-md dark:bg-dark-desaturated-blue"
			onSubmit={createTask}
		>
			<CheckButton isDisabled={true} taskStatus={0} />
			<input
				type="text"
				name="task"
				placeholder="Create a new todo..."
				value={task.task}
				onChange={handleInputChange}
				className="!dark:text-primary-bright-blue block w-10/12 bg-light-gray p-1 text-xl text-light-very-dark-grayishBlue outline-none dark:bg-dark-desaturated-blue dark:text-dark-light-grayishBlue-shade dark:placeholder:text-dark-grayishBlue"
			/>
		</form>
	);
};
