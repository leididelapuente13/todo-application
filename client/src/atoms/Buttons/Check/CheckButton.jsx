import PropTypes from 'prop-types';

export const CheckButton = ({ taskStatus = false, taskId }) => {
	return (
		<button
			type="button"
			className="rounded-full border-2 border-light-grayish-blue p-3 text-center bg-primary-gradient dark:border-dark-grayishBlue-shade"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
				<path
					fill="none"
					stroke="#FFF"
					strokeWidth="2"
					d="M1 4.304L3.696 7l6-6"
				/>
			</svg>
		</button>
	);
};

CheckButton.propTypes = {
	taskStatus: PropTypes.bool
};
