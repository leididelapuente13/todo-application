import PropTypes from 'prop-types';
import { CheckButton } from '../../atoms/Buttons/Check/CheckButton';
import { DeleteButton } from '../../atoms/Buttons/Delete/DeleteButton';

export const TaskCard = ({ task }) => {
	// console.log(task.status);
	return (
		<div className="flex items-center gap-x-3 border-b border-light-grayish-blue px-5 py-5 dark:border-dark-grayishBlue-shade">
			<CheckButton taskId={task.id} taskStatus={task.status} />
			<p
				className={`dark:text-dark-light-grayishBlue-shade w-11/12 text-dark-basic-grayishBlue' ${task.status &&  'line-through' + ' ' + 'dark:text-dark-basic-grayishBlue text-light-grayish-blue opacity-50'}`}
			>
				{task.task}
			</p>
			<DeleteButton />
		</div>
	);
};

TaskCard.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.string.isRequired,
		task: PropTypes.string.isRequired,
		status: PropTypes.bool.isRequired
	})
};
