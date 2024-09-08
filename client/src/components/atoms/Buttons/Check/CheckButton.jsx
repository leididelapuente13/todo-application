import PropTypes from 'prop-types';
import { useState } from 'react';

export const CheckButton = ({ isDisabled=false, taskStatus = false, taskId }) => {
	const [isChecked, setIsChecked] = useState(taskStatus === 0 ? false : true);

	const changeStatus = () => {
		console.log(taskId);
		setIsChecked((status) => !status);
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
