import PropTypes from 'prop-types';
import {deleteTask} from '../../../../api/Task';
import { useTaskListContext } from '../../../../context/TasksContext';

export const DeleteButton = ({ taskId }) => {
	const {fetchTasks} = useTaskListContext()
	const removeTask = async (id)=>{
		const {result, isError, error} = await deleteTask(id);
		if(isError) return alert('There has been an error when trying to delete the task', error);
		alert(result);
		await fetchTasks();
	}
	return (
		<button onClick={()=>removeTask(taskId)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
				<path
					fill="#494C6B"
					fillRule="evenodd"
					d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
				/>
			</svg>
		</button>
	);
};

DeleteButton.propTypes = {
	taskId: PropTypes.string
};
