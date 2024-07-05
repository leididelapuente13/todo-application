import { createContext, useContext, useState } from 'react';

const TaskListContext = createContext();

export const TaskListProvider = ({ children }) => {
	const [taskList, setTaskList] = useState([]);
	return (
		<TaskListContext.Provider value={{ taskList, setTaskList }}>
			{children}
		</TaskListContext.Provider>
	);
};

export const useTaskListContext = () => useContext(TaskListContext);
