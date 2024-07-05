import { createContext, useState } from 'react';

const TaskFilterContext = createContext();

export const TaskFilterProvider = ({ children }) => {
	const [filter, setFilter] = useState(null);
	return (
		<TaskFilterContext.Provider value={{ filter, setFilter }}>
			{children}
		</TaskFilterContext.Provider>
	);
};
