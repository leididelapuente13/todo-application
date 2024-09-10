import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateTaskStatus } from '../../../../api/Task';
import {useTaskListContext} from '../../../../context/TasksContext'

const tinyIntToBoolean =(statusInTinyInt)=>{
	if(statusInTinyInt === 0){
		return false
	}else if(statusInTinyInt === 1){
		return true
	}
} 


export const CheckButton = ({ isDisabled=false, taskStatus = false, taskId }) => {
	const [isChecked, setIsChecked] = useState(()=>tinyIntToBoolean(taskStatus));

	const {fetchTasks} = useTaskListContext();
	
	const changeStatus = async () => {
		setIsChecked(!isChecked);
		const {message, isError, error} = await updateTaskStatus(taskId, taskStatus);
		if(isError){
			setIsChecked(!isChecked);
			return alert('There has been an error updating the task', error);
		}
		alert(message);
		await fetchTasks();
	};

	return (
		<button
			disabled={isDisabled}
			onClick={changeStatus}
			type="button"
			className={`rounded-full w-11 h-11 border-2 border-light-grayish-blue p-3 flex justify-center items-center dark:border-dark-grayishBlue-shade ${isChecked && 'bg-primary-gradient'}`}
		>
			{isChecked && (
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
					<path
						fill="none"
						stroke="#FFF"
						strokeWidth="2"
						d="M1 4.304L3.696 7l6-6"
					/>
				</svg>
			)}
		</button>
	);
};

CheckButton.propTypes = {
	isDisabled: PropTypes.bool,
	taskStatus: PropTypes.number,
	taskId: PropTypes.string
};
