import { ThemeProvider } from './context/ThemeContext';
import { Start } from './pages/Start/Start';

function App() {
	return (
		<ThemeProvider>
			<Start />
		</ThemeProvider>
	);
}

export default App;
