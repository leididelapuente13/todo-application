import { ButtonGroup } from '../../molecules/ButtonGroup/ButtonGroup';
import { TaskList } from '../../organisms/TaskList/TaskList';
import { MainTemplate } from '../../templates/MainTemplate/MainTemplate';
import { useThemeContext } from '../../../context/ThemeContext';

export const Start = () => {
	return (
		<MainTemplate>
			<TaskList />
			<ButtonGroup />
		</MainTemplate>
	);
};
