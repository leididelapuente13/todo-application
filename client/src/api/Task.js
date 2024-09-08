import axios, { formToJSON } from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

const getTasks = async () => {
	try {
		const { data: tasks } = await axios.get(`${baseURL}/tasks`);
		console.log('api: ', tasks);
		return tasks;
	} catch (error) {
		return { isError: true, error: error.message };
	}
};

const addTask = async (task) => {
	try {
		const { data } = await axios.post(`${baseURL}/tasks`, task, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return { result: data.requestResult };
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

const deleteTask = async (id) => {
	try {
		const { data } = await axios.delete(`${baseURL}/tasks/${id}`);
		return { result: data.message };
	} catch (error) {
		return { isError: true, error: error.message };
	}
};

const updateTask = async (id) => {
	try {
		const { data } = await axios.put(`${baseURL}/tasks/${id}`, data, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(data);
	} catch (error) {
		return {isError: true, error: error.message}
	}
};

export { getTasks, addTask, getTasksByStatus, deleteTask, updateTask };
