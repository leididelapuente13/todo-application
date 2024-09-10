import { ThemeProvider } from './context/ThemeContext';
import { Start } from './components/pages/Start/Start';
import { TasksProvider } from './context/TasksContext';

function App() {
	return (
		<ThemeProvider>
			<TasksProvider>
				<Start />
			</TasksProvider>
		</ThemeProvider>
	);
}

export default App;
