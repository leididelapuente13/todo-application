import { createContext, useContext, useEffect, useState } from 'react';
import { getTasks } from '../api/Task';

const Tasks = createContext();

export const TasksProvider = ({ children }) => {
	const [tasks, setTasks] = useState([]);

	const fetchTasks = async()=>{
		const tasks = await getTasks();
		console.log('context: ', tasks);
		if(tasks !== undefined){
			setTasks(tasks);
		}
	}

	useEffect(()=>{
		fetchTasks();
	}, [])

	return (
		<Tasks.Provider value={{ tasks, setTasks }}>
			{children}
		</Tasks.Provider>
	);
};

export const useTaskListContext = () => useContext(Tasks);
