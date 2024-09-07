import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

const getTasks = async () => {
	try {
		const { data: tasks } = await axios.get(`${baseURL}/tasks`);
		console.log(tasks);
		return tasks;
	} catch (error) {
		return { isError: true, error: error.message };
	}
};

const addTask = async (task) => {
	try {
		const result = await axios.post(`${baseURL}/tasks`, task);
		console.log(result);
	} catch (e) {
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

export { getTasks, addTask, getTasksByStatus };
