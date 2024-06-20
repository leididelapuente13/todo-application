import { TaskCard } from './components/TaskCard';
import { ToDoForm } from './components/ToDoForm';

function App() {
	const tasks = [
		{
			id: 'hdhddhhdh',
			task: 'Do the dishes',
			status: false
		},
		{
			id: 'hdhddhhd',
			task: 'Do the laundry',
			status: false
		},
		{
			id: 'hdhdd',
			task: 'Sleep',
			status: false
		},
		{
			id: 'hdhdhdh',
			task: 'Eat',
			status: false
		}
	];
	return (
		<main className="h-screen bg-light-gray font-josefin-sans pb-3">
			<header className="bg-mobile-lightTheme-img flex h-1/3 max-h-60 flex-wrap items-start justify-between bg-cover bg-no-repeat py-12">
				<div className="mx-auto flex w-11/12 justify-between gap-x-2 px-5">
					<h1 className="text-3xl font-bold tracking-[1rem] text-light-gray">
						TODO
					</h1>
					<button type="button" className="">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
							<path
								fill="#FFF"
								fill-rule="evenodd"
								d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
							/>
						</svg>
					</button>
				</div>
				<ToDoForm />
			</header>
			<section className="mx-auto -mt-7 h-fit w-10/12 flex-col gap-y-10 rounded-lg bg-light-gray py-4 shadow-xl shadow-light-grayish-blue">
				{tasks.map((task) => (
					<TaskCard task={task} key={task.id} />
				))}
				<div className="flex justify-between px-5 pt-5 text-lg text-light-dark-grayish-blue">
					<p>{`${tasks.length} items left`}</p>
					<button type="button">Clear completed</button>
				</div>
			</section>
			<div className="mx-auto mt-8 flex w-10/12 justify-center items-center gap-x-5 bg-light-gray px-4 py-6 shadow-xl shadow-light-grayish-blue md:w-4/12 md:-mt-16 md:shadow-none md:h-16">
				<button
					type="button"
					className="font-bold text-primary-bright-blue"
				>
					All
				</button>
				<button
					type="button"
					className="font-bold text-light-dark-grayish-blue"
				>
					Active
				</button>
				<button
					type="button"
					className="font-bold text-light-dark-grayish-blue"
				>
					Completed
				</button>
			</div>
		</main>
	);
}

export default App;
