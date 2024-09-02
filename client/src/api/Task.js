import axios from 'axios';
const baseURL = import.meta.env.VITE_API_KEY;

const getTasks = async () => {
	try {
		const tasks = await axios.get(`${baseURL}/tasks`);
		return { tasks: tasks.data };
	} catch (error) {
		return { isError: true, error: error.message };
	}
};

const getTasksByStatus = async (status) => {
	try {
		const tasks = await axios.get(`${baseURL}/tasks?status=${status}`);
		return { tasks: tasks.data };
	} catch (error) {
		return { isError: true, error: error.message };
	}
};

export { getTasks, getTasksByStatus };
