import { useState } from 'react';
import { TaskCard } from './components/TaskCard';
import { ToDoForm } from './components/ToDoForm';

function App() {

	const [theme, setTheme] = useState('light')

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
		<main className="h-full min-h-screen bg-light-gray pb-3 font-josefin-sans dark:bg-dark-blue">
			<header className="flex h-1/3 max-h-60 flex-wrap items-start justify-between bg-mobile-lightTheme-img bg-cover bg-no-repeat py-12 dark:bg-mobile-darkTheme-img md:bg-desktop-lightTheme-img dark:md:bg-desktop-darkTheme-img">
				<div className="mx-auto flex w-11/12 max-w-2xl justify-between gap-x-2 px-5 lg:px-0">
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
			<section className="mx-auto -mt-7 h-fit w-10/12 max-w-2xl flex-col gap-y-10 rounded-lg bg-light-gray pb-4 shadow-xl shadow-light-grayish-blue dark:bg-dark-desaturated-blue dark:shadow-md">
				{tasks.map((task) => (
					<TaskCard task={task} key={task.id} />
				))}
				<div className="dark:text-dark-basic-grayishBlue flex justify-between px-5 pt-5 text-lg font-normal text-light-dark-grayish-blue">
					<p>{`${tasks.length} items left`}</p>
					<button type="button">Clear completed</button>
				</div>
			</section>
			<div className="mx-auto mt-8 flex w-10/12 items-center justify-center gap-x-5 rounded-md bg-light-gray px-4 py-6 shadow-xl shadow-light-grayish-blue dark:bg-dark-desaturated-blue dark:shadow-xl md:-mt-16 md:h-16 md:w-4/12 md:shadow-none">
				<button type="button" className="font-bold text-primary-bright-blue">
					All
				</button>
				<button
					type="button"
					className="dark:text-dark-basic-grayishBlue font-bold text-light-dark-grayish-blue"
				>
					Active
				</button>
				<button
					type="button"
					className="dark:text-dark-basic-grayishBlue font-bold text-light-dark-grayish-blue"
				>
					Completed
				</button>
			</div>
			<footer className='mt-20 p-2'>
				<p className='text-light-very-dark-grayishBlue text-center font-bold'>
					Challenge by <a href="https://www.frontendmentor.io" target='blank' className='text-primary-bright-blue'>Frontend Mentor</a> Coded by{' '}
					<a href="https://github.com/leidi2004" target='blank' className='text-primary-bright-blue'>Leidi De La Puente</a>
				</p>
			</footer>
		</main>
	);
}

export default App;
