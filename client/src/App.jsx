import { ThemeProvider } from './context/ThemeContext';
import { Start } from './components/pages/Start/Start';

function App() {
	return (
		<ThemeProvider>
			<Start />
		</ThemeProvider>
	);
}

export default App;
