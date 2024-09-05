import { useTaskListContext } from '../../../context/TasksContext';
import { ClearButton } from '../../atoms/Buttons/Clear/ClearButton';
import { TaskCard } from '../../molecules/Card/TaskCard';

export const TaskList = () => {
	const { tasks } = useTaskListContext();
	return (
		<section className="mx-auto -mt-7 h-fit w-10/12 max-w-2xl flex-col gap-y-10 rounded-lg bg-light-gray pb-4 shadow-xl shadow-light-grayish-blue dark:bg-dark-desaturated-blue dark:shadow-md">
			{tasks.map((task) => (
				<TaskCard task={task} key={task.id} />
			))}
			<div className="flex justify-between px-5 pt-5 text-lg font-normal text-light-dark-grayish-blue dark:text-dark-basic-grayishBlue">
				<p>{`${tasks.length} items left`}</p>
				<ClearButton />
			</div>
		</section>
	);
};
