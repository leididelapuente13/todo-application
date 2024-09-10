import { createContext, useContext, useEffect, useState } from 'react';
import { getTasks } from '../api/Task';

const Tasks = createContext();

export const TasksProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async () => {
		const tasks = await getTasks();
		if (tasks) {
			setTasks(tasks);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return (
		<Tasks.Provider value={{ tasks, setTasks, fetchTasks }}>{children}</Tasks.Provider>
	);
};

export const useTaskListContext = () => useContext(Tasks);
