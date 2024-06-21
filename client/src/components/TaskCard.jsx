import PropTypes from 'prop-types';
import { CheckButton } from './CheckButton';
import { DeleteButton } from './DeleteButton';

export const TaskCard = ({ task }) => {
	return (
		<div className='flex gap-x-3 py-5 items-center border-b px-5 border-light-grayish-blue dark:border-dark-grayishBlue-shade'>
			<CheckButton taskId={task.id} taskStatus={task.status} />
			<p className='w-11/12 text-light-very-dark-grayishBlue line-through	text-light-grayish-blue dark:text-dark-basic-grayishBlue'>{task.task}</p>
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
