import React from 'react';
import { deleteFinishedTasks } from '../../../../api/Task';
import { useTaskListContext } from '../../../../context/TasksContext';

export const ClearButton = () => {
	const { fetchTasks } = useTaskListContext();
	const deleteFinished = async () => {
		const { message, isError, error } = await deleteFinishedTasks();
		if (isError) return alert('There has been an error', error);
		await fetchTasks();
	};
	return (
		<button type="button" onClick={deleteFinished}>
			Clear completed
		</button>
	);
};
