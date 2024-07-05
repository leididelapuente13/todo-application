import { createContext, useContext, useEffect, useState } from 'react';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [isChecked, setIsChecked] = useState(false);

	const changeStatus = () => {
		setIsChecked((status) => !status);
	};

	return (
		<TaskContext.Provider value={{ isChecked, changeStatus }}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => useContext(TaskContext);
