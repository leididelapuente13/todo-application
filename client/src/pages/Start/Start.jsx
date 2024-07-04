import { ButtonGroup } from '../../molecules/ButtonGroup/ButtonGroup';
import { TaskList } from '../../organisms/TaskList/TaskList';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';

export const Start = () => {
	return (
		<MainTemplate>
			<TaskList />
			<ButtonGroup />
		</MainTemplate>
	);
};
