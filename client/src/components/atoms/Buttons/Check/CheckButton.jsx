import PropTypes from 'prop-types';
import { useState } from 'react';

export const CheckButton = ({ taskStatus = false, taskId }) => {
	const [isChecked, setIsChecked] = useState(taskStatus);

	const changeStatus = () => {
		setIsChecked((status) => !status);
	};

	return (
		<button
			onClick={changeStatus}
			type="button"
			className={`rounded-full border-2 border-light-grayish-blue p-3 text-center dark:border-dark-grayishBlue-shade ${isChecked && 'bg-primary-gradient'}`}
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
	taskStatus: PropTypes.bool,
	taskId: PropTypes.string
};
