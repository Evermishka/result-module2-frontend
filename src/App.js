import styles from './App.module.css';
import { useState, useEffect } from 'react';

const REQUEST_URL = 'https://jsonplaceholder.typicode.com/todos';

export const App = () => {
	const [todoList, setTodoList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(REQUEST_URL)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodoList(loadedTodos);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<div className={styles.app}>
			<h1 className={styles.todoTitle}>TO-DO LIST</h1>
			<ul className={styles.todoList}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : todoList.length > 0 ? (
					todoList.map(({ id, title, completed }) => (
						<li
							className={`${styles.todoItem} ${completed ? styles.todoItemCompleted : ''}`}
							key={id}
						>
							{title}
						</li>
					))
				) : null}
			</ul>
		</div>
	);
};
