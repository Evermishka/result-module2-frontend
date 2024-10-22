import styles from './todo-list.module.css';
import { useTodoList } from '../../hooks';
import { TodoListControls } from '../../components';

export const TodoList = ({ refreshProducts, setRefreshProducts }) => {
	const {
		search,
		todoList,
		isLoading,
		isUpdating,
		isDeleting,
		toDoSortHandler,
		toDoSearchHandler,
		toDoEditHandler,
		toDoDeleteHandler,
	} = useTodoList({ refreshProducts, setRefreshProducts });

	return (
		<>
			<TodoListControls
				search={search}
				toDoSearchHandler={toDoSearchHandler}
				toDoSortHandler={toDoSortHandler}
			/>
			<ul className={styles.todoList}>
				{isLoading ? (
					<p className={styles.loader}></p>
				) : todoList.length > 0 ? (
					todoList.map(({ id, title, completed }) => (
						<li
							className={`${styles.todoItem} ${completed ? styles.todoItemCompleted : ''}`}
							key={id}
						>
							<input
								type="checkbox"
								value={id}
								onClick={toDoEditHandler}
								disabled={isUpdating}
							/>
							<span>{title}</span>
							<button
								title="Удалить"
								value={id}
								onClick={toDoDeleteHandler}
								disabled={isDeleting}
							/>
						</li>
					))
				) : (
					<p>Список задач пуст</p>
				)}
			</ul>
		</>
	);
};
