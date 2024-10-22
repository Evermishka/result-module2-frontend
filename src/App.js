import styles from './App.module.css';
import { useState } from 'react';
import { TodoAddForm, TodoList } from './components';

export const App = () => {
	const [refreshProducts, setRefreshProducts] = useState(false);

	return (
		<div className={styles.app}>
			<h1 className={styles.todoTitle}>TO-DO LIST</h1>
			<TodoAddForm
				refreshProducts={refreshProducts}
				setRefreshProducts={setRefreshProducts}
			/>
			<TodoList
				refreshProducts={refreshProducts}
				setRefreshProducts={setRefreshProducts}
			/>
		</div>
	);
};
